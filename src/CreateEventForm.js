// Create Event Form
import React from 'react';

var CreateEventForm = React.createClass({
  render() {
    return (
      <div>
        <form onSubmit={this.props.submit} className="col s12 authenticate" id="event-submit">
          <div className="row">
            <div className="input-field col s12">
              <input id="title" type="text" className="validate" />
              <label htmlFor="title">Event Title</label>
            </div>
            <div className="input-field col s12">
              <input id="location" type="text" className="validate" />
              <label htmlFor="location">Location</label>
            </div>
            <div className="input-field col s12">
              <input id="date" type="date" className="datepicker" />
            </div>
            <div className="input-field col s12">
              <input id="time" placeholder="Time (ex. 2:30PM)" type="text" className="validate" />
            </div>
            <div className="input-field col s12">
              <input id="description" type="text" className="validate" />
              <label htmlFor="description">Description</label>
            </div>
          </div>
          <button className="btn btn-primary" >Submit</button>
        </form>
      </div>
    )
  }
})

export default CreateEventForm;
