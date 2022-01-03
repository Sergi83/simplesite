import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {

    // banner text content
    let bannerTextContent = `This is ${<strong>Simplesite</strong>} , a free, fully standards-compliant CSS template designed by ${<a href="http://templated.co" rel="nofollow">TEMPLATED</a>}. The photos in this template are from ${<a href="https://unsplash.com">Unsplash</a>}. This free template is released under the ${<a href="http://templated.co/license">Creative Commons Attribution</a>} license.`;
    
    return (
        <div id="banner-wrapper">
            <div id="banner" className="container">

                <h2>Banner Main Header</h2>
                <br/>
                <p>
                    {bannerTextContent}
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
