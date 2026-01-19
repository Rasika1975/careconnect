const concernAnalyzer = require('../utils/concernAnalyzer');

// Create AI controller for testing automation
const analyzeConcern = async (req, res) => {
  try {
    // Input: concern text
    const { concern } = req.body;
    
    if (!concern) {
      return res.status(400).json({
        success: false,
        message: 'Concern text is required'
      });
    }
    
    // Use concernAnalyzer utility
    const analysis = concernAnalyzer(concern);
    
    // Output: category, priority, message
    res.status(200).json({
      success: true,
      message: 'Concern analyzed successfully',
      data: analysis
    });
    
  } catch (error) {
    console.error('Error analyzing concern:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while analyzing concern',
      error: error.message
    });
  }
};

// Export AI controller
module.exports = {
  analyzeConcern
};