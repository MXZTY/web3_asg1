import React, { Component } from 'react';
import './EditPhotoForm.css';

class ViewPhoto extends Component{
    render(){
        const id = this.props.currentPhoto;
        const imgURL =  `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;
        console.log(id);
        if(this.props.photos.length > 0){
            const photo = this.props.photos.find(p => p.id === id);
            return(
                <article className="details">
                     <div className="detailsPhotoBox">
                        <div className="photoForm">
                            <img src={imgURL + photo.path} alt={photo.title} />
                            <h4>Title: </h4><p><i>{photo.title}</i></p>
                            <h4>City: </h4><p><i>{photo.city}</i></p>
                            <h4>Country: </h4><p><i>{photo.country}</i></p>
                        </div>

                    <p className="buttons">
                            <button onClick={this.props.setEdit}>Edit</button>
                            <button onClick={this.props.setMap}>Map</button>

                    </p>

                    </div>
                </article>
            );
        } else{
            return null;
        }


    }

}

export default ViewPhoto;