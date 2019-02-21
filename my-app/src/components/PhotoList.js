import React from "react";
import PhotoThumb from "./PhotoThumb.js";

class PhotoList extends React.Component {
  handleChange(event) {//////////////////figure out how to pass the filtered values down
    //get the value in input field
    let val = event.target.value;
    //change state to filter
    this.setState({
      photos: this.props.photos.filter(photo => photo.country === val)
    });
  }

  render() {
    if (this.props.photos.length > 1) {
      return (
        <article className="photos">
          <input name="filter" type="text" placeholder="Filter by Country" />

          {this.props.photos.map(p => (
            <PhotoThumb
              photo={p}
              key={p.id}
              showImageDetails={this.props.showImageDetails}
              addImageToFavorites={this.props.addImageToFavorites}
            />
          ))}
        </article>
      );
    } else {
      return null;
    }
  }
}

export default PhotoList;
