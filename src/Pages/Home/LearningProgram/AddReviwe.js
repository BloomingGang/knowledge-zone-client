import React, { useState } from "react";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const AddReviwe = () => {
  const [user] = useAuthState(auth);
  const [rattingError, setRattingError] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const comment = e.target.comment.value;
    const ratting = e.target.ratting.value;
    if (ratting < 0 || ratting > 5) {
      return setRattingError("Ratting Will Be Between 0 to 5 ");
    }
    setRattingError("");
    const review = { name, comment, ratting, image };

    fetch("http://localhost:5000/addreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Your Review Add Successfully");
        e.target.reset();
      });
  };
  return (
    <div className="p-12 bg-violet-200">
      <form
        onSubmit={handleForm}
        className="bg-violet-300 rounded-xl md:w-1/2 mx-auto pb-8 font-serif"
      >
        <h1 className="text-center p-8 text-3xl font-bold  text-violet-800 ">
          Put Your Review Here
        </h1>
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span className="label-text text-lg font-sans">Name:</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              class="input input-bordered"
              value={user?.displayName}
              disabled
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span className="label-text text-lg font-sans">Image:</span>
            </label>
            <input
              type="text"
              placeholder="Image"
              name="image"
              class="input input-bordered"
              value={user?.photoURL}
              disabled
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span className="label-text text-lg font-sans">Comment:</span>
            </label>
            <input
              type="text"
              name="comment"
              placeholder="Comment"
              class="input input-bordered count-chars"
              maxLength="50"
              data-max-chars="50"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span className="label-text text-lg font-sans">Ratting:</span>
            </label>
            <input
              type="number"
              name="ratting"
              min={0}
              max={5}
              placeholder="Ratting"
              class="input input-bordered"
            />
          </div>
        </div>
        {rattingError && <p className="text-red-500">{rattingError}</p>}
        <div className="flex justify-center">
          <button className="btn text-white hover:text-black bg-indigo-800 hover:bg-indigo-500 border-0">
            submit review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReviwe;
