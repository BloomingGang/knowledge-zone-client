import React from "react";

const Book = ({ book }) => {
  const { description, userName, img } = book;
  return (
    <div>
<<<<<<< HEAD
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-xl"
          />
=======
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
>>>>>>> 4f7c261c5534712c5652198ca34ea121cc160664
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{userName}</h2>
          <p>
            {description.slice(0, 150)}{" "}
            <span className="text-orange-400">
              {description.length > 150 ? "Read More..." : " "}
            </span>
          </p>
<<<<<<< HEAD
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Download</button> */}
            <a href="kausar.pdf" download className="btn btn-primary">
              <span className="btn-text">Download</span>
=======
          <div class="card-actions justify-end">
            {/* <button class="btn btn-primary">Download</button> */}
            <a href="kausar.pdf" download class="btn btn-primary">
              <span class="btn-text">Download.</span>
>>>>>>> 4f7c261c5534712c5652198ca34ea121cc160664
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
