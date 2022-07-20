
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar";
import GradeFourToEight from "./Pages/Routes/LearningProgram/GradeFourToEight";
import GradeNineToTwelve from "./Pages/Routes/LearningProgram/GradeNineToTwelve";
import GradeThree from "./Pages/Routes/LearningProgram/GradeThree";
import LearningProgram from "./Pages/Routes/LearningProgram/LearningProgram";
import Footer from "./Pages/Shared/Footer";
import NotFound from "./Pages/Shared/NotFound";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<LearningProgram />}>
          <Route path="gradeThree" element={<GradeThree />} />
          <Route path="gradeEight" element={<GradeFourToEight />} />
          <Route path="gradeTwelve" element={<GradeNineToTwelve />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
