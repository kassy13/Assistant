import React from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import {
  useAuthStore,
  useDetailsStore,
} from "../../../../AuthStore/GlobalStates";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FinalReview = () => {
  const { accounts } = useDetailsStore();
  const { setLoading, token } = useAuthStore();

  const promptData = window.localStorage.getItem("posterPrompt");
  let PosterSetup = JSON.parse(window.localStorage.getItem("posterSetup"));

  const navigate = useNavigate();

  const getUsername = (user) => {
    const username = accounts.find((account) => account.id === user);
    return username?.username;
  };

  PosterSetup.prompt = promptData;
  console.log(PosterSetup);

  const startPostCampaign = async () => {
    console.log({PosterSetup})
    try {
      setLoading(true);
      const response = await fetch("https://api.networkx.ai/api/v1/scheduler", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(PosterSetup),
      });
      console.log({response});
      if (response.ok) {
        const resData = await response.json()
        console.log(resData)
        toast("Your Ai campaign has been successfully scheduled!");
        window.localStorage.removeItem("posterPrompt");
        window.localStorage.removeItem("posterSetup");
        navigate("/dashboard/smart-content");
      }else{
        const resError = await response.json()
        const firstErrorMessage = resError.errors.prompt[0];
        toast(firstErrorMessage);
//      console.log({firstErrorMessage})
      }
    }catch(error) {
      toast("Ai campaign scheduling failed. Please try again later.");
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
                {promptData.slice(0, 200)}
                {promptData.length > 200 && "..."}
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
                <p className="w-1/2">
                  @{getUsername(PosterSetup.x_account_id)}
                </p>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Campaign duration:</h2>
                <p className="w-1/2">
                  {PosterSetup.duration} {PosterSetup.duration_type}
                  {PosterSetup.duration > 1 && "s"}
                </p>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Range of posts per day:</h2>
                <p className="w-1/2">20 to 50</p>
              </div>
              <div className="flex justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Days to post:</h2>
                <div className="w-1/2 flex flex-wrap">
                  {PosterSetup.post_days.length === 7
                    ? "Everyday"
                    : PosterSetup.post_days.map((days) => (
                        <p className="mx-1">{days},</p>
                      ))}
                </div>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Time frame of post:</h2>
                <p className="w-1/2">
                  {PosterSetup.post_start_time} to {PosterSetup.post_end_time}
                </p>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Hashtags:</h2>
                <p className="w-1/2">
                  {PosterSetup.use_hashtag ? "Yes" : "No"}
                </p>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Emojis:</h2>
                <p className="w-1/2">{PosterSetup.use_emoji ? "Yes" : "No"}</p>
              </div>
              <div className="flex items-center justify-between my-[6px] text-xs">
                <h2 className="font-semibold">Threads:</h2>
                <p className="w-1/2">{PosterSetup.use_thread ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={startPostCampaign}
          className="w-full bg-secondary px-4 py-2 text-xs rounded hover:bg-opacity-70 disabled:bg-opacity-50"
        >
          Start Campaign
        </button>
      </div>
    </div>
  );
};

export default FinalReview;
