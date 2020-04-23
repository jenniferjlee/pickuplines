import React, { useState } from 'react';
import './App.css';
import Category from './Category.jsx';
import Display from './Display.jsx';
import Add from './Add.jsx';


// would normally get data from backend here
const LINES = [
  {
    category: 'food',
    line: "Baby, if you were a fruit you'd be a Fineapple."
  },
  {
    category: 'food',
    line: "Your name must be Coca Cola, because you're so-da-licious"
  },
  {
    category: 'music',
    line: 'You had me at cello.'
  },
  {
    category: 'cringy',
    line: "Do you have a map? I just keep getting lost in your eyes."
  }
];


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
      <Category lines={LINES} />
      {/* conditional rendering */}
      {!addDisplay && <button onClick={add} >
        +
      </button>}
      {addDisplay && <Add />}
    </div>
  );
}

export default App;
