import React from 'react';

const AiInsightCard = ({ category, priority, message, issueType }) => {
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

  // Get issue type display name
  const getIssueTypeName = (type) => {
    const issueTypes = {
      'medical-help': 'Medical Help',
      'medicine-support': 'Medicine Support',
      'mental-health': 'Mental Health',
      'emergency-guidance': 'Emergency Guidance'
    };
    return issueTypes[type] || 'General Support';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-base font-semibold text-gray-800">{category}</h3>
          {issueType && (
            <p className="text-xs text-gray-600 mt-1">{getIssueTypeName(issueType)}</p>
          )}
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(priority)}`}>
          {priority}
        </span>
      </div>
      <div className="text-sm text-gray-600">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default AiInsightCard;