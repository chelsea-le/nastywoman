/* Quiz */
import React from 'react';
import 'materialize-css';

var quizData = [
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
        console.log("value: " + value);
        /*check to see if value is correct aka add one to numcorrect*/
        this.setState({numCorrect:0})
    },

    render:function() {
        return (

            <div className="Quiz">
              {
                /*goes through each item in data and creates the question for it*/
                quizData.map(function(d, i) {
                  return(
                    <Questions data={d} changeEvent={this.update} id={d.id + i}/>
                  )}, this)
              }
            </div>

        )
    }
});

var Questions = React.createClass({
    render:function() {
        return(
            <div className="question">
              <h5>{this.props.data.question}</h5>
              <p>
                  <input name="group1" type="radio" id={this.props.id} onClick={this.props.changeEvent} />
                  <label id="sortingOptions" htmlFor={this.props.id}>{this.props.data.a}</label>
              </p>
              <p>
                  <input name="group1" type="radio" id={this.props.id} onClick={this.props.changeEvent} />
                  <label id="sortingOptions" htmlFor={this.props.id}>{this.props.data.b}</label>
              </p>
              <p>
                  <input name="group1" type="radio" id={this.props.id} onClick={this.props.changeEvent} />
                  <label id="sortingOptions" htmlFor={this.props.id}>{this.props.data.c}</label>
              </p>
            </div>
        )
    }
})

export default Quiz;
