import React, { useState } from 'react';

// Display: contains display of pickup line as well as more and plus buttons

export default function Display({ selected }) {
  const [line, setLine] = useState('');

  const another = (event) => {
    // GET all lines from the selected categories
    // random pickup line
    setLine('Random');
  };
  return (
    <>
      <button onClick={another}> Give me a pickup line!</button>
      <div>{line}</div>
    </>
  );
}