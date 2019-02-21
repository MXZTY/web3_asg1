import React from "react";
import "./EditPhotoForm.css";
import MapContainer from "./Map.js";

let lat = "";
let long = "";

class PhotoMap extends React.Component {
  //get user location
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(p => {
        return [p.coords.latitude, p.coords.longitude];
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  //calculate distance
  calculateDist = (lat1, lat2, lon1, lon2) => {
    function toRad(Value) {
      /** Converts numeric degrees to radians */
      return (Value * Math.PI) / 180;
    }
    let R = 6371e3; // metres
    let φ1 = toRad(lat1);
    let φ2 = toRad(lat2);
    let Δφ = toRad(lat2 - lat1);
    let Δλ = toRad(lon2 - lon1);

    let a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  render() {
    //get current photo
    const id = this.props.currentPhoto;
    const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/`;
    if (this.props.photos.length > 0) {
      //return the photo path from the id
      const photo = this.props.photos.find(p => p.id === id);

      return (
        <article className="details">
          <div className="detailsPhotoBox">
            <MapContainer lat={this.lat} long={this.long} />

            <img src={imgURL + photo.path} alt={photo.title} />

            <div className="photoForm">
              <h1>{photo.title}</h1>
              <h2>{photo.city}, {photo.country}</h2>
              <h1>{this.calculateDist(photo.latitude, 0, photo.longitude, 0)}</h1>
              <br />
              <button>View</button>
              <button>Edit</button>
            </div>
            
          </div>
        </article>
      );
    } else {
      return null;
    }
  }
}

export default PhotoMap;
