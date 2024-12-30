import React, {useContext, useEffect, useRef, useState} from "react";

import {Link, NavLink} from "react-router-dom";
import {FiMenu, FiX, FiUser} from "react-icons/fi";
import logo from "../../assets/images/final main logo.svg";
import {ScrollContexts} from "../../store/ScrollContext";
import Button from "./Button";
import {GoPlus} from "react-icons/go";
import {useAuthStore, useDetailsStore} from "../../AuthStore/GlobalStates";
import {useAuth} from "../../AuthStore/AuthProvider";
import useFunctionStore from "../../store/FunctionStore";
import loader from "../../../src/assets/Spinner.svg";
import {FaCheckCircle} from "react-icons/fa";
import {IoIosLogOut} from "react-icons/io";
import {RiSettingsLine} from "react-icons/ri";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const dropdownRef = useRef(null);
  const {
    scrollFnc,
    feauturesRef,
    pricingRef,
    faqsRef,
    videoRef,
    swiperRef,
    testimonialsRef,
    contactRef,
  } = useContext(ScrollContexts);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) setNavbarHeight(navbar.offsetHeight);
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const baseStyles =
    "text-[15px] font-semibold transition-all cursor-pointer  ";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleUserDropdown = () => setIsUserDropdownOpen((prev) => !prev); // Toggle dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsUserDropdownOpen(false);
    }
  };
  const {token, user, loading} = useAuthStore();
  const {logout} = useAuth();
  const {handleSaveActiveAccountId, accounts, activeAccountId} =
    useDetailsStore();
  const {miniLoading, fetchData} = useFunctionStore();
  const [SideProf, setSideProf] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full h-16 py-5 px-16 items-center justify-between sticky top-0 hidden lg:!flex">
        <div className="w-[180px] xxxl:w-[250px] z-[99999999999999]">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-cover "
            />
          </Link>
        </div>
        <div className="flex items-center gap-6 pt-1 ">
          {/* {["Features", "Testimonials", "Pricing", "FAQs", "Contact Us"].map(
            (item) => (
              <Link
                key={item}
                to={item === "Contact Us" ? "contact" : item}
                smooth={true}
                duration={1000} // Scrolling duration
                activeClass="text-[#1D9BF0]" // Apply this class when active
              
                className={`${baseStyles} text-white hover:opacity-75 hover:scale-[1.05]`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )
          )} */}

          {[
            {name: "Features", ref: feauturesRef},
            {name: "Testimonials", ref: testimonialsRef},
            {name: "Pricing", ref: pricingRef},
            {name: "FAQs", ref: faqsRef},
            {name: "Contact Us", ref: contactRef},
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollFnc(item.ref)}
              className={`${baseStyles} text-white hover:opacity-75 hover:scale-[1.05] xxxl:text-[20px]`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex gap-7 items-center">
          <Button text={"Sign in"} link={"signIn"} />

          <Button text={"Get Started"} link={"signUp"} />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="w-full h-16 py-5 bg-setting_profile_bg flex items-center justify-between lg:hidden fixed left-0 px-8 top-0 text-white  z-[99999999999999] ">
        {/* Menu Icon */}
        {/* <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button> */}
        <div
          className="relative py-4 hamburger cursor-pointer z-[999]  hover:opacity-80 lg:hidden"
          onClick={toggleMenu}
        >
          <span className={`bg-text ${isMenuOpen && "bar"}`} />
          <span className={`bg-text ${isMenuOpen && "bar"}`} />
        </div>

        {/* Logo */}
        <Link to={"/"}>
          <img
            src={logo}
            alt="Logo"
            className="w-[130px] md:w-[150px] object-contain"
          />
        </Link>

        {/* User Icon */}
        {/* <Link to="/settings" className="text-2xl md:text-3x">
          <FiUser />
        </Link> */}
        <button onClick={toggleUserDropdown} className="text-2xl relative">
          <FiUser />
          {isUserDropdownOpen && (
            <div
              ref={dropdownRef}
              className="lg:hidden absolute z-[9990] right-0 -mr-8 top-[44px] p-3 border-[1px] w-[300px] border-text bg-primary rounded"
            >
              {user?.active_plan && (
                <span>
                  <ul className="rounded">
                    <p className="text-xs font-semibold text-text">
                      Manage Accounts
                    </p>
                    {accounts.length < 1 && !miniLoading && (
                      <p className="text-xs text-[red]">No added accounts.</p>
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
                          className={`${
                            activeAccountId === account.x_id
                              ? "!border-[#548cf7] border-[2px]"
                              : "border-[white]"
                          } cursor-pointer border-text border-[1px] rounded p-1 flex items-center justify-between text-xs my-1`}
                        >
                          <span className="flex items-center">
                            <img
                              src={account.pfp}
                              className="rounded-full h-[25px] w-[25px]"
                            />
                            <span className="ml-1">
                              <p className="font-medium text-[12px]">
                                {account.name.slice(0, 10)}
                                {account.name.length > 10 && ".."}
                              </p>
                              <p className="text-[grey] mt-[-4px] text-[10px]">
                                @{account.username}
                              </p>
                            </span>
                          </span>
                          <p className="flex">
                            {activeAccountId === account.x_id && (
                              <FaCheckCircle className="text-[#548cf7]" />
                            )}
                          </p>
                        </li>
                      ))}
                  </ul>
                  <button className="p-2 border-[1px] border-[#5B657A] text-[#5B657A] flex items-center justify-between gap-1 rounded text-xs w-full my-2">
                    Add&nbsp;Account <GoPlus />
                  </button>
                </span>
              )}
              <button className="p-2 border-[1px] border-[#5B657A] text-[#5B657A]  flex items-center justify-between gap-1 rounded text-xs w-full my-2">
                Log&nbsp;Out <IoIosLogOut />
              </button>
              <Link
                to={"settings"}
                className="p-2 border-[1px] border-[#5B657A] text-[#5B657A]  flex items-center justify-between gap-1 rounded text-xs w-full my-2"
              >
                Settings <RiSettingsLine />
              </Link>
            </div>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`transition-transform duration-300 ease-in-out fixed w-full left-0 bg-setting_profile_bg lg:bg-transparent z-[1000] ${
          isMenuOpen ? "top-[60px] h-screen translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-5 pt-9 flex flex-col justify-start items-start space-y-5  lg:hidden">
          {/* {["features", "testimonials", "pricing", "faqs", "contact"].map(
            (item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className={({isActive}) =>
                  `${baseStyles} ${
                    isActive
                      ? "text-[#1D9BF0]"
                      : "text-white hover:text-[#1D9BF0]"
                  }`
                }
                onClick={toggleMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            )
          )} */}

          {[
            {name: "Features", ref: feauturesRef},
            {name: "Testimonials", ref: testimonialsRef},
            {name: "Pricing", ref: pricingRef},
            {name: "FAQs", ref: faqsRef},
            {name: "Contact Us", ref: contactRef},
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => {
                scrollFnc(item.ref);
                toggleMenu();
              }}
              className={`${baseStyles} text-white hover:opacity-75 hover:scale-[1.05]`}
            >
              {item.name}
            </button>
          ))}
          <Button
            text={"Sign in"}
            link={"signIn"}
            style={"w-28 flex justify-center"}
          />

          <Button
            text={"Get Started"}
            link={"signUp"}
            style={"w-28 flex justify-center"}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
