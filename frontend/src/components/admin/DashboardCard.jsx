import React from 'react';

const DashboardCard = ({ title, value, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-700 mb-1">{title}</h3>
      <div className="text-xl font-bold text-blue-800 mb-1">{value}</div>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default DashboardCard;