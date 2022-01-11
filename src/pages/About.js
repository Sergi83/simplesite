import React from "react";
import Main from "../components/Main";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// layout
import MainLayout from '../components/layouts/MainLayout';


const About = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <Main />
      </MainLayout>
      <Footer />
    </>
  );
};

export default About;
