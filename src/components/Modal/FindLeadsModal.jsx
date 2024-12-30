import React from "react";
import note from '../../../src/assets/icons/note.svg'
import { FaCircleUser, FaX } from "react-icons/fa6";

const FindLeadsModal = ({setTweetSourceModal, setAccountSourceModal, endModals, setFindLeadModal}) => {
  
  const displayAccountSourceHandler =()=> {
    setAccountSourceModal(true)
    setFindLeadModal(false)
  }

  const displayPostSourceHandler =()=> {
    setTweetSourceModal(true)
    setFindLeadModal(false)
  }

  return (
    <div className="fixed w-[100vw] h-[100vh] top-0 left-0 flex items-center justify-center">
      <div className="radient-shadow flex flex-col items-center justify-center max-w-[580px] w-full relative z-[99] bg-[#091324] border-[1px] border-text p-12 py-[70px] rounded-xl">
        <p className="font-normal mb-2 text-lg">How would you like to import your leads?</p>
        <div onClick={displayAccountSourceHandler} className="flex items-center justify-between my-2 w-full border border-text p-3 px-4 rounded-lg cursor-pointer">
            <div>
                <h2 className="text-white">Account Source</h2>
                <p className="text-xs text-dim">Upload a link to an account</p>
            </div>
            <FaCircleUser className="text-2xl"/>
        </div>
        <div onClick={displayPostSourceHandler} className="flex items-center justify-between my-2 w-full border border-text p-3 px-4 rounded-lg cursor-pointer">
            <div>
                <h2 className="text-white">Post Source</h2>
                <p className="text-xs text-dim">Upload a link to a post</p>
            </div>
            <img src={note} className="w-[24px]"/>
        </div>
        <FaX onClick={endModals} className="absolute top-8 right-8 cursor-pointer hover:opacity-65"/>
      </div>
      <div
        className="absolute inset-0 rounded h-[100%] w-full z-[9] flex items-center justify-center cursor-pointer backdrop-blur-md"
        style={{ backdropFilter: "blur(5px)" }}
      />
    </div>
  );
};

export default FindLeadsModal;
