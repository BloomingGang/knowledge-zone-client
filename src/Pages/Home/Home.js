

import React from 'react';

import HeroBanner from "../HeroBanner";
import EduBanner from '../Home/EduBanner';
import Navbar from "../Home/Navbar";
import CardK from './CardK';
import CardOne from './CardOne';
import CarouselOne from './CarouselOne';
import CoursesAutoSlider from './CoursesAutoSlider';
import Investor from './Investor';
import Learners from './Learners';
import Reviews from './Reviews';




const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroBanner/>
      <Learners/>
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
