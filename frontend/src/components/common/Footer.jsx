import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Statement */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-blue-200">
              Connecting patients with healthcare support through technology. 
              Providing accessible and compassionate care to communities in need.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-blue-200">
              <p>Email: support@careconnect.ngo</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CareConnect</h3>
            <p className="text-blue-200">
              A healthcare support platform for NGOs and community organizations.
            </p>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} CareConnect. All rights reserved. | Serving communities with compassion and care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;