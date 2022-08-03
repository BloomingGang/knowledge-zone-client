import React from "react";
import heroIMG from "../../img/header_image_1.png";

const HeroBanner = () => {
  return (
    <div class="hero bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 text-white pb-6">
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <div className="w-1/2 flex justify-center p-4">
          <img src={heroIMG} alt="" class="max-w-sm pt-10 w-full" />
        </div>
        <div className="md:w-1/2 ">
          <h1 class="text-5xl font-bold ">Welcome to the future of learning</h1>
          <p class="py-6">
            KNOWLEDGE ZONE makes learning engaging & effective by leveraging deep
            pedagogy & cutting edge technology. With offerings ranging from
            adaptive self-learning courses on apps & web to personalised 1-on-1
            classes with expert teachers for ages 4-18+, we have programs for
            every learner.
          </p>
          <button class="btn btn-primary border-white">Explore Learning Programs</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
