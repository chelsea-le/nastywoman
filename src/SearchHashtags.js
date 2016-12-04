// Tump Twitter Feed component
import React from 'react';
import './css/Trump.css';
import $ from 'jquery'
import 'materialize-css'
import '../node_modules/font-awesome/css/font-awesome.css'

var SearchHashtags = React.createClass({
	render:function() {
		return (
		<div className="hashtagFeed">
			<h3>@realDonaldTrump Twitter Feed</h3>
            <a className="twitter-timeline" target="_blank" href="https://twitter.com/hashtag/donaldtrump" data-widget-id="805227545452871680">
            	#donaldtrump Tweets
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
	)}
});

export default SearchHashtags;
