// Firebase twitter-like application

// Module imports
import React from 'react';
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
import FirebaseConfig from './FirebaseConfig';

// Nasty.
var App = React.createClass({
    render() {

        // // Determine which 'authenticate' component should be shown
        // var authComponent;
        //
        // if (this.state.authOption === 'sign-up') {
        //     authComponent = <SignUp submit={this.signUp} />
        // } else {
        //     authComponent = <SignIn submit={this.signIn} />
        // }

        return (
          <div>
            {/* If firstVisit is FALSE, render navbar */}
            {this.state.displayNavAndFooter === true &&
              <nav>
                <div className="nav-wrapper orange darken-1">
                  <a href="#/app" className="brand-logo hide-on-med-and-down">Nasty Woman</a>
                  <img alt="logo" className="protest hide-on-med-and-down" src="photos/protest.png" height="55" width="55"/>
                  <ul id="nav-mobile" className="right">
                      <section className="icons">
                      <li><a onClick={this.handleNavClick}><img src="photos/fire3.png" alt="fuel" height="55" width="55"/></a></li>
                      <li><a onClick={this.handleNavClick}><img src="photos/pin2.png" alt="events" height="55" width="55"/></a></li>
                      <li><a onClick={this.handleNavClick}><img src="photos/broadcast4.png" alt="messaging" height="55" width="55"/></a></li>
                    </section>
                  </ul>
                </div>
              </nav>
            }

            { /* HANDLE RENDERING */}

            { /* IF USER IS NOT AUTHENTICATED */}
            {this.state.user === null
              && this.state.getStartedClick === false &&
              <HomePage mergeStateOut={this.mergeStateOut} />
            }

            { /* GET STARTED ON HOME PAGE IS CLICKED */}
            { /* RENDER QUIZ */}
            {this.state.user === null &&
              this.state.getStartedClick === true &&
              this.state.signInClicked === false &&
              <Quiz mergeStateOut={this.mergeStateOut} />
            }

            { /* SIGN IN BUTTON ON QUIZ PAGE IS CLICKED */}
            { /* RENDER SIGN IN */}
            {this.state.user === null &&
              this.state.getStartedClick === true &&
              this.state.signInClicked === true &&
              <SignIn mergeStateOut={this.mergeStateOut} submit={this.signIn} />
            }

            { /* QUIZ IS SUBMITTED */}
            { /* RENDER SIGN UP */}
            {this.state.user === null &&
              this.state.getStartedClick === true &&
              this.state.quizPassed === true &&
              <SignUp mergeStateOut={this.mergeStateOut} submit={this.signUp} />
            }

            { /* *************************************************************** */}

            { /* IF USER IS AUTHENTICATED ... */}


            {this.state.user != null &&
              this.state.currentTab === "fuel" &&
              <div>
                <FuelForYourFire mergeStateOut={this.mergeStateOut} />
              </div>
            }

            {this.state.user != null &&
              this.state.currentTab === "events" &&
              <div>
                <MapsPage mergeStateOut={this.mergeStateOut} />
              </div>
            }

            {this.state.user != null &&
              this.state.currentTab === "messaging" &&
              <div>
                <SignOut submit={this.signOut}/>
                <TweetContainer user={this.state.user.displayName}/>
              </div>
            }

            {/* FOOTER CAUSE WE'RE COOL */}
            {this.state.displayNavAndFooter === true &&
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
                  © 2017 Copyright CRoNiK
                  </div>
                </div>
              </footer>
            }
          </div>
        )
    },

    getInitialState:function(){
        return {
          checked: false,
          user: null,
          authOption:'sign-in',
          getStartedClick: false,
          signInClicked: false,
          displayNavAndFooter: false,
          quizPassed: false,
          currentTab: 'fuel',
        }
    },

    // When component mounts, check the user
    componentDidMount() {
        // Initialize app
        firebase.initializeApp(FirebaseConfig);

        // Check for authentication state change (test if there is a user)
        firebase.auth().onAuthStateChanged((user) => {
            if (this.state.checked !== true) {
                if (user) {
                    this.setState({
                      user: user,
                      displayNavAndFooter: true
                    })
                }
            }

            // Indicate that state has been checked
            this.setState({checked:true})
        });
    },

    // Capture state from child component
    // PROTIP:
    // Pass in as <MyComponent mergeStateOut={this.mergeStateOut} />
    mergeStateOut:function(incomingState) {
      this.setState(incomingState);
    },

    // Watches for Navbar button clicks and changes what's displayed
    handleNavClick(event) {
      event.preventDefault();
      this.setState({
        currentTab: event.target.alt,
      });
    },

    // Signs into an account
    signIn(event){
        event.preventDefault();

        // Get form values
        let email = event.target.elements['email'].value;
        let password = event.target.elements['password'].value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.setState({
                  user: firebase.auth().currentUser,
                  displayNavAndFooter: true
                });
            });

        // Clear form
        event.target.reset();

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
                    this.setState({
                      user: firebase.auth().currentUser,
                      firstVisit: false
                    });
                })
            });

        // Reset form
        event.target.reset();
    },

    // Sign out of an account
    signOut() {
        firebase.auth().signOut().then(() => {
            this.setState({
              user: null,
              displayNavAndFooter: false
            });
        });
    },

    // Toggle between 'sign-up' and 'sign-in'
    toggleLogin() {
        let option = this.state.authOption === 'sign-in' ? 'sign-up' : 'sign-in';
        this.setState({authOption:option});
    },


});
export default App;
