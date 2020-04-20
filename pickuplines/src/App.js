import React from 'react';
import './App.css';
import Category from './Category.jsx';
import Display from './Display.jsx';
import Add from './Add.jsx';

// serves as parent component that passes information between the cateogry and display components
function App() {
  // state contains which categories are checked off and whether the add form should be displayed
  return (
    <div className="App">
      <h1> Find Your Next Pickup Line! </h1>
    </div>
  );
}

export default App;
