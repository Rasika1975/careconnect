const Patient = require('../models/Patient.model');
const concernAnalyzer = require('../utils/concernAnalyzer');

// Create patient controller
const createPatient = async (req, res) => {
  try {
    console.log('Received patient request:', req.body);
    
    // 1. Receive patient form data
    const { name, age, contact, issueType, concern } = req.body;
    
    // Validate required fields
    if (!name || !age || !contact || !issueType || !concern) {
      console.log('Patient validation failed:', { name, age, contact, issueType, concern });
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
        receivedData: { name, age, contact, issueType, concern }
      });
    }
    
    // 2. Pass concern text and issue type to concernAnalyzer
    console.log('Analyzing concern:', concern, 'Issue type:', issueType);
    const aiAnalysis = concernAnalyzer(concern, issueType);
    console.log('AI Analysis result:', aiAnalysis);
    
    // 3. Save patient data + AI result in DB
    const newPatient = new Patient({
      name,
      age,
      contact,
      issueType,
      concern,
      aiCategory: aiAnalysis.category,
      priority: aiAnalysis.priority
    });
    
    console.log('Saving patient to database...');
    const savedPatient = await newPatient.save();
    console.log('Patient saved successfully:', savedPatient._id);
    
    // 4. Return AI result to frontend
    res.status(201).json({
      success: true,
      message: 'Patient request submitted successfully',
      data: {
        patient: savedPatient,
        aiAnalysis
      }
    });
    
  } catch (error) {
    console.error('Detailed error creating patient:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    res.status(500).json({
      success: false,
      message: 'Server error while processing patient request',
      error: error.message,
      errorType: error.name
    });
  }
};

// Export patient controller
module.exports = {
  createPatient
};