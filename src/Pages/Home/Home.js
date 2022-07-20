import React from "react";
import CardK from "./CardK";
import EduBanner from "./EduBanner";
import Reviews from "./Reviews";
import Navbar from "../Home/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CardK></CardK>
      <Reviews></Reviews>
      <EduBanner></EduBanner>
    </div>
  );
};

export default Home;
