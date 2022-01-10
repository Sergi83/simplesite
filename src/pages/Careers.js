import React from "react";
// import { Link } from 'react-router-dom';

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Careers = () => {
  return (
    <>
      <main className="wrapper">
        <div className="container">
          <Navbar />
          <div className="content">
            <br />
            <div className="title">
              <h3>[careers]</h3>
              <br />
              <article>[careers text]</article>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
