import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

//This component displays information about the website. 
class About extends React.Component {
    // we use Link from the react router dom to link the button to a specific component.
    render() {
        return (
            <div className="bannerAbout">
                <div style={{margin: "30px"}}>
                    <h1 style={{paddingTop: "100px"}}>A Simple Travel Photo Website</h1>
                    <h3> Created With React</h3>
                    <br/>
                    <h3> By Maxwell Tyson and Sarf Kermali</h3>
                    <br/>
                    <br/>
                    <h4>- Images and source code are supplied by Randy Connolly @ funWebDev</h4>
                    <h4>- we created out logo using adobe illustrator and the design was created following a illustrator tutorial, which can be found <a href='https://www.youtube.com/watch?v=Z2SNeH9v-Ug'>here</a></h4>
                    <h4>- Flex styling was implemented using the instructional guide found <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">here</a></h4>
                    <h4>- Solution for exporting favorites to a zip was found <a href="https://gist.github.com/noelvo/4502eea719f83270c8e9">here</a></h4>
                    <h4>- Haversine formula used and obtained from <a href="https://www.movable-type.co.uk/scripts/latlong.html">Movable Type Scripts</a></h4>
                    <h4>- Issues with loading map multiple times was fixed by adding a key value to the map options. This forces the map to rerender with the new center position set. <br/>
                        ---> credit to : istarkov) comment found <a href='https://github.com/google-map-react/google-map-react/issues/76'>here</a>  </h4>
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