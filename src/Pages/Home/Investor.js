import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Investor = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const investors = [
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Chan_Zuck.png?auto=format&fit=max&w=640",
      name: "Dr. Priscilla Chan",
      description:
        "The Chan  initiative supports innovative models of learning wherever they are around the world. Knowledge Zone represents an opportunity to help even more students develop a love for learning and unlock their potential.",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/General_At.png?auto=format&fit=max&w=640",
      name: "Sandeep Naik",
      description:
        "General Atlantic firmly believes in helping high quality companies achieve long-term success. We are confident that Knowledge Zone will redefine the learning landscape for students globally.",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Silverlake.png?auto=format&fit=max&w=640",
      name: "Greg Mondre",
      description:
        "Our partnership with Byju and his impressive team in their mission to help children in India and around the world achieve their true potential. We look forward to forging new partnerships and continue to cultivate a comprehensive ecosystem of innovative educational offerings.",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Verlinvest.png?auto=format&fit=max&w=640",
      name: "Nicholas Cator",
      description:
        "We are very happy to partner with the talented team at Knowledge Zone to expand in India and abroad. We look forward to supporting the management team to expand to new markets and to further build the road.",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Naspers.png?auto=format&fit=max&w=256",
      name: "Russell Dreisenstock            ",
      description:
        "Naspers partners with high-potential companies that are tackling big societal needs like education, which represents a significant sector ripe for disruption across the globe.            ",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Tiger_Global.png?auto=format&fit=max&w=256",
      name: "Scott Shleifer",
      description:
        "Knowledge Zone has emerged as a leader in the Indian education-tech sector. They are pioneering technology shaping the future of learning for millions of school students in India. We are excited to support Byju and the team. ",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Qatar.png?auto=format&fit=max&w=256",
      name: "Mansoor Bin Ebrahim",
      description:
        "We are excited to working with them as Knowledge Zone builds on and accelerates its  growth trajectory by forging new partnerships and continuing to cultivate a comprehensive ecosystem of innovative educational offerings.",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Owl.png?auto=format&fit=max&w=256",
      name: "Amit Patel            ",
      description:
        "Our partnership with Knowledge Zone will reinforce our commitment to creating the best and most unique learning journeys for the new-age learners.            ",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/Lightspeed.png?auto=format&fit=max&w=256",
      name: "Dev Khare            ",
      description:
        "I am confident that Knowledge Zone market leading offerings are unique and transformational. Their products are specifically geared with a differentiated pedagogy to the needs of one million students.            ",
    },
    {
      avatar:
        "https://byjus-f9igwgtqi.whjr.dev/images/aboutus/investors/IFC.png?auto=format&fit=max&w=256",
      name: "Ruchira Shukla",
      description:
        "This partnership with Knowledge Zone will help enhance our focus on technology enabled learning platforms for academic improvement, skill development platforms as well as supplemental and low cost education solutions.            ",
    },
  ];

  return (
    <div>
      <div className="p-10">
        <h2 className="text-center text-5xl font-bold text-black">
          {" "}
          Our Investors{" "}
        </h2>
        <h4 className="text-center text-xl text-black py-4">
          50+ Investors who have been strong partners in our growth story
        </h4>
        <Slider {...settings}>
          {investors.map((investor, index) => (
            <div key={index}>
              <div className="py-16 px-6">
                <div className="card bg-base-100 shadow-xl min-h-[500px]">
                  <figure className="px-10 pt-6">
                    <img
                      src={investor.avatar}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <p className="text-justify text-lg">{investor.description}</p>
                    <h2 className="card-title">{investor.name}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Investor;
