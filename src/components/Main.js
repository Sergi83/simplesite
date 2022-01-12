import React from "react";
import Sidebar from "./sidebar/Sidebar";

// for loading images
import imageMain from "../styles/images/key_type.jpg";
import ProgressiveImage from "react-progressive-graceful-image";
import { AiFillPicture } from "react-icons/ai";

import mainTextContent from "../content/mainContent";


const Main = () => {

  // element showing before a image
  const loadingImage = () => {
    return (
      <p className="image">
        <AiFillPicture className="imageIcon" />
      </p>
    );
  };

  return (
    <>
      <div id="aboutPage">
        {/* Main Content (left or upper section) */}
        <div id="main_sidebar_content">
          <br />
          <div className="title">
            <h3>Welcome to our website</h3>
            <br />
            <span className="byline">Mauris vulputate dolor sit amet nibh</span>
          </div>
          <br />

          <div>
            <ProgressiveImage src={imageMain}>
              {(src, loading) => {
                return loading ? (
                  loadingImage()
                ) : (
                  <img src={src} alt="Keyboard" className="image-full" />
                );
              }}
            </ProgressiveImage>
          </div>
          <br />

          {/* Loading paragraphs */}
          {mainTextContent.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Additional Content (right or down section)  with links to another pages */}
        <Sidebar />

      </div>
      <br />
    </>
  );
};

export default Main;
