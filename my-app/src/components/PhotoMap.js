import React from "react";
import "./EditPhotoForm.css";

class PhotoMap extends React.Component {
  render() {
    return (
      <article className="details">
        
        <div className="map">

        </div>
        
        <div className="detailsPhotoBox">
          <h1>Title</h1>
          <h2>City, Country</h2>
          <h1>Distance in KM</h1>
          <button>View</button>
          <button>Edit</button>
        </div>

      </article>
    );
  }
}

export default PhotoMap;
