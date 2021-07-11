import App from 'App';
import 'index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
