import React, { useState } from 'react';
import { registerVolunteer } from '../../services/api';

const VolunteerForm = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    availability: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
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
    setSuccessMessage('');
    
    try {
      await registerVolunteer(formData);
      setSuccessMessage('Registration successful! Thank you for volunteering with us.');
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        skills: '',
        availability: ''
      });
    } catch (err) {
      setError('Failed to register. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-green-800 mb-2 text-center">Volunteer Registration</h2>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Join our team of healthcare volunteers
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="skills" className="block text-sm text-gray-700 font-medium mb-1">
            Skills & Expertise
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Nursing, Medical Assistance, etc."
          />
        </div>

        <div className="mb-6">
          <label htmlFor="availability" className="block text-sm text-gray-700 font-medium mb-1">
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            <option value="">Select availability</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="weekends">Weekends only</option>
            <option value="evenings">Evenings only</option>
            <option value="occasional">Occasional basis</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white text-sm font-medium ${
            loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          } transition-colors duration-300`}
        >
          {loading ? 'Registering...' : 'Register as Volunteer'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-600">
          Already have an account?{' '}
          <button 
            onClick={onSwitchToLogin}
            className="text-green-600 hover:text-green-800 font-medium"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default VolunteerForm;