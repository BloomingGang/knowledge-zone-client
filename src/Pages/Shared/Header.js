import { MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../img/assets/kz.png";
import NavDropDown from "./NavDropDown";

const Header = () => {
  const [user] = useAuthState(auth);

  const [open, setOpen] = useState(false);

  const menuItems = (
    <>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-black"
          } to="/">Home</NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-black"
          } to="/classes">Academic Courses</NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-black"
          } to="/courses">Skill Development Courses</NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-black"
          } to="/books">Books</NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-black"
          } to="/instructor">Instructor</NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-black"
          } to="/blogs">Blog</NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-black"
          } to="/contact">Contact</NavLink>
      </li>

      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        {user ? <NavDropDown></NavDropDown> : <NavLink className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-black"
          } to="/login">Login</NavLink>}
      </li>
    </>
  );
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-violet-900 relative">
      <div className="md:flex flex-row justify-between items-center py-2 px-14 hidden ">
        <div className="flex flex-row items-center">
          <img src={logo} alt="" width="50" height="50" />
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
          <div className="md:hidden flex flex-row items-center justify-between px-4 py-2">
            <div className="flex flex-row items-center">
              <img src={logo} alt="logo" width="50" height="50" />
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
            className={`md:flex p-2 justify-center items-center bg-gradient-to-r from-violet-300 via-indigo-300 to-purple-300 mx-auto w-full absolute md:static duration-500 ease-in z-50 ${
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
