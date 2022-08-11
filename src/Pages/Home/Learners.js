import React from "react";
import trust1 from "../../img/trust_1.svg";
import trust2 from "../../img/trust_2.svg";
import trust3 from "../../img/trust_3.svg";
import trust4 from "../../img/trust_4.svg";

const Learners = () => {
  return (
    <div className="w-10/12 mx-auto bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 shadow-xl pt-4 md:mt-[-50px] bg-white rounded-xl">
      <h1 className="text-center md:text-3xl text-2xl text-primary font-bold xl mb-10">
        Trusted By 150 Million+ Learners
      </h1>
      <div className="md:flex justify-evenly">
        <div className="mb-8">
          <div className="flex justify-center">
            <img width={50} src={trust1} alt="" />
          </div>
          <p className="font-bold text-center">
            Live and <br /> Personalised
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <img width={50} src={trust2} alt="" />
          </div>
          <p className="font-bold text-center">
            Top Qualified <br /> Teachers
          </p>
        </div>
        <div className="mb-8">
          <div className="flex justify-center">
            <img width={50} src={trust3} alt=""/>
          </div>
          <p className="font-bold text-center">
            Activity-based <br /> Learning
          </p>
        </div>
        <div>

          <div className="flex justify-center">
            <img width={50} src={trust4} alt="" />
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
