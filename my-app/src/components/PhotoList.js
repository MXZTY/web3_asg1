import React from "react";
import PhotoThumb from "./PhotoThumb.js";

class PhotoList extends React.Component {

  render() {
    if (this.props.photos.length > 1) {
      return (
        <div className="flex-container">
          <div className="filterBy flex-box">
           <h2 className="flex-title"> Filter By</h2>
             <input id="countryInput" className="flex-item" name="filterCountry" type="text" placeholder="Country" onChange={this.props.filterPhotos}/> 
             <input id="cityInput" className="flex-item" name="filterCity" type="text" placeholder="City" onChange={this.props.filterPhotos}/>
          </div>
            

        <article className="photos">

          {this.props.photos.map(p => (
            <PhotoThumb
              photo={p}
              key={p.id}
              showImageDetails={this.props.showImageDetails}
              addImageToFavorites={this.props.addImageToFavorites}
            />
          ))}
        </article>
        </div>
        
      );
    } else {
      return null;
    }
  }
}

export default PhotoList;
