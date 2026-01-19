import React from 'react';
import AIChatbot from '../components/common/AIChatbot';

const AIChatPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="w-full px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-900 mb-2">AI Assistant</h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Chat with our AI assistant for instant healthcare support and guidance
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">How can I help you?</h2>
            <p className="text-gray-600 mb-4">
              Our AI assistant can provide information about healthcare services, help you navigate the platform, 
              answer questions about submissions, and guide you to appropriate resources.
            </p>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> For medical emergencies, please call 911 or your local emergency services. 
                Our AI provides general guidance but is not a substitute for professional medical advice.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Start a Conversation</h2>
            <p className="text-gray-600 mb-4">
              Click the chat button in the bottom right corner to start chatting with our AI assistant.
            </p>
            <div className="text-center">
              <button 
                onClick={() => {
                  // Trigger the chatbot by clicking the chatbot button
                  const chatButton = document.querySelector('.fixed.bottom-6.right-6');
                  if (chatButton) {
                    chatButton.click();
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Open Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatPage;