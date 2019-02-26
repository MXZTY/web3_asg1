import React from "react";
import FavoriteItem from "./FavoriteItem";
import "../index.css";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import download from "image-downloader";


// this class outputs the array of favorites passed in from App.js via props each item in the array is outputted as a FavoriteItem.
class Favorites extends React.Component {

    state = {
        displayButton:"No"
    }
  
  //generate a zip file
    genZip = () => {

        //create zip instance
        let zip = new JSZip();
        zip.folder("Images")

        //if blank
        this.props.favorites.map(
            (p)=>{
                let url = `http://storage.googleapis.com/funwebdev-3rd-travel/medium/${p.path}`;
                fetch(url,{mode: 'cors'}).then((response)=>{console.log(response);
                })
            }
        );

        //generate the zip file
        /*
        zip.generateAsync({ type: "blob" }).then(function(content) {
            saveAs(content, "Favorites.zip");
        });
        */
  };

  

  render() {
    return (
      <section className="favorites">
        <div>
          <p> ❤ Favorites</p>
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
        <button className="flex-button" onClick={this.genZip}>Download</button>
      </section>
    );
  }
}
export default Favorites;
