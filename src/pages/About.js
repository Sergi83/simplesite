import React from "react";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// layout
import MainLayout from '../components/layouts/MainLayout';
import AboutContent from "../components/AboutContent";


const About = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <AboutContent/>
      </MainLayout>
      <Footer />
    </>
  );
};

export default About;
