import React from "react";

// import components
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
// import About from "./About";
// layouts
import HeaderLayout from "../components/layouts/HeaderLayout";

const Home = () => {
  return (
    <HeaderLayout>
      {/* Header container */}
      <Navbar />
      <br />

      {/* Header banner */}
      <Banner />
    </HeaderLayout>
  );
};

export default Home;
