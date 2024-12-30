import React from "react";
import SettingsContent from "./SettingsContent";
import SidebarSettings from "./SidebarSettings";

const Settings = () => {
  return (
    <section className="md:grid md:grid-cols-5 bg-[rgba(91, 91, 91, 0.25)] ">
      <div className="md:col-span-1">
        <SidebarSettings />
      </div>
      <div className="md:col-span-4">
        <SettingsContent />
      </div>
    </section>
  );
};

export default Settings;
