import React from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../../AuthStore/GlobalStates";

const FinalReview = () => {
  const { setLoading, token } = useAuthStore();

  const promptData = window.localStorage.getItem("replierPrompt");
  let replierSetup = JSON.parse(window.localStorage.getItem("replierSetup"));

  const navigate = useNavigate();

  replierSetup.prompt = promptData;
  console.log(replierSetup);

  const startReplyCampaign = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.networkx.ai/api/v1/add_comment", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(replierSetup),
      });
      console.log(response);
      if (response.ok) {
        const resData = await response.json()
        console.log(resData)
        toast("Your Ai replier campaign has been successfully scheduled!");
        window.localStorage.removeItem("replierPrompt");
        window.localStorage.removeItem("replierSetup");
        navigate("/dashboard/smart-content");
      }
    } catch (error) {
      console.log(error);
      toast("Ai replier campaign scheduling failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="text-text max-w-[700px] w-full">
      <div className="radient-shadow border-[#5B657A] border-[2px] w-full relative z-[99] bg-[#091324] p-6 py-[8px] rounded-md">
        <h1 className="text-center text-sm mb-1 font-semibold">Final Review</h1>
        <div className="flex">
          <div className="w-1/2 m-4 border-[#5B657A] border-[1px] p-2 rounded-lg">
            <div className="py-2">
              <h1 className="flex items-center justify-center py-2 text-center w-full border-b-[1px] border-b-[#5B657A] font-bold">
                The Prompt <BiSolidEditAlt className="ml-2" />
              </h1>
            </div>
            <div className="ml-2 text-xs p-2">
              <i>
                "Kindly create a series of posts that focus on topics related to
                cryptocurrency, finance, technology, or recent current events.
                The posts should be both informative and value-adding, providing
                useful insights or updates to the reader. It's important that
                the content remains clear, concise, and easy to understand,
                avoiding unnecessary complexity. Each post should be kept within
                a range of 3 to 50 words in length to ensure they are quick and
                engaging for the audience. Additionally, please utilize the most
                recent and up-to-date information available when crafting these
                posts to ensure relevance and accuracy."
              </i>
            </div>
          </div>
          <div className="w-1/2 m-4  flex flex-col justify-between border-[#5B657A] border-[1px] p-2 px-4 rounded-lg">
            <div className="h-1/2 flex my-2 flex-col justify-around">
              <div className="py-2">
                <h1 className="flex items-center justify-center pb-2 text-center w-full border-b-[1px] border-b-[#5B657A] font-bold">
                  Campaign Configurations <IoIosSettings className="ml-2" />
                </h1>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Posting account:</h2>
                <p className="w-1/2">@sarah1234</p>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Campaign duration:</h2>
                <p className="w-1/2">4 Days</p>
              </div>
              <div className="flex my-[6px] text-xs">
                <p>
                <span className="font-semibold">Accounts to reply to: {" "}</span>
                <span>@elonmusk, @joerogan, @tombrady, @kimk,
                @markz, @tommydevito, @joshshipero, Show more</span>
                </p>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Range of replies per day:</h2>
                <p className="w-1/2">20 to 50</p>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Days to reply:</h2>
                <p className="w-1/2">Everyday</p>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Time frame of replies:</h2>
                <p className="w-1/2">9:45 AM to 12:30 PM</p>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Hashtags:</h2>
                <p className="w-1/2"> No</p>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Emojis:</h2>
                <p className="w-1/2">Yes</p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={startReplyCampaign} className="w-full bg-secondary px-4 py-2 text-xs rounded hover:bg-opacity-70 disabled:bg-opacity-50">
          Start Campaign
        </button>
      </div>
    </div>
  );
};

export default FinalReview;
