import React from "react";

// text and links
import { content } from "../content/allContent";


const Footer = () => {
  // get text, and links from content
  const { footer, externalLinks } = content;
  const { textP } = footer;
  const { templated, unsplash } = externalLinks;

  return (
    <footer id="copyright" className="container">
      <br />
      <p>
        {textP[0]}
        <a href={unsplash.link}>
          {unsplash.text}
        </a>
        {textP[1]}
        <a href={templated.link} rel="nofollow">
          {templated.text}
        </a>
        {textP[2]}
      </p>
      <br />
    </footer>
  );
};

export default Footer;
