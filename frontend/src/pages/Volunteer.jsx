import React, { useState } from 'react';
import VolunteerForm from '../components/volunteer/VolunteerForm';
import VolunteerLogin from '../components/volunteer/VolunteerLogin';

const Volunteer = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(false); // false = register, true = login
  
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="w-full px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-green-800 mb-2">
            {showLogin ? 'Volunteer Login' : 'Join Our Volunteer Team'}
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            {showLogin 
              ? 'Access your volunteer dashboard' 
              : 'Make a difference by helping connect patients with healthcare support'
            }
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {showLogin ? (
              <VolunteerLogin 
                onLogin={onLogin} 
                onSwitchToRegister={() => setShowLogin(false)} 
              />
            ) : (
              <VolunteerForm 
                onSwitchToLogin={() => setShowLogin(true)} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;