import React from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ book, setModal }) => {
  const { about, userName, img, _id } = book;
  const navigate = useNavigate();
  const handlebook = (id) => {
    navigate(`/book/${id}`);
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl h-[600px]">
        <div className="px-10 pt-10">
          <img src={img} alt="/" className="rounded-xl h-[250px] w-[300px]" />
        </div>
        <div className="card-body items-center text-justify">
          <h2 className="card-title">{userName}</h2>
          <p>
            {about.slice(0, 250)}{" "}
            <span className="text-primary font-semibold">
              {/* <<<<<<< HEAD
              {description.length > 250 ? (
                <label for="my-modal-3" className="cursor-pointer">
                  ...
======= */}
              {about.length > 250 ? (
                <label
                  for="my-modal-3"
                  className="cursor-pointer"
                  onClick={() => setModal(book)}
                >
                  Read More...
                  {/* >>>>>>> 909d2a256fbbd159dfee425034215c541855763b */}
                </label>
              ) : (
                " "
              )}
            </span>
          </p>
          <div className="card-actions justify-end">
            <div className="btn btn-primary">
              <span onClick={() => handlebook(_id)} className="btn-text">
                Details
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
