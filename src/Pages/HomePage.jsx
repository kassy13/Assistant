import React, { useRef, useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import Features from "../components/Features";
import Cta from "../components/Cta";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import { ScrollContexts } from "../store/ScrollContext";
import Booking from "../components/Booking";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  const { heroRef } = useContext(ScrollContexts);

  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom =
        heroRef.current.offsetTop + heroRef.current.offsetHeight;
      setIsPastHero(window.scrollY > heroBottom / 2);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar isPastHero={isPastHero} />
      <Hero />
      <Intro />
      <Features />
      <Cta style={"flex-col text-4xl"} styleBtn={"mt-6"} />
      <Testimonials />
      <Pricing py={"py-[50px]"} />
      <Booking />
      <div className="mainFieldBg">
        <Faqs />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
