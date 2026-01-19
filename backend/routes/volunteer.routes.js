const express = require('express');
const { createVolunteer } = require('../controllers/volunteer.controller');

// Create Express router for volunteer routes
const router = express.Router();

// Route: POST /api/volunteer -> volunteer.controller
router.post('/api/volunteer', createVolunteer);

// Export router
module.exports = router;