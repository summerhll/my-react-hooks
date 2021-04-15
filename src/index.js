import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
 import { Router, Route, BrowserRouter, /* , Redirect */ } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './pages/index/store';
import App from './App.jsx'

ReactDOM.render(
  <Provider store={store}>
    <App/>
   
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
