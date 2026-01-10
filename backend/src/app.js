const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const patientRoutes = require('./routes/patients');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctors');
const labReportRoutes = require('./routes/labReports');
const appointmentRoutes = require('./routes/appointments');
const staffRoutes = require('./routes/staff');

const settingsRoutes = require('./routes/settings');
const adminUserRoutes = require('./routes/adminUserRoutes');

require('dotenv').config();



const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// API routes
app.use('/api/auth', authRoutes);
// app.use('/api/user/', appointmentRoutes)
app.use('/api/patients', patientRoutes);

app.use('/api/appointments', appointmentRoutes);

app.use('/api/lab-reports', labReportRoutes);

app.use('/api/doctors', doctorRoutes);

app.use('/api/staff', staffRoutes);


app.use('/api/admin/users', adminUserRoutes);

app.use('/api/settings', settingsRoutes);

app.get('/', (req, res) => res.send('Clinic API is running'));
app.use(errorHandler);

module.exports = app;
