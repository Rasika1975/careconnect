import React, { useState, useRef, useEffect } from 'react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your CareConnect AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    greeting: [
      "Hello! How can I assist you with healthcare support today?",
      "Hi there! I'm here to help with your healthcare questions.",
      "Welcome! What healthcare support do you need?"
    ],
    emergency: [
      "⚠️ For medical emergencies, please call 911 or your local emergency services immediately. I can help with non-emergency healthcare support.",
      "🚨 This sounds like an emergency situation. Please contact emergency services right away. I can assist with follow-up care coordination.",
      "🚑 For immediate medical attention, please call emergency services. I'm here for non-urgent healthcare support."
    ],
    appointment: [
      "I can help you understand the process for healthcare appointments. Would you like information about finding providers, scheduling, or preparation tips?",
      "Appointment scheduling varies by provider. I can guide you through general steps or connect you with volunteer assistance for specific scheduling help.",
      "Many healthcare facilities offer online scheduling. Would you like help finding appropriate healthcare providers in your area?"
    ],
    medication: [
      "For medication questions, I can provide general information about prescription assistance programs, pharmacy resources, and medication management tips.",
      "Medication support is one of our key services. I can connect you with resources for affordable prescriptions or medication adherence support.",
      "I understand medication concerns can be stressful. Our volunteers can help you navigate prescription assistance programs and pharmacy resources."
    ],
    mental_health: [
      "Your mental health matters. I can provide resources for counseling services, support groups, and mental health helplines in your area.",
      "Mental health support is crucial. I can connect you with counseling resources and emotional support services available through our network.",
      "Taking care of your mental wellbeing is important. Our volunteers include mental health professionals who can provide guidance and resources."
    ],
    volunteer: [
      "We'd love to have you join our volunteer team! You can help patients navigate healthcare, provide administrative support, or offer professional expertise.",
      "Volunteering with CareConnect allows you to make a direct impact in healthcare access. Visit our Volunteer page to learn about opportunities.",
      "Our volunteer network includes healthcare professionals, students, and community members. What skills would you like to contribute?"
    ],
    default: [
      "I'd be happy to help with that. Could you provide more details about your healthcare support needs?",
      "That's a good question. I can connect you with appropriate resources or volunteer assistance for your specific situation.",
      "I understand you're looking for healthcare support. Our team can help connect you with the right resources and services."
    ]
  };

  const detectIntent = (message) => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('emergency') || lowerMsg.includes('urgent') || lowerMsg.includes('immediate')) {
      return 'emergency';
    } else if (lowerMsg.includes('appointment') || lowerMsg.includes('schedule') || lowerMsg.includes('visit')) {
      return 'appointment';
    } else if (lowerMsg.includes('medication') || lowerMsg.includes('prescription') || lowerMsg.includes('pharmacy')) {
      return 'medication';
    } else if (lowerMsg.includes('mental') || lowerMsg.includes('depression') || lowerMsg.includes('anxiety')) {
      return 'mental_health';
    } else if (lowerMsg.includes('volunteer') || lowerMsg.includes('help') || lowerMsg.includes('join')) {
      return 'volunteer';
    } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
      return 'greeting';
    }
    
    return 'default';
  };

  const getBotResponse = (userMessage) => {
    const intent = detectIntent(userMessage);
    const responses = predefinedResponses[intent];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return randomResponse;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg z-50 transition-all duration-300"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-semibold">CareConnect AI Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              AI assistant • Responses may vary
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;