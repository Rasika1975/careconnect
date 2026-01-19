import React from 'react';
import VolunteerForm from '../components/volunteer/VolunteerForm';

const Volunteer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="w-full px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-green-800 mb-2">Volunteer with CareConnect</h1>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Make a difference by helping connect patients with healthcare support
          </p>
        </div>
        
        <div className="mb-6 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-base font-semibold text-gray-800 mb-3">About Volunteering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-blue-700 mb-2">Who We Need</h3>
              <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1">
                <li>Compassionate community members</li>
                <li>Healthcare professionals</li>
                <li>Administrative support</li>
                <li>Communication specialists</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-blue-700 mb-2">How You Help</h3>
              <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1">
                <li>Assist patients on our platform</li>
                <li>Coordinate with providers</li>
                <li>Provide administrative support</li>
                <li>Translate for diverse communities</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <VolunteerForm />
        </div>
      </div>
    </div>
  );
};

export default Volunteer;