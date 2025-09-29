import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './Counter';
import UseEffect from './UseEffect';
import CounterTable from './Table';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseEffect/>
    <App />
    <Counter/>
    <CounterTable/>
  </React.StrictMode>
);
