import React from 'react';

const Footer = () => {

    // footer's external links
    const footerTextContent = `© Untitled. All rights reserved. | Photos by ${<a href="https://unsplash.com">Unsplash</a>}| Design by ${<a href="http://templated.co" rel="nofollow">TEMPLATED</a>}.`;

    return (
        <footer id="copyright" className="container">
            <br/>
            <p>
                {footerTextContent}
            </p>
            <br/>
        </footer>
    );
};

export default Footer;