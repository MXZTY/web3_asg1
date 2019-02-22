import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const API_KEY =`${process.env.REACT_APP_API_KEY_YT}`;
console.log(API_KEY);

export class MapContainer extends Component {
  render() {
    return (
      <div>
          <Map google={this.props.google} zoom={14} className="mapElement">
            <Marker position={{ lat:this.props.lat, lng:this.props.long }} />
          </Map>      
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);

