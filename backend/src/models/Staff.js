const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    jobRole: {
      type: String,
      required: true
      // Nurse, Technician, Receptionist, Paramedic
    },

    department: {
      type: String,
      required: true
      // Emergency, Lab, Front Desk, Ambulance
    },

    status: {
      type: String,
      enum: ['active', 'on_leave', 'inactive'],
      default: 'active'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Staff', StaffSchema);
