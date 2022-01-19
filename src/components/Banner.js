import React from "react";
import { Link } from "react-router-dom";

// banner text and links
import { content } from "../content/allContent";


const Banner = () => {
  // get links and text from content
  const { externalLinks, banner } = content;
  const { title, subtitle, buttonLink } = banner;

  // banner text content
  const bannerTextContent = ({ siteName, templated, unsplash, cca }, text) => {
    
    return (
      <h4>
        {text[0]}
        <strong>{siteName}</strong>
        {text[1]}
        <a href={templated.link} rel="nofollow">
          {templated.text}
        </a>
        {text[2]}
        <a href={unsplash.link}>{unsplash.text}</a>
        {text[3]}
        <a href={cca.link}>{cca.text}</a>
        {text[4]}
      </h4>
    );
  };

  return (
    <div id="header-featured">
      <div id="banner-wrapper">
        <div id="banner" className="container">
          <h2>{title}</h2>
          <br />
          {bannerTextContent(externalLinks, subtitle)}
          <br />
          <Link to={buttonLink} className="button">
            Link to Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
