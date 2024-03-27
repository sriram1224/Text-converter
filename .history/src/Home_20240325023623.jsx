import React, { useState } from 'react';

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
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <h1>{text}</h1>
      <button onClick={convertToUpperCase}>Convert to Upper Case</button>
      <button onClick={convertToLowerCase}>Convert to Lower Case</button>
      <button onClick={clearText}>Clear Text</button>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
      <button onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
  );
}

function TextSummary({ text }) {
  const wordCount = text.split(/\s+/).filter((word) => word).length;
  const characterCount = text.length;
  const readingTime = Math.round(wordCount / 200); // assuming an average reading speed of 200 words per minute

  return (
    <div>
      <h1>Summary of Your Text</h1>
      <p>Number of words: {wordCount}</p>
      <p>Number of characters: {characterCount}</p>
      <p>Estimated reading time: {readingTime} minute(s)</p>
      <h2>Preview Document</h2>
      <p>{text}</p>
    </div>
  );
}

function Home() {
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div>
      <InputComponent onTextChange={handleTextChange} />
      <TextSummary text={text} />
    </div>
  );
}

export default Home;