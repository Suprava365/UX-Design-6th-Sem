const express = require('express');
const router = express.Router();

const staffController = require('../controllers/staffController');
const { protect, authorize } = require('../middleware/auth');

// 🔐 All staff routes require login
router.use(protect);

// ADMIN only
router.post(
  '/',
  authorize('admin'),
  staffController.createStaff
);

// ADMIN + STAFF can view
router.get(
  '/',
  authorize('admin', 'staff'),
  staffController.getAllStaff
);

router.get(
  '/:id',
  authorize('admin', 'staff'),
  staffController.getStaffById
);

// ADMIN only
router.put(
  '/:id',
  authorize('admin'),
  staffController.updateStaff
);

router.delete(
  '/:id',
  authorize('admin'),
  staffController.deleteStaff
);

module.exports = router;
