import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Calculation from './Calculation';
import Component from './First';
import Factorial from './Event'
import First from './First';
import UppercaseInput from './uppercase';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <Calculation num1="22" num2="45"></Calculation>
    <App />
    <Factorial/>
    <First/>
    <UppercaseInput/>
  </React.StrictMode>
);


