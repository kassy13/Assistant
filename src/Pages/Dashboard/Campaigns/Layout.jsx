import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaChevronRight } from "react-icons/fa";
import ImportLeads from "./ImportLeads";
import Sequence from "./Sequence";
import ConfigureCampaign from "./ConfigureCampaign";
import FinalReview from "./FinalReview";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";

const Layout = () => {
  const data = useLocation();
  const [stepIndex, setStepIndex] = useState(() => {
    const importLeads = window.localStorage.getItem("importLeads");
    const sequence = window.localStorage.getItem("sequence");
    const setup = window.localStorage.getItem("setup");

    if (setup !== null) return 3;
    if (sequence !== null) return 2;
    if (importLeads !== null && !data.state) return 1;
    return 0;
  });

  const checkBoxRef = useRef(null);
  const importLeads = window.localStorage.getItem("importLeads");
  const sequence = window.localStorage.getItem("sequence");
  const setup = window.localStorage.getItem("setup");

  useEffect(() => {
    if (data.state) {
      window.localStorage.removeItem("importLeads");
      window.localStorage.removeItem("sequence");
      window.localStorage.removeItem("setup");
    }
  }, []);

  return (
    <div className="">
      <div className="container text-text flex items-center justify-center">
        <div onClick={() => setStepIndex(0)} className="flex items-center">
          {importLeads ? (
            <FaCheckCircle className="text-secondary mr-2 hidden md:block" />
          ) : (
            <div className={`checkbox-container items-center justify-center border cursor-pointer p-[2px] border-${stepIndex === 0 ? 'secondary' : 'dim'} rounded-full h-[16px] w-[16px] mr-2 hidden md:flex`} />
          )}
          <p
            className={`text-sm flex items-center ${
              importLeads && "text-secondary md:text-text"
            }`}
          >
            Import&nbsp;Leads <FaChevronRight className="mx-[2px] md:hidden" />
          </p>
        </div>
        <div className="w-[40px] h-[1px] bg-secondary rounded-full mx-2 hidden md:block" />
        <div
          onClick={() => importLeads && setStepIndex(1)}
          className="flex items-center"
        >
          {sequence ? (
            <FaCheckCircle className="text-secondary mr-2 hidden md:block" />
          ) : (
             <div className={`checkbox-container items-center justify-center border cursor-pointer p-[2px] border-${stepIndex === 1 ? 'secondary' : 'dim'} rounded-full h-[16px] w-[16px] mr-2 hidden md:flex`} />
          )}
          <p
            className={`text-sm flex items-center ${
              sequence && "text-secondary md:text-text"
            }`}
          >
            Sequences <FaChevronRight className="mx-[2px] md:hidden" />
          </p>
        </div>
        <div className="w-[40px] h-[1px] bg-secondary rounded-full mx-2 hidden md:block" />
        <div
          onClick={() => importLeads && sequence && setStepIndex(2)}
          className="flex items-center"
        >
          {setup ? (
            <FaCheckCircle className="text-secondary mr-2 hidden md:block" />
          ) : (
             <div className={`checkbox-container items-center justify-center border cursor-pointer p-[2px] border-${stepIndex === 2 ? 'secondary' : 'dim'} rounded-full h-[16px] w-[16px] mr-2 hidden md:flex`} />
          )}
          <p
            className={`text-sm flex items-center ${
              setup && "text-secondary md:text-text"
            }`}
          >
            Setup
            <FaChevronRight className="mx-[2px] md:hidden" />
          </p>
        </div>
        <div className="w-[40px] h-[1px] bg-secondary rounded-full mx-2 hidden md:block" />
        <div
          onClick={() => importLeads && sequence && setup && setStepIndex(3)}
          className="flex items-center"
        >
           <div className={`checkbox-container items-center justify-center border cursor-pointer p-[2px] border-${stepIndex === 3 ? 'secondary' : 'dim'} rounded-full h-[16px] w-[16px] mr-2 hidden md:flex`} />
          <p className="text-sm flex items-center ">
            Final&nbsp;Review
            <FaChevronRight className="mx-[2px] md:hidden" />
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-centers mt-6 items-center h-screen overflow-scroll scrollbar-hide">
        {stepIndex === 0 && <ImportLeads setStepIndex={setStepIndex} />}
        {stepIndex === 1 && <Sequence setStepIndex={setStepIndex} />}
        {stepIndex === 2 && <ConfigureCampaign setStepIndex={setStepIndex} />}
        {stepIndex === 3 && <FinalReview />}
        <Link
        to="/dashboard/dm-automation/campaign"
        className="absolute top-3 container text-white flex items-center hover:opacity-70"
      >
        <FaChevronLeft className="mr-2" />
        <p>Back</p>
      </Link>
      </div>
    </div>
  );
};

export default Layout;
