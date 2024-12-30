import React, { useState, useEffect, useContext } from "react";
import SideBar from "./UI/SideBar";
import { ScrollContexts } from "../store/ScrollContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = ({ isPastHero }) => {
  const [open, setOpen] = useState(false);

  const toggleBar = () => {
    setOpen((open) => !open);
  };

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", checkScreen);
  }, []);

  const { scrollFnc, feauturesRef, faqsRef, pricingRef, testimonialsRef } =
    useContext(ScrollContexts);

  const scrollTestimonial = () => {
    setOpen(false);
    scrollFnc(testimonialsRef);
  };
  const scrollfeautures = () => {
    setOpen(false);
    scrollFnc(feauturesRef);
  };
  const scrollfaqs = () => {
    setOpen(false);
    scrollFnc(faqsRef);
  };
  const scrollpricing = () => {
    setOpen(false);
    scrollFnc(pricingRef);
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-500 ${
        isPastHero ? "bg-primary" : "bg-transparent"
      } z-[9999]`}
    >
      <div className="container text-text flex justify-between items-center text-sm px-2 py-6 md:px-6">
        <div className="w-1/2 flex items-start">
          <img
            src={logo}
            className="w-[140px] ml-[-5px]"
            alt="network.ai logo"
          />
        </div>
        <div className="w-[40%]">
          <ul className="justify-between items-center hidden md:flex">
            <li
              className="cursor-pointer hover:opacity-75"
              onClick={scrollfeautures}
            >
              Features
            </li>
            <li
              className="cursor-pointer hover:opacity-75"
              onClick={scrollpricing}
            >
              Pricing
            </li>
            <li
              className="cursor-pointer hover:opacity-75"
              onClick={scrollfaqs}
            >
              FAQs
            </li>
            <li
              className="cursor-pointer hover:opacity-75"
              onClick={scrollTestimonial}
            >
              Testimonials
            </li>
            <li>
              <Link to="/signIn">
                <button className="px-4 py-1 bg-secondary rounded-md text-sm hover:bg-opacity-85">
                  Sign&nbsp;In
                </button>
              </Link>
            </li>
          </ul>
          <div
            className="relative py-4 hamburger cursor-pointer z-[999] ml-auto hover:opacity-80 md:hidden"
            onClick={toggleBar}
          >
            <span className={`bg-text ${open && "bar"}`} />
            <span className={`bg-text ${open && "bar"}`} />
          </div>
        </div>
      </div>
      <SideBar
        open={open}
        setOpen={setOpen}
        scrollfeautures={scrollfeautures}
        scrollpricing={scrollpricing}
        scrollfaqs={scrollfaqs}
        scrollTestimonial={scrollTestimonial}
      />
    </nav>
  );
};

export default NavBar;
