const mongoose = require('mongoose');
const Appointment = require('../models/Appointment');
const Doctor = require('../models/DoctorA');
const Patient = require('../models/patient');
const { createSchema } = require('../validators/appointmentValidator');

async function isDoctorAvailable(doctorId, startAt, endAt, excludeAppointmentId = null) {
  const query = {
    doctorId: mongoose.Types.ObjectId(doctorId),
    status: 'scheduled',
    $or: [
      { startAt: { $lt: endAt }, endAt: { $gt: startAt } }
    ]
  };
  if (excludeAppointmentId) query._id = { $ne: mongoose.Types.ObjectId(excludeAppointmentId) };
  const overlapping = await Appointment.findOne(query).lean();
  return !overlapping;
}

async function createAppointment(req, res) {
  try {
    const { error, value } = createSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const { doctorId, patient, startAt, endAt, notes } = value;

    // Ensure doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

    // Check availability
    const available = await isDoctorAvailable(doctorId, new Date(startAt), new Date(endAt));
    if (!available) return res.status(409).json({ error: 'Doctor not available at requested time' });

    // Create or find patient (dedupe by email then phone)
    let patientRecord = null;
    if (patient.email) patientRecord = await Patient.findOne({ email: patient.email });
    if (!patientRecord && patient.phone) patientRecord = await Patient.findOne({ phone: patient.phone });
    if (!patientRecord) patientRecord = await Patient.create(patient);

    const appointment = await Appointment.create({
      doctorId: doctor._id,
      patientId: patientRecord._id,
      startAt,
      endAt,
      notes
    });

    // populate for response
    await appointment.populate('doctorId').populate('patientId');

    return res.status(201).json({ appointment });
  } catch (err) {
    console.error('createAppointment error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function listAppointments(req, res) {
  try {
    const { doctorId, patientId, from, to, status } = req.query;
    const filter = {};

    if (doctorId) filter.doctorId = doctorId;
    if (patientId) filter.patientId = patientId;
    if (status) filter.status = status;
    if (from || to) {
      filter.startAt = {};
      if (from) filter.startAt.$gte = new Date(from);
      if (to) filter.startAt.$lte = new Date(to);
    }

    const appointments = await Appointment.find(filter)
      .populate('doctorId')
      .populate('patientId')
      .sort({ startAt: 1 })
      .lean();

    return res.json({ appointments });
  } catch (err) {
    console.error('listAppointments error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function getAppointment(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid id' });

    const appointment = await Appointment.findById(id).populate('doctorId').populate('patientId').lean();
    if (!appointment) return res.status(404).json({ error: 'Appointment not found' });

    return res.json({ appointment });
  } catch (err) {
    console.error('getAppointment error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateAppointment(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid id' });

    const appointment = await Appointment.findById(id);
    if (!appointment) return res.status(404).json({ error: 'Appointment not found' });

    const { startAt, endAt, status, notes } = req.body;

    if (startAt && endAt) {
      const available = await isDoctorAvailable(
        appointment.doctorId,
        new Date(startAt),
        new Date(endAt),
        appointment._id
      );
      if (!available) return res.status(409).json({ error: 'Doctor not available at requested time' });

      appointment.startAt = startAt;
      appointment.endAt = endAt;
    }

    if (status) appointment.status = status;
    if (typeof notes !== 'undefined') appointment.notes = notes;

    await appointment.save();
    await appointment.populate('doctorId').populate('patientId');

    return res.json({ appointment });
  } catch (err) {
    console.error('updateAppointment error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function cancelAppointment(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid id' });

    const appointment = await Appointment.findById(id);
    if (!appointment) return res.status(404).json({ error: 'Appointment not found' });

    appointment.status = 'cancelled';
    await appointment.save();
    await appointment.populate('doctorId').populate('patientId');

    return res.json({ appointment });
  } catch (err) {
    console.error('cancelAppointment error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createAppointment,
  listAppointments,
  getAppointment,
  updateAppointment,
  cancelAppointment
};
