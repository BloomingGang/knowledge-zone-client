import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const InstructorCard = ({ instructor, index }) => {
  const { name, img, education, facebook, twitter, instagram } = instructor;
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div
      key={index}
      className="bg-gray-100 transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 duration-300 rounded-lg"
    >
      <figure>
        <img
          style={{ height: "350px" }}
          src={img}
          alt="instructor"
          className="rounded-t-lg w-full"
        />
      </figure>

      <div className="items-center text-center pt-3">
        <h2 className="text-2xl font-bold text-primary">{name}</h2>
        <p className="pb-3">{education}</p>
        <div className="text-2xl sm:text-center">
          <a href={facebook} target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-facebook-square mr-4"></i>{" "}
          </a>
          <a href={twitter} target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-twitter-square mr-4"></i>{" "}
          </a>
          <a href={instagram} target={"_blank"} rel="noreferrer">
            <i className="fa-brands fa-youtube-square"></i>
          </a>
        </div>
        {admin && (
          <div>
            <div class="divider"></div>
            <div className="flex justify-between">
              <button className="text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mx-6 mb-4">
                <TrashIcon className="h-9 w-9 cursor-pointer" />
              </button>

              <button className="text-green-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mx-6 mb-4">
                <PencilAltIcon className="h-9 w-9" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorCard;
