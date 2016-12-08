// Firebase twitter-like application
import React from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './css/App.css';

// Create app
var App = React.createClass({
    render() {
        // // Determine which 'authenticate' component should be shown
        // var authComponent;
        // if (this.state.authOption === 'sign-up') {
        //     authComponent = <SignUp submit={this.signUp} />
        // } else {
        //     authComponent = <SignIn submit={this.signIn} />
        // }

        return (
          <div>
            <nav>
              <div className="nav-wrapper orange darken-1">
                <a href="#/app" className="brand-logo hide-on-med-and-down">Nasty Woman</a>
                <img className="protest hide-on-med-and-down" src="/photos/protest.png" heigth="55" width="55"/>
                <ul id="nav-mobile" className="right">
                    <section className="icons">
                    <li><Link to="/fuel"><img src="/photos/fire3.png" alt="twitter" heigth="55" width="55"/></Link></li>
                    <li><Link params={{mergeStateOut: this.mergeStateOut}} to="/events"><img src="/photos/pin2.png" alt="events" heigth="55" width="55"/></Link></li>
                    <li><Link to="/TweetContainer"><img src="/photos/broadcast4.png" alt="messaging" heigth="55" width="55"/></Link></li>
                    </section>
                  { /*
                  <li><Link to="/sign-up" className="grey darken-3">DEBUG: Sign Up ONLY</Link></li>
                  <li><Link to="/sign-in" className="grey darken-3">DEBUG: Sign In ONLY</Link></li>
                  <li><Link to="/quiz" className="grey darken-3">DEBUG: Quiz ONLY</Link></li>
                  */ }
                </ul>
              </div>
            </nav>

            {this.props.children}
            { /*
              ********** NICO'S NOTES **********
              - COMMENTING OUT: App.js should only display one component at a time.
                                We can still handle state here (App.js's state), but it'll need to be managed
                                with a function passed in as a prop. This, therefore,
                                breaks Authentication.

              - TO FIX AUTHENTICATION: You have to manage state (which looks like it's capturing
                                       the firebase user object) using a function passed in as a prop
                                       (for example: <SomeComponent updateState={this.updateState} />).
                                       If you need another example, see this Slack message by Mike
                                       https://info343c-a16.slack.com/archives/general/p1479233501000016 .
              **********************************

              {!this.state.user && window.url === "http://localhost:3000/?#/messageboard" &&
                <div>
                    {authComponent}
                    <ToggleAuth handleClick={this.toggleLogin} authOption={this.state.authOption} />
                </div>
              }
              {this.state.user && window.url === "http://localhost:3000/?#/messageboard" &&
                  <div>
                      <section>
                          <SignOut submit={this.signOut}/>
                          <TweetContainer user={this.state.user.displayName}/>
                      </section>
                  </div>
              }
            */ }
            <footer className="page-footer orange darken-1">
              <div className="container orange darken-1">
                <div className="row">
                  <div className="col l6 s12">
                    <h5 className="white-text">Nasty Woman brought to you by INFO 343</h5>
                    <p className="grey-text text-lighten-4">Nico Malig | Chelsea Le | Keertana Chandar | Rosemary Adams</p>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                © 2014 Copyright INFO343
                </div>
              </div>
            </footer>
          </div>
        )
    },

    getInitialState(){
        return {
          checked: false,
          user: null,
          authOption:'sign-in'
        }
    },

    // When component mounts, check the user
    componentDidMount() {
        // Initialize app
        // firebase.initializeApp(FirebaseConfig);
        // Our Firebase instance is now initialied as a component.
        // You can find this in FirebaseConfig.js

        // Check for authentication state change (test if there is a user)
        firebase.auth().onAuthStateChanged((user) => {
            if (this.state.checked !== true) {
                if (user) {
                    this.setState({user:user})
                }
            }

            // Indicate that state has been checked
            this.setState({checked:true})
        });
    },

    // Capture state from child component
    // PROTIP:
    // Pass in this function in Link
    // as <Link params={{key:value, ..., mergeStateOut:this.mergeStateOut}} ... >
    mergeStateOut(incomingState) {
      this.setState(incomingState);
    },

    // Sign up for an account
    signUp(event){
        event.preventDefault();

        // Get form values
        let email = event.target.elements['email'].value;
        let password = event.target.elements['password'].value;
        let displayName = event.target.elements['displayName'].value;

        // Remember to enable email/password authentication on Firebase!
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                user.updateProfile({
                    displayName: displayName
                }).then(() => {
                    this.setState({user:firebase.auth().currentUser});
                })
            });

        // Reset form
        event.target.reset();
    },

    // Sign into an account
    signIn(event){
        event.preventDefault();

        // Get form values
        let email = event.target.elements['email'].value;
        let password = event.target.elements['password'].value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.setState({user:firebase.auth().currentUser});
            });

        // Clear form
        event.target.reset();

    },

    // Sign out of an account
    signOut() {
        firebase.auth().signOut().then(() => {
            this.setState({user:null});
        });
    },

    // Toggle between 'sign-up' and 'sign-in'
    toggleLogin() {
        let option = this.state.authOption === 'sign-in' ? 'sign-up' : 'sign-in';
        this.setState({authOption:option});
    },


});
export default App;
