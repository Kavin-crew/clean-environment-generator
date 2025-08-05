import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css';
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";


// window.addEventListener("load", () => {
//   setTimeout(() => {
//     if (typeof yotpoWidgetsContainer !== "undefined") {
//       yotpoWidgetsContainer.initWidgets();
//       console.log("loaded");
//     } else {
//       console.log("yotpoWidgetsContainer not found, no widgets to initialize");
//     }
//   }, 1000);
// });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
