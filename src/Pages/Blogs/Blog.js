import React from "react";

const Blog = ({ order }) => {
  const { description, userName } = order;
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
        <p>{description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
