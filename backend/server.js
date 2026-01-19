require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Import routes
const patientRoutes = require('./routes/patient.routes');
const volunteerRoutes = require('./routes/volunteer.routes');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5174',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:8080',
    'http://localhost:8000',
    'https://careconnect-qp0u.onrender.com'
  ],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/', patientRoutes); // Main patient routes
app.use('/', volunteerRoutes); // Main volunteer routes
app.use('/', aiRoutes); // Main AI routes

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err.message
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`📅 Started at: ${new Date().toLocaleString()}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  console.log(`📊 API Endpoints:`);
  console.log(`   POST /api/patient - Submit patient request`);
  console.log(`   POST /api/volunteer - Register volunteer`);
  console.log(`   POST /api/ai/analyze - Analyze concern`);
  console.log(`\n💡 CareConnect Backend is ready!`);
});
