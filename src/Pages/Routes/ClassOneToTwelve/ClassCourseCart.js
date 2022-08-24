import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/solid";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Do You Want To Delete This ??",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#eb2f06",
      cancelButtonColor: "#00ab41",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const url = `http://localhost:5000/course/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            window.location.reload();
          });
      }
    });
  };

  const handleCourseUpdate = (id) => {
    navigate(`/${classCourse}/Update/${id}`);
  };

  return (
    <section>
      <div className="bg-gray-100 transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300 rounded-lg">
        <figure>
          <img className="w-full rounded-t-lg" src={img} alt="course" />
        </figure>
        <div className="px-5">
          <h2 className="text-center pt-3 font-bold text-xl"> {title}</h2>
          <div class="divider"></div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-violet-800">$ {price}</span>
            <button
              className="btn btn-sm border-violet-800 rounded-lg bg-violet-800 text-white font-bold hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
              onClick={() => handleCourse(_id)}
            >
              Enroll Now
            </button>
          </div>

          {admin && (
            <div>
              <div class="divider"></div>
              <div className="flex justify-between pb-4">
                <button
                  onClick={() => handleDeleteCourse(_id)}
                  className="text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mx-2"
                >
                  <label onClick={() => setModal(true)} for="my-modal-6">
                    <TrashIcon className="h-7 w-7 cursor-pointer" />
                  </label>
                </button>

                <button
                  onClick={() => handleCourseUpdate(_id)}
                  className="text-green-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mx-2"
                >
                  <PencilAltIcon className="h-7 w-7" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* {modal && (
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
      )} */}
    </section>
  );
};

export default ClassCourseCart;
