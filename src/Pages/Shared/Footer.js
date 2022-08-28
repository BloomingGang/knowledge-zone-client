import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-violet-900 text-white py-12">
      <div className="w-4/5 mx-auto lg:flex lg:justify-between sm:grid sm:grid-cols-1 items-center">
        <div className="flex">
          <img
            className="mr-4 w-4/5"
            src="/images/logo/app-store.svg"
            alt="app store logo"
          />
          <img
            className="w-4/5"
            src="/images/logo/google-play.svg"
            alt="google play logo"
          />
        </div>

        <div>
          <p className="font-bold pt-4 md:pt-0">Contact Us</p>
          <p>knowledgezone404@gmail.com</p>
        </div>

        <div className="text-xl my-4 sm:text-center">
          <p className="mb-2">Follow Us On</p>
          <a href="#" target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-facebook-square mr-4"></i>{" "}
          </a>
          <a href="" target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-twitter-square mr-4"></i>{" "}
          </a>
          <a href="" target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-instagram-square mr-4"></i>{" "}
          </a>
          <a href="" target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-github-square mr-4"></i>
          </a>
          <a href="" target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-youtube-square"></i>
          </a>
        </div>
      </div>

      <hr className="w-4/5 mx-auto my-6" />
      <p className="text-center">
        {" "}
        Copyright &copy; knowledge-zone {year} all the right reserved | Designed
        by Knowledge Zone Team
      </p>
    </div>
  );
};

export default Footer;
