import React from "react";
import { Link } from "react-router-dom";

const HrSidebar = ({ showSidebar }) => {
  return (
    <>
      {showSidebar && (
        <div className="h-screen bg-box1 w-7/12 sm:w-4/12 overflow-y-auto lg:w-1/6 fixed z-20 py-20 list-none px-3">
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/">
              Home
            </Link>
          </li>
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/create/employee">
              Add Employee
            </Link>
          </li>
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/all/employee">
              All Employee
            </Link>
          </li>
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/create/client">
              Add Client
            </Link>
          </li>
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/all/client">
              All Client
            </Link>
          </li>

          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/create/project">
              Add Project
            </Link>
          </li>
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/all/project">
              All Project
            </Link>
          </li>
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/salary/distribution">
              Salary Distribution
            </Link>
          </li>
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/notification">
              Notification
            </Link>
          </li>
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/update/pass">
              Update Password
            </Link>
          </li>
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/update/profile">
              Update Profile
            </Link>
          </li>
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/update/avatar">
              Update Avatar
            </Link>
          </li>
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/attendence">
              Employee Attendence
            </Link>
          </li>
          <li className=" hover:bg-blue-300 cursor-pointer pl-2 rounded-lg text-white hover:text-black hover:font-bold">
            <Link className="block py-3" to="/create/attendence">
              Create Attendence
            </Link>
          </li>
        </div>
      )}
    </>
  );
};

export default HrSidebar;
