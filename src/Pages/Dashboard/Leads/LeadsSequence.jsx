import React, { useState } from "react";
import { FaChevronLeft, FaPlus } from "react-icons/fa";
import folder from "../../../assets/icons/folderPlus.svg";
import FindLeadsModal from "../../../components/Modal/FindLeadsModal";
import TweetSourceModal from "../../../components/Modal/TweetSourceModal";
import AccountSource from "../../../components/Modal/AccountSource";
import { Link } from "react-router-dom";

const LeadsSequence = () => {
  const [findLeadModal, setFindLeadModal] = useState(false);
  const [tweetSourceModal, setTweetSourceModal] = useState(false);
  const [accountSourceModal, setAccountSourceModal] = useState(false);

  const addLeadSource = () => {
    setFindLeadModal(true);
  };
  const endModals = () => {
    setAccountSourceModal(false);
    setFindLeadModal(false);
    setTweetSourceModal(false);
  };

  return (
    <div className="container flex flex-col min-h-[68vh] justify-start items-center text-text">
      <Link
        to="/dashboard/dm-automation/leads"
        className="absolute top-3 container text-white flex items-center hover:opacity-70"
      >
        <FaChevronLeft className="mr-2" />
        <p>Back</p>
      </Link>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-medium mr-auto">Steps:</h1>
        <div className="my-4 flex flex-col md:flex-row">
          <div className="border-[2px] p-2 px-3 mr-2 flex items-center rounded-md m-1 justify-between">
            <p>Choose a lead source</p>{" "}
            <div className="ml-2 border rounded-full border-text w-[25px] text-xs h-[25px] text-center flex items-center justify-center">
              1
            </div>
          </div>
          <div className="border-[2px] p-2 px-3 mr-2 flex items-center rounded-md m-1 justify-between">
            <p>Input details</p>
            <div className="ml-2 border rounded-full border-text w-[25px] h-[25px] text-xs flex items-center justify-center">
              2
            </div>
          </div>
          <div className="border-[2px] p-2 px-3 mr-2 flex items-center rounded-md m-1 justify-between">
            <p>Export your file</p>
            <div className="ml-2 border rounded-full border-text w-[25px] text-xs h-[25px] text-center flex items-center justify-center">
              3
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <img src={folder} className="w-[120px]" />
        <p className="my-4 text-lg">Get started by creating a lead source</p>
        <button
          onClick={addLeadSource}
          className="bg-secondary text-text text-sm p-3 px-4 rounded-lg flex items-center hover:bg-opacity-80"
        >
          Add Lead Source
          <FaPlus className="ml-2" />
        </button>
      </div>
      {findLeadModal && (
        <FindLeadsModal
          endModals={endModals}
          setTweetSourceModal={setTweetSourceModal}
          setAccountSourceModal={setAccountSourceModal}
          setFindLeadModal={setFindLeadModal}
        />
      )}
      <div>
        {tweetSourceModal && <TweetSourceModal endModals={endModals} />}
        {accountSourceModal && <AccountSource endModals={endModals} />}
      </div>
    </div>
  );
};

export default LeadsSequence;
