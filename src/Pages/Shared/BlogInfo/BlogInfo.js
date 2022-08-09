import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogInfo = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/blog/${id}`)
      .then((data) => setBlog(data.data));
    // fetch(`http://localhost:5000/book/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => setBook(data));
  }, []);
  const { description, userName, img, page, writer } = blog;
  return (
    <div>
      <h1>{userName}</h1>
      <h1>{description}</h1>
      <img src={img} alt="" />
      <h1>{page}</h1>
      <h1>{writer}</h1>
    </div>
  );
};

export default BlogInfo;
