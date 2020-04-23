import React, { useState } from 'react';

// Display: contains display of pickup line as well as more and plus buttons

export default function Display({ selected, lines }) {
  const [line, setLine] = useState('');

  const another = (event) => {
    // GET all lines from the selected categories
    // random pickup line
    const posLines = [];

    console.log('selected length ' + selected.length)
   
    lines.forEach((line) => {
      if (selected.length === 0){
        posLines.push(line.line);
      }
      else if (selected.includes(line.category)) {
        posLines.push(line.line);
      }
    });
    
    console.log(posLines);
    console.log('? ' + posLines[Math.floor(Math.random() * posLines.length)]);
    setLine(posLines[Math.floor(Math.random() * posLines.length)]);
  };
  return (
    <>
      <button onClick={another}> Give me a pickup line!</button>
      <div>{line}</div>
    </>
  );
}