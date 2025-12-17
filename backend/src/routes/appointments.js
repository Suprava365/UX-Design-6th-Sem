const express = require('express');
const router = express.Router();

const appointmentController = require('../controllers/appointmentController');
const { protect, authorize } = require('../middlewares/auth');

// all appointment routes require login
router.use(protect);

// create appointment
router.post(
  '/',
  authorize('admin', 'staff'),
  appointmentController.createAppointment 
);

// admin / staff dashboard
router.get(
  '/',
  authorize('admin', 'staff'),
  appointmentController.getAppointments
);

// patient appointments
router.get(
  '/patient/:patientId',
  authorize('admin', 'staff', 'doctor'),
  appointmentController.getAppointmentsByPatient
);

// doctor appointments
router.get(
  '/doctor/:doctorId',
  authorize('admin', 'staff', 'doctor'),
  appointmentController.getAppointmentsByDoctor
);

// update status
router.put(
  '/:id/status',
  authorize('admin', 'staff'),
  appointmentController.updateAppointmentStatus
);


// cancel appointment
router.put(
  '/:id/cancel',
  authorize('admin', 'staff'),
  appointmentController.cancelAppointment
);

module.exports = router;

