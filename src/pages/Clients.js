import React from "react";
// import { Link } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// layout
import MainLayout from "../components/layouts/MainLayout";

const Clients = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <div className="content">
          <br />
          <div className="title">
            <h3>[Our Clients]</h3>
            <br />
            <article>[some text]</article>
          </div>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default Clients;
