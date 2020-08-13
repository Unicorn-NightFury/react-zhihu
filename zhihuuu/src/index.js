import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './router'
import store from './store'  //默认找index.js

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>  ,
  document.getElementById('root')
);

