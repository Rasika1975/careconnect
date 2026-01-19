// Test script to check the API response
const http = require('http');
const querystring = require('querystring');

const postData = JSON.stringify({
  name: 'Test User',
  age: 30,
  contact: 'test@example.com',
  issueType: 'medical-help',
  concern: 'Testing AI response'
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/patient',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log('Testing API connection...');

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      console.log('Response received:');
      console.log(JSON.stringify(response, null, 2));
    } catch (error) {
      console.error('Error parsing response:', error.message);
      console.log('Raw response:', data);
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error.message);
});

req.write(postData);
req.end();