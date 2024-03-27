import React, { useState } from 'react';
import './Home.css';

function InputComponent({ onTextChange }) {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
    onTextChange(event.target.value);
  };

  const convertToUpperCase = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    onTextChange(upperCaseText);
  };

  const convertToLowerCase = () => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    onTextChange(lowerCaseText);
  };

  const clearText = () => {
    setText('');
    onTextChange('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  const removeExtraSpaces = () => {
    const trimmedText = text.replace(/\s+/g, ' ').trim();
    setText(trimmedText);
    onTextChange(trimmedText);
  };

  return (
      <div className="input-container">
          <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        className="input-field"
        placeholder="Enter your text here..."
      />
      <button onClick={convertToUpperCase} className="btn">Convert to Upper Case</button>
      <button onClick={convertToLowerCase} className="btn">Convert to Lower Case</button>
      <button onClick={clearText} className="btn">Clear Text</button>
      <button onClick={copyToClipboard} className="btn">Copy to Clipboard</button>
      <button onClick={removeExtraSpaces} className="btn">Remove Extra Spaces</button>
    </div>
  );
}

function TextSummary({ text }) {
  const wordCount = text.split(/\s+/).filter((word) => word).length;
  const characterCount = text.length;
  const readingTime = Math.round(wordCount / 200); // assuming an average reading speed of 200 words per minute

  return (
    <div className="summary-container">
      <h1 className="summary-heading">Summary of Your Text</h1>
      <p>Number of words: {wordCount}</p>
      <p>Number of characters: {characterCount}</p>
      <p>Estimated reading time: {readingTime} minute(s)</p>
      <h2>Preview Document</h2>
      <p className="preview-text">{text}</p>
    </div>
  );
}

function Home() {   
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div className="container">
      <InputComponent onTextChange={handleTextChange} />
      <TextSummary text={text} />
    </div>
  );
}

export default Home;
