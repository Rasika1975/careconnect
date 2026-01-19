import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <Link to="/" className="text-2xl font-bold text-blue-800">CareConnect</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            Home
          </Link>
          <Link to="/support" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            Support
          </Link>
          <Link to="/volunteer" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            Volunteer
          </Link>
          <Link to="/admin" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
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
        <div className="md:hidden mt-4 py-4 border-t">
          <div className="flex flex-col space-y-4 px-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/support"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Support
            </Link>
            <Link
              to="/volunteer"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Volunteer
            </Link>
            <Link
              to="/admin"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
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