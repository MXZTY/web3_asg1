import React from "react";
import FavoriteItem from "./FavoriteItem";
import "../index.css";
import JSZip from "jszip";
import utils from "jszip-utils";
import file, { saveAs } from "file-saver";
import { binary } from "jszip/lib/defaults";
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
    let favorites = zip.folder("favorites");

    for( let i of this.props.favorites){
      let url = `https://cors-anywhere.herokuapp.com/storage.googleapis.com/funwebdev-3rd-travel/medium/${
              i.path
      }`;
      let tempZip = new JSZip();

      utils.getBinaryContent(url, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          favorites.file(i.path, data, {binary:true});
              //add to the zip folder
          zip.generateAsync({ type: "blob"}).then((content) => {
            console.log(favorites);
            console.log(content);
            saveAs(content, favorites.favorites);
           });
        }
        });
        
    }

    // generate the zip file
    // zip.generateAsync({ type: "blob"}).then((content) => {
    //   console.log(content);
    //   saveAs(content, folder);
    // });
  }

  //   //if blank
  //   this.props.favorites.map(p => {
  //     //the heroku url prevents the error we get with fetch
  //     let url = `https://cors-anywhere.herokuapp.com/storage.googleapis.com/funwebdev-3rd-travel/medium/${
  //       p.path
  //     }`;

  //     //get binary data of image

  //     utils.getBinaryContent(url, (err, data) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         folder.file(p.path, data, {binary:true});
  //             //add to the zip folder
  //             // folder.generateAsync({ type: "blob"}).then((content) => {
  //             //   console.log(content);
  //             //   saveAs(content, folder.favorites);
  //             // });
  //       }
  //       });
  //   });

  //   //generate the zip file
  //   // zip.generateAsync({ type: "blob"}).then((content) => {
  //   //   console.log(content);
  //   //   saveAs(content, "Favorites.zip");
  //   // });
  // };

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
