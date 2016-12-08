/* Quiz */
import React from 'react';
import 'materialize-css';

var quizData = [
    {id:"1", question:"What is your stance on birth control?", a:"Promotes premarital sex", b:"Is the woman's responsibility", c:"It's your choice to use it or not", answer:"10c"},
    {id:"2", question:"Love Trumps _____?", a:"Men", b:"Hate", c:"Bugs", answer:"21b"},
    {id:"3", question:"Feminism isn't feminism unless its _____?", a:"Intersectional", b:"Radical", c:"Anti-Men", answer:"32a"},
    {id:"4", question:"Who is Ruth Bader Ginsburg?", a:"Secretary of State", b:"Supreme Court Justice", c:"Speaker for the House", answer:"43b"},
    {id:"5", question:"Consent is what?", a:"A grey area", b:"Once given cannot be retracted", c:"Mandatory", answer:"54c"},
    {id:"6", question:"Intentify Susan B Anthony", a:"susan", b:"ann", c:"jane", answer:"65a"},

];

var Quiz = React.createClass({

    getInitialState:function() {
        return {numCorrect:0};
    },

    update:function(event) {
        var value = event.target.id;
        var correct = this.state.numCorrect;
        /*check to see if value is correct aka add one to numcorrect*/
        quizData.map(function(d){
          if(d.answer === value) {
            return correct++;
          }
          return null; // fuzzed return. supresses Warning
        })
        this.setState({numCorrect:correct})
    },

    render:function() {
        return (

            <div className="Quiz">
              <h3> Just a precaution... </h3>
              <p> With a rise in hateful internet practices, we want to keep our site relatively free from internet trolls. In addition to
              general forum rules listed in the site, each user must pass this basic quiz. Once you complete the quiz, go ahead and fill in your
              account information at the bottom and get signed up!</p>
              <h6>Already have an account?</h6>
              <button className="btn btn-primary">Sign in!</button>
              {
                /*goes through each item in data and creates the question for it*/
                quizData.map(function(d, i) {
                  return(
                    <Questions data={d} changeEvent={this.update} key={d.id + i} id={d.id + i} />
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
                  <input name={this.props.data.id} type="radio" id={this.props.id + "a"} onClick={this.props.changeEvent} />
                  <label id="sortingOptions" htmlFor={this.props.id + "a"}>{this.props.data.a}</label>
              </p>
              <p>
                  <input name={this.props.data.id} type="radio" id={this.props.id + "b"} onClick={this.props.changeEvent} />
                  <label id="sortingOptions" htmlFor={this.props.id +"b"}>{this.props.data.b}</label>
              </p>
              <p>
                  <input name={this.props.data.id} type="radio" id={this.props.id + "c"} onClick={this.props.changeEvent} />
                  <label id="sortingOptions" htmlFor={this.props.id + "c"}>{this.props.data.c}</label>
              </p>
            </div>
        )
    }
})

export default Quiz;
