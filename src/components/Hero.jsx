import React, {useContext} from "react";
import {FaArrowRight} from "react-icons/fa6";
import poster from "../assets/images/poster.png";
import bgVid from "../assets/bg.mov";
import {ScrollContexts} from "../store/ScrollContext";

const Hero = () => {
  const {heroRef} = useContext(ScrollContexts);
  return (
    <div className="heroBg relative mb-8" ref={heroRef}>
      <div className="video-background">
        <video
          autoPlay
          muted
          controls={false}
          playsInline
          loop
          poster={poster}
          className=" object-cover"
        >
          <source src={bgVid} type="video/mp4" />
        </video>
        <div className="content-overlay w-full">
          <section className="container px-4 h-[105%] flex flex-col justify-center items-center text-text text-center">
            <div className="text-center text-sm bg-secondary p-1 px-2 rounded-full">
              Powerful Twitter Outreach
            </div>
            <div className="pt-12 pb-4 flex flex-col items-center">
              <h1 className="text-5xl font-bold leading-none heroText md:leading-snug">
                An AI assistant customized <br /> for your Twitter/X DMs
              </h1>
              <p className="my-4">
                Generate engaging messages tailored to your profile and
                interest, organize <br /> inbox with filters, auto replies and
                lots more.
              </p>
            </div>
            <button
              style={{boxShadow: "#0653C0"}}
              className="flex items-center bg-gradient-to-b from-[#3F8EFF] to-[#0653C0] rounded p-1 px-2 text-sm shadow-lg gradient-button"
            >
              <p>Start Free Trial</p> <FaArrowRight className="ml-1 text-sm" />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
