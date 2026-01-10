// models/UserActivityLog.js
const mongoose = require('mongoose');

const UserActivityLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    action: {
      type: String,
      required: true
    },
    resource: String,
    resourceId: String,
    ipAddress: String,
    userAgent: String,
    details: mongoose.Schema.Types.Mixed,
    status: {
      type: String,
      enum: ['success', 'failed'],
      default: 'success'
    }
  },
  { timestamps: true }
);

UserActivityLogSchema.index({ user: 1, createdAt: -1 });
UserActivityLogSchema.index({ action: 1 });
UserActivityLogSchema.index({ createdAt: -1 });

module.exports = mongoose.model('UserActivityLog', UserActivityLogSchema);