import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Parse from 'parse';
import "../node_modules/animate.css"


Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  'LOtcNuMAaCowXWDHBSkbZsVnulEmY4n19auKqY1E', // This is your Application ID
  'UN4wJVPlWCIgO5Hpb7zcX95cUSQTN8P8xlXDmXNu' // This is your Javascript key
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
