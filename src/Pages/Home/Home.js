import React from "react";
import BooksCarousel from "../Books/BooksCarousel";
import LiveChat from "../ContactUs/LiveChat";
import CardK from "./CardK";
import CardOne from "./CardOne";
import CarouselOne from "./CarouselOne";
import CoursesAutoSlider from "./CoursesAutoSlider";
import EduBanner from "./EduBanner";
import HeroBanner from "./HeroBanner";
import Investor from "./Investor";
import Learners from "./Learners";
import LearningProgram from "./LearningProgram/LearningProgram";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Learners />
      <LearningProgram />
      <CardK />
      <BooksCarousel />
      <Reviews />
      {/* <EduBanner /> */}
      <Investor />
      <CarouselOne />
      <CardOne />
      <CoursesAutoSlider />
      <LiveChat />
    </div>
  );
};

export default Home;
