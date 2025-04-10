const express = require('express');
const { getAllPatients, createPatient, updatePatient } = require('../controllers/patientController');
const router = express.Router();

router.get('/', getAllPatients);
router.post('/', createPatient);
router.put('/:id', updatePatient);

module.exports = router;