const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorHandler');
const patientRoutes = require('./routes/patients');
const authRoutes = require('./routes/auth');
const doctorRoutes = require('./routes/doctors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// API routes
app.use('/api/auth', authRoutes);
// app.use('/api/user/', appointmentRoutes)
app.use('/api/patients', patientRoutes);


app.use('/api/doctors', doctorRoutes);


app.get('/', (req, res) => res.send('Clinic API is running'));
app.use(errorHandler);

module.exports = app;
