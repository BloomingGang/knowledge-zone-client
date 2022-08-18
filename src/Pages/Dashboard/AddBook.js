import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const AddBook = () => {
 
    const handleAddBook= (event)=>{
        event.preventDefault();
        const bookName = event.target.bookName.value;
        const bookImg = event.target.bookImg.value;
        const price = event.target.price.value;
        const fileSize = event.target.fileSize.value;
        const formate = event.target.formate.value;
        const interactive = event.target.interactive.value;
        const pageNumber = event.target.pageNumber.value;
        const about = event.target.about.value;
        const writerEducation1 = event.target.writerEducation1.value;
        const writerImg1 = event.target.writerImg1.value;

    const addBook ={
        "bookName": bookName,
        "img": bookImg,
        "state": "unread",
        "writerImg": writerImg1,
        "writerImg2": "https://i.ibb.co/By9KmF7/free-Course.png",
        "writerImg3": "https://i.ibb.co/By9KmF7/free-Course.png",
        "writerImg4": "https://i.ibb.co/By9KmF7/free-Course.png",
        "writerName1": "Munzereen Shahid",
        "writerName2": "Numeri Sattar",
        "writerName3": "Sahrin Tabassum",
        "writerName4": "Muhtadi Ahnaf",
        "educationWriter1": writerEducation1,
        "educationWriter2": "BUET",
        "educationWriter3": "BUET",
        "educationWriter4": "Mechanical Engineering (BUET)",
        "objective": {
          "point1": "The class teachers are having a little trouble understanding the lectures.",
          "point2": "Those who do not know the explanation of all the topics of chemistry properly.",
          "point3": "The topics are easier for those who understand the lectures easily."
        },
        "about": about,
        "page": pageNumber,
        "interactive": interactive,
        "formate": formate,
        "filesize": fileSize,
        "price": price
      }

        axios.post(`http://localhost:5000/addBook`, addBook).then((res) => {
          toast.success(`Add a Book`);
          event.target.reset();
        })
    }

    return (
        <div>
        <form className="container mx-auto " onSubmit={handleAddBook}>
          <div className="grid grid-cols-4 gap-4">
  
            <div className="mb-6">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  {" "}
                  <span class="label-text">Book Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="bookName"
                  placeholder="Book Name"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>

            <div className="mb-6">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  {" "}
                  <span class="label-text">Writer Name 1</span>
                </label>
                <input
                  required
                  type="text"
                  name="writerName1"
                  placeholder="Writer Name 1"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="mb-6">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  {" "}
                  <span class="label-text">Writer img 1</span>
                </label>
                <input
                  required
                  type="text"
                  name="writerImg1"
                  placeholder="Writer img 1"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="mb-6">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  {" "}
                  <span class="label-text">Writer Education 1</span>
                </label>
                <input
                  required
                  type="text"
                  name="writerEducation1"
                  placeholder="Writer img 1"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
           
            <div className="mb-6">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  {" "}
                  <span class="label-text">About</span>
                </label>
                <textarea
                  required
                  type="text"
                  name="about"
                  placeholder="About Book"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="mb-6">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  {" "}
                  <span class="label-text">Page Number</span>
                </label>
                <input
                  required
                  type="number"
                  name="pageNumber"
                  placeholder="Course Description"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="mb-6">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  {" "}
                  <span class="label-text">Interactive</span>
                </label>
                <input
                  required
                  type="text"
                  name="interactive"
                  placeholder="Interactive"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="mb-6">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  {" "}
                  <span class="label-text">Formate</span>
                </label>
                <textarea
                  required
                  type="text"
                  name="formate"
                  placeholder="Formate"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="mb-6">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  {" "}
                  <span class="label-text">File Size</span>
                </label>
                <input
                  required
                  type="text"
                  name="fileSize"
                  placeholder="File size"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="mb-6">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  {" "}
                  <span class="label-text">Price</span>
                </label>
                <input
                  required
                  type="number"
                  name="price"
                  placeholder="Price"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="mb-6">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  {" "}
                  <span class="label-text">Book Image</span>
                </label>
                <input
                  required
                  type="text"
                  name="bookImg"
                  placeholder="Book Image link"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            </div>
           
          <input
            type="submit"
            value="Add Book"
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            style={{ display: "block", width: "100%" }}
          />
        </form>
      </div>
    );
};

export default AddBook;