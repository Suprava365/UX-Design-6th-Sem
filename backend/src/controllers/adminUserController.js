// controllers/adminUserController.js
const User = require('../models/User');
const UserSettings = require('../models/UserSettings');
const UserActivityLog = require('../models/UserActivityLog');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

// Configure multer for profile picture upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/profiles';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'profile-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed'));
  }
}).single('profilePicture');

// Log user activity
const logActivity = async (userId, action, details = {}) => {
  try {
    await UserActivityLog.create({
      user: userId,
      action,
      ...details
    });
  } catch (error) {
    console.error('Activity log error:', error);
  }
};

// Create user by admin
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role, phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide name, email and password' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role: role || 'patient',
      phone,
      isActive: true,
      isEmailVerified: true // Admin created users are auto-verified
    });

    // Create default settings for user
    await UserSettings.create({
      userId: user._id,
      notifications: {
        emailNotifications: true,
        appointmentReminders: true,
        labReportUpdates: true,
        medicalAlerts: true
      }
    });

    await logActivity(req.user._id, 'CREATE_USER', {
      resourceId: user._id,
      details: { email, role: user.role },
      ipAddress: req.ip,
      userAgent: req.get('user-agent')
    });

    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({
      message: 'User created successfully',
      user: userResponse
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users with search and filtering
exports.getAllUsers = async (req, res) => {
  try {
    const { search, role, isActive, isEmailVerified, page = 1, limit = 20, sortBy = 'createdAt', order = 'desc' } = req.query;

    const query = {};

    // Search by name or email
    if (search) {
      query.$or = [
        { name: new RegExp(search, 'i') },
        { email: new RegExp(search, 'i') }
      ];
    }

    // Filter by role
    if (role) {
      query.role = role;
    }

    // Filter by active status
    if (isActive !== undefined) {
      query.isActive = isActive === 'true';
    }

    // Filter by email verification
    if (isEmailVerified !== undefined) {
      query.isEmailVerified = isEmailVerified === 'true';
    }

    // Sort options
    const sortOptions = {};
    sortOptions[sortBy] = order === 'asc' ? 1 : -1;

    const users = await User.find(query)
      .select('-password -refreshToken -emailVerificationToken -passwordResetToken -resetOTPToken')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort(sortOptions);

    const count = await User.countDocuments(query);

    await logActivity(req.user._id, 'VIEW_USERS', {
      details: { filters: query, page, limit },
      ipAddress: req.ip,
      userAgent: req.get('user-agent')
    });

    res.json({
      users,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      total: count,
      limit: parseInt(limit)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select('-password -refreshToken -emailVerificationToken -passwordResetToken -resetOTPToken');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get user settings
    const settings = await UserSettings.findOne({ userId: user._id });

    await logActivity(req.user._id, 'VIEW_USER', {
      resourceId: user._id,
      ipAddress: req.ip
    });

    res.json({
      user,
      settings
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user by admin
exports.updateUser = async (req, res) => {
  try {
    const { name, email, phone, role, isActive, isEmailVerified } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if email is being changed and if it's already taken
    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return res.status(400).json({ message: 'Email already in use' });
      }
    }

    const updates = {};
    if (name) updates.name = name;
    if (email) updates.email = email;
    if (phone !== undefined) updates.phone = phone;
    if (role) updates.role = role;
    if (isActive !== undefined) updates.isActive = isActive;
    if (isEmailVerified !== undefined) updates.isEmailVerified = isEmailVerified;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    ).select('-password -refreshToken -emailVerificationToken -passwordResetToken -resetOTPToken');

    await logActivity(req.user._id, 'UPDATE_USER', {
      resourceId: updatedUser._id,
      details: updates,
      ipAddress: req.ip
    });

    res.json({
      message: 'User updated successfully',
      user: updatedUser
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update user password by admin
exports.updateUserPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const user = await User.findById(req.params.id).select('+password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.password = newPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    user.resetOTPToken = undefined;
    user.resetOTPExpires = undefined;
    user.resetOTPVerified = false;
    await user.save();

    await logActivity(req.user._id, 'UPDATE_USER_PASSWORD', {
      resourceId: user._id,
      ipAddress: req.ip
    });

    res.json({ message: 'User password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Deactivate user (soft delete)
exports.deactivateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { 
        isActive: false,
        deactivatedAt: Date.now()
      },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await logActivity(req.user._id, 'DEACTIVATE_USER', {
      resourceId: user._id,
      ipAddress: req.ip
    });

    res.json({ 
      message: 'User deactivated successfully', 
      user 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reactivate user
exports.reactivateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { 
        isActive: true,
        deactivatedAt: null
      },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await logActivity(req.user._id, 'REACTIVATE_USER', {
      resourceId: user._id,
      ipAddress: req.ip
    });

    res.json({ 
      message: 'User reactivated successfully', 
      user 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user permanently
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete user settings
    await UserSettings.findOneAndDelete({ userId: user._id });

    // Delete user activity logs
    await UserActivityLog.deleteMany({ user: user._id });

    // Delete user
    await User.findByIdAndDelete(req.params.id);

    await logActivity(req.user._id, 'DELETE_USER', {
      resourceId: req.params.id,
      details: { email: user.email, name: user.name },
      ipAddress: req.ip
    });

    res.json({ message: 'User deleted permanently' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Bulk role changes
exports.bulkUpdateRoles = async (req, res) => {
  try {
    const { userIds, role } = req.body;

    if (!userIds || !Array.isArray(userIds) || userIds.length === 0) {
      return res.status(400).json({ message: 'Please provide user IDs array' });
    }

    if (!role || !['admin', 'staff', 'doctor', 'patient'].includes(role)) {
      return res.status(400).json({ message: 'Please provide a valid role' });
    }

    const result = await User.updateMany(
      { _id: { $in: userIds } },
      { role }
    );

    await logActivity(req.user._id, 'BULK_UPDATE_ROLES', {
      details: { userIds, role, modifiedCount: result.modifiedCount },
      ipAddress: req.ip
    });

    res.json({ 
      message: `${result.modifiedCount} users updated successfully`,
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Bulk deactivate users
exports.bulkDeactivateUsers = async (req, res) => {
  try {
    const { userIds } = req.body;

    if (!userIds || !Array.isArray(userIds) || userIds.length === 0) {
      return res.status(400).json({ message: 'Please provide user IDs array' });
    }

    const result = await User.updateMany(
      { _id: { $in: userIds } },
      { isActive: false, deactivatedAt: Date.now() }
    );

    await logActivity(req.user._id, 'BULK_DEACTIVATE_USERS', {
      details: { userIds, modifiedCount: result.modifiedCount },
      ipAddress: req.ip
    });

    res.json({ 
      message: `${result.modifiedCount} users deactivated successfully`,
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Bulk delete users
exports.bulkDeleteUsers = async (req, res) => {
  try {
    const { userIds } = req.body;

    if (!userIds || !Array.isArray(userIds) || userIds.length === 0) {
      return res.status(400).json({ message: 'Please provide user IDs array' });
    }

    // Delete user settings
    await UserSettings.deleteMany({ userId: { $in: userIds } });

    // Delete user activity logs
    await UserActivityLog.deleteMany({ user: { $in: userIds } });

    // Delete users
    const result = await User.deleteMany({ _id: { $in: userIds } });

    await logActivity(req.user._id, 'BULK_DELETE_USERS', {
      details: { userIds, deletedCount: result.deletedCount },
      ipAddress: req.ip
    });

    res.json({ 
      message: `${result.deletedCount} users deleted successfully`,
      deletedCount: result.deletedCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export users (CSV format)
exports.exportUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select('-password -refreshToken -emailVerificationToken -passwordResetToken -resetOTPToken');

    const csvData = [
      ['ID', 'Name', 'Email', 'Role', 'Phone', 'Active', 'Email Verified', 'Last Login', 'Created At'].join(','),
      ...users.map(user => [
        user._id,
        `"${user.name}"`,
        user.email,
        user.role,
        user.phone || '',
        user.isActive ? 'Yes' : 'No',
        user.isEmailVerified ? 'Yes' : 'No',
        user.lastLogin ? new Date(user.lastLogin).toISOString() : '',
        new Date(user.createdAt).toISOString()
      ].join(','))
    ].join('\n');

    await logActivity(req.user._id, 'EXPORT_USERS', {
      details: { count: users.length },
      ipAddress: req.ip
    });

    res.header('Content-Type', 'text/csv');
    res.attachment('users-export.csv');
    res.send(csvData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Import users (CSV/JSON format)
exports.importUsers = async (req, res) => {
  try {
    const { users } = req.body;

    if (!users || !Array.isArray(users)) {
      return res.status(400).json({ message: 'Invalid data format. Expected array of users' });
    }

    const results = {
      success: [],
      failed: []
    };

    for (const userData of users) {
      try {
        // Validate required fields
        if (!userData.name || !userData.email || !userData.password) {
          results.failed.push({
            data: userData,
            error: 'Missing required fields (name, email, password)'
          });
          continue;
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
          results.failed.push({
            data: userData,
            error: 'User with this email already exists'
          });
          continue;
        }

        // Create user
        const user = await User.create({
          name: userData.name,
          email: userData.email,
          password: userData.password,
          role: userData.role || 'patient',
          phone: userData.phone,
          isActive: userData.isActive !== undefined ? userData.isActive : true,
          isEmailVerified: true
        });

        // Create default settings
        await UserSettings.create({
          userId: user._id,
          notifications: {
            emailNotifications: true,
            appointmentReminders: true,
            labReportUpdates: true,
            medicalAlerts: true
          }
        });

        results.success.push(user._id);
      } catch (error) {
        results.failed.push({
          data: userData,
          error: error.message
        });
      }
    }

    await logActivity(req.user._id, 'IMPORT_USERS', {
      details: { 
        total: users.length,
        success: results.success.length,
        failed: results.failed.length
      },
      ipAddress: req.ip
    });

    res.json({
      message: 'Import completed',
      results: {
        total: users.length,
        successCount: results.success.length,
        failedCount: results.failed.length,
        successIds: results.success,
        failed: results.failed
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user statistics
exports.getUserStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ isActive: true });
    const inactiveUsers = await User.countDocuments({ isActive: false });
    const verifiedUsers = await User.countDocuments({ isEmailVerified: true });
    
    const usersByRole = await User.aggregate([
      {
        $group: {
          _id: '$role',
          count: { $sum: 1 }
        }
      }
    ]);

    const recentUsers = await User.find()
      .select('-password')
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      totalUsers,
      activeUsers,
      inactiveUsers,
      verifiedUsers,
      usersByRole,
      recentUsers
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user activity logs
exports.getUserActivityLogs = async (req, res) => {
  try {
    const { userId, action, page = 1, limit = 50 } = req.query;

    const query = {};
    if (userId) query.user = userId;
    if (action) query.action = action;

    const logs = await UserActivityLog.find(query)
      .populate('user', 'name email role')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const count = await UserActivityLog.countDocuments(query);

    res.json({
      logs,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      total: count
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Upload profile picture for user
exports.uploadUserProfilePicture = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a file' });
    }

    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        // Delete uploaded file if user not found
        fs.unlinkSync(req.file.path);
        return res.status(404).json({ message: 'User not found' });
      }

      // Delete old profile picture if exists
      if (user.profilePicture && fs.existsSync(user.profilePicture)) {
        fs.unlinkSync(user.profilePicture);
      }

      user.profilePicture = req.file.path;
      await user.save();

      await logActivity(req.user._id, 'UPLOAD_USER_PROFILE_PICTURE', {
        resourceId: user._id,
        ipAddress: req.ip
      });

      res.json({
        message: 'Profile picture uploaded successfully',
        profilePicture: user.profilePicture
      });
    } catch (error) {
      // Delete uploaded file on error
      if (req.file && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }
      res.status(500).json({ message: error.message });
    }
  });
};

module.exports.upload = upload;