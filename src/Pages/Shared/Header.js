import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../img/assets/kz.png";
import NavDropDown from "./NavDropDown";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  const logout = () => {
    signOut(auth);
  };

  const [open, setOpen] = useState(false);

  const menuItems = (
    <>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <Link to="/">Class 1-12</Link>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <Link to="/">Courses</Link>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <Link to="/">Books</Link>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <Link to="/instructor">Instructor</Link>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <Link to="/">Blog</Link>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <Link to="/">Contact US</Link>
      </li>

      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        {user ? <NavDropDown></NavDropDown> : <Link to="/login">Login</Link>}
      </li>
    </>
  );
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative">
      <div className="md:flex flex-row justify-between items-center py-6 px-14 hidden ">
        <div className="flex flex-row items-center">
          <img src={logo} alt="" width="80" height="60" />
          <h1 className="text-white font-bold text-3xl px-4">Knowledge Zone</h1>
        </div>

        <div>
          <input
            type="search"
            name="text"
            className="rounded px-8 py-2"
            placeholder="Search"
          />
        </div>
      </div>

      <div>
        <nav className="">
          <div className="md:hidden flex flex-row items-center justify-between p-4 ">
            <div className="flex flex-row items-center">
              <img src={logo} alt="" width="50" height="30" />
              <h1 className="text-white font-bold text-2xl px-4">
                Knowledge Zone
              </h1>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="w-8 h-8 text-white font-bold"
            >
              {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
          </div>
          <ul
            className={`md:flex justify-center bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300  p-2 mx-auto w-full rounded-md absolute md:static duration-500 ease-in z-50 ${
              open ? "top-20 " : "top-[-450px]"
            }`}
          >
            {menuItems}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
