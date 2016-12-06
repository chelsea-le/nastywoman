// Tweets component
import React from 'react';
var TweetBox = React.createClass({

    render() {
        return(
            <form onSubmit={this.props.handleSubmit}>
                <div className="input-field col s12" id="sendBox">
                    <input id="message" type="text" placeholder='Broadcast your thoughts...' className="validate" />
                </div>
                <button type="submit" className="btn" id="broadcast-btn">Broadcast!</button>
            </form>
        )
    }
});

export default TweetBox;
