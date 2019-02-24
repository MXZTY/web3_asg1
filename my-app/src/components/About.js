import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

//This component displays information about the website. 
class About extends React.Component {
    // we use Link from the react router dom to link the button to a specific component.
    render() {
        return (
            <div className="bannerAbout">
                <div>
                    <h1>A Simple Travel Photo Website</h1>
                    <h3> Created With React</h3>
                    <br/>
                    <h4>- Images and source code are supplied by Randy Connolly @ funWebDev</h4>
                    <h4>- Logo was created using adobe illustrator and the design was created following a design tutorial, which can be found <a href='https://www.youtube.com/watch?v=Z2SNeH9v-Ug'>Here</a></h4>
                    <h4>- Flex styling was implemented using the instructional guide found <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">here</a></h4>
                    
                    <p>
                        <Link to='/browse'>
                            <button>Browse</button>
                        </Link>
                        <Link to='/home'>
                            <button>Home</button>
                        </Link>
                    </p>
                </div>
            </div> 
        );
    }
}
export default About;