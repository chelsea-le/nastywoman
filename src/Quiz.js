/* Quiz */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


var QuizData = [
    {id:"1", question:"Birth control?", a:"Yes", b:"No", c:"Your choice", answer:"c"},
    {id:"2", question:"Love Trumps _____?", a:"Men", b:"Hate", c:"Bugs", answer:"b"},
    {id:"3", question:"Feminism isn't feminism unless its _____?", a:"Intersectional", b:"Radical", c:"Anti-Men", answer:"a"},
    {id:"4", question:"Who is Ruth Bader Ginsburg?", a:"Secretary of State", b:"Supreme Court Justice", c:"Speaker for the House", answer:"b"},
    {id:"5", question:"Consent is what?", a:"A grey area", b:"Once given cannot be retracted", c:"Mandatory", answer:"c"},
    {id:"6", question:"Intentify Susan B Anthony", a:"susan", b:"ann", c:"jane", answer:"a"},

];

var Quiz = React.createClass({

    getInitialState:function() {
        return {numCorrect:0};
    },
    update:function(event) {
        var value = event.target.id;
        /*check to see if value is correct*/
        this.setState({numcorrect:0})
    },
    render:function() {
        return (
            <MuiThemeProvider>
              <div className="Quiz">
                Quizdata.map(function(d) {
                    <Questions data={bandData} changeEvent={this.update}/>
                })
              </div>
            </MuiThemeProvider>
        )
    }
});

var Questions = React.createClass({

    render:function() {
        return(
            <div className="question">  

            </div>
        )
    }
})

export default Quiz;