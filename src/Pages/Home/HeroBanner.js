import React from "react";
import hero from "../../img/assets/removed.gif";

const HeroBanner = () => {
  return (
    <div className="hero pb-10 px-6">
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <div className="w-1/2 flex justify-center">
          <img src={hero} alt="banner" class="w-full" />
        </div>
        <div className="md:w-1/2 ">
          <h1 className="lg:text-4xl text-3xl text-violet-900 font-bold  ">
            Welcome To The Future Of Learning
          </h1>
          <p className="py-6 text-lg text-justify">
            KNOWLEDGE ZONE makes learning engaging & effective by leveraging
            deep pedagogy & cutting edge technology. With offerings ranging from
            adaptive self-learning courses on apps & web to personalised 1-on-1
            classes with expert teachers for ages 4-18+, we have programs for
            every learner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
