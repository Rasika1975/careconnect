const Volunteer = require('../models/Volunteer.model');

// Create volunteer controller
const createVolunteer = async (req, res) => {
  try {
    console.log('Received volunteer registration request:', req.body);
    
    // 1. Receive volunteer data
    const { name, email, skills, availability } = req.body;
    
    // Validate required fields
    if (!name || !email || !skills || !availability) {
      console.log('Validation failed:', { name, email, skills, availability });
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
        receivedData: { name, email, skills, availability }
      });
    }
    
    // Log the data before saving
    console.log('Creating volunteer with data:', { name, email, skills, availability });
    
    // Create new volunteer
    const newVolunteer = new Volunteer({
      name,
      email,
      skills,
      availability
    });
    
    // 2. Save to database
    console.log('Saving volunteer to database...');
    const savedVolunteer = await newVolunteer.save();
    console.log('Volunteer saved successfully:', savedVolunteer._id);
    
    // 3. Return success message
    res.status(201).json({
      success: true,
      message: 'Volunteer registered successfully',
      data: savedVolunteer
    });
    
  } catch (error) {
    console.error('Detailed error registering volunteer:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    res.status(500).json({
      success: false,
      message: 'Server error while registering volunteer',
      error: error.message,
      errorType: error.name
    });
  }
};

// Export volunteer controller
module.exports = {
  createVolunteer
};