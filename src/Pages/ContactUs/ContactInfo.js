import React from "react";

const ContactInfo = () => {
  return (
    <div className=" py-12">
      <h1 className="text-center text-violet-800 text-2xl font-bold pb-8">If You Have Any Query, Feel <br /> Free To Contact Us</h1>
    <div className="container mx-auto grid md:grid-cols-3 gap-3">
      <div className="text-xl flex items-center">
        <i class="bg-violet-800 rounded-xl p-3 mr-4 text-2xl text-white mr-2 fa-solid fa-phone"></i>
        <div>
          <p>
            <span>Call to ask any question</span> <br /> +880 15896445..
          </p>
        </div>
      </div>
      <div className="text-xl flex items-center">
        <i class="bg-violet-800 rounded-xl p-3 mr-2 text-2xl text-white mr-4 fa-solid fa-location-dot"></i>
        <div>
          <p>
            <span>Visit our office</span> <br /> Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div className="text-xl flex items-center">
        <i class="bg-violet-800 rounded-xl p-3 mr-4 text-2xl text-white mr-2 fa-solid fa-envelope"></i>
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
