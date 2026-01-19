import React, { useState } from 'react';
import { submitPatient } from '../../services/api';
import AiInsightCard from './AiInsightCard';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
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
      const response = await submitPatient(formData);
      setAiResponse(response.data.aiAnalysis); // Assuming backend returns aiAnalysis
      // Reset form
      setFormData({
        name: '',
        age: '',
        contact: '',
        concern: ''
      });
    } catch (err) {
      setError('Failed to submit request. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Request Healthcare Support</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="1"
            max="120"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your age"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-700 font-medium mb-2">Contact Information</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email or phone number"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="concern" className="block text-gray-700 font-medium mb-2">Health Concern</label>
          <textarea
            id="concern"
            name="concern"
            value={formData.concern}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your health concern or request for support..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-4 rounded-md text-white font-medium ${
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
      
      {aiResponse && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Insight Analysis</h3>
          <AiInsightCard 
            category={aiResponse.category || 'General'} 
            priority={aiResponse.priority || 'Medium'} 
            message={aiResponse.message || 'Thank you for your submission. Our team will review your request and reach out soon.'} 
          />
        </div>
      )}
    </div>
  );
};

export default PatientForm;