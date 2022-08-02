import React from "react";

const Blog = ({ blog, setModal }) => {
  const { description, userName, img } = blog;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{userName}</h2>
        <p>
          {description.slice(0, 150)}{" "}
          <span className="text-orange-400">
            {description.length > 150 ? (
              <label
                for="my-modal"
                className="cursor-pointer"
                onClick={() => setModal(blog)}
              >
                Read More...
                {/* <label class="btn modal-button">open modal</label> */}
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
