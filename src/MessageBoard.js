// import SignUp from './SignUp';
// import SignIn from './SignIn';
// import React from 'react';
// import ToggleAuth from './ToggleAuth'
// import FirebaseConfig from './FirebaseConfig'
//
// var MessageBoard = React.createClass({
//     render:function() {
//         console.log(this.props)
//       // Determine which 'authenticate' component should be shown
//          if(this.props.parentState.authOption == 'sign-up') {
//              var authComponent = <SignUp submit={this.signUp}/>
//          }
//          else {
//              var authComponent = <SignIn submit={this.signIn}/>
//          }
//          return(
//              <div>
//                  {!this.props.parentState.user &&
//                      <div>
//                          {authComponent}
//                          <ToggleAuth handleClick={this.toggleLogin} authOption={this.props.parentState.authOption} />
//                      </div>
//
//                  }
//                  {this.props.parentState.user &&
//                      <section>
//                          <SignOut submit={this.signOut}/>
//                          <TweetContainer user = {this.props.parentState.user.displayName}/>
//                      </section>
//                  }
//              </div>
//          )
//     },
//
//     // When component mounts, check the user
//     componentDidMount:function() {
//         // Initialize app
//         // firebase.initializeApp(FirebaseConfig);
//         // Our Firebase instance is now initialied as a component.
//         // You can find this in FirebaseConfig.js
//
//         // Check for authentication state change (test if there is a user)
//         FirebaseInit.auth().onAuthStateChanged((user) => {
//             if (this.props.parentState.checked !== true) {
//                 if (user) {
//                     this.props.mergeStateOut({user:user})
//                 }
//             }
//
//             // Indicate that state has been checked
//             this.props.mergeStateOut({checked:true})
//         });
//     },
//
//     // Sign up for an account
//     signUp:function(event){
//         event.preventDefault();
//
//         // Get form values
//         let email = event.target.elements['email'].value;
//         let password = event.target.elements['password'].value;
//         let displayName = event.target.elements['displayName'].value;
//
//         // Remember to enable email/password authentication on Firebase!
//         FirebaseInit.auth().createUserWithEmailAndPassword(email, password)
//             .then((user) => {
//                 user.updateProfile({
//                     displayName: displayName
//                 }).then(() => {
//                     this.props.mergeStateOut({user:FirebaseInit.auth().currentUser});
//                 })
//             });
//
//         // Reset form
//         event.target.reset();
//     },
//
//     // Sign into an account
//     signIn:function(event){
//         event.preventDefault();
//
//         // Get form values
//         let email = event.target.elements['email'].value;
//         let password = event.target.elements['password'].value;
//
//         FirebaseInit.auth().signInWithEmailAndPassword(email, password)
//             .then((user) => {
//                 this.props.mergeStateOut({user:FirebaseInit.auth().currentUser});
//             });
//
//         // Clear form
//         event.target.reset();
//
//     },
//
//     // Sign out of an account
//     signOut:function() {
//         FirebaseInit.auth().signOut().then(() => {
//             this.props.mergeStateOut({user:null});
//         });
//     },
//
//     // Toggle between 'sign-up' and 'sign-in'
//     toggleLogin:function() {
//         let option = this.props.parentState.authOption === 'sign-in' ? 'sign-up' : 'sign-in';
//         this.props.mergeStateOut({authOption:option});
//     }
// });
//
// export default MessageBoard;
