import { useState } from 'react';

const useAI = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchAIResult = async (inputData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call to AI service
      // In a real application, this would be an actual API call to your backend AI service
      const response = await new Promise(resolve => {
        setTimeout(() => {
          // Mock AI analysis result
          resolve({
            category: inputData.category || 'General',
            priority: inputData.priority || 'Medium',
            message: inputData.message || 'Thank you for your submission. Our system has analyzed your request and our team will reach out soon.'
          });
        }, 1500); // Simulate network delay
      });
      
      setData(response);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    error,
    fetchAIResult
  };
};

export default useAI;