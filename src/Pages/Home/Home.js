import React from "react";
import HeroBanner from "../HeroBanner";
import Navbar from "../Home/Navbar";
import CardK from "./CardK";
import CoursesAutoSlider from "./CoursesAutoSlider";

import Learners from "./Learners";

import CarouselOne from "./CarouselOne";
import EduBanner from "./EduBanner";
import Investor from "./Investor";

import CardOne from "./CardOne";
import Reviews from "./Reviews";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroBanner />
      <Learners />
      <CardK></CardK>
      <Reviews></Reviews>
      <CarouselOne />
      <CardOne />
      <EduBanner></EduBanner>
      <Investor></Investor>
      <CoursesAutoSlider></CoursesAutoSlider>
    </div>
  );
};

export default Home;
