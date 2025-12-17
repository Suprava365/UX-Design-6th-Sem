const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const { createSchema } = require('../models/appointmentValidator');


// Create appointment
// exports.createAppointment = async (req, res) => {
//   const { error, value } = createSchema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ message: error.details[0].message });
//   }

//   const { doctorId, patient, startAt, endAt, notes } = value;

//   // create or reuse patient
//   let existingPatient = await Patient.findOne({ email: patient.email });
//   if (!existingPatient) {
//     existingPatient = await Patient.create(patient);
//   }

//   // check overlapping appointments
//   const conflict = await Appointment.findOne({
//     doctorId,
//     $or: [
//       { startAt: { $lt: endAt, $gte: startAt } },
//       { endAt: { $lte: endAt, $gt: startAt } }
//     ]
//   });

//   if (conflict) {
//     return res.status(409).json({ message: 'Doctor is not available at this time' });
//   }

//   const appointment = await Appointment.create({
//     doctorId,
//     patientId: existingPatient._id,
//     startAt,
//     endAt,
//     notes
//   });

//   res.status(201).json(appointment);
// };


// Create appointment
exports.createAppointment = async (req, res) => {
  // 1️⃣ Validate request body
  const { error, value } = createSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }

  // 2️⃣ Extract validated data
  const {
    doctorId,
    patient,
    date,
    startTime,
    endTime,
    notes
  } = value;

  // 3️⃣ Build Date objects (❌ NO Z HERE)
  const startAt = new Date(`${date}T${startTime}:00`);
  const endAt = new Date(`${date}T${endTime}:00`);

  // 4️⃣ Safety check
  if (isNaN(startAt.getTime()) || isNaN(endAt.getTime())) {
    return res.status(400).json({
      message: 'Invalid date or time format'
    });
  }

  // 5️⃣ Find or create patient
  let existingPatient = await Patient.findOne({ email: patient.email });
  if (!existingPatient) {
    existingPatient = await Patient.create(patient);
  }

  // 6️⃣ Check doctor availability
  const conflict = await Appointment.findOne({
    doctorId,
    $or: [
      { startAt: { $lt: endAt, $gte: startAt } },
      { endAt: { $lte: endAt, $gt: startAt } }
    ]
  });

  if (conflict) {
    return res.status(409).json({
      message: 'Doctor is not available at this time'
    });
  }

  // 7️⃣ Create appointment
  const appointment = await Appointment.create({
    doctorId,
    patientId: existingPatient._id,
    startAt,
    endAt,
    notes
  });

  // 8️⃣ Respond
  res.status(201).json(appointment);
};


// Admin / Staff: get all appointments
exports.getAppointments = async (req, res) => {
  const appointments = await Appointment.find()
    .populate('patientId', 'name email phone')
    .populate('doctorId', 'name specialty')
    .sort({ startAt: 1 });

  res.json(appointments);
};

// Get appointments by patient
exports.getAppointmentsByPatient = async (req, res) => {
  const appointments = await Appointment.find({
    patientId: req.params.patientId
  })
    .populate('doctorId', 'name specialty')
    .sort({ startAt: 1 });

  res.json(appointments);
};

// Get appointments by doctor
exports.getAppointmentsByDoctor = async (req, res) => {
  const appointments = await Appointment.find({
    doctorId: req.params.doctorId
  })
    .populate('patientId', 'name email')
    .sort({ startAt: 1 });

  res.json(appointments);
};

// Update appointment status
exports.updateAppointmentStatus = async (req, res) => {
  const { status } = req.body || {};

  if (!status) {
    return res.status(400).json({
      message: 'Status is required'
    });
  }

  if (!['scheduled', 'completed', 'cancelled'].includes(status)) {
    return res.status(400).json({
      message: 'Invalid status value'
    });
  }

  const appointment = await Appointment.findById(req.params.id);

  if (!appointment) {
    return res.status(404).json({
      message: 'Appointment not found'
    });
  }

  appointment.status = status;
  await appointment.save();

  res.json(appointment);
};

// Cancel appointment
exports.cancelAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    { status: 'cancelled' },
    { new: true }
  );

  res.json(appointment);
};
