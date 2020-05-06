import React, { useState } from 'react';
import Category from './Category.jsx';

// Add Component: contains input box for text as well as categories to check off and add button

export default function Add({ cat, callback }) {

  const [pickupline, setPickupline] = useState('');
  const [selected, setSelected] = useState([]);

  const add = (event) => {
    selected.map(category => addLine(category, pickupline))     
    setPickupline('');
    alert(pickupline + ' was added 💖');
    callback(false);
  };

  const changeDesc = (event) => {
    const name = event.currentTarget.value;
    setPickupline(name)
  };

  // POST request using fetch
  const addLine = (category, line) => {

    fetch('https://trendspickupline.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({category: category, line: line})
    })
      .then(res => res.json)    
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