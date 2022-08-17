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
    <div className="px-16 py-10">
      <img className="mb-5 w-full h-[85vh]" src={img} alt="" />
      <h1 className="text-5xl font-bold font-mono text-justify text-indigo-600">
        {title}
      </h1>
      <div className="pt-3 pb-8 text-3xl font-semibold text-gray-600">
        <span>This blog is posted on </span>
        <span className="text-red-500">{date} </span> <span>By </span>
        <span className="text-indigo-600">{writerName}</span>
      </div>
      <p className="text-2xl text-justify leading-10">{description}</p>
    </div>
  );
};

export default BlogInfo;
