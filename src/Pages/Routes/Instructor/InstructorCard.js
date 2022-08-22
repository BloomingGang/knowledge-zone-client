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
      className="card card-compact bg-gray-100 transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 duration-300"
    >
      <figure>
        <img
          style={{ height: "350px" }}
          src={img}
          alt="instructor"
          className="rounded-t-xl w-full"
        />
      </figure>

      <div className=" items-center text-center">
        <h2 className=" text-primary">{name}</h2>
        <h3>{education}</h3>
        <div className="text-2xl sm:text-center">
          <a href={facebook} target={"_blank"}>
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
              <button className="text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 mx-2">
                <TrashIcon className="h-9 w-9 cursor-pointer" />
              </button>

              <button className="text-green-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 mx-2">
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
