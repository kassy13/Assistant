import React, { useState, useEffect, useRef } from "react";
import { BiPlus } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs"; 
import message from "../../../assets/icons/message.svg";
import messages from "../../../assets/icons/messages.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import edit from "../../../assets/icons/edit.svg";
import spinner from "../../../assets/Spinner.svg";
import useFunctionStore from "../../../store/FunctionStore";
import { AiFillInfoCircle } from "react-icons/ai";
import DoughnutChart from "../../../components/DoughnutChart";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Pagination from "../Leads/Pagination";
import DelateModal from "../../../components/Modal/DelateModal";
import { useAuthStore, useDetailsStore } from "../../../AuthStore/GlobalStates";
import toast from "react-hot-toast";

const Campaigns = () => {
  const { fetchCampaigns } = useFunctionStore();
  const {campaigns,  setCampaigns} = useDetailsStore()
  const { token } = useAuthStore();
  const [loadingCamp, setLoadingCamp] = useState(false);
  const [dashboardDataId, setDashboardDataId] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0 });

  //Delete Modal state
  const [deleteModal, setDeleteModal] = useState(null);

  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  // Search data
  const [searchData, setSearchData] = useState(campaigns);
  const [searchInput, setSearchInput] = useState("");

  //controls Loader
  const [loadingControlAction, setLoadingControlAction] = useState(false);

  useEffect(() => {
    setSearchData(campaigns);
  }, [campaigns]);

  const handleSearch = (value) => {
    setSearchInput(value);

    if (value.trim() === "") {
      setSearchData(campaigns);
    } else {
      const filteredData = campaigns.filter((campaign) =>
        campaign.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSearchData(filteredData);
    }
  };


  // Setting the pagination index
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentCampaigns = searchData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const modalRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    fetchCampaigns(setDashboardDataId, setLoadingCamp);
  }, []);

  // Handle outside click to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        dotsRef.current &&
        !modalRef.current.contains(event.target) &&
        !dotsRef.current.contains(event.target)
      ) {
        setActiveModal(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const deleteCampaign = () => {
    const campaignUpdate = campaigns.filter(
      (campaign) => campaign.id !== deleteModal
    );
    setCampaigns(campaignUpdate);
    setDeleteModal(null);
  };

  const handleDisplayModal = (id, e) => {
    const { top, height } = e.target.getBoundingClientRect();
    setModalPosition({
      top: top + height + window.scrollY,
    });
    setActiveModal((prev) => (prev === id ? null : id));
  };

  const pauseEndpoint = "https://api.networkx.ai/api/v1/pause-campaign";
  const playEndpoint = "https://api.networkx.ai/api/v1/resume-campaign";
  //const endEndpoint = "https://api.networkx.ai/api/v1/stop-campaign";

  const controlCampaign = async (dataValue) => {
    setLoadingControlAction(true);
    try {
      const response = await fetch(dataValue.endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dataValue.body),
      });
      if (response.ok) {
        const data = await response.json();

        const isPaused = dataValue.endPoint === pauseEndpoint;

        setCampaigns((prevCampaigns) =>
          prevCampaigns.map((campaign) =>
            campaign.id === dataValue.body.campaign_id
              ? { ...campaign, is_paused: isPaused }
              : campaign
          )
        );
        toast(data.message);
      } else {
        const dataError = await response.json();
        console.log(dataError);
        toast("Failed, try again");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingControlAction(false);
    }
  };

  return (
    <div className="container custom max-h-[82vh] bg-[#000000] text-text p-4 rounded-md border-dim border-[1px] relative z-[99]">
      <nav className="flex items-center justify-between flex-col md:flex-row">
        <ul className="flex items-center">
          <li className="mx-2 ml-0 text-text">All Campaigns</li>
        </ul>
        <div className="flex items-center text-sm flex-col w-full md:w-auto md:flex-row">
          <div className="border-text border-[1px] rounded mx-2 p-2 text-sm flex items-center my-3 w-full justify-center md:justify-start md:my-0 md:w-auto">
          <IoSearch className="mr-2 text-text text-xl" />
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search Campaigns"
              className="bg-transparent border-none outline-none w-full"
            />
          </div>
          <Link
            to="create"
            className="flex items-center bg-secondary p-2 px-6 rounded w-full justify-center md:w-auto md:justify-start"
          >
            <BiPlus className="text-lg mr-1" /> Create Campaign
          </Link>
        </div>
      </nav>
      <div className="bg-[#5B657A] p-4 my-4 rounded-md text-white font-semibold">
        Campaign Details
      </div>
      {campaigns.length > 0 && (
        <div className={`custom max-h-[55vh] z-[99]`}>
          {currentCampaigns.map((campaign) => (
            <div
              className="flex relative items-center justify-between p-3 my-1 bg-[#091627] rounded flex-col md:flex-row"
              key={campaign.id}
            >
              <div className="flex text-sm items-center w-full md:w-[2/6]">
                <div className="flex items-center">
                  <DoughnutChart
                    value={((90 * 30) / 100).toFixed()}
                    size={40}
                    strokeWidth={3}
                    text="text-xs font-normal text-white"
                  />
                  <div className="ml-4">
                    <h2>{campaign.name}</h2>
                    <p className="text-xs text-dim">
                      <span>Active</span> |{" "}
                      <span>Created on: October 30 2024, 9:00 AM</span> |{" "}
                      <span>2 Sequences</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full mt-4 md:mt-0 md:w-[3/6]">
                <div>
                  <div className="flex flex-col items-center">
                    <span className="flex items-center">
                      <img src={message} className="w-[13px]" />{" "}
                      <p className="ml-1 text-xs">Sent</p>
                    </span>
                    {campaign.daily_sent_count || 0}
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <span className="flex items-center">
                      <img src={messages} className="w-[13px]" />{" "}
                      <p className="ml-1 text-xs">Replied</p>
                    </span>
                    9
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <span className="flex items-center">
                      <img src={messages} className="w-[13px]" />{" "}
                      <p className="ml-1 text-xs flex items-center">
                        Credits used <AiFillInfoCircle className="ml-1" />
                      </p>
                    </span>
                    89
                  </div>
                </div>
                {activeModal === campaign.id ? (
                  <div
                    ref={dotsRef}
                    onClick={(e) => handleDisplayModal(campaign.id, e)}
                    className="cursor-pointer min-w-[15px] absolute top-3 right-4 md:top-0 md:relative"
                  >
                    <BsThreeDots />
                  </div>
                ) : (
                  <div
                    onClick={(e) => handleDisplayModal(campaign.id, e)}
                    className="cursor-pointer min-w-[15px] absolute top-3 right-4 md:top-0 md:relative"
                  >
                    <BsThreeDots />
                  </div>
                )}
              </div>
              {activeModal === campaign.id && (
                <div
                  ref={modalRef}
                  className="absolute right-[5%] p-2 top-[40%] border-dim border-[1px] rounded-md flex flex-col bg-[#091627] z-[997]"
                  style={{
                    top: modalPosition.top + "px",
                    position: "fixed",
                    zIndex: 9997,
                  }}
                >
                  <button className="p-2 flex items-center inner-shadow-button">
                    <img src={edit} className="mr-2 w-[18px]" />
                    Edit Campaign
                  </button>
                  {campaign.is_paused ? (
                    <button
                      onClick={() =>
                        controlCampaign({
                          endPoint: playEndpoint,
                          body: {
                            campaign_id: campaign.id,
                            x_id: campaign.xaccount.x_id,
                          },
                        })
                      }
                      className="p-2 flex items-center inner-shadow-button disabled:opacity-75"
                      disabled={loadingControlAction}
                    >
                      {loadingControlAction ? (
                        <img
                          src={spinner}
                          alt="spinner"
                          className="ml-1 w-[30px]"
                        />
                      ) : (
                        <FaCirclePlay className="mr-2 text-xl" />
                      )}
                      Resume Campaign
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        controlCampaign({
                          endPoint: pauseEndpoint,
                          body: {
                            campaign_id: campaign.id,
                          },
                        })
                      }
                      className="p-2 flex items-center inner-shadow-button disabled:opacity-75"
                      disabled={loadingControlAction}
                    >
                      {loadingControlAction ? (
                        <img
                          src={spinner}
                          alt="spinner"
                          className="ml-1 w-[30px]"
                        />
                      ) : (
                        <FaCirclePause className="mr-2 text-xl" />
                      )}
                      Pause Campaign
                    </button>
                  )}
                  <button
                    onClick={() => setDeleteModal(campaign.id)}
                    className="p-2 flex items-center inner-shadow-button"
                  >
                    <img src={deleteIcon} className="mr-2 w-[18px]" />
                    Delete Campaign
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {campaigns.length < 1 && !loadingCamp && (
        <div className="flex flex-col items-center justify-center py-8">
          <p className="w-full text-center mx-auto md:w-[50%]">
            You haven't started any campaigns yet. Begin a campaign to see your
            campaigns displayed here.
          </p>
          <Link
            to="create"
            className="flex items-center bg-secondary p-2 rounded mt-4"
          >
            <BiPlus className="text-lg mr-1" /> Create Campaign
          </Link>
        </div>
      )}
      {campaigns.length > 0 &&
        searchData.length < 1 &&
        !loadingCamp &&
        searchInput.trim() !== "" && (
          <div className="flex flex-col items-center justify-center py-8">
            <p className="w-full text-center mx-auto md:w-[50%]">
              No campaigns match your search. Please enter a more specific or
              valid term to find campaigns.
            </p>
          </div>
        )}
      {loadingCamp && (
        <div className="flex items-center justify-center py-8">
          <img src={spinner} className="w-[45px]" />
        </div>
      )}
      
      <footer
        className={`bg-transparent flex justify-between items-center w-full px-3 rounded-[6px] ${
          searchData.length < postPerPage && "pt-2"
        }`}
      >
        <p>
          {searchData.length > postPerPage
            ? `Showing ${currentPage * postPerPage} of ${searchData.length}`
            : `Showing ${searchData.length}`}
        </p>
        {searchData.length > postPerPage && (
          <Pagination
            postPerPage={postPerPage}
            totalPosts={searchData?.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </footer>
      {deleteModal && (
        <DelateModal
          setDeleteModal={setDeleteModal}
          deleteCampaign={deleteCampaign}
          type={"campaign"}
        />
      )}
    </div>
  );
};

export default Campaigns;
