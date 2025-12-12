const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorHandler');

const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/user/', appointmentRoutes)


app.get('/', (req, res) => res.send('Clinic API is running'));
app.use(errorHandler);

module.exports = app;
