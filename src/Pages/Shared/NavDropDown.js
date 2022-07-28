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
    <div>
      <div className="dropdown">
        <label tabindex="0">
          <ProfilePic></ProfilePic>
        </label>
        <ul
          tabindex="0"
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
