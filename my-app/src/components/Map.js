import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const key = "AIzaSyAf-dCRAkDREQ83lCulW4jWnrFi0L6rk6I";
const style = {
  width: "40%",
  height: "50%"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} style={style}>
        <Marker
          position={{ lat:this.props.lat, lng:this.props.long }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: key
})(MapContainer);

