import React, { useReducer, useRef, useState } from "react";
import SelectAccount from "../../../../components/SelectAccount";
import { FaChevronDown } from "react-icons/fa6";
import { useDetailsStore } from "../../../../AuthStore/GlobalStates";
import { MdOutlineError } from "react-icons/md";

const Setup = ({ setStepIndex }) => {
  const { getActiveAccountId, accounts } = useDetailsStore();

  const activeAccount = accounts.find(
    (account) => account.x_id === getActiveAccountId()
  );

  const [selectMenu, setSelectMenu] = useState(false);
  const [otherMenus, setOtherMenus] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [maxMin, setMaxMin] = useState([
    {
      name: "emoji",
      max: "",
      min: "",
    },
    {
      name: "hashtag",
      max: "",
      min: "",
    },
    {
      name: "thread",
      max: "",
      min: "",
    },
  ]);

  //Form Display states
  const [duration, setDuration] = useState({
    durationType: "Minute",
    Duration: null,
  });
  const [rangetoPost, setRangetoPost] = useState({ min: null, max: null });
  const [timeFrame, setTimeframe] = useState([
    {
      name: "from",
      time: "",
      format: "AM",
    },
    {
      name: "to",
      time: "",
      format: "AM",
    },
  ]);

  //All custom checkbox refs
  const daysToreply = useRef();
  const allTimesRef = useRef();
  const hashtagsRef = useRef();
  const emojisRef = useRef();
  const threadsRef = useRef();

  // Handle checkbox toggle for days
  const handleDaySelect = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [opacity, setOpacity] = useState('100')

  const handleCheckboxChange = (event) => {
    if (event.current) {
      event.current.click();
    }
  };

  const handleMenuChange = (value) => {
    setSelectMenu(false);
    setOtherMenus((menu) => (menu === value ? null : value));
  };

  const handleDurationType = (type) => {
    setDuration((prev) => ({
      ...prev,
      durationType: type,
    }));
  };

  const handleDurationValue = (value) => {
    const numericValue = Number(value);
    setDuration((prev) => ({
      ...prev,
      Duration: isNaN(numericValue) ? null : numericValue,
    }));
    console.log(duration);
  };

  const handleRange = (type, value) => {
    setRangetoPost((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const setFormat = (index, newFormat) => {
    const updatedTimeFrame = timeFrame.map((item, i) => {
      if (i === index) {
        return { ...item, format: newFormat };
      }
      return item;
    });
    setTimeframe(updatedTimeFrame);
    setOtherMenus(null);
  };

  const handleTimeFrame = (name, timeValue) => {
    setTimeframe((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, time: timeValue } : item
      )
    );
    console.log(timeFrame);
  };

  const handleMaxMin = (name, id, value) => {
    setMaxMin((prevMaxMin) =>
      prevMaxMin.map((item) =>
        item.name === name ? { ...item, [id]: value } : item
      )
    );
  };

  const validatePosterSetup = (data) => {
    return (
      data.x_account_id &&
      data.duration_type &&
      data.duration &&
      data.post_days.length > 0 &&
      data.post_start_time &&
      data.post_end_time &&
      rangetoPost.min &&
      rangetoPost.max &&
      data.post_timezone &&
      (!data.use_emoji ||
        (data.emoji_minimum_percentage && data.emoji_maximum_percentage)) &&
      (!data.use_hashtag ||
        (data.hashtag_minimum_percentage && data.hashtag_maximum_percentage)) &&
      (!data.use_thread ||
        (data.thread_minimum_percentage && data.thread_maximum_percentage))
    );
  };

  const saveandContinue = () => {
    const fromTimeFrame = timeFrame.find((tf) => tf.name === "from");
    const toTimeFrame = timeFrame.find((tf) => tf.name === "to");
    
    const now = new Date();
    now.setMinutes(now.getMinutes() + 8);
  
    const isoDate = now.toISOString();

    const posterSetupData = {
      "x_account_id": activeAccount.id,
      "duration_type": duration.durationType,
      "duration": duration.Duration,
      "duration_start_date": isoDate,
      "minimum_post_per_day": rangetoPost.min,
      "maximum_post_per_day": rangetoPost.max,
      "post_days": daysToreply.current.checked ? daysOfWeek : selectedDays,
      "post_start_time": allTimesRef.current.checked
        ? "12:00 am"
        : fromTimeFrame.time
        ? `${fromTimeFrame.time}:00 ${fromTimeFrame.format}`
        : "",

      "post_end_time": allTimesRef.current.checked
        ? "11:59 pm"
        : toTimeFrame.time
        ? `${toTimeFrame.time}:00 ${toTimeFrame.format}`
        : "",
      "post_timezone": "UTC",
      "use_emoji": !emojisRef.current.checked,
      ...(!emojisRef.current.checked && {
        emoji_minimum_percentage: maxMin[0].min,
        emoji_maximum_percentage: maxMin[0].max,
      }),

      "use_hashtag": !hashtagsRef.current.checked,
      ...(!hashtagsRef.current.checked && {
        hashtag_minimum_percentage: maxMin[1].min,
        hashtag_maximum_percentage: maxMin[1].max,
      }),

      "use_thread": !threadsRef.current.checked,
      ...(!threadsRef.current.checked && {
        thread_minimum_percentage: maxMin[2].min,
        thread_maximum_percentage: maxMin[2].max,
      }),
    };

    if (validatePosterSetup(posterSetupData)) {
      window.localStorage.setItem(
        "posterSetup",
        JSON.stringify(posterSetupData)
      );
      setStepIndex(2);
    } else {
      setErrorMessage("Please fill in all required fields to proceed.");
    }
  };

  console.log({ rangetoPost });

  return (
    <div className="text-text max-w-[600px] w-full unselectable">
      <div className="radient-shadow border-dim border-[2px] w-full relative z-[99] bg-[#091324] p-6 py-[12px] rounded-xl">
        <h1 className="text-center mb-1 font-medium">
          Campaign Configurations
        </h1>
        {errorMessage && (
          <p className="flex items-center justify-center text-[red] font-medium text-xs text-center">
            <MdOutlineError className="mr-2" /> {errorMessage}
          </p>
        )}
        <div className="flex justify-between items-center my-3">
          <h1 className="font-medium text-sm w-1/2">
            Select Account To Send Posts:
          </h1>
          <div className="px-[4px] pr-[3px] relative w-1/2">
            <SelectAccount
              setSelectMenu={setSelectMenu}
              selectMenu={selectMenu}
              style={"p-0 m-0 pt-0 top-0"}
              messageSelect={"!border-dim w-[15px] text-dim text-xs bg-transparent"}
            />
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <h1 className="font-medium text-sm w-1/2">Campaign duration:</h1>
          <div className=" w-1/2 relative flex">
            <input
              type="number"
              placeholder="Enter number"
              onChange={(e) => handleDurationValue(e.target.value)}
              className="bg-transparent text-dim border-[1px] border-dim p-2 mx-1 w-1/2 rounded outline-none text-xs"
            />
            <div
              onClick={() => handleMenuChange(1)}
              className="flex relative items-center justify-between text-dim border-dim border-[1px] w-1/2 rounded-md px-4 p-2 cursor-pointer"
            >
              <p className="text-xs">{duration.durationType}</p>{" "}
              <FaChevronDown className="text-sm" />
              {otherMenus === 1 && (
                <ul className="bg-[#091324] absolute border-text border-[1px] w-full top-[26px] left-0 p-4 py-2 rounded-md z-[99]">
                  <li
                    onClick={() => handleDurationType("Minute")}
                    className="py-2 text-xs border-b-[1px] border-b-dim cursor-pointer hover:opacity-70"
                  >
                    Minute
                  </li>
                  <li
                    onClick={() => handleDurationType("Hour")}
                    className="py-2 text-xs border-b-[1px] border-b-dim cursor-pointer hover:opacity-70"
                  >
                    Hour
                  </li>
                  <li
                    onClick={() => handleDurationType("Day")}
                    className="py-2 text-xs border-b-[1px] border-b-dim cursor-pointer hover:opacity-70"
                  >
                    Day
                  </li>
                  <li
                    onClick={() => handleDurationType("Month")}
                    className="py-2 text-xs border-b-[1px] border-b-dim cursor-pointer hover:opacity-70"
                  >
                    Month
                  </li>
                  <li
                    onClick={() => handleDurationType("Year")}
                    className="py-2 text-xs border-b-[1px] border-b-dim cursor-pointer hover:opacity-70"
                  >
                    Year
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <h1 className="font-medium text-sm w-1/2 text-text">
            Range of how often to post per day
          </h1>
          <div className="custom-check w-1/2 flex items-center justify-end">
            <input
              type="number"
              placeholder="Minimum"
              onChange={(e) => handleRange("min", e.target.value)}
              className="bg-transparent border-[1px] border-dim p-2 mx-1 w-1/2 rounded outline-none text-xs text-dim"
            />
            <p className="text-xs mx-1">To</p>
            <input
              type="number"
              placeholder="Maximum"
              onChange={(e) => handleRange("max", e.target.value)}
              className={`bg-transparent ${
                parseFloat(rangetoPost.min) > parseFloat(rangetoPost.max)
                  ? "!border-[red]"
                  : ""
              } border-[1px] border-dim p-2 mx-1 w-1/2 rounded outline-none text-xs text-dim`}
            />
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <h1 className="font-medium text-sm w-1/2">
            Select days to post:
          </h1>
          <div className="custom-check w-full flex items-center my-2 justify-end">
            <input
              ref={daysToreply}
              className="hidden"
              type="checkbox"
              id="EnableFollowup"
            />
            <div
              onClick={() => {handleCheckboxChange(daysToreply), daysToreply.current?.checked ? setOpacity('50') : setOpacity('100')}}
              className={`flex checkbox-container mr-2 items-center justify-center border ${!daysToreply.current?.checked && 'cursor-pointer'} p-[2px] border-dim rounded h-[16px] w-[16px]`}
            >
              <div className="custom-radio-checked h-full w-full bg-transparent rounded"></div>
            </div>
            <p className="text-xs">
              Everyday <span className="mx-2">Or</span>
            </p>
            <div className="flex items-center text-xs">
              Select day(s)
              <div className="ml-2 relative">
                <div
                  onClick={() => {!daysToreply.current?.checked && handleMenuChange(2)}}
                  className={`opacity-${opacity} flex items-center px-8 justify-between border-dim border-[1px] rounded-md px- p-2 py-1 cursor-pointer`}
                >
                  <p className="text-xs">Select</p>{" "}
                  <FaChevronDown className="text-xs ml-2" />
                </div>
                {otherMenus === 2 && (
                  <ul className="bg-[#091324] absolute p-4 py-2 px-4 border-text border-[1px] rounded-md z-[99]">
                    {daysOfWeek.map((day, index) => (
                      <li
                        key={index}
                        className="py-2 flex items-center text-xs cursor-pointer hover:opacity-70"
                      >
                        <input
                          className="hidden"
                          type="checkbox"
                          checked={selectedDays.includes(day)}
                          onChange={() => handleDaySelect(day)}
                        />
                        <div
                          onClick={() => handleDaySelect(day)}
                          className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded h-[16px] min-w-[16px]"
                        >
                          <div className="custom-radio-checked h-full w-full bg-transparent rounded"></div>
                        </div>
                        {day}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <h1 className="font-medium text-sm w-1/2">
            Select a time frame to post:
          </h1>
          <div className="custom-check w-full flex items-center my-2 justify-end">
            <input
              ref={allTimesRef}
              className="hidden"
              type="checkbox"
              id="EnableFollowup"
            />
            <div
              onClick={() => handleCheckboxChange(allTimesRef)}
              className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded h-[16px] w-[16px]"
            >
              <div className="custom-radio-checked h-full w-full bg-transparent rounded"></div>
            </div>
            <p className="text-xs">
              All times <span className="mx-2">Or</span>
            </p>
            <div className="flex items-center text-xs">
              Select time
              <input
                type="number"
                onChange={(e) => handleTimeFrame("from", e.target.value)}
                className="bg-transparent border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[30px] text-xs"
              />
              <div className="border-[1px] relative border-dim px-1 text-[8px] rounded flex items-center">
                <div
                  className="flex items-center"
                  onClick={() =>
                    otherMenus === 3 ? setOtherMenus(null) : setOtherMenus(3)
                  }
                >
                  {" "}
                  <p>{timeFrame[0].format}</p>{" "}
                  <FaChevronDown className="ml-2" />
                </div>
                {otherMenus === 3 && (
                  <div className="absolute top-[13px] left-0 border-[1px] border-text p-2 bg-[#091324] rounded w-full">
                    <p
                      onClick={() => setFormat(0, "AM")}
                      className="cursor-pointer"
                    >
                      AM
                    </p>
                    <p
                      onClick={() => setFormat(0, "PM")}
                      className="cursor-pointer"
                    >
                      PM
                    </p>
                  </div>
                )}
              </div>
              <span className="mx-1">to</span>
              <input
                type="number"
                onChange={(e) => handleTimeFrame("to", e.target.value)}
                className="bg-transparent border-[1px] border-dim px-1 mr-1 rounded outline-none max-w-[30px] text-xs"
              />
              <div className="border-[1px] relative border-dim px-1 text-[8px] rounded flex items-center">
                <div
                  className="flex items-center"
                  onClick={() =>
                    otherMenus === 4 ? setOtherMenus(null) : setOtherMenus(4)
                  }
                >
                  {" "}
                  <p>{timeFrame[1].format}</p>{" "}
                  <FaChevronDown className="ml-2" />
                </div>
                {otherMenus === 4 && (
                  <div className="absolute top-[13px] left-0 border-[1px] border-text p-2 bg-[#091324] rounded w-full">
                    <p
                      onClick={() => setFormat(1, "AM")}
                      className="cursor-pointer"
                    >
                      AM
                    </p>
                    <p
                      onClick={() => setFormat(1, "PM")}
                      className="cursor-pointer"
                    >
                      PM
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <h1 className="font-medium text-sm w-1/2">
            Would you like to use hashtags:
          </h1>
          <div className="custom-check w-full flex items-center my-2 justify-end">
            <input ref={hashtagsRef} className="hidden" type="checkbox" />
            <div className="flex items-center text-xs">
              Yes&nbsp;(Select&nbsp;Range)
              <input
                type="number"
                placeholder="Minimum %"
                onChange={(e) => handleMaxMin("hashtag", "min", e.target.value)}
                className="bg-transparent border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[80px] text-xs"
              />
              <span className="mx-1">to</span>
              <input
                type="number"
                placeholder="Maximum %"
                onChange={(e) => handleMaxMin("hashtag", "max", e.target.value)}
                className={`bg-transparent ${
                  parseFloat(maxMin[1].min) > parseFloat(maxMin[1].max)
                    ? "!border-[red]"
                    : ""
                } border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[80px] text-xs`}
              />
            </div>
            <p className="text-xs mx-2">Or</p>
            <div
              onClick={() => handleCheckboxChange(hashtagsRef)}
              className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded h-[16px] w-[16px]"
            >
              <div className="custom-radio-checked h-full w-full bg-transparent rounded"></div>
            </div>
            <span className="text-xs">No</span>
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <h1 className="font-medium text-sm w-1/2">
            Would you like to use emojis:
          </h1>
          <div className="custom-check w-full flex items-center my-2 justify-end">
            <input ref={emojisRef} className="hidden" type="checkbox" />
            <div className="flex items-center text-xs">
              Yes&nbsp;(Select&nbsp;Range)
              <input
                type="number"
                placeholder="Minimum %"
                onChange={(e) => handleMaxMin("emoji", "min", e.target.value)}
                className="bg-transparent border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[80px] text-xs"
              />
              <span className="mx-1">to</span>
              <input
                type="number"
                placeholder="Maximum %"
                onChange={(e) => handleMaxMin("emoji", "max", e.target.value)}
                className={`bg-transparent ${
                  parseFloat(maxMin[0].min) > parseFloat(maxMin[0].max)
                    ? "!border-[red]"
                    : ""
                } border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[80px] text-xs`}
              />
            </div>
            <p className="text-xs mx-2">Or</p>
            <div
              onClick={() => handleCheckboxChange(emojisRef)}
              className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded h-[16px] w-[16px]"
            >
              <div className="custom-radio-checked h-full w-full bg-transparent rounded"></div>
            </div>
            <span className="text-xs">No</span>
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <h1 className="font-medium text-sm w-1/2">
            Would you like to use threads
          </h1>
          <div className="custom-check w-full flex items-center my-2 justify-end">
            <input ref={threadsRef} className="hidden" type="checkbox" />
            <div className="flex items-center text-xs">
              Yes&nbsp;(Select&nbsp;Range)
              <input
                type="number"
                placeholder="Minimum %"
                onChange={(e) => handleMaxMin("thread", "min", e.target.value)}
                className="bg-transparent border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[80px] text-xs"
              />
              <span className="mx-1">to</span>
              <input
                type="number"
                placeholder="Maximum %"
                onChange={(e) => handleMaxMin("thread", "max", e.target.value)}
                className={`bg-transparent ${
                  parseFloat(maxMin[2].min) > parseFloat(maxMin[2].max)
                    ? "!border-[red]"
                    : ""
                } border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[80px] text-xs`}
              />
            </div>
            <p className="text-xs mx-2">Or</p>
            <div
              onClick={() => handleCheckboxChange(threadsRef)}
              className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded h-[16px] w-[16px]"
            >
              <div className="custom-radio-checked h-full w-full bg-transparent rounded"></div>
            </div>
            <span className="text-xs">No</span>
          </div>
        </div>

        <button
          onClick={saveandContinue}
          className="w-full bg-secondary px-4 py-2 text-sm rounded hover:bg-opacity-70 disabled:bg-opacity-50"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default Setup;
