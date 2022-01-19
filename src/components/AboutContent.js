import React from "react";
import { Link } from "react-router-dom";

import { content } from "../content/allContent";
import { LoadImage } from "./LoadImage";

// import { ReactComponent as Logo } from "../styles/images/cloud-icon.svg";

import { ImageIcon } from "./ImageIcon";


const AboutContent = () => {
  // get data object from content
  const { about } = content;
  const { title, subtitle, boxes } = about;

  return (
    <div className="container">
      <div className="title">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>

      {/* render boxes */}
      {boxes.map(({ name, imgAlt, textP, buttonLink }, index) => {
        return (
          <div className={name} key={index}>
            <br/>
            {imgAlt ? (
              <ImageIcon alt={imgAlt} />
            ) : (
              <LoadImage alt={imgAlt} />
            )}
        
            <p className="toggle_text_overflow">{textP}</p>
            <Link to={buttonLink} className="button">
              More Info
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AboutContent;
