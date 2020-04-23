import React, { useState } from 'react';
import './Category.css';

// do individual checkbox magic here
export default function Cateogry({ lines }) {

  const [tags, setTags] = useState(['animals', 'food', 'places', 'names']);

  const removeTag = (i) => {
    const newTags = tags.filter((tag, index) => index !== i);
    setTags(newTags)
  };

  return (
    <div>
      <ul id="cat_tags">
        {
          tags.map((tag, i) => (
            <li key={tag}>
              {tag}
              <button type="button" onClick={() => removeTag(i)}>Remove</button>
              {/* onClick={removeTag(i)} doesnt work */}
            </li>
          ))
        }
      </ul>
    </div>
  );
}