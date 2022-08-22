import React from 'react';
import { Outlet } from 'react-router-dom';
import LiveChat from '../../ContactUs/LiveChat';
import CustomLink from '../../Shared/CustomLink';

const Courses = () => {
  
  
    return (
      <div>
        <div className="m-4">
          <label
            tabIndex="0"
            htmlFor="dashboard-sidebar"
            className=" lg:hidden"
          >
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
            <h2 className="text-3xl text-center font-bold text-primary  mt-4 mb-16">
              Courses List
            </h2>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="dashboard-sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 overflow-y-auto whitespace-nowrap w-68 bg-base-100 text-base-content border-r-2">
              {/* <!-- Sidebar content here --> */}
              <li>
                <CustomLink
                  className="w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg"
                  to="/courses"
                >
                  Free course
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  className="w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg"
                  to="/courses/discountCourse"
                >
                  discounted course
                </CustomLink>
              </li>
              {/* <li>
                <CustomLink
                  className="w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg"
                  to="/courses/liveCourse"
                >
                  Live course
                </CustomLink>
              </li> */}
              <li>
                <CustomLink
                  className="w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg"
                  to="/courses/specialCourse"
                >
                  crash course
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  className="w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg"
                  to="/courses/IslamicCourse"
                >
                  Islamic course
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  className="w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg"
                  to="/courses/KidsCourse"
                >
                  Kids course{" "}
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  className="w-full py-2 px-2 border-2 font-bold uppercase text-center rounded-lg"
                  to="/courses/EntertainingCourse"
                >
                  Entertaining course
                </CustomLink>
              </li>
            </ul>
          </div>
        </div>
        <LiveChat />
      </div>
    );
};

export default Courses;