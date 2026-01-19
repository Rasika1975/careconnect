import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ volunteerData, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-2 px-4">
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <Link to="/" className="text-lg font-bold text-blue-800">CareConnect</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/support" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
            Support
          </Link>
          
          {/* Volunteer Links - Conditional */}
          {volunteerData ? (
            <>
              <Link to="/volunteer-dashboard" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
              <button 
                onClick={onLogout}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/volunteer" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              Volunteer
            </Link>
          )}
          
          <Link to="/faq" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
            FAQ
          </Link>
          <Link to="/admin" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
            Admin
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 py-2 border-t">
          <div className="flex flex-col space-y-2 px-4">
            <Link
              to="/"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/support"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Support
            </Link>
            
            {/* Volunteer Links - Conditional */}
            {volunteerData ? (
              <>
                <Link
                  to="/volunteer-dashboard"
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    onLogout();
                    setIsOpen(false);
                  }}
                  className="text-left text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/volunteer"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Volunteer
              </Link>
            )}
            
            <Link
              to="/faq"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/admin"
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;