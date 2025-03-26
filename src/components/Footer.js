import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#F7F7F7" }} className="bg-[#FAFAFA] px-6 md:px-20 py-12">
      {/* Top: Logo & Links */}
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Investock.<span className="text-blue-500">ai</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-700 font-medium">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-200" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 All Right.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/privacy-policy" className="hover:text-gray-700">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-700">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;