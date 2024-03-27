import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
      <a className="text-3xl font-bold leading-none" href="#">
        
      </a>
      <div className="lg:hidden">
        <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul className={`lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${isMenuOpen ? '' : 'hidden'}`}>
        <li><a className="text-sm text-gray-400 hover:text-gray-500" href>Home</a></li>
        <li><a className="text-sm text-blue-600 font-bold" href>About Us</a></li>
        <li><a className="text-sm text-gray-400 hover:text-gray-500" href>Services</a></li>
        <li><a className="text-sm text-gray-400 hover:text-gray-500" href>Pricing</a></li>
        <li><a className="text-sm text-gray-400 hover:text-gray-500" href>Contact</a></li>
      </ul>
      
      {isMenuOpen && <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;
