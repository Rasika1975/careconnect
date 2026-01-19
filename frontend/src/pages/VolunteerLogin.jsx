import React from 'react';
import VolunteerLogin from '../components/volunteer/VolunteerLogin';

const VolunteerLoginPage = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="w-full px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-green-800 mb-2">Volunteer Portal</h1>
          <p className="text-sm text-gray-600">
            Login to access your volunteer dashboard and manage your assignments
          </p>
        </div>
        
        <VolunteerLogin onLogin={onLogin} />
      </div>
    </div>
  );
};

export default VolunteerLoginPage;