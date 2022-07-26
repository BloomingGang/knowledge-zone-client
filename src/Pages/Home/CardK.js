import React from "react";
import devices from "../../img/devices.svg";
import img from "../../img/handelDevice.png";
import hoverImg from "../../img/hover.png";
import icon from "../../img/logo.png";
import { Link } from "react-router-dom";

const CardK = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse p-0">
          <div className="lg:w-[60%] w-full flex justify-center  ">
            <img
              src={img}
              class="lg:max-w-sm w-[90%] rounded-lg shadow-2xl   "
              alt=""
            />
          </div>
          <div className="px-16  lg:w-[40%]">
            <h1 class="text-5xl font-bold">Available on all Platforms</h1>
            <h1>Our products can be used on all devices.</h1>
            <img src={devices} alt="" />
          </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="bg-[#F7F5FD] border-2 rounded-3xl">
          <div className=" lg:flex static px-[10%]">
            <div className="lg:w-[50%] w-full flex justify-around flex-col sm:order-2 lg:order-1 gap-y-3 lg:gap-y-0 mt-5 lg:mt-0">
              <div className="w-[50px] h-[50px]">
                <img src={icon} alt="" />
              </div>
              <h2 className=" text-2xl lg:text-3xl font-bold">
                Play-Based Learning
              </h2>
              <p className="text-xl">
                Fuel your child's interest in reading, math, creativity, and
                more with play-based games.
              </p>
              <div>
                <Link to={"#"} className="btn">
                  {" "}
                  EXPLORE &gt;{" "}
                </Link>
              </div>
            </div>
            <div className="lg:w-[50%] w-full flex justify-center sm:order-1 lg:order-2">
              <img className="py-10 text-center" src={hoverImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardK;
