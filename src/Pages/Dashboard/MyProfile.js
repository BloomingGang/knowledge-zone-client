import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import auth from "../../firebase.init";
import Swal from "sweetalert2";
import ProfileUpdate from "./ProfileUpdate";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState({});
  const [showProfile, setShowProfile] = useState(true);
  const name = user?.displayName;
  const email = user?.email;
  useEffect(() => {
    fetch(`https://immense-meadow-70411.herokuapp.com/user/${email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [email, profile]);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const education = e.target.education.value;
    const location = e.target.location.value;
    const phone = e.target.phone.value;
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
        }
      });
  };
  const { education, location, phone } = profile;
  return (
    <div>
      <h1 className="text-center pt-10 font-serif font-bold text-4xl text-indigo-800">
        My Profile
      </h1>
      <div className="lg:flex lg:flex-row-reverse justify-center w-full px-5 py-8">
        <div className="lg:w-3/5 pl-16 md:pt-20 pt-24">
          <p className="text-3xl py-1 font-semibold pt-5">
            Name: <span className="text-3xl font-normal pl-3">{name}</span>
          </p>
          <p className="text-3xl py-1 font-semibold pt-5">
            Email: <span className="text-3xl font-normal pl-3">{email}</span>
          </p>
          <p className="text-3xl py-1 font-semibold pt-5">
            Education:{" "}
            <span className="text-3xl font-normal pl-3">
              {education || "Not found"}
            </span>
          </p>
          <p className="text-3xl py-1 font-semibold pt-5">
            Location:{" "}
            <span className="text-3xl font-normal pl-3">
              {location || "Not found"}
            </span>
          </p>
          <p className="text-3xl py-1 font-semibold pt-5">
            Phone:{" "}
            <span className="text-3xl font-normal pl-3">
              {" "}
              {phone || "Not found"}
            </span>
          </p>
          <div className="card-actions justify-center">
            <label
              for="profileUpdate"
              onClick={() => setShowProfile(true)}
              className="border-2 shadow-lg hover:bg-indigo-500 hover:text-black p-2 rounded-lg bg-indigo-800 text-white font-bold transition duration-300"
            >
              Update Profile
            </label>
          </div>
        </div>

        <div
          className={`lg:w-2/5 bg-white rounded-2xl ${
            showProfile ? "block" : "hidden"
          }`}
        >
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center font-serif uppercase pb-5">
              Update Your Profile
            </h1>
            <form onSubmit={handleUpdateProfile}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
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
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Education</span>
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
                  <span className="label-text">Location</span>
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
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  required
                  name="phone"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showProfile && <ProfileUpdate/>}
    </div>
  );
};

export default MyProfile;
