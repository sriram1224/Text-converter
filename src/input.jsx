import React, { useState } from 'react';

function InputComponent() {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const convertToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const convertToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  const removeExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
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

export default InputComponent;