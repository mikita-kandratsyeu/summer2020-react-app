import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './containers/App';

import './index.scss';

const app = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(app, document.querySelector('#root'));
