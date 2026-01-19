import React from 'react';

const AiInsightCard = ({ category, priority, message }) => {
  // Determine badge color based on priority
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(priority)}`}>
          {priority} Priority
        </span>
      </div>
      <div className="prose prose-sm text-gray-600">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default AiInsightCard;