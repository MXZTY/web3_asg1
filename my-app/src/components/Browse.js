import React, { Component } from 'react';
import PhotoList from './PhotoList.js';
import ViewPhoto from './ViewPhoto.js';
import EditPhotoForm from './EditPhotoForm.js';

                /* <EditPhotoForm photos={this.props.photos} currentPhoto={this.state.currentPhoto} updatePhoto={this.props.updatePhoto} /> */

class Browser extends Component {
    constructor(props){
        super(props);
        this.state = {currentPhoto: 1, isEdit: false};
    }

    render(){
        return(
            <section className='container'>
                <PhotoList photos={this.props.photos} showImageDetails={this.showImageDetails} addImageToFavorites={this.props.addImageToFavorites} />
                {(this.state.isEdit) ? < EditPhotoForm photos={this.props.photos} currentPhoto={this.state.currentPhoto} updatePhoto={this.props.updatePhoto} setEdit={this.setEdit} /> : <ViewPhoto photos={this.props.photos} currentPhoto={this.state.currentPhoto} setEdit={this.setEdit}/> }
            </section>
        );
    }

    setEdit = () => {
        this.setState({isEdit: !this.state.isEdit});
    }

    showImageDetails = (id) => {
        this.setState({currentPhoto : id, isEdit: false});
    }

}
export default Browser;