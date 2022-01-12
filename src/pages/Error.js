import React from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// layout
import MainLayout from "../components/layouts/MainLayout";

const Error = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <div className="content">
          <br />
          <div className="title">
            <h3>No such page</h3>
            <br />
            <Link to="/">to homepage</Link>
          </div>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default Error;
