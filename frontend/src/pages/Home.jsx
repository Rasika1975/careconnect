import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="w-full text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-3">
            CareConnect
          </h1>
          <p className="text-sm text-gray-700 mb-6 max-w-2xl mx-auto">
            AI-powered healthcare support for NGOs and organizations
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link 
              to="/support" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-6 rounded-md transition duration-300"
            >
              Request Support
            </Link>
            <Link 
              to="/volunteer" 
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2 px-6 rounded-md transition duration-300"
            >
              Volunteer Now
            </Link>
          </div>
        </div>
      </section>

      {/* AI Assistance Section */}
      <section className="py-8 px-4 bg-white">
        <div className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-2">AI Healthcare Support</h2>
            <p className="text-xs text-gray-600 max-w-xl mx-auto">
              AI analyzes health concerns and provides immediate insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <svg className="w-8 h-8 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-sm font-semibold text-blue-800 mb-1">Smart Analysis</h3>
              <p className="text-xs text-gray-600">
                AI determines urgency and recommends next steps
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-sm font-semibold text-green-800 mb-1">Quick Response</h3>
              <p className="text-xs text-gray-600">
                Immediate feedback and guidance provided
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <svg className="w-8 h-8 text-purple-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-sm font-semibold text-purple-800 mb-1">Community Support</h3>
              <p className="text-xs text-gray-600">
                Connect with healthcare professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8 px-4">
        <div className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-2">How CareConnect Works</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="md:w-1/3 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">1</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-base font-semibold text-blue-800 mb-1">Request Support</h3>
                <p className="text-xs text-gray-600">
                  Fill out form describing health concerns. AI provides initial insights.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-4">
              <div className="md:w-1/3 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">2</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-base font-semibold text-green-800 mb-1">AI Analysis</h3>
                <p className="text-xs text-gray-600">
                  AI evaluates concern and categorizes by priority level.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="md:w-1/3 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">3</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-base font-semibold text-purple-800 mb-1">Receive Help</h3>
                <p className="text-xs text-gray-600">
                  Healthcare professionals coordinate to provide support.
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