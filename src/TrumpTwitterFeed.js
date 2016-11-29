// Tweets component
import React from 'react';
import './css/Tweet.css';
import '../node_modules/font-awesome/css/font-awesome.css'

var TrumpTwitterFeed = React.createClass({

    render:function() {
      return(
        <div>
          <a class="twitter-timeline"
            href="https://twitter.com/realDonaldTrump">
            Tweets by @realDonaldTrump
          </a>
        </div>
      )
    }
});

export default TrumpTwitterFeed;
