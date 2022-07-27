import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Courses = () => {
  
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
              Courses List
            </h2>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto whitespace-nowrap w-56 bg-base-100 text-base-content">
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link to="/courses">Free course</Link>
              </li>
              <li>
                <Link to="/courses/discountCourse">Offer/discount course</Link>
              </li>
              <li>
                <Link to="/courses/liveCourse">Live course</Link>
              </li>
              <li>
                <Link to="/courses/specialCourse">Special crash course</Link>
              </li>
              <li>
                <Link to="/courses/IslamicCourse">Islamic course</Link>
              </li>
              <li>
                <Link to="/courses/KidsCourse">Kids course </Link>
              </li>
              <li>
                <Link to="/courses/EntertainingCourse">Entertaining course</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Courses;