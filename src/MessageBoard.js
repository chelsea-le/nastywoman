import SignUp from './SignUp';
import SignIn from './SignIn';
import React from 'react';

var MessageBoard = React.createClass({
    toggleLogin() {
         let option = this.state.authOption == 'sign-in' ? 'sign-up' : 'sign-in';
         this.setState({authOption:option});
    },
    render() {
      // Determine which 'authenticate' component should be shown
             if(this.state.authOption == 'sign-up') {
                 var authComponent = <SignUp submit={this.signUp}/>
             }
             else {
                 var authComponent = <SignIn submit={this.signIn}/>
             }
             return(
                 <div>
                     {!this.state.user &&
                         <div>
                             {authComponent}
                             <ToggleAuth handleClick={this.toggleLogin} authOption={this.state.authOption} />
                         </div>

                     }
                     {this.state.user &&
                         <section>
                             <SignOut submit={this.signOut}/>
                             <TweetContainer user = {this.state.user.displayName}/>
                         </section>
                     }
                 </div>

             )
         }
    });

export default MessageBoard;
