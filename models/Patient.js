const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  heartRate: Number,
  bloodPressure: Number,
  steps: Number,
  sleep: Number,
  reportFile: String
});

module.exports = mongoose.model('Patient', patientSchema);
