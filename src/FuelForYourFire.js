// Tweets component
import React from 'react';
import './css/Trump.css';
import $ from 'jquery'
import 'materialize-css'
import '../node_modules/font-awesome/css/font-awesome.css'
import TrumpTwitterFeed from './TrumpTwitterFeed';
import SearchHashtags from './SearchHashtags';

var FuelForYourFire = React.createClass({    
    render:function() {   
      return (
        <div>
          <SearchHashtags />

          <TrumpTwitterFeed />
        </div>
      )
    }
});

export default FuelForYourFire;


