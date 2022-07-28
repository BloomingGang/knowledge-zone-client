import React from "react";

const Book = ({ book }) => {
  const { description, userName } = book;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{userName}</h2>
          <p>
            {description.slice(0, 150)}{" "}
            <span className="text-orange-400">
              {description.length > 150 ? "Read More..." : ""}
            </span>
          </p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Download</button> */}
            <a href="kausar.pdf" download className="btn btn-primary">
              <span className="btn-text">Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
