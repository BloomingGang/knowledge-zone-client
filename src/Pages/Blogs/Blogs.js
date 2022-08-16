import React, { useEffect, useState } from "react";
import LiveChat from "../ContactUs/LiveChat";
import Blog from "./Blog";
import BlogModal from "./BlogModal";

const Blogs = () => {
  const [blog, setBlogs] = useState([]);
  const [modal, setModal] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="lg:w-3/4 mx-auto grid md:grid-cols-2  gap-5 px-5">
        {blog.map((blog) => (
          <Blog setModal={setModal} key={blog._id} blog={blog}></Blog>
        ))}
        <LiveChat />
      </div>
      {modal && <BlogModal modal={modal}></BlogModal>}
    </div>
  );
};

export default Blogs;
