import React from "react";
import { PiAlarmFill } from "react-icons/pi";
import { SiGooglemessages } from "react-icons/si";
import { useAuthStore, useDetailsStore } from "../../../AuthStore/GlobalStates";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import messageBgIcon from "../../../assets/icons/MessageBg.svg";
import { ImClock } from "react-icons/im";

const FinalReview = () => {
  const { accounts } = useDetailsStore();
  const { setLoading, token } = useAuthStore();
  const navigate = useNavigate();
  const data = {
    leads: JSON.parse(localStorage.getItem("importLeads")),
    sequence: JSON.parse(localStorage.getItem("sequence")),
    setup: JSON.parse(localStorage.getItem("setup")),
  };
  console.log(data);
  const getUsername = (user) => {
    const username = accounts.find((account) => account.x_id === user);
    return username?.username;
  };

  const base64ToCSV = () => {
    const base64Data = data.leads?.base64File.split(",")[1];
    const csvContent = atob(base64Data);
    const blob = new Blob([csvContent], { type: "text/csv" });

    return blob;
  };

  console.log();

  const runCampaign = async () => {
    setLoading(true);
    try {
      const formData = new FormData();

      // Append fields to formData if they exist
      if (data.setup.x_id) {
        formData.append("x_id", data.setup.x_id);
      }
      if (data.sequence.Messages) {
        formData.append("message", data.sequence.messageVariant[0]);
      }
      formData.append("must_follow", data.setup.must_follow);
      formData.append("must_like", data.setup.must_like);
      if (data.leads.fileName) {
        formData.append("name", data.leads.fileName);
      }
      if (data.setup.max_daily_dms) {
        formData.append("max_daily_dms", data.setup.max_daily_dms);
      }
      if (data.setup.min_daily_dms) {
        formData.append("min_daily_dms", data.setup.min_daily_dms);
      }
      if (data.setup.max_total_dms) {
        formData.append("max_total_dms", data.setup.max_total_dms);
      }
      if (
        data.sequence.followUpvariant?.length > 0 &&
        data.sequence.followUpvariant[0]?.length > 0
      ) {
        formData.append("followup_message", data.sequence.followUpvariant[0]);
      }
      if (data.sequence.days) {
        formData.append("followup_time", data.sequence.days);
      }
      formData.append("followup_time_type", "Days");
      if (data.sequence.variant) {
        data.sequence.messageVariant.forEach((variant) => {
          variant !== "" && formData.append("variant_message[]", variant);
        });
      }
      if (data.leads.lead_id) {
        formData.append("lead_id", data.leads.lead_id);
      }

      //convert base64 file and append it
      if (data.leads?.base64File) {
        const csvBlob = base64ToCSV(data.leads.base64File);
        formData.append(
          "source",
          csvBlob,
          data.sequence.fileName || "file.csv"
        );
      }
      const response = await fetch(
        "https://api.networkx.ai/api/v1/start-campaign",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const resData = await response.json();
        toast(resData.status);
        localStorage.removeItem("importLeads");
        localStorage.removeItem("sequence");
        localStorage.removeItem("setup");
        navigate("/dashboard/dm-automation");
      } else {
        toast("Automation Failed");
        const error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-text max-w-[700px] h-[calc(73%)] w-full mt-4 md:mt-0">
      <div className="radient-shadow border-text h-full border-[1px] w-full relative z-[99] bg-[#091324] p-6 py-[12px] rounded-md">
        <h1 className="text-center mb-2 font-semibold">Final Review</h1>
        <div className="flex flex-col h-[85%] sm:flex-row">
          <div className="w-full my-4 mx-0 border-transparent border-[1px] p-4 rounded-lg pb-[35px] sm:w-1/2 sm:mx-4 sm:border-text">
            <div className="flex items-center border-text border-[1px] rounded text-xs p-2">
              <p className="text-md flex items-center">
                <img src={messageBgIcon} className="mr-1 w-[19px]" /> Opening
                Message
              </p>
            </div>
            <div className="border-l-dim border-l-[1px] border-b-dim border-b-[1px] ml-2">
              <div className="py-2">
                <div className="rounded-md mb-[-30px] bg-[#091324] ml-6 border-dim text-dim border-[1px] italic text-xs p-2 leading-4">
                  {data.sequence?.Messages.slice(0, 60)}
                  {data.sequence?.Messages.length > 60 && ".."}
                </div>
              </div>
            </div>
            {data.sequence.followUp && (
              <div className="flex py-8 items-center ml-2 border-l-dim border-l-[1px] pt-[45px]">
                <p className="text-xs flex items-center ml-[-8px]">
                  {" "}
                  <ImClock className="mr-2 text-xl my-1 text-primary bg-text rounded-full p-1" />{" "}
                  Wait for {data.sequence.days} day
                  {data.sequence.days > 1 && "'s"} then:
                </p>
              </div>
            )}
            {data.sequence.followUp && (
              <>
                <div className="flex items-center border-text border-[1px] rounded text-xs p-2">
                  <p className="text-md flex items-center">
                    <img src={messageBgIcon} className="mr-1 w-[19px]" />{" "}
                    Opening Message
                  </p>
                </div>
                <div className="border-l-dim border-b-dim border-b-[1px] rounded border-l-[1px] ml-2">
                  <div className="py-2">
                    <div className="rounded-md mb-[-30px] bg-[#091324]  ml-6 border-dim text-dim border-[1px] italic text-xs p-2 leading-4">
                      {data.sequence.followUp.slice(0, 60)}
                      {data.sequence.followUp.length > 60 && ".."}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="w-full my-4 mx-0  flex flex-col justify-between border-transparent border-[1px] p-2 px-4 rounded-lg sm:w-1/2 sm:mx-4 sm:border-text">
            <div className="flex my-2 flex-col justify-around text-xs">
              <h1 className="flex items-center mb-2 text-md font-bold rounded text-[14px]">
                Campaign Configuration
              </h1>
              <div className="flex items-center justify-between my-2">
                <h2 className="font-semibold">Select Sender Account:</h2>
                <p>@{getUsername(data.setup.x_id)}</p>
              </div>
              <div className="flex items-center justify-between my-2">
                <h2 className="font-semibold">Schedule Campaign:</h2>
                <p>No.</p>
              </div>
              <div className="flex items-center justify-between my-2">
                <h2 className="font-semibold">Amount of DMs Per day:</h2>
                <p>{data.setup.max_total_dms}</p>
              </div>
              <div className="flex items-center justify-between my-2">
                <h2 className="font-semibold">Min Amount of DMs Per Day:</h2>{" "}
                <p>{data.setup.min_daily_dms}</p>
              </div>
              <div className="flex items-center justify-between my-2">
                <h2 className="font-semibold">Max Amount of DMs Per Day:</h2>
                <p>{data.setup.max_daily_dms}</p>
              </div>
            </div>
            <div className="h-[2px] w-full bg-dim rounded " />
            <div className="my-2 flex flex-col justify-around text-xs">
              <h1 className="flex my-2 items-center text-md font-bold rounded text-[14px]">
                Additional Features
              </h1>
              <div className="flex items-center justify-between my-2">
                <h2 className="font-semibold">Follow before DMing:</h2>
                <p>{data.setup.must_follow ? "Yes" : " No"}</p>
              </div>
              <div className="flex items-center justify-between my-2">
                <h2 className="font-semibold">
                  Like Most Recent Post Before DMing:
                </h2>
                <p>No.</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={runCampaign}
          className="w-full bg-secondary px-4 py-2 rounded hover:bg-opacity-70 disabled:bg-opacity-50"
        >
          Start Campaign
        </button>
      </div>
    </div>
  );
};

export default FinalReview;
