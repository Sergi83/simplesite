import React, { useState } from "react";

import { content } from "../content/allContent";
import { LoadImage } from "./LoadImage";
import { ImageIcon } from "./ImageIcon";


const AboutContent = () => {
  // get data object from content
  const {
    about: { title, article, boxes },
  } = content;

  /**
   * hook + function -> onClick toggle text
   */
  const [showText, setShowText] = useState(false);

  const toggleText = (e) => {
    e.preventDefault();
    setShowText((showText) => !showText);
  };

  return (
    <div className="grid-container content">
      <div className="title">
        <h3>{title}</h3>
        <p>{article}</p>
      </div>

      {/* render boxes */}
      {boxes.map(({ name, imgAlt, textP }, index) => {
        return (
          <div className={name} key={index}>
            <br />
            {imgAlt ? <ImageIcon alt={imgAlt} /> : <LoadImage alt={imgAlt} />}

            <p className={showText ? "showText" : "toggle_text_overflow"}>
              {textP}
            </p>
            <button onClick={toggleText} className="button">
              More Info
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AboutContent;
