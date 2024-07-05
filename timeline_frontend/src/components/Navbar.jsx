import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-xl">Timeline App</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/timeline" className="text-white">Timeline</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
