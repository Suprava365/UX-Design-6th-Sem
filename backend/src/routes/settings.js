const express = require('express');
const router = express.Router();

const settingsController = require('../controllers/settingsController');
const { protect, authorize } = require('../middlewares/auth');

// 🔐 All settings require login
router.use(protect);

/* ===== ADMIN ===== */
router.get(
  '/hospital',
  authorize('admin'),
  settingsController.getHospitalSettings
);

router.put(
  '/hospital',
  authorize('admin'),
  settingsController.updateHospitalSettings
);

/* ===== USER ===== */
router.get('/me', settingsController.getMyProfile);
router.put('/me', settingsController.updateMyProfile);

router.put('/change-password', settingsController.changePassword);

router.get('/notifications', settingsController.getNotificationSettings);
router.put('/notifications', settingsController.updateNotificationSettings);

router.delete('/me', settingsController.deleteMyAccount);

module.exports = router;
