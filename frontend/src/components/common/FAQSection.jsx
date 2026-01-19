import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does CareConnect's AI analysis work?",
      answer: "Our AI system analyzes your health concerns using natural language processing to identify keywords, urgency indicators, and medical context. It categorizes requests by priority level (High, Medium, Low) and provides initial guidance while connecting you with appropriate healthcare resources."
    },
    {
      question: "Is there a cost to use CareConnect?",
      answer: "CareConnect is completely free for patients seeking healthcare support. Our platform is designed for NGOs and healthcare organizations to provide accessible care to communities in need."
    },
    {
      question: "What types of health concerns can I submit?",
      answer: "You can submit any non-emergency health concerns including medical help requests, medicine support needs, mental health questions, and general healthcare guidance. For emergencies, please call your local emergency services immediately."
    },
    {
      question: "How quickly will I receive a response?",
      answer: "You'll receive immediate AI analysis within seconds of submitting your request. Our volunteer network typically responds within 24-48 hours for non-urgent cases, with higher priority cases receiving faster attention."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account creation is required to submit a healthcare support request. However, volunteers and healthcare professionals can register to join our network and help serve the community."
    },
    {
      question: "Is my information kept private?",
      answer: "Yes, we take privacy seriously. Your personal information is securely stored and only shared with verified healthcare professionals and volunteers who need it to provide assistance. We comply with healthcare privacy regulations."
    },
    {
      question: "Can I volunteer with CareConnect?",
      answer: "Absolutely! We welcome healthcare professionals, medical students, administrative assistants, translators, and compassionate community members. Visit our Volunteer page to register and join our mission."
    },
    {
      question: "What languages are supported?",
      answer: "Currently we support English, with plans to expand multilingual support. Our volunteer network includes translators who can help bridge language barriers for diverse communities."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about CareConnect's services and how we can help you
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-blue-600 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions Section */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              Our AI assistant is available 24/7 to help answer your questions, or you can contact our support team directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Chat with AI Assistant
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;