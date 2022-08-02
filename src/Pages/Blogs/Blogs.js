import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import BlogModal from "./BlogModal";

const Blogs = () => {
  const [blog, setBlogs] = useState([]);
  const [modal, setModal] = useState(null);
  useEffect(() => {
    fetch("blog2.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 px-5">
        {blog.map((blog) => (
          <Blog setModal={setModal} key={blog._id} blog={blog}></Blog>
        ))}
      </div>
      {modal && <BlogModal modal={modal} setModal={setModal}></BlogModal>}
    </div>
  );
};

export default Blogs;
