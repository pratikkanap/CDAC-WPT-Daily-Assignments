import React, { useState } from "react";
export function Factorial() {
  const [number, num] = useState("");
  const [result, setResult] = useState(null);

  const calculateFactorial = (n) => {
    n = Number(n);
    let f = 1;
    for (let i = 2; i <= n; i++) 
       if(i>=1)
        f = f * i;
    return f;
  };

  const handleClick = () => setResult(calculateFactorial(number));

  return (
    <div className="Para">
        <h4>Question 1</h4>
      <h3>Please enter the value to find factorial </h3>
      <input placeholder="Enter the number" className="t1" type="number" value={number} onChange={e => num(e.target.value)}/>
      <button className="t2" onClick={handleClick}>Calculate</button>
      <br></br><br></br><br></br>
      {<div>Factorial is : {result}</div>}
    </div>
  );
}

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    switch (operation) {
      case "add": return n1 + n2;
      case "subtract": return n1 - n2;
      case "multiply": return n1 * n2;
      case "divide": return  n1 / n2 ;
    }
  };

  const handleClick = () => setResult(calculate());

  return (
    <div className="Para">
        <hr></hr>
        <br></br>
      <h3>Calculation</h3>
      <input placeholder="Enter the first number" className="t1" type="number" value={num1} onChange={e => setNum1(e.target.value)}/>
      <input placeholder="Enter the second number"className="t1" type="number" value={num2}onChange={e => setNum2(e.target.value)}/>
      <select className="t1" value={operation} onChange={e => setOperation(e.target.value)}>
        <option value="add">Addition</option>
        <option value="subtract">Subtraction</option>
        <option value="multiply">Multiplication</option>
        <option value="divide">Division</option>
      </select>
      <button className="t1" onClick={handleClick}>Calculate</button>
      <br></br><br></br><br></br><br></br>
      {<div>Result= {result}</div>}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Factorial />
      <Calculator />
    </div>
  );
}
