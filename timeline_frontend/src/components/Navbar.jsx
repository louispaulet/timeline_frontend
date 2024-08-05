import React from 'react';
import { Link } from 'react-router-dom';
import timelineFavicon from './../../public/timeline_favicon.webp';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={timelineFavicon} alt="Website Icon" className="w-8 h-8 mr-2" />
            <div className="text-white text-xl">Timeline App</div>
          </Link>
        </div>
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
