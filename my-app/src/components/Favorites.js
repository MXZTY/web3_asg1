import React from 'react';
import FavoriteItem from './FavoriteItem';
import '../index.css';

// this class outputs the array of favorites passed in from App.js via props each item in the array is outputted as a FavoriteItem. 
class Favorites extends React.Component {
    render() {
        return (
        <section className="favorites">
               <div>
                    <p> ❤ Favorites</p>
               </div>
                {this.props.favorites.map( (f) => {
                        return <FavoriteItem photo={f} key={f.id} addImageToFavorites={this.props.addImageToFavorites}/>;
                    }   
                )}
        </section> 
        );
    }
}
export default Favorites;