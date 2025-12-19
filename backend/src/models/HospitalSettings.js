const mongoose = require('mongoose');

const HospitalSettingsSchema = new mongoose.Schema(
  {
    hospitalName: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    phone: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('HospitalSettings', HospitalSettingsSchema);
