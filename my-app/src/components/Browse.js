import React, { Component } from 'react';
import PhotoList from './PhotoList.js';
import ViewPhoto from './ViewPhoto.js';
import EditPhotoForm from './EditPhotoForm.js';
import PhotoMap from './PhotoMap.js';


class Browser extends Component {

    // default the current photo value to 1, and set the default view to photoview, and no queryValue(filter). 
    constructor(props){
        super(props);
        this.state = {photos: props.photos, currentPhoto: 1, isEdit: false, isMap: false, queryValue: null};
    }

    // Render the filtered Photo list
    // also conditional rendering based on what view is set in the state (map view, edit view, or photo view)
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

    // this function returns the EditPhotoForm, and requires the setMap and setView as props to change the view. 
    renderEdit = () => {
        return(
            < EditPhotoForm photos={this.props.photos} currentPhoto={this.state.currentPhoto} updatePhoto={this.props.updatePhoto} setMap={this.setMap} setView={this.setView}/>
        );
    }

    // this function returns the viewphoto component, the setEdit and setMap are required as props to change the view
    renderView = () => {
        return(
            <ViewPhoto photos={this.props.photos} currentPhoto={this.state.currentPhoto} setEdit={this.setEdit} setMap={this.setMap}/>
        );
    }

    // *****Issues we had with centering and rerendering the map where resolved by simply adding the key to the props... ¯\_(ツ)_/¯
    // ***adding a key value forces the map to rerender***
    // credit to : **[istarkov](/istarkov) ** commented [on Dec 15, 2015](#issuecomment-164833277) @ https://github.com/google-map-react/google-map-react/issues/76
    renderMap = () => {
        return(
            <PhotoMap key={this.state.currentPhoto} photos={this.props.photos} currentPhoto={this.state.currentPhoto} setEdit={this.setEdit} setView={this.setView}/> 
        );
    }

    // function for setting the state to the edit view for the photo id provided. 
    // returns the render edit function above after the state is set to the new id
    setEdit = (id) => {
        console.log("Setting the Edit View for Photo: " + id);
        this.setState({currentPhoto: id, isEdit: true, isMap: false});
        return(this.renderEdit)
    }

    // function for setting the state to the map view for the photo id provided. 
    // returns the render map function above after the state is set to the new id.
    setMap = (id) => {
        console.log("Setting the Map View for Photo: " + id);
        this.setState({currentPhoto: id, isMap: true, isEdit: false});
        return(this.renderMap);
    }

    // function for setting the state to the regular view for the photo id provided. 
    // returns the render view function above after the state is set to the new id. 
    setView = (id) => {
        console.log("Setting the default View for Photo: " + id);
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