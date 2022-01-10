import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Clients = () => {
  return (
    <>
      <main className="wrapper">
        <div className="container">
          <Navbar />
          <div className="content">
            <br />
            <div className="title">
              <h3>[Our Clients]</h3>
              <br />
              <article>[some text]</article>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Clients;
