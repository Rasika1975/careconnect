import axios from 'axios';

// Base URL for the backend API
const API_BASE_URL = 'https://careconnect-backend-ejb1.onrender.com';

// Create an axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Function to submit patient data
export const submitPatient = async (data) => {
  try {
    console.log('Sending patient data to backend:', data);
    const response = await api.post('/api/patient', data);
    console.log('Received response from backend:', response);
    return response;
  } catch (error) {
    console.error('Error submitting patient data:', error);
    console.error('Error details:', {
      message: error.message,
      response: error.response,
      request: error.request
    });
    throw error;
  }
};

// Function to register a volunteer
export const registerVolunteer = async (data) => {
  try {
    const response = await api.post('/api/volunteer', data);
    return response;
  } catch (error) {
    console.error('Error registering volunteer:', error);
    throw error;
  }
};

export default api;
