import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/solid";

const ClassCourseCart = ({ course }) => {
  const { price, title, img, _id, classCourse } = course;
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
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

  const handleCourseUpdate = (id) => {
    navigate(`/${classCourse}/Update/${id}`);
  };

  return (
    <section>
      <div className="card card-compact bg-gray-100 transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300">
        <figure>
          <img
            className="hover:scale-[1.1] transition duration-300"
            src={img}
            alt="course"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {title}</h2>
          <div class="divider"></div>

          <div className="flex  justify-between items-center">
            <span className="text-2xl font-bold text-green-700">$ {price}</span>
            <button
              className="border-2 shadow-lg hover:bg-indigo-500 hover:text-black p-2 rounded-lg bg-indigo-800 text-white font-bold transition duration-300"
              onClick={() => handleCourse(_id)}
            >
              Enroll Now
            </button>
          </div>

          {admin && (
            <div>
              <div class="divider"></div>
              <div className="flex justify-between">
                <button
                  onClick={() => handleDeleteCourse(_id)}
                  className="text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 mx-2"
                >
                  <label onClick={() => setModal(true)} for="my-modal-6">
                    <TrashIcon className="h-9 w-9 cursor-pointer" />
                  </label>
                </button>

                <button
                  onClick={() => handleCourseUpdate(_id)}
                  className="text-green-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 mx-2"
                >
                  <PencilAltIcon className="h-9 w-9" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {modal && (
        <>
          <input type="checkbox" id="my-modal-6" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <h3 class="font-bold text-lg">
                Congratulations random Internet user!
              </h3>
              <p class="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div class="modal-action">
                <label for="my-modal-6" class="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ClassCourseCart;
