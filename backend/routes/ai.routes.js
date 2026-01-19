const express = require('express');
const { analyzeConcern } = require('../controllers/ai.controller');

// Create Express router for AI routes
const router = express.Router();

// Route: POST /api/ai/analyze
router.post('/api/ai/analyze', analyzeConcern);

// Export router
module.exports = router;