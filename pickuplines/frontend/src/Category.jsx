import React, { useState, useEffect } from 'react';
import './Category.css';

// do individual checkbox magic here
export default function Category({ cat, callback }) {
  
  // console.log('length of cat:' + cat.length)

  const [checked, setChecked] = useState([false, false, false,false,false,false, false, false,false,false]);

  // console.log('checked here is ' + checked)

  function changeCheck(check, index, i) {
    if (index === i) { return !check } else { return check };
  }

  const handleChange = (i) => {
    // console.log('selected category:' + cat[i])
    // console.log('checked is' + checked)
    const newChecks = checked.map((check, index) => changeCheck(check, index, i));
    
    setChecked(newChecks);
    // FIX: checked doesn't get updated, why? so temp, using newChecks
    // console.log('checked: ' + checked);
    // callback
    callback(cat.filter((tag, i) => newChecks[i]));
  };

  return (
    <div>
      <div id="cat_tags">
        <ul>
        {
          //functional programming
          cat.map((tag, i) => (
            <li>
              <input type="checkbox" id={i} name={tag} value={tag} onChange={() => handleChange(i)} />
              <label for={tag}> {tag} </label>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
}