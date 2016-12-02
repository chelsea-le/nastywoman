// Tweets component
import React from 'react';
import './css/Trump.css';
import $ from 'jquery'
import '../node_modules/font-awesome/css/font-awesome.css'

var TrumpTwitterFeed = React.createClass({
    
    render:function() {   
      return (
        <div>
          <h3>@realDonaldTrump Twitter Feed</h3>
          <div className="search">
            <form>
                <div className="input-field col s12" id="hashtag-search">
                    <input id="search" type="text" placeholder='Search for a hashtag' className="validate" />
                    // <label id="message-id">Broadcast your thoughts...</label> Do you need this???
                </div>
                <button type="submit" className="btn" id="broadcast-btn">Broadcast!</button>
            </form>  
            <a className="twitter-timeline"  href="https://twitter.com/hashtag/TwitterStories" data-widget-id="804512822025560064">
              #TwitterStories Tweets
            </a>
            <script>
              {!function(d,s,id) {
                var js
                var fjs=d.getElementsByTagName(s)[0]
                var p=/^http:/.test(d.location)?'http':'https'
                if(!d.getElementById(id)) {
                  js=d.createElement(s)
                  js.id=id
                  js.src=p+"://platform.twitter.com/widgets.js"
                  fjs.parentNode.insertBefore(js,fjs)
                }
              }
              (document,"script","twitter-wjs")
            }
            </script>                      
          </div>

          <div className="trumpFeed">
            <a className="twitter-timeline" target='_blank' data-link-color="#E95F28" href="https://twitter.com/realDonaldTrump">
              @realDonaldTrump Tweets
            </a> 
            <script>
              {!function(d,s,id){
                var js
                var fjs=d.getElementsByTagName(s)[0]
                var p=/^http:/.test(d.location)?'http':'https'
                if(!d.getElementById(id)) {
                  js = d.createElement(s)
                  js.id=id
                  js.src=p+"://platform.twitter.com/widgets.js"
                  fjs.parentNode.insertBefore(js,fjs)
                }
              }
              (document,"script","twitter-wjs")}
            </script>            
          </div>
        </div>
      )
    }
});

export default TrumpTwitterFeed;


