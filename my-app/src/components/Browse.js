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
                {/* <PhotoList filterPhotos={this.filterPhotos} photos={this.props.photos} showImageDetails={this.showImageDetails} addImageToFavorites={this.props.addImageToFavorites} />  */}
                {(!this.state.isEdit && !this.state.isMap) ? this.renderView() : null }
                {(!this.state.isMap && this.state.isEdit) ? this.renderEdit() : null }
                {(!this.state.isEdit && this.state.isMap) ? this.renderMap(): null}

                {/* {(this.state.isEdit) ? < EditPhotoForm photos={this.props.photos} currentPhoto={this.state.currentPhoto} updatePhoto={this.props.updatePhoto} setEdit={this.setEdit} /> : <ViewPhoto photos={this.props.photos} currentPhoto={this.state.currentPhoto} setEdit={this.setEdit}/> } */}
                {/*<EditPhotoForm photos={this.props.photos} currentPhoto={this.state.currentPhoto} updatePhoto={this.props.updatePhoto} />*/}
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
            <PhotoMap photos={this.props.photos} currentPhoto={this.state.currentPhoto} setEdit={this.setEdit} setView={this.setView}/> 
        );
    }

    setEdit = () => {
        this.setState({isEdit: true, isMap: false});
    }

    setMap = () => {
        this.setState({isMap: true, isEdit: false});
    }

    setView = () => {
        this.setState({isMap: false, isEdit: false});
        return(this.renderView);
    }

    showImageDetails = (id) => {
        this.setState({currentPhoto : id, isEdit: false, isMap: false});
    }

    filterPhotos = (el) => {
        // if set to null, return full list of photos.
     if(el === null){
            return (
                <PhotoList filterPhotos={this.filterPhotos} photos={this.props.photos} showImageDetails={this.showImageDetails} addImageToFavorites={this.props.addImageToFavorites} /> 
            );
    } else if(el.target.name === 'filterCountry') {
           let filtered = this.props.photos.filter((item) => item.country.toLowerCase() === el.target.value.toLowerCase());
           //clear city input
           document.getElementById('cityInput').value = null;
           // if no matches, return null
           if(filtered.length < 1){
            return null;
            }
           console.log(filtered.length);
           console.log(filtered);
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

           console.log(filtered.length);
           console.log(filtered);
           return(
            <PhotoList filterPhotos={this.filterPhotos} photos={filtered} showImageDetails={this.showImageDetails} addImageToFavorites={this.props.addImageToFavorites} /> 
           );
    } else {
            return null;
        }
    }


}
export default Browser;