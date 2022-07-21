
import React from "react";
import CoursesAutoSlider from "./CoursesAutoSlider";
import Navbar from "../Shared/Navbar";
import CardK from "./CardK";
import CardOne from "./CardOne";
import CarouselOne from "./CarouselOne";
import EduBanner from "./EduBanner";
import Investor from "./Investor";
import Learners from "./Learners";
import Reviews from "./Reviews";
import HeroBanner from "./HeroBanner";
import LearningProgram from "../Routes/LearningProgram/LearningProgram";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroBanner/>
      <Learners/>
      <LearningProgram/>
      <CardK></CardK>
      <Reviews></Reviews>
      <EduBanner></EduBanner>
      <Investor></Investor>
      <CarouselOne />
      <CardOne />
      {/* <CoursesAutoSlider></CoursesAutoSlider> */}
    </div>
  );
};

export default Home;
