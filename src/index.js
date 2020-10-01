import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Creating functional componenets for .render

//This function can only return a single JSX (newer version of javascript) 
// component so you cant have more than an unordered list here 
// UNLESS you put it into a div container then its fine
// but you dont wanna put it all here anyway
function MyApp() {
  return (  
    <div><ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Cookies</li>
    </ul></div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

