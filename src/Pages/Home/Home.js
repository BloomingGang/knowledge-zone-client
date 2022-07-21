
import React from 'react';
import CoursesAutoSlider from './CoursesAutoSlider';
import HeroBanner from "../HeroBanner";
import Navbar from "../Home/Navbar";
import CardK from "./CardK";
import CarouselOne from "./CarouselOne";
import EduBanner from "./EduBanner";
import Investor from "./Investor";
import Reviews from "./Reviews";
import CardOne from "./CardOne";
const Home = () => {

 
  return (
    <div>
      <Navbar></Navbar>
      <HeroBanner />
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
