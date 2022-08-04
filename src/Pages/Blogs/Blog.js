import React from "react";

const Blog = ({ blog, setModal }) => {
  const { description, userName, img } = blog;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="/" class="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{userName}</h2>
        <p>
          {description.slice(0, 150)}{" "}
          <span className="text-primary font-semibold">
            {description.length > 150 ? (
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
