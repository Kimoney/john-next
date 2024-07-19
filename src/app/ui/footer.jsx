import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Text on the left */}
        <p className="text-sm md:text-base text-gray-700">
          © 2024 John Kimani Muchina. All rights reserved.
        </p>
        {/* Icons on the right */}
        <div className="flex space-x-4">
          <a href="https://github.com/Kimoney" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-700 hover:text-orange-500 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/john-muchina-561365144" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-700 hover:text-orange-500 transition-colors" />
          </a>
          <a href="https://twitter.com/jay_kym_" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-700 hover:text-orange-500 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
