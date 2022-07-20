import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import GradeFourToEight from "./Pages/Routes/LearningProgram/GradeFourToEight";
import GradeNineToTwelve from "./Pages/Routes/LearningProgram/GradeNineToTwelve";
import GradeThree from "./Pages/Routes/LearningProgram/GradeThree";
import LearningProgram from "./Pages/Routes/LearningProgram/LearningProgram";

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
    </div>
  );
}

export default App;
