import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  const { description, writerName, img, date } = blog;
  return (
    <div>
      <span>{writerName}</span>
      <span>{description}</span>
      <img src={img} alt="" />
      <span>{date}</span>
    </div>
  );
};

export default BlogInfo;
