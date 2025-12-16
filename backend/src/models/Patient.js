const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, lowercase: true },
    phone: { type: String },

    gender: {
      type: String,
      enum: ['male', 'female', 'other']
    },

    dateOfBirth: Date,

    address: {
      street: String,
      city: String,
      state: String,
      zip: String
    },

    status: {
      type: String,
      enum: ['confirmed', 'pending', 'inactive'],
      default: 'confirmed'
    },

    emergencyContact: {
      name: String,
      phone: String
    },

    notes: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Patient', PatientSchema);
