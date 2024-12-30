import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { IoIosArrowUp } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdDashboard, MdNoteAlt } from "react-icons/md";
import { PiBatteryChargingVerticalFill } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidMessageDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useAuth } from "../../AuthStore/AuthProvider";
import Loader from "../../components/UI/Loader";
import AddAccount from "../../components/Modal/AddAccount";
import { Toaster } from "react-hot-toast";
import TwoFA_Modal from "../../components/Modal/TwoFA_Modal";
import loader from "../../../src/assets/Spinner.svg";
import { FaCheckCircle, FaBookOpen } from "react-icons/fa";
import useFunctionStore from "../../store/FunctionStore";
import { useAuthStore, useDetailsStore } from "../../AuthStore/GlobalStates";
import blurLayer from "../../assets/blurLayer.svg";
import { RiAccountBoxLine, RiSettingsLine } from "react-icons/ri";
import dashboardIcon from "../../assets/icons/DashboardWhite.png";
import creditIcon from "../../assets/icons/BuyCreditWhite.png";
import DmIcon from "../../assets/icons/DMIconWhite.png";
import growthIcon from "../../assets/icons/GrowthToolsWhite.png";
import learningIcon from "../../assets/icons/LearningWhite.png";
import smartIcon from "../../assets/icons/SmartContentWhite.png";
import dashboardIconBlue from "../../assets/icons/DashboardBlue.png";
import creditIconBlue from "../../assets/icons/BuyCreditBlue.png";
import DmIconBlue from "../../assets/icons/DMIconBlue.png";
import growthIconBlue from "../../assets/icons/GrowthToolsBlue.png";
import learningIconBlue from "../../assets/icons/LearningBlue.png";
import smartIconBlue from "../../assets/icons/SmartContentBlue.png";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect to Profile when navigating to Settings
  useEffect(() => {
    if (location.pathname === "/dashboard/settings") {
      navigate("/dashboard/settings/profile");
    }
  }, [location, navigate]);

  const { token, user, loading } = useAuthStore();
  const { logout } = useAuth();
  const { handleSaveActiveAccountId, accounts, activeAccountId } =
    useDetailsStore();
  const { miniLoading, fetchData } = useFunctionStore();

  const [open, setOpen] = useState(true);
  const [addAccountModal, setAddAccountModal] = useState(false);
  const [twoFaData, setTwoFaData] = useState(null);
  const [smallScreen, setSmallScreen] = useState(false);
  const [SideProf, setSideProf] = useState(false);
  // const navigate = useNavigate();

  const toggleBar = () => {
    setOpen((open) => !open);
  };

  const openAddAccountModal = () => {
    setAddAccountModal(true);
    setSideProf(false);
  };

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth > 1130) {
        setOpen(false);
        setSmallScreen(false);
      } else {
        setOpen(false);
        setSmallScreen(true);
      }
    };
    window.addEventListener("resize", checkScreen);
    checkScreen();
  }, []);

  useEffect(() => {
    if (token && user && user.active_plan) {
      fetchData();
    }  
    
  }, [token, user]);

  useEffect(() => {
    if (!token || !user) {
      navigate("/signin");
    }
  }, [token, user]);

  const isAllowed = user?.plan || user?.active_plan;

  return (
    <div>
      <div
        id="dashboard"
        className="container md:h-screen  relative overflow-hidden flex flex-col "
      >
        <nav className="container z-[9999] fixed top-0">
          <div className="w-full text-text flex items-center justify-between mt-4 p-4 px-8 rounded-lg bg-[#091324] border-secondary border-[2px]">
            <div
              className={`relative py-4 hidden cursor-pointer z-[999] hover:opacity-80 ${smallScreen && "hamburger"
                }`}
              onClick={toggleBar}
              key={location.pathname}
            >
              <span className={`bg-text ${open && "bar"}`} />
              <span className={`bg-text ${open && "bar"}`} />
            </div>
            <img src={logo} alt="logo image" className="w-[130px]" />
            <ul
              className={`${smallScreen && open && "small-Dashboard slide-down-dash"
                } ${smallScreen && !open && "small-Dashboard slide-up-dash"} ${!smallScreen &&
                "items-center text-sm justify-center hidden sm:flex"
                }`}
            >
              <li className="flex items-center cursor-pointer mr-0 hover:opacity-80">
                <NavLink
                  onClick={toggleBar}
                  key={location.pathname}
                  to="/dashboard"
                  end
                  style={{
                    opacity: isAllowed ? 1 : 0.5,
                    pointerEvents: isAllowed ? "auto" : "none",
                    cursor: isAllowed ? "pointer" : "default",
                  }}
                  className={({ isActive }) =>
                    `flex items-center cursor-pointer outline-none px-3 mr-0 relative ${isActive && "text-secondary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="flex items-center hover:opacity-65">
                      <img
                        src={isActive ? dashboardIconBlue : dashboardIcon}
                        className="w-[15px] mr-1"
                        alt="Dashboard Icon"
                      />
                      Dashboard
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="flex items-center cursor-pointer mr-0 hover:opacity-80">
                <NavLink
                  to="smart-content"
                  style={{
                    opacity: isAllowed ? 1 : 0.5,
                    pointerEvents: isAllowed ? "auto" : "none",
                    cursor: isAllowed ? "pointer" : "default",
                  }}
                  onClick={toggleBar}
                  key={location.pathname}
                  className={({ isActive }) =>
                    `flex items-center cursor-pointer px-3 mr-0 relative ${isActive && "text-secondary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="flex items-center hover:opacity-65">
                      <img
                        src={isActive ? smartIconBlue : smartIcon}
                        className="w-[15px] mr-1"
                      />{" "}
                      AI Smart Content
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="flex items-center cursor-pointer mr-0 hover:opacity-80">
                <NavLink
                  to="dm-automation"
                  onClick={toggleBar}
                  key={location.pathname}
                  className={({ isActive }) =>
                    `flex items-center cursor-pointer px-3 mr-0 relative ${isActive && "text-secondary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="flex items-center hover:opacity-65">
                      <img
                        src={isActive ? DmIconBlue : DmIcon}
                        className="w-[15px] mr-1"
                      />{" "}
                      DM Automation
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="flex items-center cursor-pointer mr-0 hover:opacity-80">
                <NavLink
                  to="growth-tools"
                  style={{
                    opacity: isAllowed ? 1 : 0.5,
                    pointerEvents: isAllowed ? "auto" : "none",
                    cursor: isAllowed ? "pointer" : "default",
                  }}
                  onClick={toggleBar}
                  key={location.pathname}
                  className={({ isActive }) =>
                    `flex items-center cursor-pointer px-3 mr-0 relative ${isActive && "text-secondary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="flex items-center hover:opacity-65">
                      <img
                        src={isActive ? growthIconBlue : growthIcon}
                        className="w-[15px] mr-1"
                      />{" "}
                      Growth Tools
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="flex items-center cursor-pointer mr-0 hover:opacity-80">
                <NavLink
                  to="learning"
                  onClick={toggleBar}
                  key={location.pathname}
                  className={({ isActive }) =>
                    `flex items-center cursor-pointer px-3 mr-0 relative ${isActive && "text-secondary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="flex items-center hover:opacity-65">
                      <img src={isActive ? learningIconBlue : learningIcon} className="w-[15px] mr-1" />{" "}
                      Learning
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="flex items-center cursor-pointer mr-0 hover:opacity-80">
                <NavLink
                  to="buy-credits"
                  onClick={toggleBar}
                  key={location.pathname}
                  className={({ isActive }) =>
                    `flex items-center cursor-pointer px-3 mr-0 relative ${isActive && "text-secondary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="flex items-center hover:opacity-65">
                      <img src={isActive ? creditIconBlue : creditIcon} className="w-[15px] mr-1" /> Buy
                      Credits
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center relative text-text">
              <div
                className="flex items-center cursor-pointer hover:opacity-85"
                onClick={() => {
                  setSideProf(!SideProf);
                }}
              >
                <CgProfile className="text-lg" />
                <p className="text-xs mx-1 text-start">{user?.first_name}</p>
                {SideProf ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {SideProf && (
                <div className="absolute z-[9990] right-2 top-7 p-3 border-[1px] w-[200px] border-[#5B657A] bg-primary rounded">
                  {user?.active_plan && (
                    <span>
                      <ul className="rounded">
                        <p className="text-xs font-semibold text-dim">
                          Manage Accounts
                        </p>
                        {accounts.length < 1 && !miniLoading && (
                          <p className="text-xs text-[red]">
                            No added accounts.
                          </p>
                        )}
                        {miniLoading && (
                          <img src={loader} className="w-[40px] mx-auto" />
                        )}
                        {!miniLoading &&
                          accounts?.map((account) => (
                            <li
                              key={account.x_id}
                              onClick={() =>
                                handleSaveActiveAccountId(account.x_id)
                              }
                              className={`${activeAccountId === account.x_id
                                  ? "!border-[#548cf7] border-[2px]"
                                  : "border-[white]"
                                } cursor-pointer border-dim border-[1px] rounded p-1 flex items-center justify-between text-xs my-1 hover:opacity-75`}
                            >
                              <span className="flex items-center">
                                <img
                                  src={account.pfp}
                                  className="rounded-full h-[25px] w-[25px] "
                                />
                                <span className="ml-1 ">
                                  <p className="font-medium text-[12px]">
                                    {account.name.slice(0, 10)}
                                    {account.name.length > 10 && ".."}
                                  </p>
                                  <p className="text-[grey] mt-[-4px] text-[10px]">
                                    @{account.username}
                                  </p>
                                </span>
                              </span>
                              <p>
                                {activeAccountId === account.x_id && (
                                  <FaCheckCircle className="text-[#548cf7]" />
                                )}
                              </p>
                            </li>
                          ))}
                      </ul>
                      <button
                        onClick={openAddAccountModal}
                        className="p-2 border-[1px] border-[#5B657A] text-[#5B657A] rounded text-xs flex items-center justify-between w-full my-2 outline-none hover:opacity-80"
                      >
                        Add&nbsp;Account <GoPlus className="ml-1 text-lg" />
                      </button>
                    </span>
                  )}
                  <button
                    onClick={logout}
                    className="p-2 border-[1px] border-[#5B657A] text-[#5B657A] rounded text-xs flex items-center justify-between w-full my-2 outline-none hover:opacity-80"
                  >
                    Log&nbsp;Out <IoIosLogOut className="ml-1 text-lg" />
                  </button>
                  <Link
                    to={"settings"}
                    className="p-2 border-[1px] border-[#5B657A] text-[#5B657A] rounded text-xs flex items-center justify-between w-full my-2 outline-none hover:opacity-80"
                  >
                    Settings <RiSettingsLine />
                  </Link>
                </div>
              )}
            </div>
          </div>
          {addAccountModal && (
            <AddAccount
              setTwoFaData={setTwoFaData}
              setAddAccountModal={setAddAccountModal}
            />
          )}
          {twoFaData && (
            <TwoFA_Modal twoFaData={twoFaData} setTwoFaData={setTwoFaData} />
          )}
        </nav>
        {/* <div className="flex-grow overflow-y-auto scrollbar-hide"> */}
        <div className="flex-grow scrollbar-hide h-full mt-24 lg:mt-[80px]">
          {" "}
          {/* Added scrollable content area */}
          <Toaster />
          <div onClick={() => setSideProf(false)}>
            <Outlet />
          </div>
          {loading && <Loader />}
        </div>
      </div>
      <img
        alt="flair bg"
        src={blurLayer}
        draggable="false"
        className="absolute min-h-screen z-[-1] top-0 left-0 h-full w-[100vw] nodrag unselectable object-cover"
      />
    </div>
  );
};

export default DashboardLayout;
