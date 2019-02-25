import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <div>
          <Map 
            google={this.props.google}
            defaultZoom={this.props.zoom}
            defaultCenter={{lat:'51.0707859,lng', lng:'-113.9340959'}}
            center={{ lat:this.props.lat, lng:this.props.long }}
            className="mapElement"
          >
              <Marker 
                name={this.props.city}
                position={{ lat:this.props.lat, lng:this.props.long }}
              />
          </Map>      
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAI_MAO56_xJsh7otw9pNowETt5hPa4va0"
})(MapContainer);



