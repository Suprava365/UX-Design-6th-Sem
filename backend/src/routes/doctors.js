const express = require('express');
const router = express.Router();

const doctorController = require('../controllers/doctorController');
const { protect, authorize } = require('../middlewares/auth');

// All routes require login
router.use(protect);

// Admin & staff manage doctors
router.post('/', authorize('admin', 'staff'), doctorController.createDoctor);
router.get('/', doctorController.getDoctors);
router.get('/:id', doctorController.getDoctorById);
router.put('/:id', authorize('admin', 'staff'), doctorController.updateDoctor);
router.delete('/:id', authorize('admin'), doctorController.deleteDoctor);

module.exports = router;
