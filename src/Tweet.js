// Tweets component
import React from 'react';
import './css/Tweet.css';
import '../node_modules/font-awesome/css/font-awesome.css'

var Tweet = React.createClass({

    render() {
      var d = new Date(this.props.data.time);
      // var date = d.toDateString() + " " + d.toLocaleTimeString();
      var date = d.toLocaleString();
      console.log(d.toLocaleString());
      return(
        <p className="tweetWrapper">
            <span className="author">{"@"+this.props.data.author+": "}</span>
            <span className="time">{date}</span>
            <span className="content">{this.props.data.text}</span>
            <span className="likes"><i onClick={this.props.like} className="fa fa-thumbs-up"></i></span>
            <span className="likes">{this.props.data.likes}</span>
            <span className="likes"><i onClick={this.props.dislike} className="fa fa-thumbs-down"></i></span>
            <span className="comment"><i onClick={this.props.data.comments} className="fa fa-comments"></i></span>
        </p>
      )
    }
});

export default Tweet;
