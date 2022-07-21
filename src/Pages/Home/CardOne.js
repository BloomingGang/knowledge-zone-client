import React from "react";
import img1 from "../../img/assets/card1.png";
import img2 from "../../img/assets/card2.png";
import img3 from "../../img/assets/card3.png";
import logo1 from "../../img/assets/cnn-logo.png";
import logo2 from "../../img/assets/forbs-logo.png";
import logo3 from "../../img/assets/wef-logo.png";

const CardOne = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white pb-12">
      <div className="grid md:grid-cols-3 gap-10 py-16 px-10">
        <div className="bg-white rounded-xl p-5">
          <img src={logo1} alt="" className="w-[100px] h-[80px] pb-5" />
          <img src={img1} alt="" className="rounded-lg pb-5" />
          <p className="text-lg text-justify">
            Bangalore-based education technology company Byju's became India's
            most valuable startup in 2021, as the demand for online learning
            surged.
          </p>
        </div>
        <div className="bg-white rounded-xl p-5">
          <img src={logo2} alt="" className="w-[100px] h-[80px] pb-5" />
          <img src={img2} alt="" className="rounded-lg pb-5" />
          <p className="text-lg text-justify">
            Bangalore-based education technology company Byju's became India's
            most valuable startup in 2021, as the demand for online learning
            surged.
          </p>
        </div>
        <div className="bg-white rounded-xl p-5">
          <img src={logo3} alt="" className="w-[100px] h-[80px] pb-5" />
          <img src={img3} alt="" className="rounded-lg pb-5" />
          <p className="text-lg text-justify">
            Bangalore-based education technology company Byju's became India's
            most valuable startup in 2021, as the demand for online learning
            surged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
