import React from "react";
import { useNavigate } from "react-router-dom";

import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../hooks/useAdmin";
import auth from "../../firebase.init";
import Swal from "sweetalert2";

const Book = ({ book }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const { bookName, img, _id } = book;
  const navigate = useNavigate();
  const handleBook = (id) => {
    navigate(`/book/${id}`);
  };
  const handleDeleteBook = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const url = `http://localhost:5000/bookDelete/${id}`;
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

  const handleBookUpdate = (id) => {
    navigate(`/updateBook/${id}`);
  };
  return (
    <div>
      <div className="card bg-gray-100 h-[640px] transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300">
        <div className="">
          <img src={img} alt="/" className="rounded-t-xl h-[350px] w-full" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-xl font-serif text-indigo-800 pb-8">
            {bookName}
          </h2>

          <div className="card-actions justify-center">
            <button
              className="border-2 shadow-lg hover:bg-indigo-500 hover:text-black p-2 rounded-lg bg-indigo-800 text-white font-bold transition duration-300"
              onClick={() => handleBook(_id)}
            >
              View Details
            </button>
          </div>
          {admin && (
            <div>
              <div class="divider"></div>
              <div className="flex justify-between">
                <button
                  onClick={() => handleDeleteBook(_id)}
                  className="text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 mx-2"
                >
                  <label for="my-modal-6">
                    <TrashIcon className="h-9 w-9 cursor-pointer" />
                  </label>
                </button>

                <button
                  onClick={() => handleBookUpdate(_id)}
                  className="text-green-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 mx-2"
                >
                  <PencilAltIcon className="h-9 w-9" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
