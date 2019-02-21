import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const key = "AIzaSyAf-dCRAkDREQ83lCulW4jWnrFi0L6rk6I";

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
  apiKey: key
})(MapContainer);

