const mongoose = require('mongoose');


const AppointmentSchema = new mongoose.Schema({
doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
startAt: { type: Date, required: true },
endAt: { type: Date, required: true },
status: { type: String, enum: ['scheduled','completed','cancelled'], default: 'scheduled' },
notes: { type: String }
}, { timestamps: true });


AppointmentSchema.index({ doctorId: 1, startAt: 1, endAt: 1 });


module.exports = mongoose.model('Appointment', AppointmentSchema);