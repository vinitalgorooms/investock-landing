import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full px-6 md:px-20 py-4 bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-gray-900">
            {/* <span className="text-blue-600">Investock</span>.ai */}
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <li><a href="#about" className="hover:text-blue-600">About us</a></li>
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
          <li><a href="#reviews" className="hover:text-blue-600">Reviews</a></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2 border border-blue-600 rounded-full text-blue-600 hover:bg-blue-50 transition text-sm font-semibold"
          >
            Contact Us
          </a>
          <a
            href="#download"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold hover:opacity-90 transition"
          >
            Download App
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-white shadow-md rounded-lg px-4 py-6 text-center text-sm font-medium text-gray-700">
          <a href="#about" onClick={toggleMenu} className="block hover:text-blue-600">About us</a>
          <a href="#features" onClick={toggleMenu} className="block hover:text-blue-600">Features</a>
          <a href="#faq" onClick={toggleMenu} className="block hover:text-blue-600">FAQ</a>
          <a href="#reviews" onClick={toggleMenu} className="block hover:text-blue-600">Reviews</a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block px-5 py-2 border border-blue-600 rounded-full text-blue-600 hover:bg-blue-50 transition"
          >
            Contact Us
          </a>
          <a
            href="#download"
            onClick={toggleMenu}
            className="block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 transition"
          >
            Download App
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;