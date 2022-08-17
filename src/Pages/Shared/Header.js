import { MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../img/assets/kz.png";
import NavDropDown from "./NavDropDown";
import { useQuery } from "react-query";
import axios from "axios";

const Header = () => {
  const [user] = useAuthState(auth);

  const [open, setOpen] = useState(false);

  // CCIS => classes and courses infos
  const { data: ccis, refetch } = useQuery(["ccis"], () => fetch("http://localhost:5000/ccis").then(res => res.json()));

  const handleUnreadState = async id => {
    const { data } = await axios.put(`http://localhost:5000/cci/${id}`);
    console.log(data);
    refetch();
  }

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
      {/* notification panel */}
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        {/* panel credentials */}
        <div class="dropdown">
          <label tabindex="0" class="text-xl m-1">
          <i class="fa-solid fa-bell"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg> */}
          </label>
          <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-white h-[200px] overflow-auto">
            <div class="card-body">
              <h3 class="card-title">Latest updates! <span className="text-purple-500">{ccis?.unreadCount}</span></h3>
              <div className="flex flex-col gap-y-2">
                {
                  ccis?.unreadData?.map(cci => <p
                    key={cci?._id}
                    className="flex justify-between shadow p-2 rounded"
                    onClick={() => handleUnreadState(cci?._id)}
                  >
                    <span>{cci?.title}</span>
                    <span className={`${cci.state === "read" ? "text-green-500" : "text-red-500"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </p>)?.reverse()
                }
              </div>
            </div>
          </div>
        </div>
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
