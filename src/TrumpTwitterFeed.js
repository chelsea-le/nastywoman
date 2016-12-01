// Tweets component
import React from 'react';
import './css/Tweet.css';
import $ from 'jquery'
import '../node_modules/font-awesome/css/font-awesome.css'

var TrumpTwitterFeed = React.createClass({
    getInitialState:function() {
        return {tweets: []};
    },
    componentDidMount:function() {
      $.get('https://faculty.washington.edu/joelross/proxy/twitter/timeline/?screen_name=realDonaldTrump&count=100')
          .then(function(data) {
          console.log(data)
          this.setState({tweets: data.results});
      }.bind(this));      
    },
    render:function() {   
      console.log(this.state.tweets)
      return(
        <div>
          <a className="twitter-timeline" target='_blank' data-link-color="#E95F28" href="https://twitter.com/realDonaldTrump">
            Tweets by @realDonaldTrump
          </a> 
          <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>       
        </div>
      )
    }
});

export default TrumpTwitterFeed;
