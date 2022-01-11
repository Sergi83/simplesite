import React from "react";

const MainLayout = ({ children }) => {
  return (
    <main className="wrapper">
      <div className="container">{children}</div>
    </main>
  );
};

export default MainLayout;
