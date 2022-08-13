import React from "react";
import heroIMG from "../../img/assets/banner2.gif";

const HeroBanner = () => {
  return (
    <div className="hero pb-10">
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <div className="w-1/2 flex justify-center">
          <img src={heroIMG} alt="banner" class="w-full" />
        </div>
        <div className="md:w-1/2 ">
          <h1 className="lg:text-5xl text-3xl text-violet-900 font-bold font-serif">
            Welcome To The Future Of Learning
          </h1>
          <p className="py-6 text-lg">
            KNOWLEDGE ZONE makes learning engaging & effective by leveraging
            deep pedagogy & cutting edge technology. With offerings ranging from
            adaptive self-learning courses on apps & web to personalised 1-on-1
            classes with expert teachers for ages 4-18+, we have programs for
            every learner.
          </p>
          <button className="btn btn-primary">Explore Learning Programs</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
