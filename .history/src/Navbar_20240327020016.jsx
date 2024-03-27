import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Importing external CSS file

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <nav className="navbar-container {isDarkMode? }">
      <a className="navbar-brand" href="#">
        {/* Your brand content here */}
      </a>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <svg className="navbar-toggle-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#" className="navbar-link">Home</a></li>
        <li><a href="#" className="navbar-link">About Us</a></li>
        <li><a href="#" className="navbar-link">Services</a></li>
        <li><a href="#" className="navbar-link">Pricing</a></li>
        <li><a href="#" className="navbar-link">Contact</a></li>
      </ul>
      <label className="toggle-dark-mode">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} className="sr-only peer" />
        <div className="toggle-track peer-focus:ring-dark peer-checked:after"></div>
        <span className="toggle-label">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
      </label>
      {isMenuOpen && <div className="navbar-backdrop" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;
