import React from 'react';
import VolunteerForm from '../components/volunteer/VolunteerForm';

const Volunteer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Join Our Volunteer Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make a difference in your community by volunteering with CareConnect. 
            Help us connect patients with the healthcare support they need.
          </p>
        </div>
        
        <div className="mb-12 bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Volunteering with CareConnect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Who We Are Looking For</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Compassionate individuals who care about community health</li>
                <li>People with medical or healthcare backgrounds</li>
                <li>Administrative assistants and coordinators</li>
                <li>Translators and communication specialists</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">How You Can Help</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Assist patients with navigating our platform</li>
                <li>Coordinate with healthcare providers</li>
                <li>Provide administrative support</li>
                <li>Help translate materials for diverse communities</li>
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