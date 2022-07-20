import React from "react";
import HeroBanner from "../HeroBanner";
import Navbar from "../Home/Navbar";
import CardK from "./CardK";
import EduBanner from "./EduBanner";
import Reviews from "./Reviews";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroBanner/>
      <CardK></CardK>
      <Reviews></Reviews>
      <EduBanner></EduBanner>
    </div>
  );
};

export default Home;
