// Tweets component
import React from 'react';
import './css/Trump.css';
import '../node_modules/font-awesome/css/font-awesome.css'
import TrumpTwitterFeed from './TrumpTwitterFeed';

var FuelForYourFire = React.createClass({
    render:function() {
      return (
        <div className="container">
            <TrumpTwitterFeed  />
        </div>
      )
    }
});

export default FuelForYourFire;
