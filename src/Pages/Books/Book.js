import React from "react";

const Book = ({ book, setModal }) => {
  const { description, userName, img } = book;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl h-[600px]">
        <div className="px-10 pt-10">
          <img src={img} alt="/" className="rounded-xl h-[250px] w-[300px]" />
        </div>
        <div className="card-body items-center text-justify">
          <h2 className="card-title">{userName}</h2>
          <p>
            {description.slice(0, 250)}{" "}
            <span className="text-primary font-semibold">
              {description.length > 250 ? (
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
          </p>
          <div className="card-actions justify-end">
            <a href="kausar.pdf" download className="btn btn-primary">
              <span className="btn-text">Download.</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
