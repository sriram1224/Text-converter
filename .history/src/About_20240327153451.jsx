import React, { useState } from 'react';
import './about.css'
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div onClick={toggleAnswer} className="faq-question">
        <strong>{question}</strong>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

function About({isDarkMode}) {
  return (
    <div className={`faq ${isDarkMode ? 'dark-item' : 'light-item'}`}>
      <h1>About us</h1>
       <FAQItem className ={` ${isDarkMode ? 'dark-item' : 'light-item'}`}
        question="What is your return policy?"
        answer="Our return policy allows returns within 30 days of purchase."
      />
      <FAQItem
        question="How can I track my order?"
        answer="You can track your order by logging into your account."
      />
    </div>
  );
}

export default About;