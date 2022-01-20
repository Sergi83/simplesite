import React from "react";
import { Link } from "react-router-dom";

import { sidebarStyle1TextContent } from "../../content/sidebarContent";

const SidebarStyle1 = () => {
  return (
    <ul className="style1">
      {sidebarStyle1TextContent.map((liItem, index) => {
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
