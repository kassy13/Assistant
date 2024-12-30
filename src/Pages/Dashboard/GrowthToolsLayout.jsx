import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const GrowthToolsLayout = () => {
  return (
    <div className="bg-leads-bg bg-cover h-full bg-center overflow-hidden">
      <ul className="flex items-center justify-center py-4 text-sm text-white">
        <li className={`mx-2 cursor-pointer hover:opacity-75`}>
          {" "}
          <NavLink
            className={({ isActive }) => `${isActive && "text-secondary"}`}
            end
            to="/dashboard/smart-content"
          >
            {" "}
            Dashboard
          </NavLink>
        </li>
        <li className={`mx-2 cursor-pointer hover:opacity-75`}>
          <NavLink
            className={({ isActive }) => `${isActive && "text-secondary"}`}
            to="follow-tool"
          >
            Follow Tool
          </NavLink>
        </li>
        <li className={`mx-2 cursor-pointer hover:opacity-75`}>
          {" "}
          <NavLink
            className={({ isActive }) => `${isActive && "text-secondary"}`}
            to="ai-replier"
          >
            Unfollow Tool
          </NavLink>
        </li>
        <li className={`mx-2 cursor-pointer hover:opacity-75`}>
          {" "}
          <NavLink
            className={({ isActive }) => `${isActive && "text-secondary"}`}
            to="ai-replier"
          >
            Like Tool
          </NavLink>
        </li>
        <li className={`mx-2 cursor-pointer hover:opacity-75`}>
          {" "}
          <NavLink
            className={({ isActive }) => `${isActive && "text-secondary"}`}
            to="ai-replier"
          >
            Unlike Tool
          </NavLink>
        </li>
        <li className={`mx-2 cursor-pointer hover:opacity-75`}>
          {" "}
          <NavLink
            className={({ isActive }) => `${isActive && "text-secondary"}`}
            to="ai-replier"
          >
            Repost Tool
          </NavLink>
        </li>
        <li className={`mx-2 cursor-pointer hover:opacity-75`}>
          {" "}
          <NavLink
            className={({ isActive }) => `${isActive && "text-secondary"}`}
            to="ai-replier"
          >
            unrepost Tool
          </NavLink>
        </li>
      </ul>
      <div className="h-[82vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default GrowthToolsLayout;
