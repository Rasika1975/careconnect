import React, { useState } from 'react';
import { submitPatient } from '../../services/api';
import AiInsightCard from './AiInsightCard';

const PatientForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    issueType: '',
    concern: ''
  });
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      console.log('Submitting form data:', formData);
      const response = await submitPatient(formData);
      console.log('Received response:', response);
      
      // Check if aiAnalysis exists in response
      console.log('Full response structure:', JSON.stringify(response, null, 2));
      console.log('Response object keys:', Object.keys(response));
      console.log('Response.data:', response.data);
      console.log('Response.data type:', typeof response.data);
      console.log('Has aiAnalysis?', response.data && response.data.aiAnalysis ? 'Yes' : 'No');
      
      console.log('Response status:', response.status);
      console.log('Response.data (server response body):', response.data);
      console.log('Response structure check:');
      console.log('- Has success property:', 'success' in response.data);
      console.log('- Has data property:', 'data' in response.data);
      
      // The Axios response structure is:
      // response = { status, data: serverResponseBody }
      // serverResponseBody = { success, message, data: { patient, aiAnalysis } }
      // So we need response.data.data.aiAnalysis
      
      if (response.data && response.data.data && response.data.data.aiAnalysis) {
        const aiAnalysis = response.data.data.aiAnalysis;
        setAiResponse(aiAnalysis);
        console.log('AI Analysis set from response.data.data.aiAnalysis:', aiAnalysis);
        // Call parent callback
        if (onFormSubmit) {
          onFormSubmit(aiAnalysis, formData.issueType);
        }
      } else {
        console.error('AI Analysis not found in expected location (response.data.data.aiAnalysis)');
        console.error('Response.data.content:', response.data);
        
        // Alternative check - maybe the structure is different
        if (response.data && response.data.aiAnalysis) {
          // If somehow aiAnalysis is directly in response.data
          const aiAnalysis = response.data.aiAnalysis;
          setAiResponse(aiAnalysis);
          console.log('AI Analysis found directly in response.data:', aiAnalysis);
          // Call parent callback
          if (onFormSubmit) {
            onFormSubmit(aiAnalysis, formData.issueType);
          }
        } else {
          console.error('Expected structure not found');
          console.error('Available keys in response.data:', Object.keys(response.data || {}));
          if (response.data && response.data.data) {
            console.error('Available keys in response.data.data:', Object.keys(response.data.data));
          }
          setError('AI analysis not available in response');
        }
      }
      
      // Reset form
      setFormData({
        name: '',
        age: '',
        contact: '',
        issueType: '',
        concern: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit request. Please try again. Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 mb-2 text-center">Request Healthcare Support</h2>
      <p className="text-sm text-gray-600 mb-6 text-center">No registration required - get immediate AI analysis</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="block text-sm text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="age" className="block text-sm text-gray-700 font-medium mb-1">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="1"
            max="120"
            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your age"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="contact" className="block text-sm text-gray-700 font-medium mb-1">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Email or phone"
          />
        </div>
        
        {/* Issue Type Dropdown */}
        <div className="mb-3">
          <label htmlFor="issueType" className="block text-sm text-gray-700 font-medium mb-1">Issue Type</label>
          <select
            id="issueType"
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            required
            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select type</option>
            <option value="medical-help">Medical help</option>
            <option value="medicine-support">Medicine support</option>
            <option value="mental-health">Mental health</option>
            <option value="emergency-guidance">Emergency guidance</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="concern" className="block text-sm text-gray-700 font-medium mb-1">Health Concern</label>
          <textarea
            id="concern"
            name="concern"
            value={formData.concern}
            onChange={handleChange}
            required
            rows="3"
            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Describe your issue..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white text-sm font-medium ${
            loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors duration-300`}
        >
          {loading ? 'Submitting...' : 'Submit Request'}
        </button>
        
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
      </form>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

// Separate component for AI Response display
export const AIResponseDisplay = ({ aiResponse, issueType }) => {
  if (!aiResponse) return null;
  
  return (
    <div className="w-full max-w-4xl mx-auto mt-4 p-4 bg-white rounded-lg shadow-md">
      {/* Thank you message */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-2">
            <h3 className="text-base font-medium text-green-800">Thank you, your request is received!</h3>
            <p className="text-xs text-green-700 mt-1">AI analysis provided below</p>
          </div>
        </div>
      </div>
      
      {/* AI Analysis Section */}
      <div className="border-l-2 border-blue-500 pl-3 mb-4">
        <h3 className="text-lg font-bold text-blue-800 mb-2">🤖 AI Analysis</h3>
      </div>
      
      <AiInsightCard 
        category={aiResponse.category || 'General'} 
        priority={aiResponse.priority || 'Medium'} 
        message={aiResponse.message || 'Thank you for your submission.'} 
        issueType={issueType}
      />
    </div>
  );
};

export default PatientForm;