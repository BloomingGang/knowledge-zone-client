
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";

import Home from "./Pages/Home/Home";


function App() {
  return (
    <div>

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
