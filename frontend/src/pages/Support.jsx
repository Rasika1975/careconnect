import React, { useState } from 'react';
import PatientForm, { AIResponseDisplay } from '../components/patient/PatientForm';

const Support = () => {
  const [aiResponse, setAiResponse] = useState(null);
  const [issueType, setIssueType] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleFormSubmit = (response, formIssueType) => {
    setAiResponse(response);
    setIssueType(formIssueType);
    setFormSubmitted(true);
  };
  
  const handleResetForm = () => {
    setAiResponse(null);
    setIssueType('');
    setFormSubmitted(false);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="w-full px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-900 mb-2">Healthcare Support</h1>
          <p className="text-sm text-gray-600">
            Get AI-powered healthcare insights instantly
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          {formSubmitted ? (
            <AIResponseDisplay 
              aiResponse={aiResponse} 
              issueType={issueType} 
              onReset={handleResetForm}
            />
          ) : (
            <PatientForm onFormSubmit={handleFormSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;