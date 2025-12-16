const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    specialty: {
      type: String,
      required: true
    },

    email: {
      type: String,
      lowercase: true
    },

    phone: String,

    status: {
      type: String,
      enum: ['active', 'on_leave', 'inactive'],
      default: 'active'
    },

    patientsCount: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Doctor', DoctorSchema);
