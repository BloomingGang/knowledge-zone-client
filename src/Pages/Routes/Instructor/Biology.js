import React from "react";

const Biology = () => {
  const instructors = [
    {
      img: "https://i.ibb.co/94zrFhj/ins-1.jpg",
      name: "Hossain Rafi",
      education: "Bsc in Zoology, DU",
    },
    {
      img: "https://i.ibb.co/hZcdKJw/ins-2.jpg",
      name: "Nipa Akter",
      education: "Bsc in Zoology, JU",
    },
    {
      img: "https://i.ibb.co/WFL71Fb/ins-3.jpg",
      name: "Rakib Mia",
      education: "Bsc in Zoology, RU",
    },
    {
      img: "https://i.ibb.co/0B4v28f/ins-5.jpg",
      name: "Faisal Karim",
      education: "Bsc in Botany, CU",
    },
    {
      img: "https://i.ibb.co/Kh26LVW/ins-4.jpg",
      name: "Shafia Ahmed",
      education: "Bsc in Botany, BU",
    },

    {
      img: "https://i.ibb.co/yNDTsSm/ins-6.jpg",
      name: "Saddam Hossain",
      education: "Bsc in Zoology, JU",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-3 md:px-6 pb-16">
      {instructors.map((instructor, index) => (
        <div
          key={index}
          className="card card-compact bg-gray-100 transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 duration-300"
        >
          <figure>
            <img
              style={{ height: "350px" }}
              src={instructor.img}
              alt="instructor"
              className="rounded-t-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-primary">{instructor.name}</h2>
            <h3>{instructor.education}</h3>
            <div className="text-2xl sm:text-center">
              <a href="" target={"_blank"}>
                <i className="fa-brands fa-facebook-square mr-4"></i>{" "}
              </a>
              <a href="" target={"_blank"} rel="noreferrer">
                <i className="fa-brands fa-twitter-square mr-4"></i>{" "}
              </a>
              <a href="" target={"_blank"} rel="noreferrer">
                <i className="fa-brands fa-youtube-square"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Biology;
