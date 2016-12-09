// Component to render content on "Find Events" Page of App
import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import _ from 'lodash';
import firebase from 'firebase';
import EventCard from './EventCard';
import CreateEventForm from './CreateEventForm';

var eventsRef;

var AsyncMapDisplay = withScriptjs(withGoogleMap(
    props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={4}
        defaultCenter={{ lat: 39.8282, lng: -98.5795 }}
        onClick={props.onMapClick}
      >
        {props.markers.map(marker => (
          <Marker
            {...marker}
            onRightClick={() => props.onMarkerRightClick(marker)}
          />
        ))}
      </GoogleMap>
    )
));

var MapsPage = React.createClass({
  render() {

    let eventKeys = Object.keys(this.state.events);

    return (
      <div className="container">
        <h3> Events </h3>
        {this.renderMap()}

        <hr />
        <h5> Add an Event </h5>
        <CreateEventForm submit={this.createEvent} />
        <hr />

        <h5> Find Events </h5>
        {
          eventKeys.map((d) => {
            return <EventCard
                      key={d}
                      title={this.state.events[d].title}
                      author={this.state.events[d].author}
                      location={this.state.events[d].location}
                      description={this.state.events[d].description}
                      time={this.state.events[d].time}
                      date={this.state.events[d].date}
                    />
          })
        }

        { /*
        <EventCard
          title="Title"
          author="@author"
          location="Location"
          description="Desc"
          time="Time"
          date="Date"
        />
        */ }
      </div>
    )
  },

  getInitialState() {
    return ({
      markers: [{
       position: {
         lat: 47.6062,
         lng: -122.3321,
       },
       key: `1`,
       defaultAnimation: 2,
     }],
     events: []
   })
  },

  componentWillMount() {
    eventsRef = firebase.database().ref('events');
  },

  componentDidMount() {
    eventsRef.on('value', (snapshot)=> {
      // In case there are no Events
      if (snapshot.val()){
          this.setState({events:snapshot.val()});
      }
    });
  },

  // Creates event from MapsPage
  createEvent(event) {
    event.preventDefault();

    let currentEvent = {
      id: firebase.database.ServerValue.TIMESTAMP,
      title: event.target.elements['title'].value,
      location: event.target.elements['location'].value,
      date: event.target.elements['date'].value,
      time: event.target.elements['time'].value,
      description: event.target.elements['description'].value,
      author: this.props.userDisplayName
    }

    // Push Event up to Firebase
    eventsRef.push(currentEvent);
    event.target.reset();

  },

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      // console.log(map.getZoom());
    }
  },

  handleMapClick(event) {
    console.log("Map Clicked!");
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(),
      },
    ];
    this.setState({
      markers: nextMarkers,
    });
  },

  handleMarkerRightClick(targetMarker) {
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  },

  renderMap() {
    return (
      <AsyncMapDisplay
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBkKdJCxoJLpa0y1bGrajbBJutR_U3msC0"
          loadingElement={
            <div style={{ height: '30rem', textAlign: 'center' }}>
              <p>Loading...</p>
            </div>
          }
          containerElement={
            <div style={{ height: '30rem' }} />
          }
          mapElement={
            <div style={{ height: '30rem' }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
      />
    )
  },
});

export default MapsPage;
