// Event Card

import React from 'react';

var EventCard = React.createClass({
  render() {
    return (
      <div className="card orange lighten-3">
        <div className="card-content">
          <span className="card-title">{this.props.title}</span>
          <p>Created by: {this.props.author}</p>
          <p>{this.props.location}</p>
          <p>{this.props.description}</p>
          <p>{this.props.time}</p>
          <p>{this.props.date}</p>
        </div>
      </div>
    )
  }
})

export default EventCard;
