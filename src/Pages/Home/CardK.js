import React from "react";
import devices from "../../img/devices.svg";
import img from "../../img/handelDevice.png";

const CardK = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <div className="w-3/5 flex justify-center  ">
            <img src={img} class="max-w-sm rounded-lg shadow-2xl   " alt="" />
          </div>
          <div className="px-16  w-2/5">
            <h1 class="text-5xl font-bold">Available on all Platforms</h1>
            <h1>Our products can be used on all devices</h1>
            <img src={devices} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardK;
