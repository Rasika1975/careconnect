import React from 'react';
import PatientForm from '../components/patient/PatientForm';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Healthcare Support Request</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fill out the form below to request healthcare support. Our AI will analyze your concern and provide initial insights.
          </p>
        </div>
        
        <div className="flex justify-center">
          <PatientForm />
        </div>
      </div>
    </div>
  );
};

export default Support;