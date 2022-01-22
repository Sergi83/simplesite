import React from "react";

// components
import Footer from "../Footer";
import Navbar from "../Navbar";


export const PageLayout = ({ children }) => {
  return (
    <>
      <main className="wrapper">
        <div className="container">
          <Navbar />
          <div className="content">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};
