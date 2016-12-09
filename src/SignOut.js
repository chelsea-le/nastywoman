// Sign out
import React from 'react';
import './css/SignOut.css';

var SignOut = React.createClass({
    render() {
        return(
            <button onClick={this.props.submit} className="btn btn-primary sign-out red darken-3">Sign Out</button>
        )
    }
});

export default SignOut;
