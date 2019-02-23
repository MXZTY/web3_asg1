import React, { Component } from 'react';
import PhotoList from './PhotoList.js';
import ViewPhoto from './ViewPhoto.js';
import EditPhotoForm from './EditPhotoForm.js';
import PhotoMap from './PhotoMap.js';

                /* <EditPhotoForm photos={this.props.photos} currentPhoto={this.state.currentPhoto} updatePhoto={this.props.updatePhoto} /> */

class Browser extends Component {
    constructor(props){
        super(props);
        this.state = {currentPhoto: 1, isEdit: false, isMap: false};
    }

    render(){
        return(
            <section className='container'>
                <PhotoList photos={this.props.photos} showImageDetails={this.showImageDetails} addImageToFavorites={this.props.addImageToFavorites} /> 
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

}
export default Browser;