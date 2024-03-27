import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
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
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
      </label>
      {isMenuOpen && <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;