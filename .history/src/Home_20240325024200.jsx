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
    <div className="max-w-md mx-auto my-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter your text here..."
      />
      <button
  onClick={convertToUpperCase}
  className="btn-blue mr-2"
>
  Convert to Upper Case
</button>
<button
  onClick={convertToLowerCase}
  className="btn-orange mr-2"
>
  Convert to Lower Case
</button>
<button
  onClick={clearText}
  className="btn-red mr-2"
>
  Clear Text
</button>
<button
  onClick={copyToClipboard}
  className="btn-green mr-2"
>
  Copy to Clipboard
</button>
<button
  onClick={removeExtraSpaces}
  className="btn-purple"
>
  Remove Extra Spaces
</button>

    </div>
  );
}

function TextSummary({ text }) {
  const wordCount = text.split(/\s+/).filter((word) => word).length;
  const characterCount = text.length;
  const readingTime = Math.round(wordCount / 200); // assuming an average reading speed of 200 words per minute

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Summary of Your Text</h1>
      <p className="mb-2">Number of words: {wordCount}</p>
      <p className="mb-2">Number of characters: {characterCount}</p>
      <p className="mb-2">Estimated reading time: {readingTime} minute(s)</p>
      <h2 className="text-lg font-bold mb-2">Preview Document</h2>
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
    <div className="container mx-auto px-4">
      <InputComponent onTextChange={handleTextChange} />
      <TextSummary text={text} />
    </div>
  );
}

export default Home;
