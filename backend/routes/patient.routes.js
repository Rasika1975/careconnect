const express = require('express');
const { createPatient } = require('../controllers/patient.controller');

// Create Express router for patient routes
const router = express.Router();

// Route: POST /api/patient -> patient.controller
router.post('/api/patient', createPatient);

// Export router
module.exports = router;