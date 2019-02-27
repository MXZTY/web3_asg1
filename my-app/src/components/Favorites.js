import React from "react";
import FavoriteItem from "./FavoriteItem";
import "../index.css";
import JSZip from "jszip";
import utils from "jszip-utils";
import { saveAs } from "file-saver";
import download, { image } from "image-downloader";

// this class outputs the array of favorites passed in from App.js via props each item in the array is outputted as a FavoriteItem.
class Favorites extends React.Component {
  state = {
    displayButton: false
  };

  //generate a zip file
  genZip = () => {
    //create zip instance
    let zip = new JSZip();
    //zip.folder("Images");

    //if blank
    this.props.favorites.map(p => {
      //the heroku url prevents the error we get with fetch
      let url = `https://cors-anywhere.herokuapp.com/storage.googleapis.com/funwebdev-3rd-travel/medium/${
        p.path
      }`;

      //get binary data of image
      
      utils.getBinaryContent(url, (err, data) => {

        if (err) {
          console.log(err);
        } else {
          zip.file("picture.png", data, {binary:true});
        }
        });
    });

    //generate the zip file
    zip.generateAsync({ type: "blob" }).then(function(content) {
      saveAs(content, "Favorites.zip");
    });
  };

  // a conditional id is added to the favorites and download button
  // so that if the favorites array is empty, the user is not given an option to download,
  // and doesnt have a blank bar on the top of their screen
  render() {
    return (
      <section className="favorites flex-container-row">
        <div
          className="flex-item-favorites"
          id={this.props.favorites < 1 ? "Hide" : "Show"}
        >
          <h3> ❤ Favorites</h3>
          <br />
          <button
            className="flex-button"
            id={this.props.favorites < 1 ? "Hide" : "Show"}
            onClick={this.genZip}
          >
            Download
          </button>
        </div>
        {this.props.favorites.map(f => {
          return (
            <FavoriteItem
              photo={f}
              key={f.id}
              addImageToFavorites={this.props.addImageToFavorites}
            />
          );
        })}
      </section>
    );
  }
}
export default Favorites;
