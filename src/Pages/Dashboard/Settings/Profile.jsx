import React, {useState, useEffect} from "react";
import sarah from "../../../assets/icons/Add profile picture icon.png";
import {Link} from "react-router-dom";
import {RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
import {useAuthStore} from "../../../AuthStore/GlobalStates";

const Profile = () => {
  const {user} = useAuthStore();
  console.log("userrrr", user);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Time Zone");
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  const timeZones = [
    "UTC−12:00: Baker Island Time",
    "UTC−11:00: Niue Time, Samoa Standard Time",
    "UTC−10:00: Hawaii-Aleutian Standard Time (HST), Tahiti Time",
    "UTC−09:30: Marquesas Islands Time",
    "UTC−09:00: Alaska Standard Time (AKST)",
    "UTC−08:00: Pacific Standard Time (PST), Clipperton Island Time",
    "UTC−07:00: Mountain Standard Time (MST)",
    "UTC−06:00: Central Standard Time (CST), Easter Island Standard Time (EAST)",
    "UTC−05:00: Eastern Standard Time (EST), Colombia Time",
    "UTC−04:00: Atlantic Standard Time (AST), Venezuela Time",
    "UTC−03:30: Newfoundland Standard Time (NST)",
    "UTC−03:00: Argentina Time, Brazil Time (BRT)",
    "UTC−02:00: South Georgia/Sandwich Islands Time",
    "UTC−01:00: Azores Standard Time, Cape Verde Time (CVT)",
    "UTC±00:00: Greenwich Mean Time (GMT), Coordinated Universal Time (UTC)",
    "UTC+01:00: Central European Time (CET), West Africa Time (WAT)",
    "UTC+02:00: Eastern European Time (EET), South Africa Standard Time (SAST)",
    "UTC+03:00: Moscow Standard Time (MSK), East Africa Time (EAT)",
    "UTC+03:30: Iran Standard Time (IRST)",
    "UTC+04:00: Gulf Standard Time (GST), Armenia Time (AMT)",
    "UTC+04:30: Afghanistan Time (AFT)",
    "UTC+05:00: Pakistan Standard Time (PKT), Yekaterinburg Time (YEKT)",
    "UTC+05:30: Indian Standard Time (IST), Sri Lanka Time (SLST)",
    "UTC+05:45: Nepal Time (NPT)",
    "UTC+06:00: Bangladesh Standard Time (BST), Bhutan Time (BTT)",
    "UTC+06:30: Cocos Islands Time, Myanmar Time (MMT)",
    "UTC+07:00: Indochina Time (ICT), Krasnoyarsk Time (KRAT)",
    "UTC+08:00: China Standard Time (CST), Australian Western Standard Time (AWST)",
    "UTC+08:45: Australian Central Western Standard Time (ACWST)",
    "UTC+09:00: Japan Standard Time (JST), Korea Standard Time (KST)",
    "UTC+09:30: Australian Central Standard Time (ACST)",
    "UTC+10:00: Australian Eastern Standard Time (AEST), Vladivostok Time (VLAT)",
    "UTC+10:30: Lord Howe Standard Time (LHST)",
    "UTC+11:00: Solomon Islands Time (SBT), Magadan Time (MAGT)",
    "UTC+12:00: New Zealand Standard Time (NZST), Fiji Time (FJT)",
    "UTC+13:00: Tonga Time (TOT), Phoenix Islands Time (PHOT)",
    "UTC+14:00: Line Islands Time (LINT)",
  ];

  // useEffect(() => {
  //   // Retrieve user info from local storage
  //   const storedUserInfo = localStorage.getItem("user");

  //   if (storedUserInfo) {
  //     setUserInfo(JSON.parse(storedUserInfo));
  //   }
  //   console.log("user infp", userInfo);
  // }, []);
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const profileUser = storedUser.data;
  console.log(storedUser, profileUser);

  return (
    <section className="lg:pb-10 pb-30 lg:pt-0  rounded-lg lg:px-6 text-white h-full   overflow-y-scroll  pt-6 md:mt-0 scrollbar-hide ">
      <div className="overflow-scroll scrollbar-hide lg:ml-10  ">
        <div className="border border-white rounded-lg bg-setting_profile_bg p-3 lg:p-3 lg:px-5 lg:w-9/12  w-full">
          {/* Title */}
          <h2 className="text-text text-[16px] md:text-[18px] text-center md:text-left font-bold">
            Profile
          </h2>
          <p className="text-text py-2 text-center md:text-left text-sm md:text-sm">
            Change your name, profile picture, personal details, and more.
          </p>

          {/* Profile Picture and Name */}
          <div className="text-text flex justify-between lg:justify-start  items-center pt-5 lg:w-[700px] px-3 ">
            <div className="flex gap-5 items-center">
              <div className="w-[50px]  lg:w-[60px] h-[50px] lg:h-[60px]">
                <img
                  src={sarah} // Replace with dynamic image if available
                  alt="Profile"
                  className="w-full h-full rounded-full"
                />
              </div>
              {/* Full Name */}
              <div>
                <label>Full Name</label>
                <p className="text-dim text-sm">
                  {/* {userInfo?.data.first_name ? userInfo?.data.first_name : "nil"} */}
                  {/* {profileUser?.first_name || "Default"} */}
                  {user?.first_name} {user?.last_name}
                </p>
              </div>
            </div>
            <Link
              to={"/dashboard/settings/profile-edit"}
              className="bg-secondary p-[6px] lg:py-2 px-3 lg:px-5 rounded text-white text-xs lg:text-[14px] lg:ml-32 hidden lg:block"
            >
              Edit Profile
            </Link>
          </div>

          <div className="flex flex-row lg:flex-row justify-between lg:justify-start lg:items-center lg:gap-24 items-start gap-1 ">
            {/* Email Address */}
            <div className="lg:pl-24">
              <label>Email Address</label>
              <p className="text-dim text-sm">
                {/* {userInfo?.data.email ? userInfo.data?.email : "Nil"} */}
                {profileUser?.email || "N/A"}
              </p>
            </div>

            {/* Phone Number */}
            <div>
              <label>Phone Number</label>
              <p className="text-dim text-sm">
                {/* {userInfo?.data.phone ? userInfo?.data.phone : "Nil"} */}
                {profileUser?.phone || "N/A"}
              </p>
            </div>
          </div>
          <div className="py-3">
            <Link
              to={"/dashboard/settings/profile-edit"}
              className="bg-secondary p-[6px] lg:py-2 px-3 lg:px-5 rounded text-white text-sm font-bold lg:text-[14px] lg:ml-32 block lg:hidden text-center"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        <div className="">
          {/* Time Zone Preferences */}
          <div className="my-6 border border-white rounded-lg bg-setting_profile_bg p-5 transition-all duration-200 ease-in-out lg:w-9/12 w-full">
            <h4 className="text-text  text-[16px] md:text-[18px] font-bold">
              Time Zone Preferences
            </h4>
            <p className="text-dim text-base py-4">
              Ensure our system is aligned with your time zone
            </p>
            <div className="inline-block text-left w-full">
              <button
                type="button"
                onClick={toggleDropdown}
                className={`bg-transparent border border-white rounded-lg px-4  py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-2/3 w-72 text-left text-sm ${
                  selectedOption === "Select Time Zone"
                    ? "text-gray-500"
                    : "text-white"
                }`}
              >
                {selectedOption}
                <span className="inline-block float-right pl-10">
                  {isOpen ? (
                    <RiArrowUpSLine size={18} />
                  ) : (
                    <RiArrowDownSLine size={18} />
                  )}
                </span>
              </button>
              {isOpen && (
                <div className="z-10 mt-1 w-full lg:w-2/3  rounded-md lg:bg-transparent border border-white transition-all duration-200 ease-in-out">
                  <ul className="max-h-60 overflow-y-auto w-full rounded-md bg-[#091324] text-sm  scrollbar-hide text-white">
                    {timeZones.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-500 hover:text-white"
                      >
                        <span className="block truncate">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="mr-2 lg:mr-0">
              <button className="bg-secondary p-2 px-3 rounded text-white text-xs w-full lg:w-auto lg:mt-5 mt-4">
                Save Time Zone
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
