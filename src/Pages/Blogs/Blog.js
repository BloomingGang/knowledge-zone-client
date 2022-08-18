import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog, setModal }) => {
  const { description, title, img, _id, writerName, date } = blog;
  const navigate = useNavigate();
  const handleBlog = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div className="card w-full bg-gray-100 transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300">
      <div className="">
        <img src={img} alt="/" className="rounded-t-xl w-full h-[330px]" />
      </div>
      <div className="card-body text-justify">
        <h2 className="card-title text-3xl text-indigo-800">{title}</h2>
        <p>
          {description.slice(0, 255)}{" "}
          <span className="text-primary font-semibold pl-3">
            {description.length > 255 ? (
              <label
                onClick={() => handleBlog(_id)}
                for="my-modal-3"
                className="cursor-pointer text-indigo-800 font-bold"
              >
                Read More ...
              </label>
            ) : (
              ""
            )}
          </span>
          <div className="mt-5">
            <div className="divider"></div>
            <div className="flex justify-between mt-2">
              <span className="text-xl font-semibold">{writerName}</span>
              <span className="text-xl font-semibold">{date}</span>
            </div>
          </div>
        </p>
        {/* <div className="card-actions justify-end">
          <div className="btn btn-primary">
            <span onClick={() => handleBlog(_id)} className="btn-text">
              Details
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
