import React from "react";
import BooksCarousel from "../Books/BooksCarousel";
import LiveChat from "../ContactUs/LiveChat";
import AcademicCourses from "./AcademicCourses";
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
import SkillDevCourses from "./SkillDevCourses";

const Home = () => {
  return (
    <div>
      <HeroBanner />

      <AcademicCourses />
      <SkillDevCourses />
      {/* <Learners />
      <LearningProgram />
      <CardK /> */}
      <BooksCarousel />
      <Reviews />
      <Investor />
      {/* <EduBanner />
      <CarouselOne /> */}
      <CardOne />
      <CoursesAutoSlider />
      <LiveChat />
    </div>
  );
};

export default Home;
