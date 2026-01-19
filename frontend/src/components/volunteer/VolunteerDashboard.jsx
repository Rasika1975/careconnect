import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerDashboard = ({ volunteerData }) => {
  if (!volunteerData) {
    return (
      <div className="min-h-screen bg-gray-50 py-6">
        <div className="w-full px-4">
          <div className="text-center py-12">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Access Denied</h2>
            <p className="text-gray-600 mb-4">Please login to access your dashboard</p>
            <Link 
              to="/volunteer-login" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const stats = [
    { title: "Completed Tasks", value: volunteerData.completedTasks || 0, color: "bg-green-500" },
    { title: "Active Cases", value: volunteerData.activeCases || 0, color: "bg-blue-500" },
    { title: "Member Since", value: volunteerData.joinDate ? new Date(volunteerData.joinDate).getFullYear() : '2024', color: "bg-purple-500" },
    { title: "Skills", value: volunteerData.skills?.length || 0, color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="w-full px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-green-800 mb-2">Volunteer Dashboard</h1>
          <p className="text-sm text-gray-600">Welcome back, {volunteerData.name}</p>
        </div>

        {/* My Role Info Card */}
        <div className="mb-6 bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">👤</span>
            My Role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Role Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Position:</span>
                  <span className="text-xs font-medium text-gray-800">{volunteerData.role || 'Community Volunteer'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Availability:</span>
                  <span className="text-xs font-medium text-gray-800">{volunteerData.availability || 'Flexible'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Joined:</span>
                  <span className="text-xs font-medium text-gray-800">
                    {volunteerData.joinDate ? new Date(volunteerData.joinDate).toLocaleDateString() : 'Recently'}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {volunteerData.skills && volunteerData.skills.length > 0 ? (
                  volunteerData.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-gray-500">No skills listed</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
              <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                <span className="text-white font-bold text-lg">{stat.value}</span>
              </div>
              <h3 className="text-xs font-semibold text-gray-700">{stat.title}</h3>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition-colors">
              <div className="text-blue-600 text-2xl mb-2">📋</div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">View Active Cases</h3>
              <p className="text-xs text-gray-600">Check your assigned cases</p>
            </button>
            
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-left transition-colors">
              <div className="text-green-600 text-2xl mb-2">➕</div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">New Assignment</h3>
              <p className="text-xs text-gray-600">Take on new volunteer tasks</p>
            </button>
            
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-left transition-colors">
              <div className="text-purple-600 text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">My Reports</h3>
              <p className="text-xs text-gray-600">View your contribution stats</p>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Completed case #2345 - Patient counseling session
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Assigned to new case #2367 - Medication support
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
              Updated availability status
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;