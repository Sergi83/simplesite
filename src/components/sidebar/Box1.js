import React from "react";
import { Link } from "react-router-dom";
import { sidebarBox1 } from "../../content/sidebarContent";

export const Box1 = () => {
  const { boxTitle, textLinks } = sidebarBox1;
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
