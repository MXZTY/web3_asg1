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


  filterBy = {

    backgroundColor: "#39324B",
    paddingLeft:'28.5%',
    alignItems:'center',
    color: "white",
  }
  
  titleStyle = {
    textAlign:"center",
    width: "300px",
    padding: "0.5em",
    flex:1, 
  }

  searchStyle = {
    width:"300px"
  }
  render() {
    if (this.props.photos.length > 1) {
      return (
        <div>
        <div className="filterBy" style={this.filterBy}>
           <h2 style={this.titleStyle}>
             Filter By:
            </h2>
            <div className="inputStyles" >
             <input name="filterCountry" type="text" placeholder="Country"  style={this.searchStyle}/> <br/>
             <input name="filterCity" type="text" placeholder="City"  style={this.searchStyle}/>
            </div>
            

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
