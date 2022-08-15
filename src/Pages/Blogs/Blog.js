import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog, setModal }) => {
  const { description, title, img, _id, writerName, date } = blog;
  const navigate = useNavigate();
  const handleblog = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 ">
        <img src={img} alt="/" className="rounded-xl w-full h-[300px]" />
      </figure>
      <div className="card-body items-center text-justify">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.slice(0, 250)}{" "}
          <span className="text-primary font-semibold">
            {description.length > 250 ? (
              <label
                onClick={() => handleblog(_id)}
                for="my-modal-3"
                className="cursor-pointer text-indigo-800 font-bold"
              >
                Read More ...
              </label>
            ) : (
              ""
            )}
          </span>
          <div className="mt-5 ">
            <hr />
            <div className="flex justify-between mt-2">
              <span>{writerName}</span>
              <span>{date}</span>
            </div>
          </div>
        </p>
        {/* <div className="card-actions justify-end">
          <div className="btn btn-primary">
            <span onClick={() => handleblog(_id)} className="btn-text">
              Details
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
