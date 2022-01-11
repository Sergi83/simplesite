import React from "react";
// import { Link } from 'react-router-dom';

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// layout
import MainLayout from "../components/layouts/MainLayout";

const Contact = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <div className="content">
          <br />
          <div className="title">
            <h3>[contact form]</h3>
            <br />
            <button>confirm</button>
          </div>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default Contact;
