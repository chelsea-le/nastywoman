// Tweets component
import React from 'react';
import './css/Tweet.css';
import '../node_modules/font-awesome/css/font-awesome.css'

var TrumpTwitterFeed = React.createClass({

    render:function() {
      var d = new Date(this.props.data.time);
      // var date = d.toDateString() + " " + d.toLocaleTimeString();
      var date = d.toLocaleString();
      console.log(d.toLocaleString());
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

export default Tweet;
