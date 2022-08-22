import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "./Loading";

const UpdateBook = () => {
  const { id } = useParams();
  const [updateBook, serUpdateBook] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => serUpdateBook(res.data));
    setLoading(false);
  }, [id]);
  if (loading) {
    return <Loading></Loading>;
  }
  const {
    price,
    formate,
    fileSize,
    writerImg1,
    writerName1,
    about,
    pageNumber,
    bookImg,
    bookName,
  } = updateBook;

  const handleUpdateBook = (event) => {
    event.preventDefault();
    const bookName = event.target.bookName.value;
    const bookImg = event.target.bookImg.value;
    const price = event.target.price.value;
    const fileSize = event.target.fileSize.value;
    const formate = event.target.formate.value;
    const pageNumber = event.target.pageNumber.value;
    const about = event.target.about.value;
    const writerImg1 = event.target.writerImg1.value;
    const writerName1 = event.target.writerName1.value;

    const updateBook = {
      bookName: bookName,
      img: bookImg,
      about: about,
      writerName1: writerName1,
      writerImg: writerImg1,
      page: pageNumber,
      formate: formate,
      filesize: fileSize,
      price: price,
    };

    axios
      .put(`http://localhost:5000/bookUpdate/${id}`, updateBook)
      .then((res) => {
        toast.success(`Update Book successfully`);
        event.target.reset();
        navigate("/books");
      });
  };
  return (
    <div className="p-12 bg-violet-200">
      <form
        className="bg-violet-300 rounded-xl md:w-2/3 mx-auto font-serif px-8 pb-12"
        onSubmit={handleUpdateBook}
      >
        <h1 className="text-center p-8 text-3xl font-bold pb-16 text-violet-900 ">
          Update Book Here
        </h1>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-0">
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">Book Name:</span>
              </label>
              <input
                required
                type="text"
                name="bookName"
                placeholder={bookName}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Book Image:
                </span>
              </label>
              <input
                required
                type="text"
                name="bookImg"
                placeholder={bookImg}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Page Number:
                </span>
              </label>
              <input
                required
                type="number"
                name="pageNumber"
                placeholder={pageNumber}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">About:</span>
              </label>
              <textarea
                required
                type="text"
                name="about"
                placeholder={about}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Writer Name 1:
                </span>
              </label>
              <input
                required
                type="text"
                name="writerName1"
                placeholder={writerName1}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Writer img 1:
                </span>
              </label>
              <input
                required
                type="text"
                name="writerImg1"
                placeholder={writerImg1}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">File Size:</span>
              </label>
              <input
                required
                type="number"
                name="fileSize"
                placeholder={fileSize}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">Formate:</span>
              </label>
              <select
                required
                type="text"
                name="formate"
                placeholder={formate}
                class="input input-bordered w-full max-w-xs"
              >
                <option>PDF</option>
                <option>MP3</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">Price:</span>
              </label>
              <input
                required
                type="number"
                name="price"
                min={1}
                placeholder={price}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Update Book"
          className="btn w-full bg-violet-900 mx-auto block hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
        />
      </form>
    </div>
  );
};

export default UpdateBook;
