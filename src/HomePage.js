/*home page!*/
import React from 'react';
import {hashHistory} from 'react-router';
import './css/Home.css';
import '../node_modules/font-awesome/css/font-awesome.css'

var HomePage = React.createClass({
    render:function() {
        return(
            <div className="homeContainer">
            	<div className="logo">
            		<img src="/photos/nastyWoman6.jpg" alt="logo"/>
            	</div>
            	<div className="info">
            	   <h3>Do you agree with this?</h3>
            	</div>

              {
                /*
                  Maybe in the future consider component'ing this!

                  Weird issue: twitter feed isn't rerendering when page loads again
                */}


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
		              }(document,"script","twitter-wjs")}
		            </script>
	            </div>


            	<div className="info">
            		<p> Do something about it! </p>
            	</div>
            	<div className="toQuiz">
            		<a className="waves-effect waves-light disabled btn" onClick={this.handleSignInClick}>Sign In</a>
            	</div>
              <div className="toHome">
                  <a className="waves-effect waves-light disabled btn" onClick={this.handleSignUpClick}>Sign up</a>
              </div>
              <div className="DEBUGBTN  ">
                  <a className="waves-effect waves-light btn" onClick={this.handleAppClick}>DEBUG: Go to App</a>
              </div>
            </div>
        )
    },

    handleSignInClick() {
      // hashHistory.push("sign-in");
    },

    handleSignUpClick() {
      // hashHistory.push("sign-up");
    },

    // DEBUG
    handleAppClick() {
      hashHistory.push("app ");
    },
});

export default HomePage;
