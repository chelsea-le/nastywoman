// Tweets component
import React from 'react';
import './css/Trump.css';
import '../node_modules/font-awesome/css/font-awesome.css'
import TrumpTwitterFeed from './TrumpTwitterFeed';

var FuelForYourFire = React.createClass({
    render:function() {
      return (
        <div>
          <div className="row">
            <TrumpTwitterFeed  />
          </div>
        </div>
      )
    }
});

export default FuelForYourFire;
