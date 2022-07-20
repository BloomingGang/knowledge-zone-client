
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import GradeFourToEight from "./Pages/Routes/LearningProgram/GradeFourToEight";
import GradeNineToTwelve from "./Pages/Routes/LearningProgram/GradeNineToTwelve";
import GradeThree from "./Pages/Routes/LearningProgram/GradeThree";
import LearningProgram from "./Pages/Routes/LearningProgram/LearningProgram";


import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";

import Home from "./Pages/Home/Home";



function App() {
  return (
    <div>

           <Routes>
           <Route path="/home" element={<LearningProgram/>} >
          <Route path="gradeThree" element={<GradeThree/>}/>
          <Route path="gradeEight" element={<GradeFourToEight/>}/>
          <Route path="gradeTwelve" element={<GradeNineToTwelve/>}/>
        </Route>
           </Routes>


      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>

      <Home></Home>


    </div>
  );
}

export default App;
