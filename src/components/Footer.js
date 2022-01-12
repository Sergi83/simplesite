import React from "react";

// links
import { externalLinks } from "../content/homepageContent";

const Footer = () => {
  const footerTextContent = () => {
    const { templated, unsplash } = externalLinks;

    return (
      <p>
        © Untitled. All rights reserved. | Photos by {<a href={unsplash.link}>{unsplash.text}</a>}| Design by {
          <a href={templated.link} rel="nofollow">
            {templated.text}
          </a>
        }.
      </p>
    );
  };

  return (
    <footer id="copyright" className="container">
      <br />
      {footerTextContent()}
      <br />
    </footer>
  );
};

export default Footer;
