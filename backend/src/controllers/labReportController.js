const LabReport = require('../models/LabReport');

// Admin / Staff: create lab report
exports.createLabReport = async (req, res) => {
  const report = await LabReport.create(req.body);
  res.status(201).json(report);
};

// Admin / Staff: get all lab reports (dashboard)
exports.getAllLabReports = async (req, res) => {
  const reports = await LabReport.find()
    .populate('patient', 'name email')
    .populate('doctor', 'name specialty')
    .sort({ createdAt: -1 });

  res.json(reports);
};

// Patient: get own lab reports
exports.getPatientLabReports = async (req, res) => {
  const reports = await LabReport.find({ patient: req.params.patientId })
    .populate('doctor', 'name')
    .sort({ testDate: -1 });

  res.json(reports);
};

// View single lab report
exports.getLabReportById = async (req, res) => {
  const report = await LabReport.findById(req.params.id)
    .populate('patient', 'name')
    .populate('doctor', 'name');

  if (!report) {
    return res.status(404).json({ message: 'Lab report not found' });
  }

  res.json(report);
};

// Update lab report (status / result)
exports.updateLabReport = async (req, res) => {
  const report = await LabReport.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(report);
};
