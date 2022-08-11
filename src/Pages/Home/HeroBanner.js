import React from "react";
import heroIMG from "../../img/assets/banner2.gif";

const HeroBanner = () => {
  return (
    <div class="hero pb-6 pt-0">
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <div className="w-1/2 flex justify-center">
        <img src={heroIMG} alt="banner" class="" />
        </div>
        <div className="md:w-1/2 ">
          <h1 className="text-5xl text-violet-900 font-bold ">Welcome to the future of learning</h1>
          <p className="py-6">
            KNOWLEDGE ZONE makes learning engaging & effective by leveraging deep
            pedagogy & cutting edge technology. With offerings ranging from
            adaptive self-learning courses on apps & web to personalised 1-on-1
            classes with expert teachers for ages 4-18+, we have programs for
            every learner.
          </p>
          <button className="btn btn-primary border-white">Explore Learning Programs</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
