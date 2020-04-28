import React, { useState, useEffect } from 'react';
import './Category.css';

// do individual checkbox magic here
export default function Category({ lines, callback }) {
  // GET list of all available categories using the data provided and categories = ...
  
  const [categories, setCategories] = useState([]);
  // const categories = ['food', 'music', 'cringy'];

  const allUnchecked = [];
  for (var i = 0; i < categories.length; i++) allUnchecked.push(false);
  const [checked, setChecked] = useState(allUnchecked);

  function changeCheck(check, index, i) {
    if (index === i) { return !check } else { return check };
  }

  const handleChange = (i) => {
    console.log('category:' + categories[i])
    const newChecks = checked.map((check, index) => changeCheck(check, index, i));
    setChecked(newChecks);
    // FIX: checked doesn't get updated, why? so temp, using newChecks
    console.log('checked: ' + checked);
    // callback
    callback(categories.filter((tag, i) => newChecks[i]));
  };

  const fetchCategories = () => {
    fetch('/getCategories')
      .then(res => res.json())
      .then(json => setCategories(json));
  }
  
  useEffect(() => fetchCategories(), []);


  return (
    <div>
      {
        console.log('categories are:' + categories)
      }
      <div id="cat_tags">
        {
          //functional programming
          categories.map((tag, i) => (
            <>
              <input type="checkbox" id={tag} name={tag} value={tag} onChange={() => handleChange(i)} />
              <label for={tag}> {tag} </label>
              {/*<button type="button" onClick={() => removeTag(i)}>Remove</button> */}
              {/* onClick={removeTag(i)} doesnt work */}
            </>
          ))
        }
      </div>
    </div>
  );
}