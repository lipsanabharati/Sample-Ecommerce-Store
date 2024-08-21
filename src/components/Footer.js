import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy" className="text-white hover:underline mx-2">Privacy Policy</a>
          |
          <a href="/terms" className="text-white hover:underline mx-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
