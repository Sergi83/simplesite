import React from "react";
// import { Link } from 'react-router-dom';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <main className="wrapper">
        <div className="container">
          <Navbar />
          <div className="content">
            <br />
            <div className="title">
              <h3>[contact form]</h3>
              <br />
              <button>confirm</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
