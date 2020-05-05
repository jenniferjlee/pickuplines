import React, { useState, useEffect } from 'react';
import './Category.css';


export default function Category({ cat, callback }) {
  
  // TODO: fix this to be length of cat
  const [checked, setChecked] = useState([false, false, false,false,false,false, false, false,false,false]);

  // console.log(cat)

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
    // console.log('handle:' + cat.filter((tag, i) => newChecks[i]));
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
              <input type="checkbox" key= {i} id={i} name={tag} value={tag} onChange={() => handleChange(i)} />
              <label for={tag}> {tag} </label>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
}