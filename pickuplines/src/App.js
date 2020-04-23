import React, { useState } from 'react';
import './App.css';
import Category from './Category.jsx';
import Display from './Display.jsx';
import Add from './Add.jsx';

// serves as parent component that passes information between the cateogry and display components
function App() {
  // state contains which categories are checked off and whether the add form should be displayed
  const [addDisplay, setAddDisplay] = useState(false);

  const add = (event) => {
    setAddDisplay(true);
  };
  return (
    <div className="App">
      <h1> Find Your Next Pickup Line! </h1>
      <Category></Category>
      {/* conditional rendering */}
      {!addDisplay && <button onClick={add} >
        +
      </button>}
      {addDisplay && <Add />}
    </div>
  );
}

export default App;
