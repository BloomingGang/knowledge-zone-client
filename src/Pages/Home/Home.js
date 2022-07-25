import React from "react";
import CardK from './CardK';
import CardOne from './CardOne';
import CarouselOne from './CarouselOne';
import CoursesAutoSlider from "./CoursesAutoSlider";
import EduBanner from "./EduBanner";
import HeroBanner from './HeroBanner';
import Investor from './Investor';
import Learners from "./Learners";
import LearningProgram from "./LearningProgram/LearningProgram";
import Reviews from './Reviews';

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Learners/>
      <LearningProgram/>
      <CardK></CardK>
      <Reviews></Reviews>
      <EduBanner></EduBanner>
      <Investor></Investor>
      <CarouselOne />
      <CardOne />
      <CoursesAutoSlider></CoursesAutoSlider>
    </div>
  );
};

export default Home;
