import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {
  RiAccountBoxLine,
  RiArrowLeftLine,
  RiBilibiliFill,
  RiBookMarkedFill,
  RiCommunityFill,
  RiFlashlightFill,
  RiNotificationFill,
  RiPoliceBadgeFill,
  RiProhibitedFill,
  RiSecurePaymentFill,
  RiUserFill,
  RiMenuLine, // Hamburger icon
} from "react-icons/ri";

import user from "../../../assets/icons/sidebar icons/User.svg";
import userId from "../../../assets/icons/sidebar icons/User Id.svg";
import security from "../../../assets/icons/sidebar icons/Shield Up.svg";
import notification from "../../../assets/icons/sidebar icons/Bell.svg";
import blocklist from "../../../assets/icons/sidebar icons/Forbidden Circle.svg";
import affiliate from "../../../assets/icons/sidebar icons/People Nearby.svg";
import freecredits from "../../../assets/icons/sidebar icons/free credits.svg";
import policy from "../../../assets/icons/sidebar icons/Book.svg";
import subscriptions from "../../../assets/icons/sidebar icons/Bill List.svg";

const SidebarSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseStyles =
    "flex items-center gap-2 p-2 mb-[6px] text-white text-base font-light text-sm rounded-[7px]  mr-36 lg:mr-0  ";
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col justify-between max-h-screen ">
      <h2
        onClick={toggleSidebar}
        className="text-white p-2 flex lg:my-16 l:flex lg:flex-col lg:justify-between  lg:border-transparent  gap-1 items-center text-nowrap cursor-pointer lg:hidden !fixed lg:static !top-[84px]  left-0 bg-[#091324]   w-full py-6 lg:py-0 z-[9999]"
      >
        <RiMenuLine size={18} /> Settings and Profile
      </h2>
      <div
        className={`fixed lg:static lg:h-screen h-dvh    transition-all duration-300 bg-[#091324]  !opacity-100 lg:bg-transparent mt-10 lg:mt-0  lg:z-0 w-full z-[99999999999999999999] flex flex-col justify-between lg:my-14  ${
          isOpen ? "top-[40px]" : "top-full"
        } lg:top-auto left-0 w-64 p-4 `}
      >
        <h2
          onClick={toggleSidebar}
          className="text-white p-2 lg:mb-2 border-l-4 border-transparent flex gap-1 items-center text-nowrap cursor-pointer mb:hidden font-bold lg:text-xl"
        >
          Settings and Profile
        </h2>

        <NavLink
          to="/dashboard/settings/profile"
          onClick={() => isOpen && toggleSidebar()}
          className={({isActive}) =>
            `${baseStyles} ${
              isActive
                ? "border border-[#1D9BF0]"
                : "border border-transparent hover:border-[#1D9BF0] "
            }`
          }
        >
          <img src={user} alt="user" className="w-4 h-4" /> Your Profile
        </NavLink>
        <NavLink
          to="/dashboard/settings/accounts"
          onClick={() => isOpen && toggleSidebar()}
          className={({isActive}) =>
            `${baseStyles} ${
              isActive
                ? "border border-[#1D9BF0]"
                : "border border-transparent hover:border-[#1D9BF0]"
            }`
          }
        >
          <img src={userId} alt="user" className="w-4 h-4" /> Accounts
        </NavLink>
        <NavLink
          to="/dashboard/settings/security"
          onClick={() => isOpen && toggleSidebar()}
          className={({isActive}) =>
            `${baseStyles} ${
              isActive
                ? "border border-[#1D9BF0]"
                : "border border-transparent hover:border-[#1D9BF0]"
            }`
          }
        >
          <img src={security} alt="user" className="w-4 h-4" /> Security
        </NavLink>
        <NavLink
          to="/dashboard/settings/notifications"
          onClick={() => isOpen && toggleSidebar()}
          className={({isActive}) =>
            `${baseStyles} ${
              isActive
                ? "border border-[#1D9BF0]"
                : "border border-transparent hover:border-[#1D9BF0]"
            }`
          }
        >
          <img src={notification} alt="user" className="w-4 h-4" /> Notification
        </NavLink>
        <NavLink
          to="/dashboard/settings/global-block-list"
          onClick={() => isOpen && toggleSidebar()}
          className={({isActive}) =>
            `${baseStyles} ${
              isActive
                ? "border border-[#1D9BF0]"
                : "border border-transparent hover:border-[#1D9BF0]"
            }`
          }
        >
          <img src={blocklist} alt="user" className="w-4 h-4" /> Global Block
          List
        </NavLink>
        <NavLink
          to="/dashboard/settings/affiliates"
          onClick={() => isOpen && toggleSidebar()}
          className={({isActive}) =>
            `${baseStyles} ${
              isActive
                ? "border border-[#1D9BF0]"
                : "border border-transparent hover:border-[#1D9BF0]"
            }`
          }
        >
          <img src={affiliate} alt="user" className="w-4 h-4" /> Affiliates
        </NavLink>
        <NavLink
          to="/dashboard/settings/free-credits"
          onClick={() => isOpen && toggleSidebar()}
          className={({isActive}) =>
            `${baseStyles} ${
              isActive
                ? "border border-[#1D9BF0]"
                : "border border-transparent hover:border-[#1D9BF0]"
            }`
          }
        >
          <img src={freecredits} alt="user" className="w-4 h-4" /> Free Credits
        </NavLink>
        <NavLink
          to="/dashboard/settings/policy"
          onClick={() => isOpen && toggleSidebar()}
          className={({isActive}) =>
            `${baseStyles} ${
              isActive
                ? "border border-[#1D9BF0]"
                : "border border-transparent hover:border-[#1D9BF0]"
            }`
          }
        >
          <img src={policy} alt="user" className="w-4 h-4" /> Policy Pages
        </NavLink>

        <p className="text-white font-bold text-xl pb-3 pt-3">
          Plan and Billing
        </p>
        <NavLink
          to="/subscriptions"
          onClick={() => isOpen && toggleSidebar()}
          className={({isActive}) =>
            `${baseStyles} ${
              isActive
                ? "border border-[#1D9BF0]"
                : "border border-transparent hover:border-[#1D9BF0]"
            }`
          }
        >
          <img src={subscriptions} alt="user" className="w-4 h-4" />{" "}
          Subscriptions
        </NavLink>
        <NavLink
          to="/logout"
          onClick={() => isOpen && toggleSidebar()}
          className="text-white font-bold text-xl lg:text-[18px] lg:pb-3 pb-20"
        >
          Logout
        </NavLink>
      </div>

      {/* Overlay to close sidebar on small screens */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-yellow-600  lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )} */}
    </div>
  );
};

export default SidebarSettings;
