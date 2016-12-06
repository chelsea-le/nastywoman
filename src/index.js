import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import App from './App';
import './css/index.css';

import HomePage from './HomePage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Quiz from './Quiz';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/app" component={App} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/quiz" component={Quiz} />

  </Router>,
  document.getElementById('root')
);
