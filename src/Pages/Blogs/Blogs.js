import React, { useEffect, useState } from "react";
import LiveChat from "../ContactUs/LiveChat";
import Blog from "./Blog";
const Blogs = () => {
  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog2.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 px-5">
        {blog.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
        <LiveChat />
      </div>
    </div>
  );
};

export default Blogs;
