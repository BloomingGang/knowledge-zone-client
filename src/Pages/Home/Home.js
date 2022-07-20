import React from "react";
import CardK from "./CardK";
import Reviews from "./Reviews";
import Navbar from "../Home/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CardK></CardK>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
