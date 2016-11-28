// Tweets component
import React from 'react';
import './css/Tweet.css';
// import '../node_modules/font-awesome/css/font-awesome.css'

var Tweet = React.createClass({

    render() {
        return(
            <p className="tweetWrapper" onClick={this.props.handleClick}>
                <span className="author">{"@"+this.props.data.author}</span>
                <span className="content">{this.props.data.text}</span>
                <span className="likes"><i className="fa fa-thumbs-up"></i>Likes: {this.props.data.likes}</span>
            </p>
        )
    }
});

export default Tweet;
