import React, { useEffect, useState } from "react";
import Blog from "./Blog";
// import Blog from "../Blogs/Blog";
const Blogs = () => {
  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 px-5">
        {blog.map((or) => (
          <Blog key={or._id} order={or}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
