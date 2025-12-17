const Staff = require('../models/Staff');

// Create staff (ADMIN only)
exports.createStaff = async (req, res) => {
  const staff = await Staff.create(req.body);
  res.status(201).json(staff);
};

// Get all staff (Admin / Staff)
exports.getAllStaff = async (req, res) => {
  const staff = await Staff.find().sort({ createdAt: -1 });
  res.json(staff);
};

// Get single staff
exports.getStaffById = async (req, res) => {
  const staff = await Staff.findById(req.params.id);

  if (!staff) {
    return res.status(404).json({ message: 'Staff not found' });
  }

  res.json(staff);
};

// Update staff (ADMIN only)
exports.updateStaff = async (req, res) => {
  const staff = await Staff.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!staff) {
    return res.status(404).json({ message: 'Staff not found' });
  }

  res.json(staff);
};

// Delete staff (ADMIN only)
exports.deleteStaff = async (req, res) => {
  const staff = await Staff.findById(req.params.id);

  if (!staff) {
    return res.status(404).json({ message: 'Staff not found' });
  }

  await staff.deleteOne();
  res.json({ message: 'Staff deleted successfully' });
};
