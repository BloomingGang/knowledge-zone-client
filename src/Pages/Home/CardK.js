import React from "react";
import devices from "../../img/devices.svg";
import img from "../../img/assets/banner1.gif";
import hoverImg from "../../img/assets/banner3.gif";
import { Link } from "react-router-dom";

const CardK = () => {
  return (
    <div>
      <div className="hero py-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-[60%] w-full flex justify-center  ">
            <img
              src={img}
              className="w-3/4"
              alt=""
            />
          </div>
          <div className="px-16  lg:w-[40%]">
            <h1 className="text-5xl font-bold">Available on all Platforms</h1>
            <h1 className="text-indigo-700 font-bold">Our products can be used on all devices.</h1>
            <img src={devices} alt="" />
          </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="bg-blue-100 border-2 rounded-2xl">
          <div className=" lg:flex static px-[10%]">
            <div className="lg:w-[50%] w-full flex justify-around flex-col sm:order-2 lg:order-1 gap-y-3 lg:gap-y-0 mt-5 lg:mt-0">
              <h2 className=" text-2xl lg:text-3xl text-violet-800 font-bold">
                Play-Based Learning
              </h2>
              <p className="text-xl">
                Fuel your child's interest in reading, math, creativity, and
                more with play-based games.
                Fuel your child's interest in reading, math, creativity, and
                more with play-based games.
              </p>
              <div>
                <Link to={"#"} className="btn btn-primary">
                  {" "}
                  EXPLORE &gt;{" "}
                </Link>
              </div>
            </div>
            <div className="lg:w-[50%] w-full flex justify-center sm:order-1 lg:order-2">
              <img className="py-10 w-full lg:w-3/5 text-center" src={hoverImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardK;
