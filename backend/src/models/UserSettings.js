const mongoose = require('mongoose');

const UserSettingsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      required: true
    },

    notifications: {
      emailNotifications: { type: Boolean, default: true },
      appointmentReminders: { type: Boolean, default: true },
      labReportUpdates: { type: Boolean, default: true },
      medicalAlerts: { type: Boolean, default: true }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('UserSettings', UserSettingsSchema);
