import React from "react";
import {  Outlet } from "react-router-dom";
import CustomLink from "../../Shared/CustomLink";

const Instructor = () => {
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
          <h2 className="text-3xl text-center font-bold text-primary my-4">
            Instructors List
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content border-r-2 ">
            {/* <!-- Sidebar content here --> */}
            <li>
              <CustomLink className='w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg' to="/instructor">Bengali</CustomLink>
            </li>
            <li>
              <CustomLink className='w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg' to="/instructor/english">English</CustomLink>
            </li>
            <li>
              <CustomLink className='w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg' to="/instructor/mathematics">Mathematics</CustomLink>
            </li>
            <li>
              <CustomLink className='w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg' to="/instructor/chemistry">Chemistry</CustomLink>
            </li>
            <li>
              <CustomLink className='w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg' to="/instructor/physics">Physics</CustomLink>
            </li>
            <li>
              <CustomLink className='w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg' to="/instructor/biology">Biology</CustomLink>
            </li>
            <li>
              <CustomLink className='w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg' to="/instructor/finance">Finance</CustomLink>
            </li>
            <li>
              <CustomLink className='w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg' to="/instructor/religious">Religious</CustomLink>
            </li>
            <li>
              <CustomLink className='w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg' to="/instructor/programming">Programming</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
