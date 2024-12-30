import React, { useState, useEffect, useRef } from "react";
import { BiPlus } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import message from "../../../assets/icons/message.svg";
import messages from "../../../assets/icons/messages.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import edit from "../../../assets/icons/edit.svg";
import spinner from "../../../assets/Spinner.svg";
import { RiFlashlightFill } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai";
import DoughnutChart from "../../../components/DoughnutChart";
import { FaCirclePause, FaCirclePlay, FaComment, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Pagination from "../Leads/Pagination";
import DelateModal from "../../../components/Modal/DelateModal";

const campaignsData = [
  {
    name: "Skyline Outreach",
    id: 1,
    total_sent: 1500,
    total_replied: 120,
    credit_used: 300,
  },
  {
    name: "Tech Innovations",
    id: 2,
    total_sent: 2000,
    total_replied: 180,
    credit_used: 350,
  },
  {
    name: "Eco Impact Drive",
    id: 3,
    total_sent: 1200,
    total_replied: 110,
    credit_used: 250,
  },
  {
    name: "Global Connect",
    id: 4,
    total_sent: 2200,
    total_replied: 210,
    credit_used: 400,
  },
  {
    name: "Market Pulse",
    id: 5,
    total_sent: 1800,
    total_replied: 150,
    credit_used: 320,
  },
  {
    name: "NextGen Leads",
    id: 6,
    total_sent: 2400,
    total_replied: 230,
    credit_used: 430,
  },
  {
    name: "Green Horizons",
    id: 7,
    total_sent: 1600,
    total_replied: 130,
    credit_used: 280,
  },
  {
    name: "Visionary Growth",
    id: 8,
    total_sent: 1700,
    total_replied: 140,
    credit_used: 300,
  },
  {
    name: "Dynamic Response",
    id: 9,
    total_sent: 2100,
    total_replied: 190,
    credit_used: 370,
  },
  {
    name: "Peak Performance",
    id: 10,
    total_sent: 2500,
    total_replied: 240,
    credit_used: 460,
  },
  {
    name: "Outreach Connect",
    id: 11,
    total_sent: 1900,
    total_replied: 160,
    credit_used: 310,
  },
  {
    name: "Innovation Path",
    id: 12,
    total_sent: 1600,
    total_replied: 120,
    credit_used: 290,
  },
  {
    name: "Brand Boosters",
    id: 13,
    total_sent: 2300,
    total_replied: 220,
    credit_used: 420,
  },
  {
    name: "Social Link Up",
    id: 14,
    total_sent: 2000,
    total_replied: 180,
    credit_used: 360,
  },
  {
    name: "Impact Surge",
    id: 15,
    total_sent: 1400,
    total_replied: 110,
    credit_used: 270,
  },
  {
    name: "Lead Catalyst",
    id: 16,
    total_sent: 2100,
    total_replied: 200,
    credit_used: 380,
  },
  {
    name: "Opportunity Pulse",
    id: 17,
    total_sent: 2200,
    total_replied: 210,
    credit_used: 400,
  },
  {
    name: "Growth Summit",
    id: 18,
    total_sent: 1900,
    total_replied: 170,
    credit_used: 310,
  },
  {
    name: "Forward Thinking",
    id: 19,
    total_sent: 1600,
    total_replied: 130,
    credit_used: 280,
  },
  {
    name: "Market Horizons",
    id: 20,
    total_sent: 2500,
    total_replied: 240,
    credit_used: 470,
  },
  {
    name: "Lead Fusion",
    id: 21,
    total_sent: 2300,
    total_replied: 220,
    credit_used: 420,
  },
  {
    name: "Vibrant Connections",
    id: 22,
    total_sent: 1800,
    total_replied: 150,
    credit_used: 320,
  },
  {
    name: "Engage Today",
    id: 23,
    total_sent: 2000,
    total_replied: 190,
    credit_used: 370,
  },
];

const CampaignsSmartContent = () => {
  const [loadingCamp, setLoadingCamp] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0 });
  const [campaigns, setCampaigns] = useState(campaignsData);

  //Delete Modal state
  const [deleteModal, setDeleteModal] = useState(null);

  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  // Search data
  const [searchData, setSearchData] = useState(campaigns);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setSearchData(campaigns);
  }, [campaigns]);

  const handleSearch = (value) => {
    setSearchInput(value);

    if (value.trim() === "") {
      setSearchData(campaigns);
    } else {
      const filteredData = campaigns.filter((campaign) =>
        campaign.name.toLowerCase().includes(value.toLowerCase())
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

  return (
    <div className="container custom max-h-[82vh] bg-[#000000] text-text p-4 rounded-md border-dim border-[1px] relative z-[99]">
      <nav className="flex items-center justify-between flex-col lg:flex-row">
        <ul className="flex items-center">
          <li className="mx-2 ml-0 text-text">All Campaigns</li>
        </ul>
        <div className="flex items-center text-sm flex-col w-full lg:w-auto lg:flex-row">
          <div className="border-text border-[1px] rounded mx-2 p-2 text-sm flex items-center my-3 w-full justify-center lg:justify-start lg:my-0 lg:w-auto">
            <IoSearch className="mr-2 text-text text-xl" />
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search Campaigns"
              className="bg-transparent border-none outline-none w-full"
            />
          </div>
          <Link
            to="/dashboard/smart-content/ai-poster"
            className="flex items-center bg-secondary p-2 rounded w-full justify-center lg:w-auto lg:justify-start"
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
              className="flex relative items-center p-3 my-1 bg-[#091627] rounded flex-col lg:flex-row"
              key={campaign.id}
            >
              <div className="flex text-sm items-center w-full lg:w-[50%]">
                <div className="flex items-center">
                  <DoughnutChart
                    value={(
                      (campaign.total_replied / campaign.total_sent) *
                      100
                    ).toFixed()}
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
              <div className="flex items-center justify-between w-full flex-col md:flex-row lg:w-[95%]">
                <div className="flex items-center justify-between md:justify-around w-full mt-4 lg:mt-0">
                  <div>
                    <div className="flex flex-col items-center">
                      <span className="flex items-center">
                        <img src={message} className="w-[13px]" />{" "}
                        <p className="ml-1 text-xs">Posts</p>
                      </span>
                      {campaign.total_sent}
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col items-center">
                      <span className="flex items-center">
                        <img src={messages} className="w-[13px]" />{" "}
                        <p className="ml-1 text-xs">Replies</p>
                      </span>
                      {campaign.total_replied}
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col items-center">
                      <span className="flex items-center">
                      <FaHeart className="w-[13px]" />{" "}
                        <p className="ml-1 text-xs flex items-center">
                          Likes <AiFillInfoCircle className="ml-1" />
                        </p>
                      </span>
                      {campaign.credit_used}
                    </div>
                  </div>
                </div>
                <div  className="flex items-center justify-between md:justify-around w-full mt-4 lg:mt-0">
                  <div>
                    <div className="flex flex-col items-center">
                      <span className="flex items-center">
                        <img src={message} className="w-[13px]" />{" "}
                        <p className="ml-1 text-xs">Reposts</p>
                      </span>
                      {campaign.total_sent}
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col items-center">
                      <span className="flex items-center">
                      <FaComment className="w-[13px]" />{" "}
                        <p className="ml-1 text-xs">Comments</p>
                      </span>
                      {campaign.total_replied}
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col items-center">
                      <span className="flex items-center">
                      <RiFlashlightFill className="w-[13px]" />{" "}
                        <p className="ml-1 text-xs flex items-center">
                          Credits used <AiFillInfoCircle className="ml-1" />
                        </p>
                      </span>
                      {campaign.credit_used}
                    </div>
                  </div>
                </div>
                {activeModal === campaign.id ? (
                  <div
                    ref={dotsRef}
                    onClick={(e) => handleDisplayModal(campaign.id, e)}
                    className="cursor-pointer min-w-[17px] ml-3 absolute top-3 right-4 lg:top-0 lg:relative"
                  >
                    <BsThreeDots />
                  </div>
                ) : (
                  <div
                    onClick={(e) => handleDisplayModal(campaign.id, e)}
                    className="cursor-pointer min-w-[17px] ml-3 absolute top-3 right-4 lg:top-0 lg:relative"
                  >
                    <BsThreeDots />
                  </div>
                )}
              </div>
              {activeModal === campaign.id && (
                <div
                  ref={modalRef}
                  className="absolute right-[5%] p-2 top-[40%] border-dim border-[1px] rounded-md flex flex-col bg-[#091627] z-[996]"
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
                  <button className="p-2 flex items-center inner-shadow-button">
                    <FaCirclePause className="mr-2 text-xl" />
                    Pause Campaign
                  </button>
                  <button className="p-2 flex items-center inner-shadow-button">
                    <FaCirclePlay className="mr-2 text-xl" />
                    Resume Campaign
                  </button>
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
          <p className="w-full text-center mx-auto lg:w-[50%]">
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
            <p className="w-full text-center mx-auto lg:w-[50%]">
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
          campaigns.length < postPerPage && "pt-2"
        }`}
      >
        <p>
          {searchData.length > postPerPage
            ? `Showing ${currentPage * postPerPage} of ${searchData.length}`
            : `Showing ${searchData.length}`}
        </p>
        {campaigns.length > postPerPage && (
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
        />
      )}
    </div>
  );
};

export default CampaignsSmartContent;
