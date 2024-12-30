import React, { useReducer, useRef, useState } from "react";
import SelectAccount from "../../../../components/SelectAccount";
import { FaChevronDown, FaCircleExclamation, FaXmark } from "react-icons/fa6";
import { useDetailsStore } from "../../../../AuthStore/GlobalStates";
import { MdOutlineError } from "react-icons/md";

const Setup = ({ setStepIndex }) => {
  const { getActiveAccountId } = useDetailsStore();
  const [selectMenu, setSelectMenu] = useState(false);
  const [otherMenus, setOtherMenus] = useState(null);
  const [accountInput, setAccountInput] = useState("");
  const [confirmedAccounts, setConfirmedAccounts] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [frequency, setFrequency] = useState(null)
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
  const frequencyRef = useRef();

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Handle checkbox toggle for days
  const handleDaySelect = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

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

  const handleAccount = (value) => {
    setAccountInput(value);
    let checkedValue = value.endsWith(" ");
    if (checkedValue && value.trim() !== "") {
      setAccountInput("");
      setConfirmedAccounts([...confirmedAccounts, value.trim()]);
    }
    console.log(confirmedAccounts);
  };

  const removeConfirmedAccount = (account) => {
    const filteredAccts = confirmedAccounts.filter(
      (accounts) => accounts !== account
    );
    setConfirmedAccounts(filteredAccts);
  };

  const validatePosterSetup = (data) => {
    return (
      data.x_account_id &&
      data.duration_type &&
      data.duration &&
      data.post_days.length > 0 &&
      data.post_start_time &&
      data.post_end_time &&
      data.post_timezone &&
      (!data.use_emoji ||
        (data.minimum_emoji_percentage && data.maximum_emoji_percentage)) &&
      (!data.use_hashtag ||
        (data.minimum_hashtag_percentage && data.maximum_hashtag_percentage)) &&
      (!data.use_thread ||
        (data.minimum_thread_percentage && data.maximum_thread_percentage))
    );
  };

  const saveandContinue = () => {
    const fromTimeFrame = timeFrame.find((tf) => tf.name === "from");
    const toTimeFrame = timeFrame.find((tf) => tf.name === "to");
    console.log({ fromTimeFrame, toTimeFrame });

    const posterSetupData = {
      x_account_id: getActiveAccountId(),
      username: confirmedAccounts[0],
      duration_unit: duration.durationType,
      duration_number: duration.Duration,
      pre_comment_task: "LIKE",
      reply_every_n_posts: frequencyRef.current.checked ? 1 : frequency,
      reply_days: daysToreply.current.checked ? daysOfWeek : selectedDays,
      reply_time_start: allTimesRef.current.checked
        ? "12:00 am"
        : fromTimeFrame.time
        ? `${fromTimeFrame.time}:00 ${fromTimeFrame.format}`
        : "",

      reply_time_end: allTimesRef.current.checked
        ? "11:59 pm"
        : toTimeFrame.time
        ? `${toTimeFrame.time}:00 ${toTimeFrame.format}`
        : "",
      //post_timezone: "UTC",
      allow_emoji: !emojisRef.current.checked,
      ...(!emojisRef.current.checked && {
        emoji_min: maxMin[0].min,
        emoji_max: maxMin[0].max,
      }),

      allow_hashtag: !hashtagsRef.current.checked,
      ...(!hashtagsRef.current.checked && {
        hashtag_min: maxMin[1].min,
        hashtag_max: maxMin[1].max,
      }),

      allow_thread: !threadsRef.current.checked,
      ...(!threadsRef.current.checked && {
        thread_min: maxMin[2].min,
        thread_max: maxMin[2].max,
      }),
    };

    const data = {
      allowrname: "EjikeRicha80885",
      prompt: "write a pofessional comment on the tweet",
      frequency_day: true,
      frequency_time: false,
      frequency_n_post: true,
      allow_emoji: true,
      allow_hashtag: true,
      duration_number: 2,
      duration_unit: "weeks",
      reply_every_n_posts: 1,
      reply_days: ["Monday", "Wednesday", "Friday"],
      hashtag_min: 1,
      hashtag_max: 3,
      emoji_min: 1,
      emoji_max: 3,
      pre_comment_task: "like",
    };

    window.localStorage.setItem(
      "replierSetup",
      JSON.stringify(posterSetupData)
    );
    setStepIndex(1);
    // if (validatePosterSetup(posterSetupData)) {
    //   window.localStorage.setItem(
    //     "posterSetup",
    //     JSON.stringify(posterSetupData)
    //   );
    //   setStepIndex(1);
    // } else {
    //   setErrorMessage("Please fill in all required fields to proceed.");
    // }
  };

  return (
    <div className="text-text max-w-[600px] w-full unselectable">
      <div className="radient-shadow border-dim border-[2px] w-full relative z-[99] bg-[#091324] p-6 py-[12px] rounded-lg">
        <h1 className="text-center text-sm mb-4 font-medium">
          Campaign Configurations
        </h1>
        {errorMessage && (
          <p className="flex items-center justify-center text-[red] font-medium text-[11px] text-center">
            <MdOutlineError className="mr-2" /> {errorMessage}
          </p>
        )}
        <div className="flex justify-between items-center my-1">
          <h1 className="font-medium text-[11px] w-1/2">
            Select Account To Send Posts:
          </h1>
          <div className="relative w-1/2">
            <SelectAccount
              setSelectMenu={setSelectMenu}
              selectMenu={selectMenu}
              style={"p-0 m-0 pt-0 top-0 text-xs"}
              widthCustom={"!w-[9px] h-[9px]"}
              messageSelect={
                "!border-dim text-dim !text-[11px] !p-1 !px-3 bg-transparent"
              }
            />
          </div>
        </div>
        <div className="flex justify-between items-center my-1">
          <h1 className="font-medium text-[11px] flex items-center">
            Choose Accounts To Reply To{" "}
            <FaCircleExclamation className="mx-1 text-[11px]" />:
          </h1>
          <div className="w-1/2">
            <div className="flex items-center border-dim border-[1px] rounded-md px-4 p-1 w-full mb-1">
              <input
                type="text"
                placeholder="@Accounts"
                value={accountInput}
                onChange={(e) => handleAccount(e.target.value)}
                className="bg-transparent border-none outline-none text-[11px] placeholder:text-[11px]"
              />
            </div>
            <div className="flex flex-wrap items-start border-dim border-[1px] rounded-md px-2 p-2 text-[11px] text-text h-[40px] w-full overflow-y-scroll scrollbar-hide">
              {confirmedAccounts.length < 1 && (
                <p className="text-dim">Confirmed accounts</p>
              )}
              {confirmedAccounts.map((account) => (
                <span className="border-dim border-[1px] rounded px-[4px] m-[2px] flex items-center text-[11px]">
                  {account}
                  <FaXmark
                    onClick={() => removeConfirmedAccount(account)}
                    className="ml-[2px] text-dim cursor-pointer hover:text-text"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-1">
          <h1 className="font-medium text-[11px] w-1/2">Campaign duration:</h1>
          <div className=" w-1/2 relative flex">
            <input
              type="number"
              placeholder="Enter number"
              onChange={(e) => handleDurationValue(e.target.value)}
              className="bg-transparent border-[1px] border-dim p-1 px-2 mr-1 w-1/2 rounded outline-none text-[11px] placeholder:text-[11px]"
            />
            <div
              onClick={() => handleMenuChange(1)}
              className="flex relative items-center justify-between text-dim border-dim border-[1px] w-1/2 rounded-md px-4 p-1 cursor-pointer"
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
        <div className="flex justify-between items-center my-1">
          <h1 className="font-medium text-[11px] w-1/2 text-text">
            Range of how often to reply to posts
          </h1>
          <div className="custom-check w-full flex items-center my-2 justify-end">
            <input
              ref={frequencyRef}
              className="hidden"
              type="checkbox"
            />
            <div
              onClick={() => handleCheckboxChange(frequencyRef)}
              className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded h-[16px] w-[16px]"
            >
              <div className="custom-radio-checked h-full w-full bg-transparent rounded"></div>
            </div>
            <p className="text-[11px]">
              Every Post <span className="mx-2">Or</span>
            </p>
            <div className="flex items-center text-[11px]">
              Reply to 1 in every
              <input
                type="number"
                onChange={(e)=>setFrequency(e.target.value)}
                className="bg-transparent border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[30px] text-[11px]"
              />
              Posts
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-1">
          <h1 className="font-medium text-[11px] w-1/2">
            Select days to reply:
          </h1>
          <div className="custom-check w-full flex items-center my-2 justify-end">
            <input
              ref={daysToreply}
              className="hidden"
              type="checkbox"
              id="EnableFollowup"
            />
            <div
              onClick={() => handleCheckboxChange(daysToreply)}
              className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded h-[16px] w-[16px]"
            >
              <div className="custom-radio-checked h-full w-full bg-transparent rounded"></div>
            </div>
            <p className="text-[11px]">
              Everyday <span className="mx-2">Or</span>
            </p>
            <div className="flex items-center text-[11px]">
              Select day(s)
              <div className="ml-2 relative">
                <div
                  onClick={() => handleMenuChange(2)}
                  className="flex items-center justify-between border-dim border-[1px] rounded-md px-4 p-2 py-1 cursor-pointer"
                >
                  <p className="text-[11px]">Select</p>{" "}
                  <FaChevronDown className="text-[11px] ml-2" />
                </div>
                {otherMenus === 2 && (
                  <ul className="bg-[#091324] absolute p-4 py-2 px-4 border-text border-[1px] rounded-md z-[99]">
                    {daysOfWeek.map((day, index) => (
                      <li
                        key={index}
                        className="py-2 flex items-center text-[11px] cursor-pointer hover:opacity-70"
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
        <div className="flex justify-between items-center my-1">
          <h1 className="font-medium text-[11px] w-1/2">
            Select a time frame to reply:
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
            <p className="text-[11px]">
              All times <span className="mx-2">Or</span>
            </p>
            <div className="flex items-center text-[11px]">
              Select time
              <input
                type="number"
                onChange={(e) => handleTimeFrame("from", e.target.value)}
                className="bg-transparent border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[30px] text-[11px]"
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
                className="bg-transparent border-[1px] border-dim px-1 mr-1 rounded outline-none max-w-[30px] text-[11px]"
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
        <div className="flex justify-between items-center my-2">
          <h1 className="font-medium text-[11px] w-1/2">
            Would you like to use hashtags:
          </h1>
          <div className="custom-check w-full flex items-center my-2 justify-end">
            <input ref={hashtagsRef} className="hidden" type="checkbox" />
            <div className="flex items-center text-[11px]">
              Yes&nbsp;(Select&nbsp;Range)
              <input
                type="number"
                placeholder="Minimum %"
                onChange={(e) => handleMaxMin("hashtag", "min", e.target.value)}
                className="bg-transparent border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[80px] text-[11px]"
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
                } border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[80px] text-[11px]`}
              />
            </div>
            <p className="text-[11px] mx-2">Or</p>
            <div
              onClick={() => handleCheckboxChange(hashtagsRef)}
              className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded h-[16px] w-[16px]"
            >
              <div className="custom-radio-checked h-full w-full bg-transparent rounded"></div>
            </div>
            <span className="text-[11px]">No</span>
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          <h1 className="font-medium text-[11px] w-1/2">
            Would you like to use emojis:
          </h1>
          <div className="custom-check w-full flex items-center my-2 justify-end">
            <input ref={emojisRef} className="hidden" type="checkbox" />
            <div className="flex items-center text-[11px]">
              Yes&nbsp;(Select&nbsp;Range)
              <input
                type="number"
                placeholder="Minimum %"
                onChange={(e) => handleMaxMin("emoji", "min", e.target.value)}
                className="bg-transparent border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[80px] text-[11px]"
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
                } border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[80px] text-[11px]`}
              />
            </div>
            <p className="text-[11px] mx-2">Or</p>
            <div
              onClick={() => handleCheckboxChange(emojisRef)}
              className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded h-[16px] w-[16px]"
            >
              <div className="custom-radio-checked h-full w-full bg-transparent rounded"></div>
            </div>
            <span className="text-[11px]">No</span>
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          <h1 className="font-medium text-[11px] w-1/2">
            Would you like to use threads
          </h1>
          <div className="custom-check w-full flex items-center my-2 justify-end">
            <input ref={threadsRef} className="hidden" type="checkbox" />
            <div className="flex items-center text-[11px]">
              Yes&nbsp;(Select&nbsp;Range)
              <input
                type="number"
                placeholder="Minimum %"
                onChange={(e) => handleMaxMin("thread", "min", e.target.value)}
                className="bg-transparent border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[80px] text-[11px]"
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
                } border-[1px] border-dim px-1 mx-1 rounded outline-none max-w-[80px] text-[11px]`}
              />
            </div>
            <p className="text-[11px] mx-2">Or</p>
            <div
              onClick={() => handleCheckboxChange(threadsRef)}
              className="flex checkbox-container mr-2 items-center justify-center border cursor-pointer p-[2px] border-dim rounded h-[16px] w-[16px]"
            >
              <div className="custom-radio-checked h-full w-full bg-transparent rounded"></div>
            </div>
            <span className="text-[11px]">No</span>
          </div>
        </div>

        <button
          onClick={saveandContinue}
          className="w-full bg-secondary px-4 py-1 text-sm rounded hover:bg-opacity-70 disabled:bg-opacity-50"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default Setup;
