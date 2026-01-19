import axios from 'axios';

// Base URL for the backend API
const API_BASE_URL = 'http://localhost:5000';

// Create an axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Function to submit patient data
export const submitPatient = async (data) => {
  try {
    const response = await api.post('/api/patient', data);
    return response;
  } catch (error) {
    console.error('Error submitting patient data:', error);
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