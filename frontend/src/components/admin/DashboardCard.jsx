import React from 'react';

const DashboardCard = ({ title, value, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-blue-800 mb-2">{value}</div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default DashboardCard;