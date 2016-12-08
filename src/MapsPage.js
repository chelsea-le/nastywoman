// Component to render content on "Find Events" Page of App
import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import _ from 'lodash';
import FirebaseInit from './FirebaseInit';

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
    return (
      <div className="container">
        <h3> Find Events </h3>
        {this.renderMap()}


        <div>
          <hr />
          <hr />
          <h5>DEBUG NOTES</h5>
            <h5>clicking on map adds event, right click removes</h5>
            <p><b>Nico: next steps:</b></p>
            <ul>
              <li>Save state (markers) to Firebase...right now markers are not preserved</li>
              <li>Add pop-up dialog when adding event (essentially an "Add Event" form)</li>
              <li>Integrate Google Maps Location+Search API for autofill</li>
              <li>Reference user creation, add softcap for events/user (stretch)</li>
            </ul>
            <hr />
            <hr />
          </div>
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
   })
  },

  componentWillMount() {
    var mapMarkersRef = FirebaseInit.database().ref('mapMarkers');
    mapMarkersRef.on('value', function(snapshot) {
      var mapMarkerData = snapshot.val();
      if (mapMarkerData !== null) {
        this.setState({markers: mapMarkerData})
      }
    });
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
