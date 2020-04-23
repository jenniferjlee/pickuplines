import React, { useState } from 'react';

// Add Component: contains input box for text as well as categories to check off and add button

export default function Add(props) {

  const [pickupline, setPickupline] = useState('');

  const add = (event) => {
    alert(pickupline + ' was added');
    setPickupline('');
  };

  const changeDesc = (event) => {
    const name = event.currentTarget.value;
    setPickupline(name)
  };

  return (

    <div>
      Add a pick up line:
      <input
        type="text"
        value={pickupline}
        onChange={changeDesc}
      />

      <button onClick={add} >
        Submit
      </button>

    </div>
  );
}