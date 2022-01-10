import React from "react";
import { Link } from "react-router-dom";

// banner links
import { externalLinks } from "../content/homepageContent";

const Banner = () => {
  //

  // banner text content
  const bannerTextContent = () => {
    const { siteName, templated, unsplash, cca } = externalLinks;

    return (
      <h4>
        This is {<strong>{siteName}</strong>} , a free, fully
        standards-compliant CSS template designed by {
          <a href={templated.link} rel="nofollow">
            {templated.text}
          </a>
        }. The photos in this template are from {<a href={unsplash.link}>{unsplash.text}</a>}. This free template is released under the {<a href={cca.link}>{cca.text}</a>} license.
      </h4>
    );
  };

  return (
    <div id="banner-wrapper">
      <div id="banner" className="container">
        <h2>Banner Main Header</h2>

        <br />
        {bannerTextContent()}
        <br />

        <Link to="/contact" className="button">
          Link to Contact
        </Link>
      </div>
    </div>
  );
};

export default Banner;
