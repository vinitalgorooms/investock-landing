import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-6 md:px-20 py-4 flex items-center justify-between bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        <span className="text-2xl font-bold text-gray-900">
          {/* <span className="text-blue-600">Investock</span>.ai */}
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <li><a href="#about" className="hover:text-blue-600">About us</a></li>
        <li><a href="#features" className="hover:text-blue-600">Features</a></li>
        <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
        <li><a href="#reviews" className="hover:text-blue-600">Reviews</a></li>
      </ul>

      {/* Action Buttons */}
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
    </nav>
  );
};

export default Navbar;