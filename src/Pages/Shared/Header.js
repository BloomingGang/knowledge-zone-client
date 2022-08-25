import { MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../img/assets/kz.png";
import NavDropDown from "./NavDropDown";
import { useQuery } from "react-query";
import axios from "axios";

const Header = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const [searchCourse, setSearchCourse] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/searchCourse/${searchCourse}`);
  };

  // CCIS => classes and courses infos
  const { data: ccis, refetch } = useQuery(["ccis"], () =>
    fetch("https://shielded-forest-27142.herokuapp.com/ccis").then((res) =>
      res.json()
    )
  );

  // bookN= book notification
  const { data: bookN } = useQuery(["bookN"], () =>
    fetch("https://shielded-forest-27142.herokuapp.com/bookN").then((res) =>
      res.json()
    )
  );
  console.log(bookN, "bookN");
  const handleUnreadState = async (id) => {
    const { data } = await axios.put(
      `https://shielded-forest-27142.herokuapp.com/cci/${id}`
    );
    console.log(data);
    refetch();
  };

  const handleUnreadStateBookN = async (id) => {
    const { data } = await axios.put(
      `https://shielded-forest-27142.herokuapp.com/bookN/${id}`
    );
    console.log(data);
    refetch();
  };

  const menuItems = (
    <>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-white" : "text-black")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-white" : "text-black")}
          to="/classes"
        >
          Academic Course
        </NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-white" : "text-black")}
          to="/courses"
        >
          Skill Development Course
        </NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-white" : "text-black")}
          to="/books"
        >
          Books
        </NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-white" : "text-black")}
          to="/instructor"
        >
          Instructor
        </NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-white" : "text-black")}
          to="/blogs"
        >
          Blog
        </NavLink>
      </li>
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-white" : "text-black")}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>

      {/* notification panel */}
      <li className="mr-4 p-2 hover:bg-blue-500 rounded font-bold cursor-pointer">
        {/* panel credentials */}
        <div class="dropdown md:dropdown-end">
          <label tabindex="0" class="text-xl m-1">
            <i className="text-violet-800 fa-solid fa-bell cursor-pointer"></i>
          </label>
          <div
            tabindex="0"
            class="dropdown-content  rounded-md card-compact w-52  bg-gray-100 h-[365px] overflow-auto"
          >
            <div class="py-3">
              <span class="flex justify-around border-b-4 text-red-500">
                New{" "}
                <span className="text-red-500">
                  {bookN?.unreadCount + ccis?.unreadCount}
                </span>
                {/* <span className="text-purple-500">{ccis?.unreadCount}</span> */}
              </span>

              <div class="card-body">
                {/* <span className="card-title flex justify-around border-b-4 text-red-500">
                  New <span className="text-red-500">{ccis?.unreadCount}</span>
                </span> */}

                <div className="flex flex-col gap-y-2">
                  {ccis?.unreadData
                    ?.map((cci) => (
                      <p
                        key={cci?._id}
                        className="flex justify-between shadow p-2 rounded"
                        onClick={() => handleUnreadState(cci?._id)}
                      >
                        <span>{cci?.title}</span>
                        <span
                          className={`${
                            cci.state === "read"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </p>
                    ))
                    ?.reverse()}

                  {bookN?.unreadData
                    ?.map((bookN) => (
                      <p
                        key={bookN?._id}
                        className="flex justify-between shadow p-2 rounded"
                        onClick={() => handleUnreadStateBookN(bookN?._id)}
                      >
                        <span>{bookN?.bookName}</span>
                        <span
                          className={`${
                            bookN.state === "read"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </p>
                    ))
                    ?.reverse()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="mr-4 p-2 hover:bg-blue-500 rounded cursor-pointer font-bold">
        {user ? (
          <NavDropDown />
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white" : "text-black"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="bg-violet-900 sticky top-0 z-50">
      <div className="md:flex flex-row justify-between items-center py-2 px-20 hidden ">
        <div className="flex flex-row items-center">
          <img src={logo} alt="" className="w-[40px] h-[50px]" />
          <h1 className="text-white font-bold text-3xl px-4">Knowledge Zone</h1>
        </div>

        <div>
          {/* <<<<<<< HEAD
          <div>
            <div class="form-control">
              <label class="input-group input-group-sm">
                <input
                  onChange={(e) => setSearchCourse(e.target.value)}
                  type="search"
                  name="text"
                  placeholder="Search Courses"
                  className="input input-bordered input-sm"
                />
                <span
                  onClick={(e) => handleSearch(e)}
                  className="bg-violet-300"
                >
                  <i className="fa-solid fa-magnifying-glass text-lg text-violet-800"></i>
                </span>
              </label>
            </div>
======= */}
          <div class="form-control">
            <label class="input-group input-group-sm">
              <input
                onChange={(e) => setSearchCourse(e.target.value)}
                type="search"
                name="text"
                placeholder="Search Courses"
                className="input input-bordered input-sm"
              />
              <span onClick={(e) => handleSearch(e)} className="bg-violet-300">
                <i className="fa-solid fa-magnifying-glass text-lg text-violet-800"></i>
              </span>
            </label>
            {/* >>>>>>> e0b77533e1d1083037497bea89a1b40663334637 */}
          </div>
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
            className={`md:flex px-2 py-2 md:px-2 md:py-0 justify-center items-center bg-violet-400 mx-auto w-full absolute md:static duration-500 ease-in z-50 ${
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
