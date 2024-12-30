import React, { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Setup from "./Setup";

const FollowLayout = () => {
  const FollowSetup = window.localStorage.getItem("FollowSetup");
  const FollowReview = window.localStorage.getItem("FollowReview");

  const [stepIndex, setStepIndex] = useState(() => {
    if (FollowSetup !== null) return 1;
    return 0;
  });

  return (
    <div className="">
      <div className="container text-text flex items-center justify-center">
        <div
          onClick={() => setStepIndex(0)}
          className="flex items-center cursor-pointer"
        >
          {FollowSetup ? (
            <FaCheckCircle className="text-secondary mr-2" />
          ) : (
            <div className="flex checkbox-container items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px] mr-2" />
          )}
          <p className="text-sm">Campaign Setup</p>
        </div>
        <div className="w-[40px] h-[1px] bg-[#5B657A] rounded-full mx-2" />
        <div
          onClick={() => FollowSetup && setStepIndex(2)}
          className="flex items-center cursor-pointer"
        >
          <div className="flex checkbox-container items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px] mr-2" />
          <p className="text-sm">Final Review</p>
        </div>
      </div>
      {/* <div className="h-[78vh] flex flex-col justify-center items-center"> */}
      <div className="h-[78vh] flex flex-col mt-6 justify-centerb items-center">
        {stepIndex === 0 && <Setup setStepIndex={setStepIndex} />}
        {/* {stepIndex === 1 && <Promp setStepIndex={setStepIndex} />} */}
      </div>
    </div>
  );
};

export default FollowLayout;
