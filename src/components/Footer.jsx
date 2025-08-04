import React from 'react';

const Footer = () => {
  return (
    // Changed bg-gray-900 to animated-bg, text-white remains, border-gray-800 remains
    <footer className="animated-bg text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">AG</div>
          <div className="text-center md:text-right">
            <p className="opacity-70 mb-2">© 2025 Ayush Guleria. All rights reserved.</p>
            <p className="opacity-50 text-sm">Designed & Developed with precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
