import React, { Component } from 'react';
import HeaderApp from './components/HeaderApp.js';
import Browse from './components/Browse.js'
import Home from './components/Home.js';
import Favorites from './components/Favorites';
import * as cloneDeep from 'lodash/cloneDeep';
import About from './components/About.js';
import { Route } from 'react-router-dom';


const _ = require('lodash');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [], favorites: []};
  }

  async componentDidMount() {
    try{
      const url = "http://randyconnolly.com/funwebdev/services/travel/images.php";
      const response = await fetch(url);
      const jsonData = await response.json();
      this.setState( { photos: jsonData } );
    } catch (error) {
      console.error(error);
    }
  }

  updatePhoto = (id, photo) => {
    //Create a deep clone of photos from the state and use lodash function fot ehat task. 
    const copyPhotos = cloneDeep(this.state.photos);
    //find photo to update in cloned array
    const photoToReplace = copyPhotos.find( p => p.id === id);
    // replace photo fields with edited values
    photoToReplace.title = photo.title;
    photoToReplace.city = photo.city;
    photoToReplace.country = photo.country;
    //update the state
    this.setState({photos: copyPhotos});
  }

  deletePhoto = (id) => {
    console.log("DELETING PHOTO " + id);
    let copyPhotos = cloneDeep(this.state.photos);
    let photoToDelete = copyPhotos.find(p => p.id === id);

    if(photoToDelete !== null) { 
      console.log("boop beep" + photoToDelete.id);
      let filteredPhotos = _.remove(copyPhotos, (photoToDelete) => {
          return photoToDelete.id !== id;
      });
      // if the item is also in favorites list, delete it from there as well. 
      if(this.state.favorites.find(f => f.id === id)){
        //Create a deep clone of the favorites array stored in state using lodash/cloneDeep
        const copyFavorites = cloneDeep(this.state.favorites);
        // use the lodash remove function to remove the item the matches the id of the focused item. 
        _.remove(copyFavorites, (favoriteItem) => {
          return favoriteItem.id === id;
        });

      this.setState({photos: filteredPhotos, favorites: copyFavorites});
    }
  }
  }

  addImageToFavorites = (id) => {
    //Create a deep clone of the favorites array stored in state using lodash/cloneDeep
    const copyFavorites = cloneDeep(this.state.favorites);
    //create a favorite Item by finding the photo object based on the id
    const favoriteItem = this.state.photos.find( p => p.id === id);
    //if the item is already in the favorites list, remove the item when the favorite button is pressed.  
    if(this.state.favorites.find(f => f.id === id)){
      console.log('you are unfavoriting' + favoriteItem);
      console.log(this.state.favorites);
      // use the lodash remove function to remove the item the matches the id of the focused item. 
      _.remove(copyFavorites, (favoriteItem) => {
        return favoriteItem.id === id;
      });
    } else {
      // if the item is not in the favorite list, simply push it onto the temp array. 
      copyFavorites.push(favoriteItem);
    }
    // set the favorites array stored in state to the newly updated favorites list. 
    this.setState({favorites: copyFavorites});
  }

  render() {
    return (
      <div>
        <HeaderApp />
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/browse' exact 
            render={ (props) =>
              <React.Fragment>
                <Favorites favorites={this.state.favorites} photos={this.state.photos} addImageToFavorites={this.addImageToFavorites}/>
                <Browse photos={this.state.photos} updatePhoto={this.updatePhoto} addImageToFavorites={this.addImageToFavorites} deletePhoto={this.deletePhoto}/>
              </React.Fragment>
            }
        />
      </div>
    );
  }
}

export default App;
