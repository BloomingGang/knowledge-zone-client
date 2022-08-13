import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import { TrashIcon, PlusIcon, PencilAltIcon } from "@heroicons/react/solid";

const ClassCourseCart = ({ course }) => {
  const { price, title, img, _id, classCourse } = course;
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();
  const handleCourse = (id) => {
    navigate(`/${classCourse}/coursesInfo/${id}`);
  };
  const handleDeleteCourse = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://immense-meadow-70411.herokuapp.com/course/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.reload();
        });
    }
  };

  return (
    <section>
      <div className="card card-compact hover:shadow-2xl  bg-base-100 shadow-xl">
        <figure>
          <img
            className="hover:scale-[1.1] transition duration-300"
            src={img}
            alt="course"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {title}</h2>
          <hr className="border-2" />

          <div className="flex  justify-between items-center">
            <h3 className="text-2xl font-bold">
              $
              <span className="text-base font-medium text-red-500">
                {price}
              </span>
            </h3>
            <button
              className="border-2 shadow-lg hover:bg-transparent hover:text-black p-2 rounded-lg bg-primary text-white font-bold transition duration-300"
              onClick={() => handleCourse(_id)}
            >
              Enroll Now
            </button>
          </div>

          {admin && (
            <div>
              <hr className="border-2 mb-3" />
              <div className="flex justify-between">
                <button className="text-center flex bg-[#7d16eb] border-2 border-gray-700 rounded-lg px-2 py-2 hover:bg-transparent text-white hover:text-black transition duration-300">
                  {" "}
                  <PlusIcon className="h-5 text-center w-5"></PlusIcon> Add
                </button>
                <button
                  onClick={() => handleDeleteCourse(_id)}
                  className="text-center flex bg-[#7d16eb] border-2 border-gray-700 rounded-lg px-2 py-2 hover:bg-transparent text-white hover:text-black transition duration-300"
                >
                  {" "}
                  <TrashIcon className="h-5 text-center w-5" /> Delete
                </button>
                <button className="text-center flex bg-[#7d16eb] border-2 border-gray-700 rounded-lg px-2 py-2 hover:bg-transparent text-white hover:text-black transition duration-300">
                  <PencilAltIcon className="h-5 text-center w-5" />
                  Update
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClassCourseCart;
