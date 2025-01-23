// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      {/* Copyright Text */}
      <div className="text-center text-sm text-gray-400">
        <p>© 2025 Modern Restaurant. Tous droits réservés.</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-4 space-x-6">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-amber-400 transition duration-300"
        >
          <FaFacebookF size={20} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-amber-400 transition duration-300"
        >
          <FaTwitter size={20} />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-amber-400 transition duration-300"
        >
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Additional Links */}
      <div className="text-center text-sm text-gray-400 mt-4">
        <p>
          <a href="/terms" className="hover:text-amber-400 transition duration-300">
            Termes et conditions
          </a>{' '}
          |{' '}
          <a href="/privacy" className="hover:text-amber-400 transition duration-300">
            Politique de confidentialité
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
