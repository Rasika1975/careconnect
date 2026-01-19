// Simple test to check API connection
const testConnection = async () => {
  try {
    console.log('Testing connection to backend...');
    
    // Test the health endpoint
    const healthResponse = await fetch('http://localhost:5000/health');
    const healthData = await healthResponse.json();
    console.log('Health check:', healthData);
    
    // Test a simple patient submission
    const patientData = {
      name: 'Test User',
      age: 30,
      contact: 'test@example.com',
      issueType: 'medical-help',
      concern: 'Testing API connection'
    };
    
    console.log('Sending test data:', patientData);
    
    const response = await fetch('http://localhost:5000/api/patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientData)
    });
    
    const data = await response.json();
    console.log('Response from backend:', data);
    
    if (data.success && data.data && data.data.aiAnalysis) {
      console.log('✅ API connection successful!');
      console.log('✅ AI Analysis received:', data.data.aiAnalysis);
    } else {
      console.log('❌ Issue with response format');
      console.log('Response structure:', Object.keys(data));
    }
  } catch (error) {
    console.error('❌ Connection test failed:', error);
  }
};

testConnection();