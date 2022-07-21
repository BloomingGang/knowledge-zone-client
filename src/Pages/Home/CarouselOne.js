import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

const CarouselOne = () => {
  return (
    <div className="px-7 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 pt-24">
      <Slider {...settings}>
        <div>
          <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX36886655.jpg" alt="" className="mx-auto w-full h-[300px]" />
        </div>
        <div>
          <img src="https://thumbs.dreamstime.com/b/disabled-children-studying-school-learning-program-inclusive-education-social-communicative-competence-environment-concept-182541310.jpg" alt="" className="mx-auto w-full h-[300px]" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?w=2000" alt="" className="mx-auto w-full h-[300px]" />
        </div>
        <div>
          <img src="https://www.digitallearninglab.org/wp-content/uploads/2015/10/virtual-2-2-1024x397.jpg" alt="" className="mx-auto w-full h-[300px]" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselOne;
