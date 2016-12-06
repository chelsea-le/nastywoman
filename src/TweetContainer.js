// Tweets component
import React from 'react';
import firebase from 'firebase';
import Tweet from './Tweet';
import TweetBox from './TweetBox';
import SortFilter from './SortFilter';



var TweetContainer = React.createClass({
    getInitialState:function() {
        return {tweets:[], order:'date'}
    },
    componentDidMount:function(){
        this.tweetRef = firebase.database().ref('tweets');
        this.tweetRef.on('value', (snapshot)=> {

            // In case there are no tweets
            if(snapshot.val()){
                this.setState({tweets:snapshot.val()});
            }
        });
    },

    // Function to create a neew tweet
    createTweet:function(event) {
        event.preventDefault();

        // Get form info
        let tweet = {
            author:this.props.user,
            text:event.target.elements['message'].value,
            likes:0,
            time:firebase.database.ServerValue.TIMESTAMP, // firebase service
            comments: {}
        };
        this.tweetRef.push(tweet);
        event.target.reset();
    },

    // Function to like a tweet
    likeTweet:function(tweetId, change) {
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
    addComment:function(tweetId, text) {
        console.log(text)
        let ref = this.tweetRef.child(tweetId).child("comments");
        //currenly a string that says "comment"...need to grab comment from firebase
        let comment = {
            author:this.props.user,
            text:text,
            time:firebase.database.ServerValue.TIMESTAMP // firebase service
        };

        ref.push({comment})
    },

    setOrder:function(e) {
      console.log('test')
      console.log(e.target.id)
      console.log(this.state.order) //initial state
      this.setState({order:e.target.id})
      console.log(this.state.order) //what we want
    },

    render:function() {
        // Sort keys by likes
        //tweets sorted by more newest to oldest
        let tweetKeys = Object.keys(this.state.tweets).sort((a,b) => {
            var first = this.state.tweets[a]
            var second = this.state.tweets[b]
            if(this.state.order === 'date') {
              return second.time - first.time
            } else if (this.state.order === 'likes') {
              return second.likes - first.likes
            } else {
              var tweet1 = 0
              var tweet2 = 0
              if(first.comments != null) {
                var tweet1 = Object.keys(first.comments).length
              }
              if(second.comments != null) {
                var tweet2 = Object.keys(second.comments).length
              }
              return tweet2 - tweet1
            }
        });

        return(
          <div>
              <h4>Message Board</h4>
              <section className="tweet-container">
                  <TweetBox handleSubmit={this.createTweet}/>
                  <SortFilter clickEvent={this.setOrder}/>
                  {/* <TweetBox handleSubmit={this.createTweet} revealComments={this.addComent}/> */}
                  {tweetKeys.map((d) => {
                      return <Tweet key={d}
                          data={this.state.tweets[d]}
                          like={() => this.likeTweet(d, 1)}
                          dislike={() => this.likeTweet(d, -1)}
                          revealComments={(e) => this.addComment(d, e)}
                      />
                  })}
              </section>
          </div>
        )
    }
});

export default TweetContainer;
