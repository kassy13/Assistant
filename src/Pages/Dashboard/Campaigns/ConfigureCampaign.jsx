import React, { useEffect, useState, useRef } from "react";
import SelectAccount from "../../../components/SelectAccount";
import { HiExclamationCircle } from "react-icons/hi2";
import { useDetailsStore } from "../../../AuthStore/GlobalStates";
import calenderIcon from "../../../assets/icons/calender.svg";

const ConfigureCampaign = ({ setStepIndex }) => {
  const setUpData = JSON.parse(localStorage.getItem("setup"));
  const [campaignName, setCampaignName] = useState("");
  const [selectMenu, setSelectMenu] = useState(false);
  const [dmLimit, setDmLimit] = useState(setUpData?.max_daily || "");
  const [RangetoSend, setRangetoSend] = useState({ min: null, max: null });
  const [date, setDate] = useState(null);
  const { getActiveAccountId } = useDetailsStore();
  const account = getActiveAccountId();

  //All custom checkbox refs
  const scheduleCampaignRef = useRef();
  const followBeforeDm = useRef(setUpData?.must_follow === 1);
  const likeMostRecent = useRef(setUpData?.must_like);
  const skipPreviouslyContacted = useRef();
  const bypassB = useRef();

  const handleCheckboxChange = (event) => {
    if (event.current) {
      event.current.click();
    }
  };

  useEffect(() => {
    // Set the initial valuefor the checkbox
    if (setUpData?.must_follow) {
      followBeforeDm.current.checked = true;
    }
  }, []);

  useEffect(() => {
    const campaignName = window.localStorage.getItem("importLeads");
    const name = JSON.parse(campaignName);
    setCampaignName(name?.fileName);
  }, []);

  const handleDateChange = (input) => {
    setDate(input.target.value);
  };

  const SaveandContinue = () => {
    const x_id = getActiveAccountId();
    const data = {
      x_id,
      must_follow: followBeforeDm?.current.checked ? 1 : 0,
      must_like: likeMostRecent?.current.checked,
      min_daily_dms: RangetoSend.min,
      max_daily_dms: RangetoSend.max,
      max_total_dms: dmLimit,
      test_name: scheduleCampaignRef.current.checked ? true : date,
    };
    if (x_id && RangetoSend.max > 0 && RangetoSend.min > 0) {
      window.localStorage.setItem("setup", JSON.stringify(data));
    }
    setStepIndex(3);
  };

  const handleRange = (type, value) => {
    setRangetoSend((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleCalenderClick = () => {
    document.getElementById("date-input").showPicker?.();
    document.getElementById("date-input").click();
  };

  return (
    <div className="text-text max-w-[600px] w-full mt-4 sm:mt-0">
      <h1 className="text-center text-xs font-medium mb-2">{campaignName}</h1>
      <div className="radient-shadow border-text border-[1px] w-full relative z-[99] bg-[#091324] p-6 py-[20px] rounded-md">
        <h1 className="text-center mb-4">Configure Your Campaign</h1>
        <div className="flex justify-between items-center my-2 flex-col sm:flex-row">
          <div className="flex flex-col justify-start my-1 sm:my-0 w-full sm:w-1/2">
            <h1 className="font-semibold text-xs">Select Sender Account:</h1>
            <p className="text-xs text-dim">
              Choose an account to send DMs from
            </p>
          </div>
          <div className="relative w-full sm:w-1/2">
            <SelectAccount
              setSelectMenu={setSelectMenu}
              selectMenu={selectMenu}
              style={"p-0 m-0 pt-0 top-0"}
              messageSelect={"!border-dim text-xs bg-transparent"}
            />
          </div>
        </div>
        <div className="flex items-center justify-between my-2 flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">
            <h1 className="font-semibold text-xs flex items-center">
              Total Amount Of DMs <HiExclamationCircle className="ml-1" />
            </h1>
            <p className="text-xs text-dim w-2/3">
              Enter the total number of DMs you want to send for the entire
              campaign
            </p>
          </div>
          <div className="w-full border-[1px] text-xs p-2 border-dim rounded-md mt-2 sm:w-1/2 sm:mt-0">
            <input
              type="number"
              onChange={(e) => setDmLimit(e.target.value)}
              value={dmLimit}
              className="bg-transparent border-none outline-none w-full text-xs"
              placeholder="Enter amount of DMs (Leave blank to send all)"
            />
          </div>
        </div>
        <div className="flex items-center justify-between my-2 flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">
            <h1 className="font-semibold text-xs flex items-center">
              Amount Of DMs Per Day <HiExclamationCircle className="ml-1" />
            </h1>
            <p className="text-xs text-dim w-2/3">
              Enter the amount of DMs you want to send out per day
            </p>
          </div>
          <div className="custom-check w-1/2 flex items-center justify-end">
            <input
              type="number"
              placeholder="Minimum"
              onChange={(e) => handleRange("min", e.target.value)}
              className="bg-transparent border-[1px] border-dim p-2 w-1/2 rounded outline-none text-xs"
            />
            <p className="text-xs mx-2">To</p>
            <input
              type="number"
              placeholder="Maximum"
              onChange={(e) => handleRange("max", e.target.value)}
              className={`bg-transparent ${
                parseFloat(RangetoSend.min) > parseFloat(RangetoSend.max)
                  ? "!border-[red]"
                  : ""
              } border-[1px] border-dim p-2 w-1/2 rounded outline-none text-xs`}
            />
          </div>
        </div>
        <div className="flex items-center justify-between  my-2 flex-col sm:flex-row">
          <div className="flex flex-col justify-start my-1 sm:my-0 w-full sm:w-1/2">
            <h1 className="font-semibold text-xs">Schedule Campaign:</h1>
            <p className="text-xs text-dim">
              Select what time you want your campaign to start
            </p>
          </div>
          <div className="custom-check w-full flex items-center my-2 justify-between sm:justify-end">
            <span className="flex items-center">
              <input
                ref={scheduleCampaignRef}
                className="hidden"
                type="checkbox"
                id="EnableFollowup"
              />
              <div
                onClick={() => handleCheckboxChange(scheduleCampaignRef)}
                className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px]"
              >
                <div className="custom-radio-checked rounded-full h-full w-full bg-transparent"></div>
              </div>
              <p className="sm:mr-4 text-xs">Now</p>
            </span>
            <span className="mr-5 text-xs"> or </span>
            <div className="calender flex items-center">
              <div className="flex items-center border-dim border-[1px] rounded-md px-4 p-2">
                <input
                  className="bg-transparent uppercase border-none outline-none text-xs"
                  type="date"
                  id="date-input"
                  placeholder="Schedule Campaign"
                  value={date}
                  onChange={handleDateChange}
                />
                <img
                  onClick={handleCalenderClick}
                  src={calenderIcon}
                  className="cursor-pointer w-[18px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full sm:w-1/2">
            <h1 className="font-semibold text-xs flex items-center">
              Select Additional Features{" "}
            </h1>
            <p className="text-xs text-dim">
              Select any of these additional features to enhance your campaign
            </p>
          </div>
          <div>
            <div className="flex justify-between my-2 flex-col sm:flex-row">
              <div className="flex items-center px-2 w-full my-1 text-xs border-dim border-[1px] rounded-md sm:my-0 sm:w-[47%]">
                <div className="custom-check  flex items-center my-2">
                  <input
                    ref={followBeforeDm}
                    className="hidden"
                    type="checkbox"
                    id="followBeforeDm"
                  />
                  <div
                    onClick={() => handleCheckboxChange(followBeforeDm)}
                    className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px]"
                  >
                    <div className="custom-radio-checked rounded-full h-full w-full bg-transparent"></div>
                  </div>
                </div>
                <p>Follow Before DMing</p>
              </div>
              <div className="flex items-center px-2 w-full my-1 text-xs border-dim border-[1px] rounded-md sm:my-0 sm:w-[47%]">
                <div className="custom-check  flex items-center my-2">
                  <input
                    ref={likeMostRecent}
                    className="hidden"
                    type="checkbox"
                    id="likeMostRecent"
                  />
                  <div
                    onClick={() => handleCheckboxChange(likeMostRecent)}
                    className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px]"
                  >
                    <div className="custom-radio-checked rounded-full h-full w-full bg-transparent"></div>
                  </div>
                </div>
                <p className="text-[11px]">
                  Like The Most Recent Post Before DMing
                </p>
              </div>
            </div>
            {/* <div className="flex justify-between my-2 flex-col sm:flex-row">
              <div className="flex items-center px-2 w-full  text-xs border-dim border-[1px] rounded-md my-1 sm:w-[47%] sm:my-0">
                <div className="custom-check flex items-center my-2">
                  <input
                    ref={skipPreviouslyContacted}
                    className="hidden"
                    type="checkbox"
                    id="skipPreviouslyContacted"
                  />
                  <div
                    onClick={() =>
                      handleCheckboxChange(skipPreviouslyContacted)
                    }
                    className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px]"
                  >
                    <div className="custom-radio-checked rounded-full h-full w-full bg-transparent"></div>
                  </div>
                </div>
                <p>Skip previously contacted leads</p>
              </div>
              <div className="flex items-center px-2 w-full  text-xs border-dim border-[1px] rounded-md my-1 sm:w-[47%] sm:my-0">
                <div className="custom-check flex items-center my-2">
                  <input
                    ref={bypassB}
                    className="hidden"
                    type="checkbox"
                    id="bypassB"
                  />
                  <div
                    onClick={() => handleCheckboxChange(bypassB)}
                    className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded-full h-[16px] w-[16px]"
                  >
                    <div className="custom-radio-checked rounded-full h-full w-full bg-transparent"></div>
                  </div>
                </div>
                <p>Bypass global block list</p>
              </div>
            </div> */}
          </div>
        </div>
        <button
          onClick={SaveandContinue}
          disabled={!account || RangetoSend.min < 1 || RangetoSend.max < 1}
          className="w-full bg-secondary px-4 py-2 rounded hover:bg-opacity-70 disabled:bg-opacity-50"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default ConfigureCampaign;
