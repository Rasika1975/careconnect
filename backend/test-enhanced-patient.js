const axios = require('axios');

// Test the enhanced patient form functionality
async function testEnhancedPatientForm() {
  const baseURL = 'http://localhost:5000';
  
  console.log('🧪 Testing Enhanced Patient Form...\n');
  
  try {
    // Test different issue types
    const testCases = [
      {
        name: 'Medical Help Test',
        data: {
          name: 'John Doe',
          age: 45,
          contact: 'john@example.com',
          issueType: 'medical-help',
          concern: 'Need consultation for diabetes management'
        }
      },
      {
        name: 'Medicine Support Test',
        data: {
          name: 'Jane Smith',
          age: 32,
          contact: '+1234567890',
          issueType: 'medicine-support',
          concern: 'Cannot afford prescribed medications'
        }
      },
      {
        name: 'Mental Health Test',
        data: {
          name: 'Mike Johnson',
          age: 28,
          contact: 'mike@email.com',
          issueType: 'mental-health',
          concern: 'Struggling with anxiety and depression'
        }
      },
      {
        name: 'Emergency Guidance Test',
        data: {
          name: 'Sarah Wilson',
          age: 55,
          contact: 'sarah@domain.com',
          issueType: 'emergency-guidance',
          concern: 'Need guidance for heart attack symptoms'
        }
      }
    ];
    
    for (const testCase of testCases) {
      console.log(`\n📋 ${testCase.name}:`);
      console.log('Sending:', testCase.data.issueType);
      
      try {
        const response = await axios.post(`${baseURL}/api/patient`, testCase.data);
        console.log('✅ Success!');
        console.log('   Category:', response.data.data.aiAnalysis.category);
        console.log('   Priority:', response.data.data.aiAnalysis.priority);
        console.log('   Message:', response.data.data.aiAnalysis.message.substring(0, 100) + '...');
      } catch (error) {
        console.log('❌ Failed:', error.response?.data?.message || error.message);
      }
    }
    
    console.log('\n🎉 Enhanced Patient Form Tests Completed!');
    
  } catch (error) {
    console.error('❌ Test Failed:', error.message);
  }
}

// Run the test
testEnhancedPatientForm();