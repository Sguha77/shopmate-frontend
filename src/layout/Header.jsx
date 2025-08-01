 import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">ShopMate</Link>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
