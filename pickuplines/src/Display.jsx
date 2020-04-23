import React, { useState } from 'react';

// Display: contains display of pickup line as well as more and plus buttons

export default function Display({ selected, lines }) {
  const [line, setLine] = useState('');

  const another = (event) => {
    // GET all lines from the selected categories
    // random pickup line
    const posLines = [];
    lines.forEach((line) => {
      if (selected.includes(line.category)) {
        posLines.push(line.line);
      }
    });
    console.log(posLines);
    setLine(posLines[Math.floor(Math.random() * posLines.length)]);
  };
  return (
    <>
      <button onClick={another}> Give me a pickup line!</button>
      <div>{line}</div>
    </>
  );
}