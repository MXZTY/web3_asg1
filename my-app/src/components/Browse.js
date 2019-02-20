import React, { Component } from 'react';
import PhotoList from './PhotoList.js';
import EditPhotoForm from './EditPhotoForm.js';

class Browser extends Component {
    constructor(props){
        super(props);
        this.state = {currentPhoto: 1};
    }

    render(){
        return(
            <section className='container'>
                <PhotoList photos={this.props.photos} showImageDetails={this.showImageDetails} addImageToFavorites={this.props.addImageToFavorites} />
                <EditPhotoForm photos={this.props.photos} currentPhoto={this.state.currentPhoto} updatePhoto={this.props.updatePhoto} />
            </section>
        );
    }

    showImageDetails = (id) => {
        this.setState({currentPhoto : id});
    }
}
export default Browser;