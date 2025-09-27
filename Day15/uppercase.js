import React, { useState } from "react";

function UppercaseInput() {
  const [text, setText] = useState("aditya");

  const handleClick = () => {
    const upperText = text.toUpperCase();
    console.log(upperText); // Print to console
    setText(upperText); // Update state if needed
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Convert to Uppercase</button>
    </div>
  );
}

export default UppercaseInput;
