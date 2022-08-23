import React from "react";
import Slider from "react-slick";
import course1 from "../../img/assets/academicCourses/1.png";
import course2 from "../../img/assets/academicCourses/2.png";
import course3 from "../../img/assets/academicCourses/3.png";
import course4 from "../../img/assets/academicCourses/4.png";
import course5 from "../../img/assets/academicCourses/5.png";
import course6 from "../../img/assets/academicCourses/6.png";
import course7 from "../../img/assets/academicCourses/7.png";
import course8 from "../../img/assets/academicCourses/8.png";
import course9 from "../../img/assets/academicCourses/9.png";
import course10 from "../../img/assets/academicCourses/10.png";
import course11 from "../../img/assets/academicCourses/11.png";

const AcademicCourses = () => {
  const academicCourses = [
    {
      picture: course1,
      link: "/classes",
    },
    {
      picture: course2,
      link: "/classes/two",
    },
    {
      picture: course3,
      link: "/classes/three",
    },
    {
      picture: course4,
      link: "/classes/four",
    },
    {
      picture: course5,
      link: "/classes/five",
    },
    {
      picture: course6,
      link: "/classes/six",
    },
    {
      picture: course7,
      link: "/classes/seven",
    },
    {
      picture: course8,
      link: "/classes/eight",
    },
    {
      picture: course9,
      link: "/classes/nine",
    },
    {
      picture: course10,
      link: "/classes/ten",
    },
    {
      picture: course11,
      link: "/classes/eleven",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container mx-auto py-24">
        <h1 className="text-4xl font-bold text-center text-violet-800 pb-12">
          Academic Courses
        </h1>
        <Slider {...settings}>
          {academicCourses.map((courses, index) => (
            <div>
              <div key={index}>
                <a href={courses.link}>
                  <img className="rounded-xl" src={courses.picture} alt="" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AcademicCourses;
