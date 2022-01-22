import React from "react";
import { Link } from "react-router-dom";
import { content } from "../../content/allContent";

export const Box1 = () => {
  const { sidebar: { box1 } } = content;
  const { boxTitle, textLinks } = box1;
  return (
    <div className="sbox1">
      <h5>{boxTitle}</h5>

      <ul className="style2">
        {textLinks.map((itemLink, index) => {
          return (
            <li key={index}>
              <Link to="/contact">{itemLink}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
