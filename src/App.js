// Firebase twitter-like application

// Module imports
import React from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';
import './css/App.css';

// Component imports
import HomePage from './HomePage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Quiz from './Quiz';
import MapsPage from './MapsPage';
import FuelForYourFire from './FuelForYourFire';
import TweetContainer from './TweetContainer';
import MessageBoard from './MessageBoard';
import ToggleAuth from './ToggleAuth';
import FirebaseConfig from './FirebaseConfig';

// Nasty.
var App = React.createClass({
    render() {
        // Determine which 'authenticate' component should be shown
        var authComponent;
        if (this.state.authOption === 'sign-up') {
            authComponent = <SignUp submit={this.signUp} />
        } else {
            authComponent = <SignIn submit={this.signIn} />
        }

        return (
          <div>
            {/* HEADER CAUSE I LIKE...UHH */}
            <nav>
              <div className="nav-wrapper orange darken-1">
                <a href="#/app" className="brand-logo hide-on-med-and-down">Nasty Woman</a>
                <img className="protest hide-on-med-and-down" src="photos/protest.png" height="55" width="55"/>
                <ul id="nav-mobile" className="right">
                    <section className="icons">
                    <li><Link to="/fuel"><img src="photos/fire3.png" alt="twitter" height="55" width="55"/></Link></li>
                    <li><Link to="/events"><img src="photos/pin2.png" alt="events" height="55" width="55"/></Link></li>
                    <li><Link to="/messaging"><img src="photos/broadcast4.png" alt="messaging" height="55" width="55"/></Link></li>
                    <li><Link to="/sign-up" className="grey darken-3">DEBUG: Sign Up ONLY</Link></li>
                    <li><Link to="/sign-in" className="grey darken-3">DEBUG: Sign In ONLY</Link></li>
                    <li><Link to="/quiz" className="grey darken-3">DEBUG: Quiz ONLY</Link></li>
                  </section>
                </ul>
              </div>
            </nav>
            { /* INITIALIZE FIREBASE FOR APP */}

            { /* HANDLE AUTHENTICATION MODULE DISPLAY */}
            {!this.state.user &&
              <div>
                  {authComponent}
                  <ToggleAuth handleClick={this.toggleLogin} authOption={this.state.authOption} />
              </div>
            }
            {this.state.user &&
                <div>
                    <section>
                        <SignOut submit={this.signOut}/>
                        {console.log(this.state.user)}
                        <TweetContainer user={this.state.user.displayName}/>
                    </section>
                </div>
            }

            {/* SPAM ALL THE COMPONENTS */}

            {/* FOOTER CAUSE WE'RE COOL */}
            <footer className="page-footer orange darken-1">
              <div className="container orange darken-1">
                <div className="row">
                  <div className="col l6 s12">
                    <h5 className="white-text">Nasty Woman brought to you by CRoNiK</h5>
                    <p className="grey-text text-lighten-4">Chelsea Le | Rosemary Adams | Nico Malig | Keertana Chandar </p>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                © 2014 Copyright CRoNiK
                </div>
              </div>
            </footer>
          </div>
        )
    },

    getInitialState:function(){
        return {
          checked: false,
          user: null,
          authOption:'sign-in'
        }
    },

    // When component mounts, check the user
    componentDidMount() {
        // Initialize app
        console.log("Hi");
        firebase.initializeApp(FirebaseConfig);

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
    mergeStateOut:function(incomingState) {
      console.log('mergeStateOut')
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
