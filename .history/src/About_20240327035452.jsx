
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
    <div>
      <h1>Frequently Asked Questions</h1>
      <FAQItem
        question="What is your return policy?"
        answer="Our return policy allows returns within 30 days of purchase."
      />
      <FAQItem
        question="How can I track my order?"
        answer="You can track your order by logging into your account."
      />
      {/* Add more FAQ items as needed */}
    </div>
  );
}

export default About;

