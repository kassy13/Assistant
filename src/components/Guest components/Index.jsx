import React, {useState} from "react";
import Nav from "./Nav";
import HeroSection from "./HeroSection";
import CoreFeatures from "./CoreFeatures";
import Why from "./Why";
import PoweredBy from "./PoweredBy";
import Boost from "./Boost";
import Faq from "./Faq";
import Upgrade from "./Upgrade";
import BookaCall from "./BookaCall";
import Contact from "./Contact";
import Footer from "./Footer";
import Price from "./Price";
import VideoCarousel from "./VideoCarousel";
import {Outlet} from "react-router-dom";
import VideoTestimonials from "./VideoTestimonials";
const Index = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  return (
    <div>
      <HeroSection />
      <div className="w-full bg-leads-bg bg-contain bg-no-repeat bg-[0px_450px] ">
        <Upgrade />
        <CoreFeatures />
      </div>
      <Why />
      <PoweredBy />
      <div className="bg-leads-bg bg-contain bg-no-repeat mb-16 ">
        <div className="relative">
          <div className="relative ">
            {/* <VideoCarousel /> */}
            <VideoTestimonials />
            <div className="relative z-30">
              <Boost />
            </div>
          </div>
          <div className="absolute inset-0 bg-video-price-gradient pb-16 " />
        </div>
        {/* <VideoTestimonials /> */}
        {/* <Boost /> */}
        <Price activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {activeTab !== "done-for-you" && <BookaCall />}
      <Faq />
      <div className="bg-leads-bg bg-contain bg-no-repeat bg-[0px_550px]">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
