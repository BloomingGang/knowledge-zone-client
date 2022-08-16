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

    fetch("https://immense-meadow-70411.herokuapp.com/addreview", {
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
    <div>
      <form onSubmit={handleForm}>
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
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
              <span class="label-text">Image</span>
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
              <span class="label-text">Comment</span>
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
              <span class="label-text">Ratting</span>
            </label>
            <input
              type="number"
              name="ratting"
              placeholder="Ratting"
              class="input input-bordered"
            />
          </div>
        </div>
        {rattingError && <p className="text-red-500">{rattingError}</p>}
        <span className="text-center">
          <button class="btn btn-accent">Add Review</button>
        </span>
      </form>
    </div>
  );
};

export default AddReviwe;
