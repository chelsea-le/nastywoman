import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import './css/index.css';

import HomePage from './HomePage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Quiz from './Quiz';
import MapsPage from './MapsPage';
import FuelForYourFire from './FuelForYourFire';
import TweetContainer from './TweetContainer';
import MessageBoard from './MessageBoard';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/app" component={App}>
      <IndexRoute component={SignUp} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/events" component={MapsPage} />
      <Route path="/fuel" component={FuelForYourFire} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/messageboard" component={MessageBoard} />
    </Route>
  </Router>,
  document.getElementById('root')
);
