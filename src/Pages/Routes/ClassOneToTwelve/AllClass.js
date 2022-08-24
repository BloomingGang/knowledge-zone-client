import React from "react";
import { Outlet } from "react-router-dom";
import LiveChat from "../../ContactUs/LiveChat";
import Link from "../../Shared/Link";

const AllClass = () => {
  return (
    <div>
      <div className="m-4">
        <label tabIndex="0" htmlFor="dashboard-sidebar" className=" lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div className="drawer drawer-mobile mt-8">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <h2 className="text-3xl text-center font-bold text-violet-800 mt-4 mb-16">
            Academic Courses List
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 text-base-content bg-violet-300">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes"
              >
                class 1
              </Link>
            </li>
            <li>
              <Link
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/two"
              >
                Class 2
              </Link>
            </li>
            <li>
              <Link
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/three"
              >
                Class 3
              </Link>
            </li>
            <li>
              <Link
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/four"
              >
                Class 4
              </Link>
            </li>
            <li>
              <Link
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg font"
                to="/classes/five"
              >
                Class 5
              </Link>
            </li>
            <li>
              <Link
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/six"
              >
                Class 6
              </Link>
            </li>
            <li>
              <Link
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/seven"
              >
                Class 7
              </Link>
            </li>
            <li>
              <Link
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/eight"
              >
                Class 8
              </Link>
            </li>
            <li>
              <Link
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/nine"
              >
                Class 9
              </Link>
            </li>
            <li>
              <Link
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/ten"
              >
                Class 10
              </Link>
            </li>
            <li>
              <Link
                className="w-full p-2 border-0 font-bold uppercase text-center rounded-lg"
                to="/classes/eleven"
              >
                Class 11-12
              </Link>
            </li>
            <li>
              {/* <Link
                  className="w-full py-3 px-3 border-2 font-bold uppercase text-center rounded-lg"
                  to="/classes/twelve"
                >
                  Class 12
                </Link> */}
            </li>
          </ul>
        </div>
      </div>
      <LiveChat />
    </div>
  );
};

export default AllClass;
