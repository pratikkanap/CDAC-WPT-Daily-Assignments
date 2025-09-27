import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Parameter from './Parameter'
import reportWebVitals from './reportWebVitals';
import FromViewToComp from './upplow';
import LifecycleClassComp from './classlifecycle';
import GraduateComponent from './UserDetails';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Parameter/>
    <FromViewToComp></FromViewToComp>
   <LifecycleClassComp></LifecycleClassComp>
   <GraduateComponent></GraduateComponent>
  </React.StrictMode>
);
reportWebVitals();
