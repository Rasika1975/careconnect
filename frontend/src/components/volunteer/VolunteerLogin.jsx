import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VolunteerLogin = ({ onLogin, onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      // Simulate login validation (in real app, this would call backend API)
      // For demo purposes, we'll simulate successful login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock volunteer data
      const volunteerData = {
        id: 'vol_123',
        name: 'John Volunteer',
        email: formData.email,
        role: 'Community Health Worker',
        skills: ['First Aid', 'Patient Counseling', 'Translation'],
        availability: 'Weekends',
        joinDate: '2024-01-15',
        completedTasks: 24,
        activeCases: 3
      };

      onLogin(volunteerData);
      navigate('/volunteer-dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-green-800 mb-2 text-center">Volunteer Login</h2>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Access your volunteer dashboard
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
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

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white text-sm font-medium ${
            loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          } transition-colors duration-300`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-600">
          Don't have an account?{' '}
          <button 
            onClick={onSwitchToRegister}
            className="text-green-600 hover:text-green-800 font-medium"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default VolunteerLogin;