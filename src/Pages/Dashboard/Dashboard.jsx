import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RiFlashlightFill, RiMessage2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthStore/AuthProvider";
import loader from "../../assets/Spinner.svg";
import toast from "react-hot-toast";
import { useAuthStore, useDetailsStore } from "../../AuthStore/GlobalStates";
import useFunctionStore from "../../store/FunctionStore";
import SmoothAreaChart from "../../components/ReusableChart";
import { MdAddCircle } from "react-icons/md";
import SelectAccount from "../../components/SelectAccount";
import tick from "../../../src/assets/icons/tick.svg";
import DoughnutChart from "../../components/DoughnutChart";
import messageIcon from "../../assets/icons/message.svg";
import messagesIcon from "../../assets/icons/messages.svg";

const Dashboard = () => {
  const { refreshUser } = useAuth();
  const { token, user } = useAuthStore();
  const { campaigns } = useDetailsStore();
  const { fetchDashboard, fetchCampaigns } = useFunctionStore();
  const [loadingCamp, setLoadingCamp] = useState(false);
  const [loadDashboard, setLoadDashboard] = useState(false);
  const [dashboardDataId, setDashboardDataId] = useState(null);
  const [dashboardData, setDashboardData] = useState([]);
  const [selectMenu, setSelectMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const refreshedUser = await refreshUser();
        if (!refreshedUser.active_plan) {
          navigate("/dashboard/pricing");
          toast("Please Subscribe to access our services!");
        } else {
          return;
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        navigate("/signin");
      }
    };

    fetchUserDetails();
  }, [token, navigate]);

  useEffect(() => {
    if (token && user) {
      fetchCampaigns(setDashboardDataId, setLoadingCamp);
    }
  }, []);

  useEffect(() => {
    if (dashboardDataId && campaigns?.length > 0) {
      fetchDashboard(setLoadDashboard, dashboardDataId, setDashboardData);
    }
  }, [dashboardDataId, campaigns]);

  console.log(campaigns);

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

  const formatTimestamp = (timestamp, type) => {
    const date = new Date(timestamp);

    const options =
      type === "time"
        ? { hour: "numeric", minute: "numeric", hour12: true }
        : { month: "2-digit", day: "2-digit", year: "numeric" };

    return date.toLocaleString("en-US", options);
  };

  return (
    <div className="container">
      {campaigns?.length > 0 && !loadingCamp && (
        <div className="flex items-start text-dim flex-col overflow-hidden emd:flex-row">
          <div className="w-full sm:w-[20%]">
            <Link
              to="leads"
              className="flex w-full items-center justify-center p-4 bg-secondary rounded-md text-text font-medium"
            >
              Create New Campaign <MdAddCircle className="ml-2 text-xl" />
            </Link>
            <ul className="flex flex-col mt-1 items-center text-text overflow-y-scroll h-[100vh] scrollbar-hide">
              {campaigns.map((campaign, index) => (
                <li
                  onClick={() => setDashboardDataId(campaign.id)}
                  key={index}
                  className={`p-4 py-2 flex flex-col items-start bg-[#091324] cursor-pointer w-full justify-between my-1 border-[#5B657A] border-[1px] rounded-md ${
                    campaign.id === dashboardDataId &&
                    "shadow-[inset_0_0_20px_8px_rgba(63,142,255,0.3)]"
                  }`}
                >
                  <span className="text-sm">{campaign.name}</span>
                  <span className="text-dim text-xs py-1">
                    {formatTimestamp(campaign.updated_at)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {loadDashboard && dashboardData.data ? (
            <div className="w-[60%] flex justify-center items-center">
              <img
                src={loader}
                className="flex items-center w-[50px]"
                alt="loading"
              />
            </div>
          ) : (
            <div className="w-[60%] custom h-[82vh] mx-2 p-4 bg-[#010C1E] border-dim border-[2px] rounded-md">
              <div>
                <div className="w-full">
                  <header className="flex items-center mb-2">
                    <div className="h-[15px] w-[15px] bg-[#319F43] rounded-full mr-2" />
                    <p className="font-medium text-text text-md">
                      Messages Sent
                    </p>
                  </header>
                  <SmoothAreaChart
                    stroke="#319F43"
                    body="rgba(79, 209, 197, 0.54)"
                    bottom="rgba(79, 209, 197, 0.1)"
                    dashboardData={dashboardData}
                  />
                </div>
                <div className="w-full">
                  <header className="flex items-center mb-2">
                    <div className="h-[15px] w-[15px] bg-[#F8BD00] rounded-full mr-2" />
                    <p className="font-medium text-text text-md">
                      Messages Replied
                    </p>
                  </header>
                  <SmoothAreaChart
                    stroke="#F8BD00"
                    body="rgba(248, 189, 0, 0.54)"
                    bottom="rgba(245, 170, 10, 0.1)"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="w-[20%] bg-[#010C1E] text-text rounded-md py-3 border-[2px] border-dim">
            <div className="flex items-center w-full pb-3 border-b-[2px] border-b-dim px-4">
              <div className="flex relative items-center justify-between text-sm">
                Select Account:{" "}
                <SelectAccount
                  selectMenu={selectMenu}
                  setSelectMenu={setSelectMenu}
                  messageSelect="!border-none !bg-transparent"
                />{" "}
              </div>
            </div>
            <div className="flex items-center py-4 border-b-[2px] border-b-dim px-4">
              <div className="bg-[#091324] p-2 text-lg mr-2 rounded-full">
                <img src={messageIcon} className="w-[16px]" />
              </div>
              <div>
                <p className="text-xs font-medium">Total messages sent:</p>
                <h2 className="font-bold">
                  {!loadDashboard && dashboardData.total_sent}
                </h2>
              </div>
            </div>
            <div className="flex items-center py-4 border-b-[2px] border-b-dim px-4">
              <div className="bg-[#091324] p-2 text-lg mr-2 rounded-full">
                <img src={messagesIcon} className="w-[17px]" />
              </div>
              <div>
                <p className="text-xs font-medium">Total messages replied:</p>
                <h2 className="font-bold">
                  {!loadDashboard && dashboardData.total_replied}
                </h2>
              </div>
            </div>
            <div className="flex items-center py-4 border-b-[2px] border-b-dim px-4">
              <div className="bg-[#091324] p-2 mr-2 rounded-full">
                <RiFlashlightFill />
              </div>
              <div>
                <p className="text-xs font-medium">Total credits used:</p>
                <h2 className="font-bold">
                  {!loadDashboard && dashboardData.used_credits}
                </h2>
              </div>
            </div>
            <div className="flex items-center py-4 border-b-[2px] border-b-dim px-4">
              <div className="bg-[#091324] p-2 mr-2 rounded-full">
                <img src={tick} />
              </div>
              <div>
                <p className="text-xs font-medium">Total credits remaining:</p>
                <h2 className="font-bold">
                  {!loadDashboard && dashboardData.credits_remaining}
                </h2>
              </div>
            </div>
            <div className="bg-[#091324] m-2 rounded-md h-auto overflow-hidden flex flex-col items-center justify-center p-5">
              <p className="font-medium mb-3">Response Rate</p>
              <DoughnutChart
                value={(
                  (dashboardData.total_sent * dashboardData.total_replied) /
                  100
                ).toFixed()}
                size={110}
                strokeWidth={15}
                text="text-md font-semibold text-text"
                strokeColor={"#e1eafdc0"}
              />
            </div>
          </div>
        </div>
      )}

      {loadingCamp && (
        <div className="w-full h-[82vh] flex items-center justify-center">
          <img
            src={loader}
            className="flex items-center w-[50px]"
            alt="loading"
          />
        </div>
      )}

      {campaigns?.length < 1 && !loadingCamp && (
        <>
          <div className="w-full h-[70vh] flex flex-col justify-center items-center p-4 text-center text-text">
            <h2>No campaigns have been run on this account yet.</h2>
            <p className="my-1">
              Once you start a campaign, the data will be accessible here.
            </p>
            <Link
              to="campaign/create"
              className="border mt-1 border-text text-text text-sm p-2 px-5 rounded flex items-center hover:bg-opacity-80"
            >
              <FaPlus className="mr-2" />
              Create Campaign
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
