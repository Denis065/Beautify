import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

import './App.css';

const app = (
  <Provider store={store}>
    <div className="container">
      <App />
    </div>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'))

