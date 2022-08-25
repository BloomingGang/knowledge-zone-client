import React from "react";

const ContactInfo = () => {
  return (
    <div
      data-aos-delay="200"
      data-aos="zoom-in"
      data-aos-duration="1000"
      className=" py-12"
    >
      <h1 className="text-center text-violet-800 text-2xl font-bold pb-8">
        If You Have Any Query, Feel <br /> Free To Contact Us
      </h1>
      <div className="w-10/12 md:w-11/12 mx-auto grid md:grid-cols-3 gap-3">
        <div className="text-xl flex items-center">
          <i className="bg-violet-800 rounded-xl p-3 mr-4 text-2xl text-white fa-solid fa-phone"></i>
          <div>
            <p>
              <span>Call to ask any question</span> <br /> +880 1589644
            </p>
          </div>
        </div>
        <div className="text-xl flex items-center">
          <i className="bg-violet-800 rounded-xl p-3  text-2xl text-white mr-4 fa-solid fa-location-dot"></i>
          <div>
            <p>
              <span>Visit our office</span> <br /> Dhaka, Bangladesh
            </p>
          </div>
        </div>
        <div className="text-xl flex items-center">
          <i className="bg-violet-800 rounded-xl p-3 mr-4 text-2xl text-white fa-solid fa-envelope"></i>
          <div>
            <p>
              <span>Email to get free quote</span> <br />
              knowledgezone404@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
