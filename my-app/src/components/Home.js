import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="banner">
                <div>
                    <h1>Travel Photos</h1>
                    <h3>Upload and Share</h3>
                    <div>
                        <img className="logo" src={require('./images/seeThrough.png')} alt='site logo' />
                    </div>
                    <p>
                        <Link to='/browse'>
                            <button>Browse</button>
                        </Link>
                        <Link to='/about'>
                            <button>About</button>
                        </Link>
                    </p>
                </div>
            </div> 
        );
    }
}
export default Home;