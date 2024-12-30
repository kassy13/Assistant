import React, { useEffect, useState } from "react";
import {  FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import DelateModal from "../../components/Modal/DelateModal";
import spinner from "../../assets/Spinner.svg";
import loader from "../../assets/Spinner.svg";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import toast from "react-hot-toast";
import { IoPauseCircleOutline } from "react-icons/io5";
import { useAuthStore, useDetailsStore } from "../../AuthStore/GlobalStates";

export const displayTime = (time) => {
  const date = new Date(time);
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  return `${monthNames[month]} ${day}${getOrdinalSuffix(day)}, ${year}`;
};

const Campaign = () => {
  const {token, user} = useAuthStore()
  const {campaignsInst, setCampaignsInst} = useDetailsStore()
  const [loadingCamp, setLoadingCamp] = useState(false);
  const [deleteModal, setDeleteModal] = useState(null);

  const navigate = useNavigate();

  const deleteCampaign = (id) => {
    const deleteCamp = campaignsInst.filter((campaign) => campaign.id !== id);
    setCampaignsInst(deleteCamp);
    setDeleteModal(null);
  };

  useEffect(() => {
    if (!token || !user) {
      navigate("/signin");
    } else if (token && !user.active_plan) {
      navigate("/dm-automation/pricing");
      toast("Please Subscribe to access our services!");
    }
  }, [token, user, navigate]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoadingCamp(true);
        const response = await fetch(
          "https://api.networkx.ai/api/v1/see-campaigns",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setCampaignsInst(data.campaigns);
          console.log("nn", data.campaigns);
        } else {
          const error = await response.json();
          throw error;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingCamp(false);
      }
    };
    fetchCampaigns();
  }, []);


  if (loadingCamp) {
    return (
      <div className="h-[100%] flex justify-center items-center">
        <img src={loader} className="w-[40px]" alt="loading" />
      </div>
    );
  }

  return (
    <div>
      {campaignsInst?.length < 1 && !loadingCamp ? (
        <div className="flex flex-col justify-center items-center h-[100vh]">
          <h2 className="text-text font-semibold">No campaign</h2>
          <p className="text-dim my-2 text-sm">Create a new campaign</p>
          <Link
            to="setup"
            className="border mt-1 border-dim text-dim text-sm p-2 px-5 rounded flex items-center hover:bg-opacity-80"
          >
            <FaPlus className="mr-2" />
            Create Campaign
          </Link>
        </div>
      ) : (
        <div className="p-8 px-2 pb-[80px] h-[100vh] overflow-y-scroll chat grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center sm:px-12 md:justify-start">
          <Link
            to="setup"
            className="bg-[#091324] max-h-[280px]n  relative moving-border border-[#5B657A] rounded-lg p-4 text-dim hover:bg-opacity-65 flex flex-col justify-center items-center"
          >
            <>
              <FaPlus className="mr-2 mt-4 text-2xl" />
              <h3 className="text-center p-4">Create a new campaign</h3>
            </>
          </Link> 
          {campaignsInst?.map((campaigns) => (
            <div key={campaigns.id}>
              <div
                className="bg-[#091324] h-full relative border border-[#5B657A] rounded-lg text-dim flex flex-col justify-between"
                style={{ flex: "1 1 0" }}
              >
                <div className="p-4 h-full flex flex-col justify-between">
                  <div className="flex items-center">
                    <img
                      src= {campaigns.xaccount.pfp}
                      className="rounded-full h-[26px] w-[26px] object-cover"
                      alt="campaign account image"
                    />
                    <p className="text-[13px] ml-1 my-2 font-semibold">
                    {campaigns.xaccount.name}
                    </p>
                  </div>
                  <h1 className="font-bold">{campaigns.name}</h1>
                  <p className="text-xs flex flex-col justify-start items-start">
                    <span className="p-4 rounded-2xl bg-[#0F1929] min-h-[80px] rounded-br-none">
                      {campaigns.message.slice(0, 150)}
                      {campaigns.message.length > 150 && ".."}
                    </span>
                  </p>
                  <RiDeleteBin6Line
                    onClick={() => setDeleteModal(campaigns.id)}
                    className="text-[red] absolute top-4 right-4 cursor-pointer hover:opacity-45"
                  />
                  {campaigns.status && !campaigns.is_paused && (
                    <button className="rounded-lg ml-auto flex items-center p-2 py-1 text-sm text-white border border-[#06F0FF] bg-[#06F0FF] bg-opacity-20">
                      <IoIosCheckmarkCircleOutline className="mr-1" /> Completed
                    </button>
                  )}
                  {!campaigns.status && !campaigns.is_paused && (
                    <button className="rounded-lg ml-auto flex items-center p-2 py-1 text-sm text-white border border-[#A9A9A9] bg-[#A9A9A9] bg-opacity-20">
                      <img src={spinner} className="w-[20px]" alt="loading" />{" "}
                      In Progress
                    </button>
                  )}
                  {campaigns.is_paused && (
                    <button className="rounded-lg ml-auto flex items-center p-2 py-1 text-sm text-white border border-[#6B8E77] bg-[#6B8E77] bg-opacity-20">
                      <IoPauseCircleOutline className="text-lg mr-1" />
                      Paused
                    </button>
                  )}
                  <div className="flex flex-col justify-between">
                    <div className="bg-[#0F1929] my-1 flex items-center justify-between rounded-md border-[1px] border-dim">
                      <div className="flex items-center p-1">
                        <BiMessageRoundedCheck />
                        <p className="text-xs text-white mx-2">Sent</p>
                        <span className="flex items-center text-xs font-semibold ">
                          <GoArrowUp />
                          {campaigns.sent}
                        </span>
                      </div>
                      <div className="border-dim h-full border-r-[1px] mx-2" />
                      <div className="flex items-center p-2">
                        <AiOutlineExclamationCircle />
                        <p className="text-xs text-white mx-2">Failed</p>
                        <span className="flex items-center text-xs font-semibold">
                          <GoArrowDown />
                          {campaigns.failed}
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#0F1929] p-2 flex items-center rounded-md border-[1px] mt-1 ml-0 mr-auto border-dim sm:mt-0 sm:ml-auto sm:mr-0">
                      <p className="flex text-[10px] text-white">
                        Follow First:{" "}
                        <span className="mx-1">
                          {campaigns.must_follow ? "Yes" : "No"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="border-t border-dim text-xs pl-4 p-2">
                  {displayTime(campaigns.updated_at)}
                </p>
              </div>
              {deleteModal && (
                <DelateModal
                  deleteCampaign={() => deleteCampaign(deleteModal)}
                  setDeleteModal={setDeleteModal}
                />
              )}
            </div>
          )).reverse()}
        </div>
      )}
    </div>
  );
};

export default Campaign;
