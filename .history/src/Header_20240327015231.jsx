import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setShowSuccessMessage(true); // Show success message when mode changes
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide success message after 2 seconds
    }, 2000);
  };

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {/* Success message */}
      {showSuccessMessage && (
        <div className="success-message">
          Success: {isDarkMode ? 'Dark' : 'Light'} mode has been enabled for some time
        </div>
      )}
    </div>
  );
}

export default Header;
