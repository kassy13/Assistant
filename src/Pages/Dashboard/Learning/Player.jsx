import React, { useState } from "react";
import guideImg from "../../../assets/images/guide.png";
import tutorialImg from "../../../assets/images/tutorialImg.png";
import blogImg from "../../../assets/images/blogImg.png";
import { RiPlayCircleFill } from "react-icons/ri";
import { useDetailsStore } from "../../../AuthStore/GlobalStates";
import { PiBookOpenTextFill } from "react-icons/pi";
import spinner from "../../../assets/Spinner.svg";
import ReactPlayer from "react-player";
import { tutorialData } from "./LearningData/TutorialData";

const Player = () => {
  const { activeLearningPage, playingVideo, setplayingVideo } = useDetailsStore();

  const data = [
    {
      page: "tutorial",
      header: "Become An Expert With Our Tutorials",
      text: "Explore our comprehensive catalog of tutorials, carefully designed to help you get up to speed quickly and efficiently.",
      image: tutorialImg,
    },
    {
      page: "guide",
      header:
        "Revolutionize Your X Experience With Our Extensive Video Library",
      text: "Discover how AI can help you unlock the full potential of your account with NetworkX.",
      image: guideImg,
    },
    {
      page: "blog",
      header: "Get The Latest News And Tips From Our Blog",
      text: "Stay informed by exploring our written content.",
      image: blogImg,
    },
  ];

  return (
    <div className="bg-[#010C1E] relative max-h-[600px] min-h-[400px] rounded-md">
      {playingVideo === null && (
        <div className="relative max-h-[600px] min-h-[400px] overflow-hidden">
          <img
            src={data[activeLearningPage].image}
            alt="cta image"
            className="absolute w-full h-[100%] object-cover"
          />
          <div className="absolute text-white px-8 flex flex-col justify-center items-start w-full h-full top-0 z-[99] bg-gradient-to-b from-[#151928E0] to-[#31386080]">
            <div className="w-full md:w-[60%]">
              <h1 className="font-bold text-2xl">
                {data[activeLearningPage].header}
              </h1>
              <p className="py-2">{data[activeLearningPage].text}</p>
              {activeLearningPage === 2 ? (
                <button className="p-2 bg-[#091324] rounded flex items-center text-sm border-white border-[1px] hover:opacity-75">
                  Start Reading <PiBookOpenTextFill className="ml-1 text-lg" />
                </button>
              ) : (
                <button onClick={()=>setplayingVideo(tutorialData[0].youtube)} className="p-2 bg-[#091324] rounded flex items-center text-sm border-white border-[1px] hover:opacity-75">
                  Start Watching <RiPlayCircleFill className="ml-1 text-lg" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {playingVideo && (
        <>
          <div className="w-full h-full absolute rounded-lg p-5 overflow-hidden z-[99]">
            <ReactPlayer
              url={playingVideo}
              playing={true}
              controls
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </div>
          <div className="w-full h-full absolute z-[9] flex justify-center items-center">
            <img src={spinner} alt="loader" className="w-[50px]" />
          </div>
        </>
      )}
    </div>
  );
};

export default Player;
