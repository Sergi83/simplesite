import React from "react";
import { Link } from "react-router-dom";

import { content } from "../../content/allContent";

const SidebarStyle1 = () => {

  // get data
  const { sidebar } = content;
  const { style1 } = sidebar;

  return (
    <ul className="style1">
      {style1.map((liItem, index) => {
        return (
          <li key={index}>
            <h5 className={(index === 0) ? "sidebar_1li" : ""}>{liItem.title}</h5>
            <p>
              <Link to="/clients">{liItem.textLink}</Link>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarStyle1;
