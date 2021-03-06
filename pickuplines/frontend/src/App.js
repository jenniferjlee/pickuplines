import React, { useState, useEffect } from 'react';
import './App.css';
import Category from './Category.jsx';
import Display from './Display.jsx';
import Add from './Add.jsx';
import Illustration from './illustration.png';
import Gif from './giphy.gif';
import Authenticated from './Authenticated';
import * as firebase from 'firebase/app';
import 'firebase/auth';

// serves as parent component that passes information between the cateogry and display components
function App() {

  // state contains which categories are checked off and whether the add form should be displayed
  const [add, setAdd] = useState(false);
  const [selected, setSelected] = useState([]);
  const [pickupLines, setPickupLines] = useState([]);

  const [categories, setCategories] = useState([]);
  const noDupCategories = [...new Set(categories)];

  const fetchLines = () => {
    fetch('https://trendspickupline.herokuapp.com/getLines')
      .then(res => res.json())
      .then(json => setPickupLines(json));
  }
  useEffect(() => fetchLines(), []);

  const fetchCategories = () => {
    fetch('https://trendspickupline.herokuapp.com/getCategories')
      .then(res => {
        return res.json()
      })
      .then(json => {
        setCategories(json)
      });
  }
  useEffect(() => fetchCategories(), []);


  const showAdd = (event) => {
    setAdd(true);
    console.log("setAdd to true")
  };


  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      <span>
        <img src={Gif} alt="Gif" id="image" />
        <img src={Illustration} alt="Illustration" id="image" />
        <img src={Gif} alt="Gif" id="image" />
      </span>

      <h1> <span role="img" aria-label="heart"> 💘 </span>
        Find Your Next Pickup Line!
      <span role="img" aria-label="heart"> 💘 </span> </h1>

      <Authenticated>
        {/* conditional rendering */}
        {!add &&
          <>
            <Category cat={noDupCategories} callback={selected => setSelected(selected)} />
            <Display selected={selected} lines={pickupLines} />
            <button onClick={showAdd} id="add_button">
              Add a Pickup Line
          </button>
          </>}
        {add && <Add cat={noDupCategories} callback={() => setAdd(false)} />}
        <br />
        <button id="signout" onClick={() => firebase.auth().signOut()} > Sign Out </button>
      </Authenticated>

      <p><a href="https://www.ls.graphics/whoosh" class="source">Image Source</a></p>
    </div>

  );
}

export default App;
