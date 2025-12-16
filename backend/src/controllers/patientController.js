const Patient = require('../models/Patient');

// Create patient
exports.createPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.status(201).json(patient);
};

// Get all patients (with search & status filter)
exports.getPatients = async (req, res) => {
  const { search, status } = req.query;

  const query = {};

  if (status) query.status = status;

  if (search) {
    query.$or = [
      { name: new RegExp(search, 'i') },
      { email: new RegExp(search, 'i') },
      { phone: new RegExp(search, 'i') }
    ];
  }

  const patients = await Patient.find(query).sort({ createdAt: -1 });
  res.json(patients);
};

// Get single patient
exports.getPatientById = async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Patient not found' });
  res.json(patient);
};

// Update patient
exports.updatePatient = async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(patient);
};

// Delete patient
exports.deletePatient = async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ message: 'Patient deleted' });
};
