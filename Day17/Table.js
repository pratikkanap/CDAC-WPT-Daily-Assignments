import React, { useState, useEffect } from 'react';

export default function CounterTable() {
  const [counter, setCounter] = useState(0);
  const [table, setTable] = useState([]);
  useEffect(() => {
    const rows = [];
    for (let i = 1; i <= counter; i++) {
      rows.push({ value: i * 2 });
    }
    setTable(rows);
  }, [counter]);

  return (
    <>
  <hr></hr>
    <div className='App'>
      
        <p>Question 3</p>
      <button className='btn' onClick={() => setCounter(c => c + 1)}>Table Counter</button>

      <table>
        <thead>
          <tr>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, idx) => (
              <tr key={idx}>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <br></br><br></br>
          </>
  );
}