import React, { useState } from 'react';

export default function InputToList() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handler for the onBlur event
  const handleBlur = () => {
    const rawData = inputValue;
    const newItems = rawData
      .split(',') // Split the string into an array by the comma delimiter
      .map(item => item.trim()) // Remove leading/trailing spaces from each item
      .filter(item => item.length > 0); // Keep only non-empty items
       setListItems(newItems);
  };

  return (
    <div>
      <h1>Input to Ordered List</h1>
      <input type="text" id="dataInput" value={inputValue}
        onChange={handleChange} onBlur={handleBlur} />
      <h2>Your Data List</h2>
      {listItems.length > 0 ? (
        <ol>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ) : (
        <p>Type some data (e.g., Apple, Banana, Cherry) into the field above and click outside it to see the list.</p>
      )}
    </div>
  );
}

