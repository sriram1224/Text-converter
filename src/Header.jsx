import React, { useEffect,useState } from 'react';
import Navbar from './Navbar';

function Header({ isDarkMode, setIsDarkMode }) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {showSuccessMessage && (
        <div className="success-message">
          Success: {isDarkMode ? 'Dark' : 'Light'} mode has been enabled
        </div>
      )}
    </div>
  );
}

export default Header;