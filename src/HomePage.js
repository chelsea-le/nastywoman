/*home page!*/
import React from 'react';
import './css/Home.css';
import $ from 'jquery'
import '../node_modules/font-awesome/css/font-awesome.css'

var HomePage = React.createClass({
    render:function() {
        return(
            <div className="container">
            	<div className="logo">
            		<img src="/photos/nastyWoman6.jpg"/>
            	</div>
            	<div className="info">
            		<h2> Do you agree with this? </h2>
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

            	<div className="info">
            		<p> Do something about it! </p>
            	</div>
            	<div className="toQuiz">
            		<a className="waves-effect waves-light btn">Sign In</a>
            	</div>
                <div className="toHome">
                    <a className="waves-effect waves-light btn">Sign up</a>
                </div>
            </div>
        )
    }
});

export default HomePage;
