import React, { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Setup from "./Setup";
import Prompt from "./Prompt";
import FinalReview from "./FinalReview";

const ReplierLayout = () => {
  const replierSetup = window.localStorage.getItem("replierSetup");
  const replierPrompt = window.localStorage.getItem("replierPrompt");
  const replierReview = window.localStorage.getItem("replierReview");

  const [stepIndex, setStepIndex] = useState(() => {
    if (replierReview !== null) return 3;
    if (replierPrompt !== null) return 2;
    if (replierSetup !== null) return 1;
    return 0;
  });

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="container text-text flex items-center justify-center">
        <div onClick={()=>setStepIndex(0)} className="flex items-center">
          {replierSetup ? (
            <FaCheckCircle className="text-secondary mr-2" />
          ) : (
            <div className="flex checkbox-container items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px] mr-2" />
          )}
          <p className="text-xs">Campaign Setup</p>
        </div>
        <div className="w-[40px] h-[1px] bg-[#5B657A] rounded-full mx-2" />
        <div onClick={()=> replierSetup && setStepIndex(1)} className="flex items-center">
          {replierPrompt ? (
            <FaCheckCircle className="text-secondary mr-2" />
          ) : (
            <div className="flex checkbox-container items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px] mr-2" />
          )}
          <p className="text-xs">Post Prompt</p>
        </div>
        <div className="w-[40px] h-[1px] bg-[#5B657A] rounded-full mx-2" />
        <div onClick={()=> replierSetup && replierPrompt && setStepIndex(2)} className="flex items-center">
          <div className="flex checkbox-container items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px] mr-2" />
          <p className="text-xs">Final Review</p>
        </div>
      </div>
      <div className="h-[78vh] flex flex-col justify-center items-center">
        {stepIndex === 0 && <Setup setStepIndex={setStepIndex} />}
        {stepIndex === 1 && <Prompt setStepIndex={setStepIndex} />}
        {stepIndex === 2 && <FinalReview setStepIndex={setStepIndex} />}
      </div>
    </div>
  );
};

export default ReplierLayout;
