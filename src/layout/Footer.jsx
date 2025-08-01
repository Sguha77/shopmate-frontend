 import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-gray-500 py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} ShopMate. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

