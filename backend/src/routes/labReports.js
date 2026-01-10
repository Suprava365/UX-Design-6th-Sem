const express = require('express');
const router = express.Router();

const labReportController = require('../controllers/labReportController');
const { protect, authorize } = require('../middleware/auth');

// All lab report routes require login
router.use(protect);

// Admin / Staff dashboard
router.post(
  '/',
  authorize('admin', 'staff'),
  labReportController.createLabReport
);

router.get(
  '/',
  authorize('admin', 'staff'),
  labReportController.getAllLabReports
);

// Patient view
router.get(
  '/patient/:patientId',
  authorize('admin', 'staff', 'doctor'),
  labReportController.getPatientLabReports
);

// View single report
router.get(
  '/:id',
  authorize('admin', 'staff', 'doctor'),
  labReportController.getLabReportById
);

// Update report (result / status)
router.put(
  '/:id',
  authorize('admin', 'staff'),
  labReportController.updateLabReport
);

module.exports = router;
