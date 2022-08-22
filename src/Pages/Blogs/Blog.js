import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Blog = ({ blog }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const { description, title, img, _id, writerName, date } = blog;
  const navigate = useNavigate();
  const handleBlog = (id) => {
    navigate(`/blog/${id}`);
  };
  const handleDeleteBlog = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your blog has been deleted.", "success");
        const url = `http://localhost:5000/blogDelete/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            window.location.reload();
          });
      }
    });
  };
  const handleBlogUpdate = (id) => {
    navigate(`/updateBlog/${id}`);
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
        {admin && (
          <div>
            <div class="divider"></div>
            <div className="flex justify-between">
              <button
                onClick={() => handleDeleteBlog(_id)}
                className="text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 mx-2"
              >
                <label for="my-modal-6">
                  <TrashIcon className="h-9 w-9 cursor-pointer" />
                </label>
              </button>

              <button
                onClick={() => handleBlogUpdate(_id)}
                className="text-green-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 mx-2"
              >
                <PencilAltIcon className="h-9 w-9" />
              </button>
            </div>
          </div>
        )}
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
