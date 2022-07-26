import React from "react";

const Blog = ({ order }) => {
  const { name, description, userName } = order;
  return (
    <div class="card  bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>Order: {description} Unit</p>
        <p>Price: ${userName}</p>
      </div>
    </div>
  );
};

export default Blog;
