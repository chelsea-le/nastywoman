// Tump Twitter Feed component
import React from 'react';
import './css/Trump.css';
import $ from 'jquery'
import '../node_modules/font-awesome/css/font-awesome.css'

var SearchHashtags = React.createClass({
    getInitialState:function() {
        return {hashtag:""}
    },
    setHashtagState:function(e) {
      this.setState({hashtag:e.target.value})
    },
    buttonClick:function() {
      var commentValue = this.state.comment
      this.setState({comment:''})
      {/*this.props.revealComments(commentValue)*/}
    }, 
	render:function() {
		return (
		<div className="search">
			<div className="input-field col s3" id="hashtag-search">
				<input id="search" type="text" value={this.state.hashtag} 
				onChange={this.setHashtagState} placeholder='Search for a hashtag' className="validate"/>
			</div>
			<button type="submit" className="btn" id="broadcast-btn" onClick={this.buttonClick}>Search!</button>
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
				(document,"script","twitter-wjs")}
			</script>                       
		</div>
	)}
});

export default SearchHashtags;
