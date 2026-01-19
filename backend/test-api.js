const axios = require('axios');

// Test the backend API endpoints
async function testAPI() {
  const baseURL = 'http://localhost:5000';
  
  console.log('🧪 Testing CareConnect Backend API...\n');
  
  try {
    // Test health endpoint
    console.log('1. Testing Health Endpoint...');
    const healthResponse = await axios.get(`${baseURL}/health`);
    console.log('✅ Health check passed:', healthResponse.data.message);
    
    // Test volunteer registration
    console.log('\n2. Testing Volunteer Registration...');
    const volunteerData = {
      name: 'Test Volunteer',
      email: 'test@example.com',
      skills: 'Medical Assistant',
      availability: 'full-time'
    };
    
    const volunteerResponse = await axios.post(`${baseURL}/api/volunteer`, volunteerData);
    console.log('✅ Volunteer registration successful:', volunteerResponse.data.message);
    
    // Test patient submission
    console.log('\n3. Testing Patient Submission...');
    const patientData = {
      name: 'Test Patient',
      age: 35,
      contact: 'test.patient@email.com',
      concern: 'I have a fever and headache'
    };
    
    const patientResponse = await axios.post(`${baseURL}/api/patient`, patientData);
    console.log('✅ Patient submission successful:', patientResponse.data.message);
    console.log('   AI Analysis Category:', patientResponse.data.data.aiAnalysis.category);
    console.log('   AI Analysis Priority:', patientResponse.data.data.aiAnalysis.priority);
    
    // Test AI analysis endpoint
    console.log('\n4. Testing AI Analysis Endpoint...');
    const aiTestData = {
      concern: 'Severe chest pain and difficulty breathing'
    };
    
    const aiResponse = await axios.post(`${baseURL}/api/ai/analyze`, aiTestData);
    console.log('✅ AI analysis successful:', aiResponse.data.data.category);
    console.log('   Priority:', aiResponse.data.data.priority);
    
    console.log('\n🎉 All API tests passed successfully!');
    
  } catch (error) {
    console.error('❌ API Test Failed:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

// Run the test
testAPI();