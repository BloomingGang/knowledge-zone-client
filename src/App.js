import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Blogs from "./Pages/Blogs/Blogs";
import Books from "./Pages/Books/Books";
import Home from "./Pages/Home/Home";
import GradeFourToEight from "./Pages/Home/LearningProgram/GradeFourToEight";
import GradeNineToTwelve from "./Pages/Home/LearningProgram/GradeNineToTwelve";
import GradeThree from "./Pages/Home/LearningProgram/GradeThree";
import AllClass from "./Pages/Routes/ClassOneToTwelve/AllClass";
import ClassEight from "./Pages/Routes/ClassOneToTwelve/ClassEight";
import ClassEleven from "./Pages/Routes/ClassOneToTwelve/ClassEleven";
import ClassFIve from "./Pages/Routes/ClassOneToTwelve/ClassFIve";
import ClassFour from "./Pages/Routes/ClassOneToTwelve/ClassFour";
import ClassNine from "./Pages/Routes/ClassOneToTwelve/ClassNine";
import ClassOne from "./Pages/Routes/ClassOneToTwelve/ClassOne";
import ClassSeven from "./Pages/Routes/ClassOneToTwelve/ClassSeven";
import ClassSix from "./Pages/Routes/ClassOneToTwelve/ClassSix";
import ClassTen from "./Pages/Routes/ClassOneToTwelve/ClassTen";
import ClassThree from "./Pages/Routes/ClassOneToTwelve/ClassThree";
import ClassTwelve from "./Pages/Routes/ClassOneToTwelve/ClassTwelve";
import ClassTwo from "./Pages/Routes/ClassOneToTwelve/ClassTwo";
import Courses from "./Pages/Routes/Courses/Courses";
import DiscountCourse from "./Pages/Routes/Courses/DiscountCourse";
import EnglishCourse from "./Pages/Routes/Courses/EnglishCourse";
import EntertainingCourse from "./Pages/Routes/Courses/EntertainingCourse";
import FreeCourse from "./Pages/Routes/Courses/FreeCourse";
import IslamicCourse from "./Pages/Routes/Courses/IslamicCourse";
import KidsCourse from "./Pages/Routes/Courses/KidsCourse";
import LiveCourse from "./Pages/Routes/Courses/LiveCourse";
import SpecialCourse from "./Pages/Routes/Courses/SpecialCourse";
import Bengali from "./Pages/Routes/Instructor/Bengali";
import Biology from "./Pages/Routes/Instructor/Biology";
import Chemistry from "./Pages/Routes/Instructor/Chemistry";
import English from "./Pages/Routes/Instructor/English";
import Finance from "./Pages/Routes/Instructor/Finance";
import Instructor from "./Pages/Routes/Instructor/Instructor";
import Mathematics from "./Pages/Routes/Instructor/Mathematics";
import Physics from "./Pages/Routes/Instructor/Physics";
import Programming from "./Pages/Routes/Instructor/Programming";
import Religious from "./Pages/Routes/Instructor/Religious";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";
import NotFound from "./Pages/Shared/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<GradeThree />} />
          <Route path="gradeEight" element={<GradeFourToEight />} />
          <Route path="gradeTwelve" element={<GradeNineToTwelve />} />
        </Route>
        {/* instructor route list */}
        <Route path="/instructor" element={<Instructor />}>
          <Route index element={<Bengali />} />
          <Route path="english" element={<English />} />
          <Route path="mathematics" element={<Mathematics />} />
          <Route path="chemistry" element={<Chemistry />} />
          <Route path="physics" element={<Physics />} />
          <Route path="biology" element={<Biology />} />
          <Route path="finance" element={<Finance />} />
          <Route path="religious" element={<Religious />} />
          <Route path="programming" element={<Programming />} />
        </Route>
        {/* Courses route list */}
        <Route path="/courses" element={<Courses />}>
          <Route index element={< FreeCourse/>} />
          <Route path="" element={<DiscountCourse />} />
          <Route path="" element={< LiveCourse/>} />
          <Route path="" element={< SpecialCourse/>} />
          <Route path="" element={< IslamicCourse/>} />
          <Route path="" element={< KidsCourse/>} />
          <Route path="" element={< EntertainingCourse/>} />
          <Route path="" element={< />} />
          <Route path="" element={< />} />
          <Route path="" element={< />} />
          <Route path="" element={< />} />
          <Route path="" element={< />} />
        </Route>
        {/* class 1 to 12 route list */}
        <Route path="/classes" element={<AllClass/>}>
          <Route index element={<ClassOne/>} />
          <Route path="two" element={<ClassTwo />} />
          <Route path="three" element={<ClassThree />} />
          <Route path="four" element={<ClassFour />} />
          <Route path="five" element={<ClassFIve />} />
          <Route path="six" element={<ClassSix />} />
          <Route path="seven" element={<ClassSeven />} />
          <Route path="eight" element={<ClassEight />} />
          <Route path="nine" element={<ClassNine />} />
          <Route path="ten" element={<ClassTen />} />
          <Route path="eleven" element={<ClassEleven />} />
          <Route path="twelve" element={<ClassTwelve />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/books" element={<Books></Books>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
