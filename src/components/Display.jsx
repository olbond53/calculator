import React from 'react';
import Output from './Output';
import Input from './Input';

const Display = ({ expression, inputValue }) => {
  return (
    <div id="display-output">
      <Output expression={expression} />
      <Input inputValue={inputValue} />
    </div>
  );
};

export default Display;
