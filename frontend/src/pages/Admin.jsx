import React from 'react';
import DashboardCard from '../components/admin/DashboardCard';

const Admin = () => {
  // Dummy/static data for dashboard cards
  const dashboardData = [
    {
      title: "Total Requests",
      value: "142",
      description: "Patient support requests received"
    },
    {
      title: "Active Volunteers", 
      value: "36",
      description: "Registered volunteers available"
    },
    {
      title: "Pending Cases",
      value: "18",
      description: "Cases awaiting review"
    },
    {
      title: "Resolved Cases",
      value: "124",
      description: "Successfully resolved support requests"
    },
    {
      title: "AI Insights Generated",
      value: "142",
      description: "AI analysis completed"
    },
    {
      title: "Avg. Response Time",
      value: "2.4h",
      description: "Average time to first response"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="w-full px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-900 mb-2">Admin Dashboard</h1>
          <p className="text-sm text-gray-600">
            Monitor platform activity and operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {dashboardData.map((card, index) => (
            <DashboardCard 
              key={index}
              title={card.title}
              value={card.value}
              description={card.description}
            />
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-base font-bold text-gray-800 mb-4">Platform Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Recent Activity</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-xs text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  New support request (High Priority)
                </li>
                <li className="flex items-center text-xs text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Volunteer registered
                </li>
                <li className="flex items-center text-xs text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Case resolved
                </li>
                <li className="flex items-center text-xs text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  AI insight generated
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 bg-blue-50 hover:bg-blue-100 rounded text-blue-700 text-xs transition-colors">
                  Review Pending Cases
                </button>
                <button className="w-full text-left p-2 bg-green-50 hover:bg-green-100 rounded text-green-700 text-xs transition-colors">
                  View Applications
                </button>
                <button className="w-full text-left p-2 bg-purple-50 hover:bg-purple-100 rounded text-purple-700 text-xs transition-colors">
                  Generate Reports
                </button>
                <button className="w-full text-left p-2 bg-yellow-50 hover:bg-yellow-100 rounded text-yellow-700 text-xs transition-colors">
                  System Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;