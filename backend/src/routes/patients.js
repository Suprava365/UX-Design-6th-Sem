const express = require('express');
const router = express.Router();

const patientController = require('../controllers/patientController');
const { protect, authorize } = require('../middleware/auth');

// All patient routes require login
router.use(protect);

// Admin & staff can manage patients
router.post('/', authorize('admin', 'staff'), patientController.createPatient);
router.get('/', patientController.getPatients);
router.get('/:id', patientController.getPatientById);
router.put('/:id', authorize('admin', 'staff'), patientController.updatePatient);
router.delete('/:id', authorize('admin'), patientController.deletePatient);

module.exports = router;
