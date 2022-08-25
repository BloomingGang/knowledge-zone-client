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
      <div className="rounded-lg bg-gray-100 transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300">
        <div>
          <img src={img} alt="/" className="rounded-t-lg w-full" />
        </div>
        <div>
          <h2 className="text-center font-bold uppercase text-xl pt-4 text-violet-800">
            {bookName}
          </h2>
          <div className="card-actions justify-center py-4">
            <button
              className="border-2 shadow-lg hover:bg-violet-500 hover:text-black p-2 rounded-lg bg-violet-800 text-white font-bold transition duration-300"
              onClick={() => handleBook(_id)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
