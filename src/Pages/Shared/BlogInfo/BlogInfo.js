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
  }, [id]);
  const { description, writerName, img, date, title } = blog;
  return (
    <div>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h1>{writerName}</h1>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
};

export default BlogInfo;
