import React, { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Setup from "./Setup";
import Prompt from "./Prompt";
import FinalReview from "./FinalReview";

const PosterLayout = () => {
  const posterSetup = window.localStorage.getItem("posterSetup");
  const posterPrompt = window.localStorage.getItem("posterPrompt");
  const posterReview = window.localStorage.getItem("posterReview");

  const [stepIndex, setStepIndex] = useState(() => {
    if (posterReview !== null) return 3;
    if (posterSetup !== null) return 2;
    if (posterPrompt !== null) return 1;
    return 0;
  });

  return (
    <div className="">
      <div className="container text-text flex items-center justify-center">
      <div
          onClick={() => {
            posterPrompt && setStepIndex(0);
          }}
          className="flex items-center cursor-pointer"
        >
          {posterPrompt ? (
            <FaCheckCircle className="text-secondary mr-2" />
          ) : (
            <div className="flex checkbox-container items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px] mr-2" />
          )}
          <p className="text-sm">Post Prompt</p>
        </div>
        <div className="w-[40px] h-[1px] bg-[#5B657A] rounded-full mx-2" />
        <div
          onClick={() => setStepIndex(1)}
          className="flex items-center cursor-pointer"
        >
          {posterSetup ? (
            <FaCheckCircle className="text-secondary mr-2" />
          ) : (
            <div className="flex checkbox-container items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px] mr-2" />
          )}
          <p className="text-sm">Campaign Setup</p>
        </div>
        <div className="w-[40px] h-[1px] bg-[#5B657A] rounded-full mx-2" />
        <div
          onClick={() => posterPrompt && posterSetup && setStepIndex(2)}
          className="flex items-center cursor-pointer"
        >
          <div className="flex checkbox-container items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px] mr-2" />
          <p className="text-sm">Final Review</p>
        </div>
      </div>
      <div className="h-full mt-6 flex flex-col justify-center items-center">
        {stepIndex === 0 && <Prompt setStepIndex={setStepIndex} />}
        {stepIndex === 1 && <Setup setStepIndex={setStepIndex} />}
        {stepIndex === 2 && <FinalReview setStepIndex={setStepIndex} />}
      </div>
    </div>
  );
};

export default PosterLayout;
