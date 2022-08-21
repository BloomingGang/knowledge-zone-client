import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CoursesAutoSlider = () => {
  const sliderItems = [
    {
      course: "Math",
    },
    {
      course: "English",
    },
    {
      course: "Bangla",
    },
    {
      course: "Music",
    },
    {
      course: "Psychology",
    },
    {
      course: "Sociology",
    },
    {
      course: "Coding",
    },
  ];
  var settings = {
    infinite: true,
    speed: 9000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 py-12 px-7">
      <div className="">
        <img
          style={{ marginTop: "-100px" }}
          width={100}
          className="bg-blue-200 p-3 rounded-full mx-auto"
          src="/images/logo/kz.png"
          alt=""
        />
      </div>

      <h1 className="text-white text-center text-3xl my-8">
        Our Brands & Products
      </h1>

      <div className="container mx-auto">
        <Slider {...settings}>
          {sliderItems.map((item, index) => (
            <div>
              <div
                className="bg-white p-6 rounded-2xl m-4 font-bold text-center"
                key={index}
              >
                <i className="text-2xl text-indigo-900">
                  K<span className="text-purple-900">Z</span>
                </i>
                <h2 className="text-orange-700 text-2xl">{item.course}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CoursesAutoSlider;
