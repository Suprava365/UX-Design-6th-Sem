const HospitalSettings = require('../models/HospitalSettings');
const User = require('../models/User');
const UserSettings = require('../models/UserSettings');
const bcrypt = require('bcryptjs');

/* =========================
   ADMIN – HOSPITAL SETTINGS
========================= */

// Get hospital info
exports.getHospitalSettings = async (req, res) => {
  let settings = await HospitalSettings.findOne();

  if (!settings) {
    settings = await HospitalSettings.create({
      hospitalName: 'My Clinic'
    });
  }

  res.json(settings);
};

// Update hospital info
exports.updateHospitalSettings = async (req, res) => {
  const settings = await HospitalSettings.findOneAndUpdate(
    {},
    req.body,
    { new: true, upsert: true }
  );

  res.json(settings);
};

/* =========================
   USER PROFILE
========================= */

// Get my profile
exports.getMyProfile = async (req, res) => {
  res.json(req.user);
};

// Update my profile
exports.updateMyProfile = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    req.body,
    { new: true }
  ).select('-password');

  res.json(updatedUser);
};

/* =========================
   CHANGE PASSWORD
========================= */

exports.changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  const user = await User.findById(req.user._id);

  const isMatch = await bcrypt.compare(currentPassword, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Current password incorrect' });
  }

  user.password = newPassword;
  await user.save();

  res.json({ message: 'Password updated successfully' });
};

/* =========================
   NOTIFICATION SETTINGS
========================= */

exports.getNotificationSettings = async (req, res) => {
  let settings = await UserSettings.findOne({ userId: req.user._id });

  if (!settings) {
    settings = await UserSettings.create({ userId: req.user._id });
  }

  res.json(settings.notifications);
};

exports.updateNotificationSettings = async (req, res) => {
  const settings = await UserSettings.findOneAndUpdate(
    { userId: req.user._id },
    { notifications: req.body },
    { new: true, upsert: true }
  );

  res.json(settings.notifications);
};

/* =========================
   DELETE ACCOUNT
========================= */

exports.deleteMyAccount = async (req, res) => {
  await User.findByIdAndDelete(req.user._id);
  await UserSettings.findOneAndDelete({ userId: req.user._id });

  res.json({ message: 'Account deleted successfully' });
};
