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
                            <br/>
                            <h3>Title: <i>{photo.title}</i></h3> <br/>
                            <h3>City: <i>{photo.city}</i></h3><br/>
                            <h3>Country: <i>{photo.country}</i></h3><br/> 

                            <p className="buttons">
                            <button onClick={this.props.setEdit}>Edit</button>
                            <button onClick={this.props.setMap}>Map</button>
                            </p>
                        </div>

                    

                    </div>
                </article>
            );
        } else{
            return null;
        }


    }

}

export default ViewPhoto;