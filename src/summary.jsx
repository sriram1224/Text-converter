import React from 'react';

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

export default TextSummary;