import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const DmAutomationLayout = () => {
  return (
    <div className="bg-leads-bg bg-cover h-screen bg-center relative">
      <ul className="flex items-center justify-center py-5 text-md text-white">
        <li className={`mx-2 cursor-pointer hover:opacity-75`}>
          {" "}
          <NavLink
            className={({ isActive }) => `${isActive && "text-secondary"}`}
            end
            to="/dashboard/dm-automation"
          >
            {" "}
            Dashboard
          </NavLink>
        </li>
        <li className={`mx-2 cursor-pointer hover:opacity-75`}>
          <NavLink
            className={({ isActive }) => `${isActive && "text-secondary"}`}
            to="leads"
          >
            Leads
          </NavLink>
        </li>
        <li className={`mx-2 cursor-pointer hover:opacity-75`}>
          {" "}
          <NavLink
            className={({ isActive }) => `${isActive && "text-secondary"}`}
            to="campaign"
          >
            Campaigns
          </NavLink>
        </li>
        <NavLink
          className={({ isActive }) => `${isActive && "text-secondary"}`}
          to="messages"
        >
          {" "}
          <li className={`mx-2 cursor-pointer hover:opacity-75`}>Messages</li>
        </NavLink>
      </ul>
      <div className=" h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default DmAutomationLayout;
