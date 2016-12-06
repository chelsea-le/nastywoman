// Tweets component
import React from 'react';
import './css/Trump.css';
import 'materialize-css'
import '../node_modules/font-awesome/css/font-awesome.css'
import TrumpTwitterFeed from './TrumpTwitterFeed';
import SearchHashtags from './SearchHashtags';

var FuelForYourFire = React.createClass({
    render:function() {
      return (
        <div>
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s3"><a className="active" href="#test1">@realDonaldTrump</a></li>
                <li className="tab col s3"><a href="#test2">#donaldtrump</a></li>
              </ul>
            </div>
            <div id="test1" className="col s12">
              <TrumpTwitterFeed />
            </div>
            <div id="test2" className="col s12">
              <SearchHashtags />
            </div>
          </div>
        </div>
      )
    }
});

export default FuelForYourFire;
