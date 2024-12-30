import React from "react";
import SidebarSettings from "./SidebarSettings";
import {Outlet} from "react-router-dom";

const SettingsLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen  bg-[rgba(91, 91, 91, 0.25)] inter-settings scrollbar-hide bg-auth-bg">
      {/* Sidebar: Fixed */}
      <div className="w-full lg:w-1/5 bg-transparent h-auto lg:h-screen sticky top-0 z-[99]">
        <SidebarSettings />
      </div>

      {/* Outlet: Scrollable Content */}
      <div className="flex-1 overflow-y-auto mt-4   lg:mt-12 p-6 border-t rounded-lg my-12 lg:my-0 border-l scrollbar-hide auth-bg ">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
