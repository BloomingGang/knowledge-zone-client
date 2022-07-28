import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
            <h2 className="text-3xl text-center font-bold text-primary my-4">
              Course List
            </h2>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link to="/classes">class 1</Link>
              </li>
              <li>
                <Link to="/classes/two">Class 2</Link>
              </li>
              <li>
                <Link to="/classes/three">Class 3</Link>
              </li>
              <li>
                <Link to="/classes/four">Class 4</Link>
              </li>
              <li>
                <Link to="/classes/five">Class 5</Link>
              </li>
              <li>
                <Link to="/classes/six">Class 6</Link>
              </li>
              <li>
                <Link to="/classes/seven">Class 7</Link>
              </li>
              <li>
                <Link to="/classes/eight">Class 8</Link>
              </li>
              <li>
                <Link to="/classes/nine">Class 9</Link>
              </li>
              <li>
                <Link to="/classes/ten">Class 10</Link>
              </li>
              <li>
                <Link to="/classes/eleven">Class 11</Link>
              </li>
              <li>
                <Link to="/classes/twelve">Class 12</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default AllClass;