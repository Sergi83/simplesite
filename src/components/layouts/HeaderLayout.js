import React from "react";

const HeaderLayout = ({ children }) => {
  return (
    <header id="header-wrapper">
      <div id="header" className="container">
        {children}
      </div>
    </header>
  );
};

export default HeaderLayout;
