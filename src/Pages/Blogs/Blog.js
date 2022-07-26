import React from "react";

const Blog = ({ blog }) => {
  const { description, userName } = blog;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{userName}</h2>
        <p>
          {description.slice(0, 150)}{" "}
          <span className="text-orange-400">
            {description.length > 150 ? "Read More..." : ""}
          </span>
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
