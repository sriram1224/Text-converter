
import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleAnswer} style={{ cursor: 'pointer' }}>
        <strong>{question}</strong>
      </div>
      {isOpen && <div>{answer}</div>}
    </div>
  );
}

function About() {
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

