import React, { Component } from 'react';
import PhotoList from './PhotoList.js';
import ViewPhoto from './ViewPhoto.js';
import EditPhotoForm from './EditPhotoForm.js';
import PhotoMap from './PhotoMap.js';

                /* <EditPhotoForm photos={this.props.photos} currentPhoto={this.state.currentPhoto} updatePhoto={this.props.updatePhoto} /> */

class Browser extends Component {
    constructor(props){
        super(props);
        this.state = {photos: props.photos, currentPhoto: 1, isEdit: false, isMap: false, queryValue: null};
    }

    render(){
        return(
            <section className='container'>
                {this.filterPhotos(this.state.queryValue)}
                {(!this.state.isEdit && !this.state.isMap) ? this.renderView() : null }
                {(!this.state.isMap && this.state.isEdit) ? this.renderEdit() : null }
                {(!this.state.isEdit && this.state.isMap) ? this.renderMap(): null}
            </section>
        );
    }

    renderEdit = () => {
        // this.setState({isEdit: true, isMap: false});
        return(
            < EditPhotoForm photos={this.props.photos} currentPhoto={this.state.currentPhoto} updatePhoto={this.props.updatePhoto} setMap={this.setMap} setView={this.setView}/>
        );
    }

    renderView = () => {
        // this.setState({isEdit: false, isMap: false});
        return(
            <ViewPhoto photos={this.props.photos} currentPhoto={this.state.currentPhoto} setEdit={this.setEdit} setMap={this.setMap}/>
        );
    }

    renderMap = () => {
        // this.setState({isEdit: false, isMap: true});
        return(
            <PhotoMap key={this.state.currentPhoto} photos={this.props.photos} currentPhoto={this.state.currentPhoto} setEdit={this.setEdit} setView={this.setView}/> 
        );
    }

    setEdit = (id) => {
        console.log("Setting the Edit View");
        this.setState({currentPhoto: id, isEdit: true, isMap: false});
        return(this.renderEdit)
    }

    setMap = (id) => {
        console.log("Setting the Map View");
        if(this.isMap === true){
            this.setState({currentPhoto: id, isMap: false, isEdit: false});
        }
        this.setState({currentPhoto: id, isMap: true, isEdit: false});
        return(this.renderMap);
    }

    setView = (id) => {
        console.log("Setting the default View");
        this.setState({currentPhoto: id, isMap: false, isEdit: false});
        return(this.renderView);
    }

    showImageDetails = (id) => {
        this.setState({currentPhoto : id, isEdit: false, isMap: false});
    }

    filterPhotos = (el) => {
        // if set to null, return full list of photos.
     if(el === null){
            return (
                <PhotoList setView={this.setView} setEdit={this.setEdit} setMap={this.setMap} filterPhotos={this.filterPhotos} photos={this.props.photos} addImageToFavorites={this.props.addImageToFavorites} /> 
            );
    } else if(el.target.name === 'filterCountry') {
           let filtered = this.props.photos.filter((item) => item.country.toLowerCase() === el.target.value.toLowerCase());
           //clear city input
           document.getElementById('cityInput').value = null;
           // if no matches, return null
           if(filtered.length < 1){
            return null;
            }

           this.setState({
               photos: filtered 
           });
        //    return(
        //     <PhotoList filterPhotos={this.filterPhotos} photos={filtered} showImageDetails={this.showImageDetails} addImageToFavorites={this.props.addImageToFavorites} /> 
        //    );
    } else if(el.target.name === 'filterCity'){
            let filtered = this.props.photos.filter((item) => item.city.toLowerCase() === el.target.value.toLowerCase());
            document.getElementById('countryInput').value = null;
            if(filtered.length<1){
                return null;
            }

           return(
            <PhotoList setView={this.setView} setEdit={this.setEdit} setMap={this.setMap} filterPhotos={this.filterPhotos} photos={filtered} addImageToFavorites={this.props.addImageToFavorites} /> 
           );
    } else {
            return null;
        }
    }


}
export default Browser;