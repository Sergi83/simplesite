import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { content } from "../content/allContent";
import { LoadImage } from "./LoadImage";
import { ImageIcon } from "./ImageIcon";


const AboutContent = () => {
  // get data object from content
  const { about } = content;
  const { title, article, boxes } = about;

// 
const [ showText, setShowText ] = useState(true);

const toggleText = (e) => {
      e.preventDefault();
      setShowText(showText => !showText);
  };
// useEffect((e) => {
    
// }, [showText]);
  

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
            <br/>
            {imgAlt ? (
              <ImageIcon alt={imgAlt} />
            ) : (
              <LoadImage alt={imgAlt} />
            )}
        
            <p className={showText ? "showText" : "toggle_text_overflow"}>{textP}</p>
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
