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
                 <p><em>DEBUG: If you don&#39;t see the feed below, refresh the page.</em></p>
            	</div>

              {/*
                Maybe in the future consider component'ing Twitter Feed!

                Weird issue: twitter feed isn't rerendering
                when page is Routed to
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
                <h3>No?</h3>
            		<h3> Do something about it! </h3>
                <img className="protest hide-on-med-and-down" src="/photos/protest.png"/>
                <p> Nasty Woman is mobilizing the feminist movement following the election of Donald Trump. We firmly believe in harnessing
                 the collective outrage and channeling it towards social, cultural, and legislative change that gives equal rights to all. 
                 We hope to facilitate discussion, mobilize the movement, and fuel the fire of the feminist movement! Join us!</p>
            	</div>
            	<div className="toQuiz">
            		<a className="waves-effect waves-light disabled btn" onClick={this.handleSignUpClick}>Get started!</a>
            	</div>
              <div className="DEBUGBTN  ">
                  <a className="waves-effect waves-light btn" onClick={this.handleAppClick}>DEBUG: Go to App</a>
              </div>
            </div>
        )
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
