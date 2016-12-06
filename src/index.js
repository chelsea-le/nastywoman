import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import App from './App';
import './css/index.css';

import HomePage from './HomePage'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/app" component={App} />
  </Router>,
  document.getElementById('root')
);
