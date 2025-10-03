import './App.css';
import React, { useCallback, useEffect, useState } from 'react';

  const App = () => {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [Numbers, setINumbers] = useState(false);
  const [Symbols, setSymbols] = useState(false);





  const generatePassword = () => {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (Numbers) characters += '0123456789';
    if (Symbols) characters += '!@#$%^&*()_+';

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length));
    }
    setPassword(newPassword);
  };

  useEffect(() => { generatePassword() },
    [length, Numbers, Symbols])
  
  useCallback(() => { generatePassword() },
    [length, Numbers, Symbols])


  
  return (
    <div className="password-generator">
      <h1>password Generator</h1>
      <div>
        <label>Password length</label>
        <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))}/>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={Numbers}
            onChange={() => setINumbers(!Numbers)}
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={Symbols}
            onChange={() => setSymbols(! Symbols)}
          />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <input type="text" value={password} readOnly />
      </div>
    </div>
  );
}
export default App;
