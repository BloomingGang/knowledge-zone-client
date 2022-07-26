import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/ContactUs/Contact";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Blogs from "./Pages/Blogs/Blogs";
import Books from "./Pages/Books/Books";
import Home from "./Pages/Home/Home";
import GradeFourToEight from "./Pages/Home/LearningProgram/GradeFourToEight";
import GradeNineToTwelve from "./Pages/Home/LearningProgram/GradeNineToTwelve";
import GradeThree from "./Pages/Home/LearningProgram/GradeThree";
import Bangla from "./Pages/Routes/Courses/Bangla";
import Courses from "./Pages/Routes/Courses/Courses";
import EnglishCourse from "./Pages/Routes/Courses/EnglishCourse";
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

        <Route path="contact" element={<Contact />} />
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
          <Route index element={<Bangla />} />
          <Route path="english" element={<EnglishCourse />} />
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
