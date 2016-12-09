// Tump Twitter Feed component
import React from 'react';
import './css/Trump.css';
import 'materialize-css'
import '../node_modules/font-awesome/css/font-awesome.css'
import { Timeline } from 'react-twitter-widgets';


var TrumpTwitterFeed = React.createClass({
	render:function() {
		return (
			<div className="trumpFeed">
				<h5>Fuel your fire with...</h5>
				<h3>@realDonaldTrump Twitter Feed</h3>

				<a className="twitter-timeline" target='_blank' data-link-color="#E95F28" href="https://twitter.com/realDonaldTrump">
					@realDonaldTrump Tweets
				</a>

				<Timeline
					dataSource={{
						sourceType: 'profile',
						screenName: 'realDonaldTrump'
					}}
					options={{
						height: '500',
						align: 'center'
					}}
				/>
			</div>
		)
	}
});

export default TrumpTwitterFeed;
