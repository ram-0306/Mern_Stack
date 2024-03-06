'use client'
import React, { useState } from 'react';

function FormExample() {
  // Hum do state variables ka upyog karenge: ek input field ke liye aur ek submit ke liye
  const [inputValue, setInputValue] = useState(''); // Input field ki value state mein store karenge
  const [submittedValue, setSubmittedValue] = useState(''); // Submit hone ke baad ki value ko store karenge
  const [count, setCount] = useState(0); // Submit hone ke baad ki value ko store karenge

  const counter = () =>{
    setCount(count + 1);
  }

  // Jab user input field mein kuch type karta hai, hum input field ki value ko update karenge
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // event se value extract karke state ko update karte hain
  };

  // Jab user form ko submit karta hai, hum submittedValue ko update karenge
  const handleSubmit = (event) => {
    event.preventDefault(); // Form ka default behavior (page refresh) ko rokne ke liye

    // Submitted value ko update karte hain input value se
    setSubmittedValue(inputValue);

    // Input field ko empty kar dete hain
    setInputValue('');
  };

  return (
    <div>
      {/* Input field aur submit button ka form */}
      <form onSubmit={handleSubmit}>
        {/* Input field */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something..."
        />
        {/* Submit button */}
        <button type="submit" onClick={counter}>Submit</button>
      </form>
      {/* Submitted value ko display karte hain */}
      <div>
        <h2>Submitted Value:</h2>
        <p>{submittedValue}</p>
        <h2>Counter Value</h2>
        <p>{count}</p>
      </div>
    </div>
  );
}

export default FormExample;
