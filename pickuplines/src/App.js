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
  const [add, setAdd] = useState(false);
  const [selected, setSelected] = useState([]);

  const showAdd = (event) => {
    setAdd(true);
    console.log("setAdd to true")
  };

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      <h1> <span role="img" aria-label="heart"> 💘 </span> 
      Find Your Next Pickup Line! 
      <span role="img" aria-label="heart"> 💘 </span> </h1>
      
      {/* conditional rendering */}
      {!add &&
        <>
          <Category lines={LINES} callback={selected => setSelected(selected)} />
          <Display selected={selected} lines={LINES}/>
          <button onClick={showAdd} id="add_button">
            Add a Pickup Line
          </button>
        </>}
      {add && <Add lines={LINES} callback={() => setAdd(false)} />}
    </div>
  );
}

export default App;
