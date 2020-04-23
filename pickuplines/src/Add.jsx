import React, { useState } from 'react';
import Category from './Category.jsx';

// Add Component: contains input box for text as well as categories to check off and add button

export default function Add({ lines, callback }) {

  const [pickupline, setPickupline] = useState('');
  const [selected, setSelected] = useState([]);

  const add = (event) => {
    alert(pickupline + ' was added');
    setPickupline('');
    // post to firebase
    // go back to display
    callback(false);
  };

  const changeDesc = (event) => {
    const name = event.currentTarget.value;
    setPickupline(name)
  };

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

      <button onClick={add} >
        Submit
      </button>

    </div>
  );
}