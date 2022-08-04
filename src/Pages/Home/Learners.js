import React from "react";
import trust1 from "../../img/trust_1.svg";
import trust2 from "../../img/trust_2.svg";
import trust3 from "../../img/trust_3.svg";
import trust4 from "../../img/trust_4.svg";

const Learners = () => {
  return (
    <div className="w-10/12 mx-auto shadow-xl py-6 md:mt-[-50px] bg-white rounded-xl">
      <h1 className="text-center md:text-4xl text-2xl text-primary font-bold xl mb-10">
        Trusted By 150 Million+ Learners
      </h1>
      <div className="md:flex justify-evenly">
        <div className="mb-8">
          <div className="flex justify-center">
            <img src={trust1} alt="" className="h-[85px] w-[85px]" />
          </div>
          <p className="font-bold text-center">
            Live and <br /> Personalised
          </p>
        </div>
        <div className="mb-8">
          <div className="flex justify-center">
            <img src={trust2} alt="" className="h-[85px] w-[85px]" />
          </div>
          <p className="font-bold text-center">
            Top Qualified <br /> Teachers
          </p>
        </div>
        <div className="mb-8">
          <div className="flex justify-center">
            <img src={trust3} alt="" className="h-[85px] w-[85px]" />
          </div>
          <p className="font-bold text-center">
            Activity-based <br /> Learning
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <img src={trust4} alt="" className="h-[85px] w-[85px]" />
          </div>
          <p className="font-bold text-center">
            100% Safe For <br /> Kids
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learners;
