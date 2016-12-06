import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import './css/index.css';

import HomePage from './HomePage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Quiz from './Quiz';
import MapsPage from './MapsPage';
import FuelForYourFire from './FuelForYourFire';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/app" component={App} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/quiz" component={Quiz} />
    <Route path="/events" component={MapsPage} />
    <Route path="/fuel" component={FuelForYourFire} />

  </Router>,
  document.getElementById('root')
);
