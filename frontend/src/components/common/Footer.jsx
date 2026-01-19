import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission Statement */}
          <div>
            <h3 className="text-sm font-bold mb-2">Our Mission</h3>
            <p className="text-xs text-blue-200">
              Connecting patients with healthcare support through technology.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-bold mb-2">Contact Us</h3>
            <div className="space-y-1 text-xs text-blue-200">
              <p>support@careconnect.ngo</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-sm font-bold mb-2">CareConnect</h3>
            <p className="text-xs text-blue-200">
              Healthcare support platform for NGOs.
            </p>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-4 pt-3 text-center text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} CareConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;