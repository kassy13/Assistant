import React from "react";
import { RiPlayCircleFill } from "react-icons/ri";
import { BiSolidAlarm } from "react-icons/bi";
import { MdBarChart } from "react-icons/md";
import { HiFire } from "react-icons/hi";
import { useDetailsStore } from "../../../AuthStore/GlobalStates";

const LearningDisplay = ({ data, title, header, type }) => {
  const {setplayingVideo} = useDetailsStore()
  //Get videos thumbnail
  function getYouTubeThumbnailUrl(youtubeUrl) {
    const videoId = youtubeUrl.split("v=")[1].split("&")[0];
    // Construct the thumbnail URL
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    return thumbnailUrl;
  }

  const handlePlay =(link)=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
    setplayingVideo(link)
  }

  return (
    <div>
      <div className="bg-[#010C1F] rounded-md text-white mt-6 p-4">
        <h2 className="font-bold flex items-center">
          {title}
         {type === 'basicTutorial' && <BiSolidAlarm className="ml-1 text-[#F8BD00]" />}
         {type === 'advancedTutorial' && <MdBarChart className="ml-1 text-[#F8BD00]" />}
         {type === 'recentlyAdded' && <BiSolidAlarm className="ml-1 text-[#F8BD00]" />}
         {type === 'Trending' && <HiFire  className="ml-1 text-[#F8BD00]" />}
        </h2>
        <p className="text-[#A0AEC0]">{header}</p>
        <div className="flex flex-wrap justify-between">
          {data.slice(0, 8).map((video) => (
            <div className="w-full sm:w-[calc(50%-6px)] rounded-lg p-3 my-3 bg-[#091324] max-w-xl:w-[calc(25%-8px)] md:w-[33%]">
              <img
                src={getYouTubeThumbnailUrl(video.youtube)}
                alt="video thumbnail"
                className="rounded-md"
              />
              <div className="text-white my-2 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-xs">
                    {video.title.slice(0, 17)}
                    {video.title.length > 17 && "..."}
                  </h3>
                  <p className="text-[10px] text-[#C4C4C4] font-light">
                    By Nick Wilson
                  </p>
                </div>
                <button onClick={()=>handlePlay(video.youtube)} className="text-xs bg-white p-2 flex items-center rounded-full text-[#091324] font-semibold hover:opacity-75">
                  Watch&nbsp;Now <RiPlayCircleFill className="ml-1 text-lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningDisplay;
