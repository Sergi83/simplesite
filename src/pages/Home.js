import React from "react";

// import components
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Main from "../components/Main";
import Footer from "../components/Footer";

// layouts
import HeaderLayout from "../components/layouts/HeaderLayout";
import MainLayout from "../components/layouts/MainLayout";


const Home = () => {
  return (
    <>
      <HeaderLayout>
        <Navbar />
        <br />
        <Banner />
      </HeaderLayout>
      <MainLayout>
        <Main />
      </MainLayout>
      <Footer />
    </>
  );
};

export default Home;
