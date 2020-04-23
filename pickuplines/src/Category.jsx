import React, { useState } from 'react';
import './Category.css';

// do individual checkbox magic here
export default function Category({ lines, callback }) {
  // GET list of all available categories using the data provided and tags = ...
  const tags = ['food', 'music', 'cringy'];
  const allUnchecked = [];
  for (var i = 0; i < tags.length; i++) allUnchecked.push(false);
  const [checked, setChecked] = useState(allUnchecked);

  function changeCheck(check, index, i) {
    if (index === i) { return !check } else { return check };
  }

  const handleChange = (i) => {
    console.log('tag:' + tags[i])
    const newChecks = checked.map((check, index) => changeCheck(check, index, i));
    setChecked(newChecks);
    // callback
    callback(tags.filter((tag, i) => checked[i]));
  };

  return (
    <div>
      <div id="cat_tags">
        {
          //functional programming
          tags.map((tag, i) => (
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