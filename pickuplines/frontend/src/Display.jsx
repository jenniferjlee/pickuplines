import React, { useState } from 'react';
import './App.css';

// Display: contains display of pickup line as well as more and plus buttons

export default function Display({ selected, lines }) {
  const [line, setLine] = useState('');

  const another = (event) => {
    // GET all lines from the selected categories
    // random pickup line
    const posLines = [];
   
    lines.forEach((line) => {
      // temp FIX: if no categories are selected, add all lines
      if (selected.length === 0){
        posLines.push(line.line);
      }
      else if (selected.includes(line.category)) {
        posLines.push(line.line);
      }
    });
    
    setLine(posLines[Math.floor(Math.random() * posLines.length)]);
  };
  return (
    <>
      <p>*selecting no categories gives a random one</p>
      <button onClick={another} id="button"> Give me a pickup line!</button>
      <div id="line">{line}</div>
    </>
  );
}

