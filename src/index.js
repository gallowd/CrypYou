import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Router from './screens/Router';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {ContextProvider} from "./Context/context"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router/>
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();