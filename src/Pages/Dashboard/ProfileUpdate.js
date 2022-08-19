import React from "react";
import Swal from "sweetalert2";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const ProfileUpdate = ({ name, email, setShowProfile }) => {
  const [updateProfile, updating] = useUpdateProfile(auth);

  const imageStorageKey = "cb1a7d020847680d78193b615dbd3aff";

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const education = e.target.education.value;
    const location = e.target.location.value;
    const phone = e.target.phone.value;
    const profileImg = e.target.profileImg.files[0];
    console.log(profileImg, "img ki asche");

    const formData = new FormData();
    formData.append("image", profileImg);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageStorageKey}`;
    const request = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const response = await request.json();
    await updateProfile({ photoURL: response?.data?.url });

    if (response?.success) {
      const profile = {
        name,
        email,
        education,
        location,
        phone,
      };

      fetch(`https://immense-meadow-70411.herokuapp.com/users/${email}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(profile),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            e.target.reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Profile Updated Successfully !!",
              showConfirmButton: false,
              timer: 1500,
            });

            setShowProfile(false);
          }
        });
    }
  };

  return (
    <div>
      <input type="checkbox" id="profileUpdate" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="profileUpdate"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {updating ? (
            <Loading />
          ) : (
            <div className={`bg-violet-200 rounded-2xl`}>
              <div className="card-body">
                <h1 className="text-center p-8 text-3xl font-bold pb-16 text-violet-900">
                  Update Your Profile
                </h1>
                <form onSubmit={handleUpdateProfile}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name:</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      readOnly
                      disabled
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email:</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      readOnly
                      disabled
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Education:</span>
                    </label>
                    <input
                      type="text"
                      name="education"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Location:</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="location"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone:</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="phone"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone:</span>
                    </label>
                    <input
                      type="file"
                      name="profileImg"
                      id="icon"
                      accept="image/png, image/jpeg, image/jpg"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="border-2 shadow-lg hover:bg-indigo-500 hover:text-black p-2 rounded-lg bg-indigo-800 text-white font-bold transition duration-300">
                      UPDATE PROFILE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
