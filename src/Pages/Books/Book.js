import React from "react";
import { useNavigate } from "react-router-dom";

// import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
// import { useAuthState } from "react-firebase-hooks/auth";
// import useAdmin from "../../hooks/useAdmin";
// import auth from "../../firebase.init";

const Book = ({ book }) => {
  const { bookName, img, _id } = book;
  const navigate = useNavigate();
  const handleBook = (id) => {
    navigate(`/book/${id}`);
  };
  return (
    <div>
      <div className="card bg-gray-100 h-[600px] transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300">
        <div className="">
          <img src={img} alt="/" className="rounded-t-xl h-[350px] w-full" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-xl   text-indigo-800 pb-8">
            {bookName}
          </h2>
          {/* <p className="items-center text-justify">
            {about.slice(0, 250)}{" "}
            <span className="text-primary font-semibold">
              {about.length > 250 ? (
                <label
                  for="my-modal-3"
                  className="cursor-pointer"
                  onClick={() => setModal(book)}
                >
                  Read More...
                </label>
              ) : (
                " "
              )}
            </span>
          </p> */}
          <div className="card-actions justify-center">
            <button
              className="border-2 shadow-lg hover:bg-indigo-500 hover:text-black p-2 rounded-lg bg-indigo-800 text-white font-bold transition duration-300"
              onClick={() => handleBook(_id)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* onClick={() => setModal(book)} */}
    </div>
  );
};

export default Book;
