import React from 'react';

class FavoriteItem extends React.Component {
    render() {
        // define the base url and add the image path to the string. 
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.photo.path}`;
        return (
            <div className='container'>
                <figure>
                    <img src={imgURL} className="photoThumb" title={this.props.photo.title} alt={this.props.photo.title} />
                </figure>
            </div>
        );
    }
}
export default FavoriteItem;