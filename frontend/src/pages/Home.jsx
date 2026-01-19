import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            CareConnect
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Connecting patients with healthcare support through AI-powered assistance. 
            A platform designed for NGOs and healthcare support organizations.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/support" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Request Support
            </Link>
            <Link 
              to="/volunteer" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Volunteer Now
            </Link>
          </div>
        </div>
      </section>

      {/* AI Assistance Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">AI-Assisted Healthcare Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI analyzes health concerns and provides immediate insights to help prioritize care and connect patients with appropriate resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Smart Analysis</h3>
              <p className="text-gray-600">
                AI evaluates health concerns to determine urgency and recommend next steps.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Receive immediate feedback and guidance while our team prepares to assist.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Community Support</h3>
              <p className="text-gray-600">
                Connect with volunteers and healthcare professionals ready to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">How CareConnect Works</h2>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center">
                <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">1</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">Request Support</h3>
                <p className="text-gray-600">
                  Patients fill out a simple form describing their health concerns. 
                  Our AI analyzes the information to provide initial insights.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3 text-center">
                <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">2</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-green-800 mb-2">AI Analysis</h3>
                <p className="text-gray-600">
                  Our AI evaluates the concern and categorizes it by priority level, 
                  helping healthcare providers respond appropriately.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center">
                <div className="bg-purple-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">3</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-purple-800 mb-2">Receive Help</h3>
                <p className="text-gray-600">
                  Volunteers and healthcare professionals receive notifications 
                  and coordinate to provide the necessary support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;