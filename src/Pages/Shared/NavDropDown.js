import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import ProfilePic from "./ProfilePic";

const NavDropDown = () => {
  const logout = () => {
    signOut(auth);
  };
  return (
<<<<<<< HEAD
    <div>
      <div className="dropdown">
=======
    <div className="flex items-center">
      <div class="dropdown">
>>>>>>> 4f7c261c5534712c5652198ca34ea121cc160664
        <label tabindex="0">
          <ProfilePic></ProfilePic>
        </label>
        <ul
          tabindex="0"
<<<<<<< HEAD
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
=======
          class="dropdown-content menu shadow bg-base-100 rounded-box w-52"
>>>>>>> 4f7c261c5534712c5652198ca34ea121cc160664
        >
          <li>
            <Link to="/">My Courses</Link>
          </li>
          <li>
            <Link to="/">My Courses</Link>
          </li>
          <li>
            <button
              className="btn btn-ghost text-red-600 font-bold"
              onClick={logout}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavDropDown;
