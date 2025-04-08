import React ,{useEffect,useState} from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
 import Counter from './components/counter';
//  import Button from './components/button';
//  import Form from './components/form';    
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    {/* <Button />
    <Form title="Contact Us" onSubmit={(data) => console.log('Form submitted:', data)} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
