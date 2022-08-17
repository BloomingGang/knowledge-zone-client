import React from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ book, setModal }) => {
  const { about, bookName, img, _id } = book;
  const navigate = useNavigate();
  const handleBook = (id) => {
    navigate(`/book/${id}`);
  };
  return (
    <div>
      <div className="card bg-gray-100 h-[600px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
        <div className="">
          <img src={img} alt="/" className="rounded-t-xl h-[380px] w-full" />
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
      </div>
      {/* onClick={() => setModal(book)} */}
    </div>
  );
};

export default Book;
