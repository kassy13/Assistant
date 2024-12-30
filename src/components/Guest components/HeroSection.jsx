import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {
  RiArrowGoBackLine,
  RiArrowRightFill,
  RiArrowRightLine,
  RiArrowRightSFill,
  RiArrowRightSLine,
} from "react-icons/ri";
import poster from "../../assets/images/poster.png";
import bgVid from "../../assets/bg.mov";
import Nav from "./Nav";
import Button from "./Button";

const HeroSection = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const viewportHeight = window.innerHeight;

  //     if (scrollY > 0 && scrollY < viewportHeight) {
  //       setIsBlurred(true);
  //       setIsSolid(false);
  //     } else if (scrollY >= viewportHeight) {
  //       setIsSolid(true);
  //       setIsBlurred(false);
  //     } else {
  //       setIsBlurred(false);
  //       setIsSolid(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Animation Variants

  useEffect(() => {
    const updateNavbarStyles = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY > 0 && scrollY < viewportHeight) {
        setIsBlurred(true);
        setIsSolid(false);
      } else if (scrollY >= viewportHeight) {
        setIsSolid(true);
        setIsBlurred(false);
      } else {
        setIsBlurred(false);
        setIsSolid(false);
      }
    };

    // Check styles on initial render
    updateNavbarStyles();

    // Update styles on scroll
    window.addEventListener("scroll", updateNavbarStyles);

    return () => {
      window.removeEventListener("scroll", updateNavbarStyles);
    };
  }, []);

  const fadeIn = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
  };

  const slideIn = {
    hidden: {opacity: 0, x: -50},
    visible: {opacity: 1, x: 0, transition: {duration: 0.6}},
  };

  return (
    <header className="relative h-screen">
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 p-4 transition duration-300 ${
          isBlurred ? "bg-[rgba(1,12,30,0.6)] backdrop-blur-sm" : ""
        } ${isSolid ? "bg-[#010C1E]" : ""}`}
      >
        <Nav />
      </div>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        controls={false}
        playsInline
        poster={poster}
        className="absolute top-[-0px] left-0 w-full h-full object-cover -z-10 "
      >
        <source src={bgVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-[-0px] left-0 w-full h-full bg-[#010C1E]/70 -z-[5]"></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full h-screen lg:h-[90vh] xxl:h-screen  md:h-screen flex flex-col mt-[60px] lt:mt-[50px]  md:mt-0 md:pt-28 justify-center items-center text-white text-center "
      >
        <motion.div variants={fadeIn} className="lg:mt-12 -mt-16">
          <p className="bg-hero_bg text-sm md:text-xl lg:text-sm p-2 px-4 rounded-full xxxl:text-base">
            Boost Your X Account
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="py-3 lg:py-0 text-center">
          <h1 className="text-text xlt:text-[20px] lt:text-[26px] text-[28px] md:text-[55px] lg:text-[68px] my-8 lg:my-6 font-bold tracking-tight xlt:leading-[1.5] lt:leading-[1.2] leading-[1.04] z-40 relative px-4 ">
            An AI Smart Assistant Built
            <span>
              <br />
            </span>
            To Optimize Your X Account
          </h1>

          <p className="text-text xlt:text-[14px] lt:text-[18px] text-[18px] md:text-[26px] lg:text-[18px] px-4 lg:px- leading-[1.5] lg:my-6 xxxl:text-2xl">
            Whether it’s posting engaging content, replying to your favorite
            creators, DM marketing, or growing your account, we’ve got you
            covered.
          </p>
        </motion.div>

        <motion.div variants={slideIn} className="mt-6 lg:my-6 ">
          <Button
            text={"Start Free Trial"}
            link={"signUp"}
            arrow={<RiArrowRightSLine size={24} />}
            style={"md:text-[20px] lg:text-sm md:py-4 lg:py-[6px]"}
          />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
