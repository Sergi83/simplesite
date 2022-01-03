import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div id="banner-wrapper">
            <div id="banner" className="container">

                <h2>Banner Main Header</h2>
                <br/>
                <p>
                    [Banner Text]
                </p>
                <br/>
                <Link to="/" >
                    Link to Contact
                </Link>
                {/* <a href="#" className="button">Main button</a> */}
            </div>
        </div>
    );
};

export default Banner;
