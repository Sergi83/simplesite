import React from "react";
import Main from "../components/Main";
// import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <main className="wrapper">
        <Navbar />
        <Main />
      </main>
      <Footer />
    </>
  );
};

export default About;
