const mongoose = require('mongoose');

const LabReportSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor'
    },

    testName: {
      type: String,
      required: true
    },

    testDate: {
      type: Date,
      required: true
    },

    result: {
      type: String
    },

    status: {
      type: String,
      enum: ['pending', 'processing', 'completed'],
      default: 'pending'
    },

    reportFileUrl: {
      type: String // PDF / file link
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('LabReport', LabReportSchema);
