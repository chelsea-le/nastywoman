// Tweets component
import React from 'react';
import './css/Tweet.css';
import 'materialize-css'
import '../node_modules/font-awesome/css/font-awesome.css'

var Tweet = React.createClass({
    getInitialState:function() {
        return {comment:''}
    },
    setCommentState:function(e) {
      this.setState({comment:e.target.value})
    },
    buttonClick:function() {
      var commentValue = this.state.comment
      this.setState({comment:''})
      this.props.revealComments(commentValue)
    },
    getNumComments:function() {
      var comNum = 0;
      var com = this.props.data.comments;
      if (com != null) {
        comNum = Object.keys(com).length;
      }
      return comNum
    },
    render:function() {
      var d = new Date(this.props.data.time);
      // var date = d.toDateString() + " " + d.toLocaleTimeString();
      var date = d.toLocaleString();

      //comments appear on console -- need help rendering in tweet
      var comments = this.props.data.comments
      console.log(this.props.data.author + " tweeted: \"" + this.props.data.text + "\". Comment object: ");
      console.log(comments);

      return(
        <div className="card">
          <div className="card-content">
            <p className="tweetWrapper">
                <span className="author">{"@"+this.props.data.author+": "}</span>
                <span className="time">{date}</span>
                <span className="content">{this.props.data.text}</span>
                <span className="likes"><i onClick={this.props.like} className="fa fa-thumbs-up"></i></span>
                <span className="likes">{this.props.data.likes}</span>
                <span className="likes"><i onClick={this.props.dislike} className="fa fa-thumbs-down"></i></span>
                <span className="activator comment"><i className="fa fa-comments"></i></span>
                <span className="likes">{this.getNumComments()}</span>
            </p>
            <div className="commentWrapper">
            {
              comments && Object.keys(this.props.data.comments).map(function(d, i) {
                var comDate = new Date(comments[d].comment.time).toLocaleString();
                return (
                  <p className="singleCommentWrap" key={i}>
                    <span className="author">{comments[d].comment.author}</span>
                    <span className="time">{comDate}</span>
                    <span className="content">{comments[d].comment.text}</span>
                  </p>
              )})
            }
            </div>




          </div>

          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Comments<i className="material-icons right"><i className="fa fa-times"></i></i></span>
            {/* <form onSubmit = {this.props.revealComments}> */}
                <div className="input-field col s12" id="sendBox">
                    <input id="message" type="text" value={this.state.comment} className="validate" placeholder="reply" onChange={this.setCommentState}/>
                </div>
                <button onClick={this.buttonClick} type="submit"
                className="btn" id="broadcast-btn">Reply!</button>
            {/* </form> */}
          </div>
        </div>
      )
    }
});

export default Tweet;
