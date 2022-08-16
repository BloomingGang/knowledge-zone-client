import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import auth from "../../firebase.init";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState({});
  const name = user?.displayName;
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
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

    fetch(`http://localhost:5000/users/${email}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
      <h1 className="text-center pt-5 font-serif font-bold text-3xl text-blue-500">
        My Profile
      </h1>
      <div className="lg:flex lg:flex-row-reverse justify-center w-full bg-gray-200 px-5 py-10">
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
        </div>
        <div className="lg:w-2/5 bg-white rounded-2xl">
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
    </div>
  );
};

export default UpdateProfile;
