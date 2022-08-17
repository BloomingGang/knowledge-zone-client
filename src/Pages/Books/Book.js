import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Book = ({ book, setModal }) => {
  const { about, bookName, img, _id } = book;
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();
  const handleBook = (id) => {
    navigate(`/book/${id}`);
  };

  const handleBookUpdate = id => {
    navigate(`/updateBook/${id}`);
  }
  const handleDeleteBook = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/bookDelete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.reload();
        });
    }
  }

  return (
    <div>
      <div className="card bg-gray-100 h-[700px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
        <div className="">
          <img src={img} alt="/" className="rounded-t-xl h-[350px] w-full" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-2xl pb-8">{bookName}</h2>
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
            <div className="btn btn-primary">
              <span onClick={() => handleBook(_id)} className="btn-text">
                Book Details
              </span>
            </div>
          </div>
        </div>


        {admin && (
          <div>
            <hr className="border-2 mb-3" />
            <div className="flex justify-between">
              <button
                onClick={() => handleDeleteBook(_id)}
                className="text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 mx-2"
              >
                <label onClick={() => setModal(true)} for="my-modal-6">

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

      {/* onClick={() => setModal(book)} */}
    </div>
  );
};

export default Book;
