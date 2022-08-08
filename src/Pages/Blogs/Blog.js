import React from "react";

const Blog = ({ blog, setModal }) => {
  const { description, userName, img } = blog;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="/" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-justify">
        <h2 className="card-title">{userName}</h2>
        <p>
          {description.slice(0, 250)}{" "}
          <span className="text-primary font-semibold">
            {description.length > 250 ? (
              <label
                for="my-modal-3"
                className="cursor-pointer"
                onClick={() => setModal(blog)}
              >
                Read More...
              </label>
            ) : (
              ""
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
