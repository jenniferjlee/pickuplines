import React, { useState } from 'react';
import Category from './Category.jsx';

// Add Component: contains input box for text as well as categories to check off and add button

export default function Add({ lines, callback }) {

  const [pickupline, setPickupline] = useState('');
  const [selected, setSelected] = useState([]);

  const add = (event) => {

    // console.log('selected:' + selected)

    selected.map(category => addLine(category, pickupline)) 
    
    // alert + go back to display
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
    console.log('category is ' + category);
    console.log('line is ' + line);

    fetch('/addLine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({category, line})
    })
      // ??
      // .then(res => res.text())
      // .then(id => setSongs([...songs, { name, artist, rating, id }]))  
      // not keeping track of all pickup lines here tho?
      // .then(id => setSongs([...songs, { name, artist, rating, id }]))        
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

      <Category lines={lines} callback={selected => setSelected(selected)} />

      <button onClick={add} id="button">
        Submit
      </button>

    </div>
  );
}