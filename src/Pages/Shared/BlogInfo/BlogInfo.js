import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogInfo = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios
      .get(`https://immense-meadow-70411.herokuapp.com/blog/${id}`)
      .then((data) => setBlog(data.data));
    // fetch(`https://immense-meadow-70411.herokuapp.com/book/${id}`)
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
