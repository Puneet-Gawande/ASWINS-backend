const express = require('express');
const Appointment = require('../models/Appointment');

const router = express.Router();

// POST /api/appointments - Book a new appointment
router.post('/', async (req, res) => {
  try {
    const { name, email, doctor, date, time } = req.body;
    // Create a new appointment with provided data
    const appointment = new Appointment({ name, email, doctor, date, time });
    // Save it to MongoDB
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked', appointment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error booking appointment' });
  }
});

module.exports = router;