import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserView, MobileView } from 'react-device-detect';

ReactDOM.render(
    <React.StrictMode>
      <BrowserView>
        <App />
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on browser</h1>
      </MobileView>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
