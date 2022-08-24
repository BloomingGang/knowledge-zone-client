import React from "react";
import img1 from "../../img/assets/card1.png";
import img2 from "../../img/assets/card2.jpg";
import img3 from "../../img/assets/card3.jpg";
import logo1 from "../../img/assets/tds.png";
import logo2 from "../../img/assets/pa.png";
import logo3 from "../../img/assets/bbc.png";

const CardOne = () => {
  return (
    <div className="bg-violet-900 pb-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 py-16 ">
          <div className="bg-white rounded-xl p-5">
            <img src={logo1} alt="" className="w-[115px] h-[80px] pb-5" />
            <img src={img1} alt="" className="rounded-lg pb-5 h-[250px] w-96" />
            <p className="text-lg text-justify">
              Students are getting increasingly used to accessing information
              through video in their day-to-day lives, so are naturally eager to
              use similar resources in the classroom.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5">
            <img src={logo2} alt="" className="w-[115px] h-[80px] pb-5" />
            <img src={img2} alt="" className="rounded-lg pb-5 h-[250px] w-96" />
            <p className="text-lg text-justify">
              Knowledge Zone targets the entire education market from violet-800
              through to Secondary, Higher Education, Corporate learning,
              English Language learning and lifelong learning.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5">
            <img src={logo3} alt="" className="w-[115px] h-[80px] pb-5" />
            <img src={img3} alt="" className="rounded-lg pb-5 h-[250px] w-96" />
            <p className="text-lg text-justify">
              Knowledge Zone is now looking to build more relationships with
              various content providers, and to build up their search algorithm
              that allows you to refine clip searches by curriculum, topic, and
              source.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
