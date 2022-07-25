import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import Home from "./Pages/Home/Home";
import GradeFourToEight from "./Pages/Routes/LearningProgram/GradeFourToEight";
import GradeNineToTwelve from "./Pages/Routes/LearningProgram/GradeNineToTwelve";
import GradeThree from "./Pages/Routes/LearningProgram/GradeThree";
import Footer from "./Pages/Shared/Footer";
import Navbar from './Pages/Shared/Navbar';
import NotFound from "./Pages/Shared/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<GradeThree />} />
          <Route path="gradeEight" element={<GradeFourToEight />} />
          <Route path="gradeTwelve" element={<GradeNineToTwelve />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
