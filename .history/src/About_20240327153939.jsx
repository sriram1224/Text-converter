
import { useState } from "react";
function FAQItem({ question, answer, isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isDarkMode ? 'dark-item' : 'light-item'}`}>
      <div onClick={toggleAnswer} className={`faq-question ${isDarkMode ? 'dark-text' : 'light-text'}`}>
        <strong>{question}</strong>
      </div>
      {isOpen && <div className={`faq-answer ${isDarkMode ? 'dark-text' : 'light-text'}`}>{answer}</div>}
    </div>
  );
}

function About({isDarkMode}) {
  return (
    <div className={`faq ${isDarkMode ? 'dark-item' : 'light-item'}`}>
      <h1>About us</h1>
       <FAQItem
        question="What is your return policy?"
        answer="Our return policy allows returns within 30 days of purchase."
        isDarkMode={isDarkMode}
      />
      <FAQItem
        question="How can I track my order?"
        answer="You can track your order by logging into your account."
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
export default About;