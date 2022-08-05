import React from "react";

const Book = ({ book }) => {
  const { description, userName, img } = book;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl h-[600px]">
        <div class="px-10 pt-10">
          <img src={img} alt="/" class="rounded-xl h-[250px] w-[300px]" />
        </div>
        <div className="card-body items-center text-justify">
          <h2 className="card-title">{userName}</h2>
          <p>
            {description.slice(0, 250)}{" "}
            <span className="text-primary font-semibold">
              {description.length > 250 ? "Read More..." : " "}
            </span>
          </p>
          <div class="card-actions justify-end">
            <a href="kausar.pdf" download class="btn btn-primary">
              <span class="btn-text">Download.</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
