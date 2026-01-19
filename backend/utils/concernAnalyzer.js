// Create a simple AI-like concern analyzer function
const concernAnalyzer = (concernText) => {
  // Convert concern text to lowercase for easier matching
  const lowerConern = concernText.toLowerCase();

  // Define keywords for different priority levels
  const highPriorityKeywords = ['pain', 'emergency', 'accident', 'heart', 'stroke', 'bleeding', 'injury', 'trauma', 'severe'];
  const mediumPriorityKeywords = ['fever', 'cold', 'cough', 'headache', 'nausea', 'stomach ache', 'sore throat', 'flu'];

  // Check for high priority keywords
  for (const keyword of highPriorityKeywords) {
    if (lowerConern.includes(keyword)) {
      return {
        category: 'Emergency Care',
        priority: 'High',
        message: 'Your concern indicates a potentially serious condition. Immediate medical attention is recommended.'
      };
    }
  }

  // Check for medium priority keywords
  for (const keyword of mediumPriorityKeywords) {
    if (lowerConern.includes(keyword)) {
      return {
        category: 'Primary Care',
        priority: 'Medium',
        message: 'Your concern suggests a moderate condition. Please consult with a healthcare provider soon.'
      };
    }
  }

  // Default to low priority if no specific keywords found
  return {
    category: 'General Inquiry',
    priority: 'Low',
    message: 'Thank you for sharing your concern. Our team will review your request and provide guidance.'
  };
};

// Export function
module.exports = concernAnalyzer;