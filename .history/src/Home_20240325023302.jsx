import React, { useState } from 'react';
import InputComponent from './input';
import TextSummary from './summary';

function ParentComponent() {
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

export default ParentComponent;