import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../img/assets/slider1.jpg";
import img2 from "../../img/assets/slider2.jpg";
import img3 from "../../img/assets/slider3.jpg";
import img4 from "../../img/assets/slider4.jpg";

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
    <div className="px-7">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" className="mx-auto w-full h-[300px]" />
        </div>
        <div>
          <img src={img2} alt="" className="mx-auto w-full h-[300px]" />
        </div>
        <div>
          <img src={img3} alt="" className="mx-auto w-full h-[300px]" />
        </div>
        <div>
          <img src={img4} alt="" className="mx-auto w-full h-[300px]" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselOne;
