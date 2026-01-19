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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Admin Dashboard</h1>
          <p className="text-xl text-gray-600">
            Monitor platform activity and manage healthcare support operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dashboardData.map((card, index) => (
            <DashboardCard 
              key={index}
              title={card.title}
              value={card.value}
              description={card.description}
            />
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Platform Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  New support request from John D. (High Priority)
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Volunteer Sarah M. registered
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Case #1245 resolved
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  New AI insight generated for case #1250
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-md text-blue-700 transition-colors">
                  Review Pending Cases
                </button>
                <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-md text-green-700 transition-colors">
                  View Volunteer Applications
                </button>
                <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-md text-purple-700 transition-colors">
                  Generate Reports
                </button>
                <button className="w-full text-left p-3 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-700 transition-colors">
                  Manage System Settings
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