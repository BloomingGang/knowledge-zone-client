import React from "react";
import trust1 from "../../img/trust_1.svg";
import trust2 from "../../img/trust_2.svg";
import trust3 from "../../img/trust_3.svg";
import trust4 from "../../img/trust_4.svg";

const Learners = () => {
  return (
    <div className="w-10/12 mx-auto shadow-xl py-6 md:mt-[-50px] bg-white rounded-xl">
      <h1 className="text-center md:text-3xl text-2xl text-primary font-bold xl mb-10">
        Trusted by 150 million+ learners
      </h1>
      <div className="md:flex justify-evenly mb-4">
        <div>
          <div className="w-3/5 mx-auto">
            <img src={trust1} alt="" />
          </div>
          <p className="font-bold text-center">
            Live and <br /> personalised
          </p>
        </div>
        <div>
          <div className="w-3/5 mx-auto">
            <img src={trust2} alt="" />
          </div>
          <p className="font-bold text-center">
            Top qualified <br /> teachers
          </p>
        </div>
        <div>
          <div className="w-3/5 mx-auto">
            <img src={trust3} alt="" />
          </div>
          <p className="font-bold text-center">
            Activity-based <br /> learning
          </p>
        </div>
        <div>
          <div className="w-3/5 mx-auto">
            <img src={trust4} alt="" />
          </div>
          <p className="font-bold text-center">
            100% safe for <br /> kids
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learners;
