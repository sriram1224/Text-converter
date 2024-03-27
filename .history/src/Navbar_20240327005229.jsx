import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`relative px-4 py-4 flex justify-between items-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Link className="text-3xl font-bold leading-none" to="/">
        {/* SVG Logo */}
      </Link>
      <div className="lg:hidden">
        <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul className={`lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${isMenuOpen ? '' : 'hidden'}`}>
        <li><Link className="text-sm text-gray-400 hover:text-gray-500" to="/">Home</Link></li>
        <li><Link className="text-sm text-blue-600 font-bold" to="/about">About Us</Link></li>
        <li><Link className="text-sm text-gray-400 hover:text-gray-500" to="/services">Services</Link></li>
        <li><Link className="text-sm text-gray-400 hover:text-gray-500" to="/pricing">Pricing</Link></li>
        <li><Link className="text-sm text-gray-400 hover:text-gray-500" to="/contact">Contact</Link></li>
      </ul>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only" onChange={toggleDarkMode} />
        <span className="text-sm font-medium">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </label>
      {isMenuOpen && <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;