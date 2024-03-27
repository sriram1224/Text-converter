import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setShowSuccessMessage(true); // Show success message when mode changes
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide success message after 2 seconds
    }, 2000);
  };

  useEffect(() => {
    // Here you can set your dark mode styles based on isDarkMode state
    // For simplicity, I'm just applying a dark class to the body
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
      <a className="text-3xl font-bold leading-none" href>
        
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

      {/* Toggle button for dark mode */}
      <button onClick={toggleDarkMode} className="ml-4">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Success message */}
      

      {isMenuOpen && <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMenu}></div>}
    {showSuccessMessage && (
        <div className="success-message">
          Success: {isDarkMode ? 'Dark' : 'Light'} mode has been enabled for some time
        </div>
      )}</nav>
  );
}

export default Navbar;
