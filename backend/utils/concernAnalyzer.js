// Create a simple AI-like concern analyzer function
const concernAnalyzer = (concernText, issueType = '') => {
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
  // Provide specific responses based on issue type
  let category = 'General Inquiry';
  let message = 'Thank you for sharing your concern. Our team will review your request and provide guidance.';
  
  switch(issueType) {
    case 'medical-help':
      category = 'Medical Assistance';
      message = 'Thank you for your medical help request. We will connect you with appropriate healthcare resources. Please note this is not emergency medical advice - for urgent situations, please call emergency services.';
      break;
    case 'medicine-support':
      category = 'Medication Support';
      message = 'Thank you for requesting medicine support. Our team will help you locate medication resources and assistance programs in your area.';
      break;
    case 'mental-health':
      category = 'Mental Health Support';
      message = 'Thank you for reaching out about mental health. We will connect you with counseling resources and support services. For immediate crisis support, please contact a mental health helpline.';
      break;
    case 'emergency-guidance':
      category = 'Emergency Guidance';
      message = '⚠️ EMERGENCY GUIDANCE: For life-threatening emergencies, please call emergency services (911 or local emergency number) immediately. This platform provides guidance only and is not a substitute for professional emergency medical care.';
      break;
    default:
      category = 'General Support';
      message = 'Thank you for your submission. Our team will review your request and provide appropriate assistance.';
  }
  
  return {
    category: category,
    priority: 'Low',
    message: message
  };
};

// Export function
module.exports = concernAnalyzer;