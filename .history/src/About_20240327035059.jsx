import React, { useState } from 'react';
import './about.css'; // Import CSS file for styling

function About({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="question" onClick={toggleAnswer}>
        <strong>{question}</strong>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}>&#9660;</span>
      </div>
      <div className={`answer ${isOpen ? 'open' : 'closed'}`}>
        {answer}
      </div>
    </div>
  );
}

export default About;
