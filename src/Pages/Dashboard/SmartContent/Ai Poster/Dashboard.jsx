import React from "react";
import SmoothAreaChart from "../../../../components/ReusableChart";
import { MdAddCircle } from "react-icons/md";
import SelectAccount from "../../../../components/SelectAccount";
import { RiMessage2Fill } from "react-icons/ri";
import { BiSolidMessage } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { TiEye } from "react-icons/ti";
import { RiFlashlightFill } from "react-icons/ri";
import tick from "../../../../assets/icons/tick.svg";

const dummyData = [
  { campaignName: "AI Engagement Boost", date: "02/01/2024" },
  { campaignName: "ReplyBot Launch", date: "02/07/2024" },
  { campaignName: "AI Support Week", date: "02/10/2024" },
  { campaignName: "AutoReply Feedback", date: "02/15/2024" },
  { campaignName: "ChatBot Q&A", date: "02/18/2024" },
  { campaignName: "AI Insights Campaign", date: "02/20/2024" },
  { campaignName: "Post & Reply Blitz", date: "02/22/2024" },
  { campaignName: "Conversational AI Drive", date: "02/25/2024" },
  { campaignName: "AI Reply Optimization", date: "02/27/2024" },
  { campaignName: "Smart Reply Push", date: "03/02/2024" },
  { campaignName: "AI Conversations Growth", date: "03/05/2024" },
  { campaignName: "Engagement Reply Week", date: "03/07/2024" },
];

const PosterDashboard = () => {
  return (
    <div className="container h-screen flex items-start justify-between">
      <div className="w-full sm:w-[20%]">
        <button className="flex w-full items-center justify-center p-4 bg-secondary rounded-md text-text font-medium">
          <MdAddCircle className="mr-2 text-xl" /> Create New Campaign
        </button>
        <ul className="flex flex-col items-center text-text overflow-y-scroll h-[100vh] scrollbar-hide">
          {dummyData.map((campaign) => (
            <li
              className={`p-4 py-2 flex flex-col items-start bg-[#091324] cursor-pointer w-full justify-between my-1 border-[#5B657A] border-[1px] rounded-md`}
            >
              <span className="text-sm">{campaign.campaignName}</span>
              <span className="text-dim text-xs py-1">{campaign.date}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[60%] custom h-[82vh] mx-2 p-4 bg-[#010C1E] border-dim border-[2px] rounded-md">
        <div className="w-full">
            <header className="flex items-center mb-2">
                <div className="h-[15px] w-[15px] bg-[#319F43] rounded-full mr-2"/>
                <p className="font-medium text-text text-md">Posts</p>
            </header>
            <SmoothAreaChart stroke="#319F43" body="rgba(79, 209, 197, 0.54)" bottom="rgba(79, 209, 197, 0.1)"/>
        </div>
        <div className="w-full">
            <header className="flex items-center mb-2">
                <div className="h-[15px] w-[15px] bg-[#F8BD00] rounded-full mr-2"/>
                <p className="font-medium text-text text-md">Replies</p>
            </header>
            <SmoothAreaChart stroke="#F8BD00" body="rgba(248, 189, 0, 0.54)" bottom="rgba(245, 170, 10, 0.1)"/>
        </div>
        <div className="w-full">
            <header className="flex items-center mb-2">
                <div className="h-[15px] w-[15px] bg-[#9747FF] rounded-full mr-2"/>
                <p className="font-medium text-text text-md">Likes</p>
            </header>
            <SmoothAreaChart stroke="#9747FF" body="rgba(151, 71, 255, 0.54)" bottom="rgba(151, 71, 255, 0.1)"/>
        </div>
        <div className="w-full">
            <header className="flex items-center mb-2">
                <div className="h-[15px] w-[15px] bg-[#E33629] rounded-full mr-2"/>
                <p className="font-medium text-text text-md">Reposts</p>
            </header>
            <SmoothAreaChart stroke="#E33629" body="rgba(227, 54, 41, 0.54)" bottom="rgba(227, 54, 41, 0.1)"/>
        </div>
        <div className="w-full">
            <header className="flex items-center mb-2">
                <div className="h-[15px] w-[15px] bg-[#1D9BF0] rounded-full mr-2"/>
                <p className="font-medium text-text text-md">Comments</p>
            </header>
            <SmoothAreaChart stroke="#1D9BF0" body="rgba(29, 155, 240, 0.54)" bottom="rgba(29, 155, 240, 0.1)"/>
        </div>
      </div>
      <div className="w-[20%] h-[82vh] custom bg-[#010C1E] text-text rounded-md py-3 border-[2px] border-dim">
        <div className="flex items-center w-full p-2 border-b-[2px] border-b-dim px-4">
          <p className="flex items-center justify-between text-sm">
            Select Account:{" "}
            <SelectAccount messageSelect="!border-none !bg-transparent" />{" "}
          </p>
        </div>
        <div className="flex items-center py-4 border-b-[2px] border-b-dim px-4">
          <div className="bg-[#091324] p-2 text-lg mr-2 rounded-full">
            <BiSolidMessage />
          </div>
          <div>
            <p className="text-xs font-medium">Total Posts</p>
            <h2 className="font-bold">145.7k</h2>
          </div>
        </div>
        <div className="flex items-center py-4 border-b-[2px] border-b-dim px-4">
          <div className="bg-[#091324] p-2 text-lg mr-2 rounded-full">
            <RiMessage2Fill />
          </div>
          <div>
            <p className="text-xs font-medium">Total Replies</p>
            <h2 className="font-bold">15.7k</h2>
          </div>
        </div>
        <div className="flex items-center py-4 border-b-[2px] border-b-dim px-4">
          <div className="bg-[#091324] p-2 text-lg mr-2 rounded-full">
            <FaHeart />
          </div>
          <div>
            <p className="text-xs font-medium">Total Likes</p>
            <h2 className="font-bold">29.5k</h2>
          </div>
        </div>
        <div className="flex items-center py-4 border-b-[2px] border-b-dim px-4">
          <div className="bg-[#091324] p-2 text-lg mr-2 rounded-full">
            <FaRetweet />
          </div>
          <div>
            <p className="text-xs font-medium">Total Reposts</p>
            <h2 className="font-bold">2.3k</h2>
          </div>
        </div>
        <div className="flex items-center py-4 border-b-[2px] border-b-dim px-4">
          <div className="bg-[#091324] p-2 text-lg mr-2 rounded-full">
            <BiSolidMessage />
          </div>
          <div>
            <p className="text-xs font-medium">Total Comments</p>
            <h2 className="font-bold">150</h2>
          </div>
        </div>
        <div className="flex items-center py-4 border-b-[2px] border-b-dim px-4">
          <div className="bg-[#091324] p-2 text-lg mr-2 rounded-full">
            <TiEye />
          </div>
          <div>
            <p className="text-xs font-medium">Total Views</p>
            <h2 className="font-bold">145.7k</h2>
          </div>
        </div>
        <div className="flex items-center py-4 border-b-[2px] border-b-dim px-4">
          <div className="bg-[#091324] p-2 mr-2 rounded-full">
            <RiFlashlightFill />
          </div>
          <div>
            <p className="text-xs font-medium">Total credit used</p>
            <h2 className="font-bold">150</h2>
          </div>
        </div>
        <div className="flex items-center pt-4 px-4">
          <div className="bg-[#091324] p-2 mr-2 rounded-full">
            <img src={tick} />
          </div>
          <div>
            <p className="text-xs font-medium">Credit remaining</p>
            <h2 className="font-bold">145</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterDashboard;
