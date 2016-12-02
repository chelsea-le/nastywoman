// Tweets component
import React from 'react';
import firebase from 'firebase';
import Tweet from './Tweet';
import TweetBox from './TweetBox';


var TweetContainer = React.createClass({
    getInitialState() {
        return {tweets:[]}
    },
    componentDidMount(){
        this.tweetRef = firebase.database().ref('tweets');
        this.tweetRef.on('value', (snapshot)=> {

            // In case there are no tweets
            if(snapshot.val()){
                this.setState({tweets:snapshot.val()});
            }
        });
    },

    // Function to create a neew tweet
    createTweet(event) {
        event.preventDefault();

        // Get form info
        let tweet = {
            author:this.props.user,
            text:event.target.elements['message'].value,
            likes:0,
            time:firebase.database.ServerValue.TIMESTAMP, // firebase service
            comments: []
        };
        this.tweetRef.push(tweet);
        event.target.reset();
    },

    // Function to like a tweet
    likeTweet(tweetId, change) {
        let ref = this.tweetRef.child(tweetId);
        ref.once('value').then(function(snapshot) {
            var newLikes = parseInt(snapshot.val().likes) + change;
            console.log(newLikes)
            // Update on firebase
            ref.update({
                likes: newLikes
            });
        });
    },

    //Function that adds comments
    addComment(tweetId, comment) {
        console.log(comment)
        let ref = this.tweetRef.child(tweetId).child("comments");
        //currenly a string that says "comment"...need to grab comment from firebase
        ref.push({comment})
    },
    render() {
        // Sort keys by likes
        //tweets sorted by more newest to oldest
        let tweetKeys = Object.keys(this.state.tweets).sort((b,a) => {
            return this.state.tweets[a].time - this.state.tweets[b].time
        });
        return(
          <div>
              <h5>Message Board</h5>
              <section className="tweet-container">
                  <TweetBox handleSubmit={this.createTweet}/>
                  {/* <TweetBox handleSubmit={this.createTweet} revealComments={this.addComent}/> */}
                  {tweetKeys.map((d) => {
                      return <Tweet key={d}
                          data={this.state.tweets[d]}
                          like={() => this.likeTweet(d, 1)}
                          dislike={() => this.likeTweet(d, -1)}
                          revealComments={(e) => this.addComment(d, e.target.value)}
                      />
                  })}
              </section>
          </div>
        )
    }
});

export default TweetContainer;
