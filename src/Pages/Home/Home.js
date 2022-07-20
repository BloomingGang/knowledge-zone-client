import React from "react";
import HeroBanner from "../HeroBanner";
import Navbar from "../Home/Navbar";
import CardK from "./CardK";
import Learners from "./Learners";
import Reviews from "./Reviews";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroBanner/>
      <Learners/>
      <CardK></CardK>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
