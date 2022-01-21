import React from "react";
import { Link } from "react-router-dom";

import { content } from "../../content/allContent";


export const Box2 = () => {
  const { sidebar: { box2 } } = content;
  const { boxTitle, textLinks } = box2;
  
  return (
    <div className="sbox2">
      <h5>{boxTitle}</h5>

      <ul className="style2">
        {textLinks.map((itemLink, index) => {
          return (
            <li key={index}>
              <Link to="/contact"> {itemLink}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
