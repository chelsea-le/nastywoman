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
  <App />,
  document.getElementById('root')
);
