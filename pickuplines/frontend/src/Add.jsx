import React, { useState } from 'react';
import Category from './Category.jsx';

// Add Component: contains input box for text as well as categories to check off and add button

export default function Add({ cat, callback }) {

  const [pickupline, setPickupline] = useState('');
  const [selected, setSelected] = useState([]);

  const add = (event) => {

    // console.log('selected:' + selected)

    selected.map(category => addLine(category, pickupline)) 
    
    // alert + go back to display
    setPickupline('');
    alert(pickupline + ' was added 💖 (adding doesnt work yet)');
    callback(false);
  };

  const changeDesc = (event) => {
    const name = event.currentTarget.value;
    setPickupline(name)
  };

  // POST request using fetch
  const addLine = (category, line) => {
    console.log('category is ' + category);
    console.log('line is ' + line);

    fetch('/addLine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'category': category, 'line': line})
    })
      .then(res => res.json())    
  }

  return (

    <div>
      Add a pick up line:
      {' '}
      <input
        type="text"
        value={pickupline}
        onChange={changeDesc}
      />

      <Category cat={cat} callback={selected => setSelected(selected)} />

      <button onClick={add} id="button">
        Submit
      </button>

    </div>
  );
}