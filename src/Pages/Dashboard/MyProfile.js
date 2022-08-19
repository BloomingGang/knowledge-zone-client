import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import auth from "../../firebase.init";
import ProfileUpdate from "./ProfileUpdate";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState({});
  const [showProfile, setShowProfile] = useState(false);
  const name = user?.displayName;
  const email = user?.email;
  const photoUrl = user?.photoURL;
  useEffect(() => {
    fetch(`https://immense-meadow-70411.herokuapp.com/user/${email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [email, profile, photoUrl]);

  const { education, location, phone } = profile;
  return (
    <div>
      <h1 className="text-center pt-10 font-serif font-bold text-4xl text-indigo-800">
        My Profile
      </h1>
      <div className="lg:flex lg:flex-row-reverse justify-center w-full px-5 py-8">
        <div class="avatar">
          <div class="w-64 h-64 rounded-full">
            <img src={photoUrl} alt="" />
          </div>
        </div>

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
              UPDATE YOUR PROFILE
            </label>
          </div>
        </div>
      </div>
      {showProfile && (
        <ProfileUpdate
          setShowProfile={setShowProfile}
          name={name}
          email={email}
        />
      )}
    </div>
  );
};

export default MyProfile;
