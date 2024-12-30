import React, { useRef, useState, useEffect } from "react";
import SelectAccount from "../../../../components/SelectAccount";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, Select, MenuItem } from "@mui/material";
import calenderIcon from "../../../../assets/icons/calender.svg";
import { IoInformationCircleSharp } from "react-icons/io5";
import { useDetailsStore } from "../../../../AuthStore/GlobalStates";
import { FaX } from "react-icons/fa6";

const Setup = () => {
  const { getActiveAccountId } = useDetailsStore();
  const [selectMenu, setSelectMenu] = useState(false);
  const [rangetoFollow, setRangetoFollow] = useState({ min: null, max: null });
  const [numToFollow, setNumToFollow] = useState("");
  const [orderType, setOrderType] = useState("");
  const [audienceType, setAudienceType] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [today, setToday] = useState("");

  const accountInputRef = useRef(null);

  useEffect(() => {
    // Get today's date in the format YYYY-MM-DD
    const currentDate = new Date().toISOString().split("T")[0];
    setToday(currentDate);
  }, []);

  useEffect(() => {
    const handleChange = () => {
      setIsChecked(scheduleCampaignRef.current.checked);
    };
    const inputElement = scheduleCampaignRef.current;
    inputElement.addEventListener("change", handleChange);
    return () => {
      inputElement.removeEventListener("change", handleChange);
    };
  }, []);

  const scheduleCampaignRef = useRef(null);

  const handleCheckboxChange = (event) => {
    if (event.current) {
      event.current.click();
    }
  };

  const handleRange = (type, value) => {
    setRangetoFollow((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  //material ui theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5B657A",
      },
      bg: {
        main: "#091324",
      },
    },
  });

  const handleAudienceType = (e) => {
    setAudienceType(e);
    console.log(e);
  };

  const handleOrderType = (e) => {
    setOrderType(e);
  };

  const handleAccounts = (e) => {
    if (e.target.value.trim() !== "" && (e.key === "Enter" || e.key === " ")) {
      setAccounts((prevData) => {
        const newAccounts = [...prevData, e.target.value];
        return newAccounts;
      });

      // Clear input after adding the account
      accountInputRef.current.value = "";
    }
  };

  const x_account_id = getActiveAccountId();

  const saveDataHandler = () => {
    const data = {
      x_account_id,
      type: "follow",
      total_actions: numToFollow,
      daily_min: rangetoFollow.min,
      daily_max: rangetoFollow.max,
      sort_order: orderType, // Enum: ascending, descending
      start_time: scheduleCampaignRef.current.checked || date,
      target_accounts: accounts,
      settings: {
        follow_type: audienceType, //(required) followers or following
      },
    };
    localStorage.setItem("FollowSetup", JSON.stringify(data));
  };

  const removeAccountHandle = (index) => {
    setAccounts((prevAcct) => prevAcct.filter((_, idx) => idx !== index));
  };

  return (
    <div className="text-text max-w-[600px] w-full unselectable">
      <div className="radient-shadow border-dim border-[2px] w-full relative z-[99] bg-[#091324] p-6 py-[12px] rounded-xl">
        <h1 className="font-semibold text-center mb-1">Follow Tool Setup</h1>
        <div className="flex justify-between items-center my-2">
          <h1 className="font-semibold text-xs w-1/2">
            Select account to perform the task:
          </h1>
          <div className="relative w-1/2">
            <SelectAccount
              setSelectMenu={setSelectMenu}
              selectMenu={selectMenu}
              style={"p-0 m-0 pt- top-0"}
              messageSelect={"!border-dim p-4 text-dim text-xs bg-transparent"}
            />
          </div>
        </div>
        <div className="flex justify-between items-center my-1">
          <h1 className="font-semibold text-xs flex items-center">
            Select account for following
            <IoInformationCircleSharp className="ml-1 text-[16px]" />:
          </h1>
          <div className="w-1/2">
            <div className="flex flex-col items-center border-dim border-[1px] rounded-md px-4 p-2 w-full mb-1">
              <div className="flex flex-wrap overflow-auto max-h-[40px] scrollbar-hide">
                {accounts.map((account, index) => (
                  <p
                    key={index}
                    className="bg-dim px-2 py-[2px] text-xs rounded-full flex items-center m-[2px]"
                  >
                    {account}{" "}
                    <FaX
                      onClick={() => removeAccountHandle(index)}
                      className="text-[10px] ml-1 cursor-pointer hover:opacity-35"
                    />
                  </p>
                ))}
              </div>
              <input
                type="text"
                ref={accountInputRef}
                onKeyDown={handleAccounts}
                placeholder="@Accounts"
                className="bg-transparent w-full border-none outline-none p-2 text-xs placeholder:text-xs"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-1/2 mb-2">
            <h1 className="text-xs font-semibold flex items-center">
              Type of audience to follow{" "}
              <IoInformationCircleSharp className="ml-1 text-[16px]" />:
            </h1>
          </div>
          <div className="w-1/2">
            <ThemeProvider theme={theme}>
              <FormControl className="w-[100%]">
                <Select
                  onChange={(e) => handleAudienceType(e.target.value)}
                  value={orderType}
                  displayEmpty
                  sx={{
                    height: "46px",
                    fontSize: "13px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "primary.main",
                    },
                    "& .MuiSelect-select": {
                      color: "primary.main",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select audience
                  </MenuItem>
                  <MenuItem value={"followers"}>Followers</MenuItem>
                  <MenuItem value={"following"}>Following</MenuItem>
                </Select>
              </FormControl>
            </ThemeProvider>
          </div>
        </div>
        <div className="flex justify-between items-center my-1">
          <h1 className="font-semibold text-xs flex items-center">
            Total amount of follows :
          </h1>
          <div className="w-1/2">
            <div className="flex items-center border-dim border-[1px] rounded-md px-4 p-2 w-full mb-1">
              <input
                type="text"
                onChange={(e) => setNumToFollow(e.target.value)}
                value={numToFollow}
                placeholder="Enter max amount of follows"
                className="bg-transparent p-2 border-none outline-none w-full text-xs placeholder:text-xs"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          <h1 className="font-semibold flex items-center text-[12px] w-1/2 text-text">
            Amount of follows per day{" "}
            <IoInformationCircleSharp className="ml-1 text-[16px]" />:
          </h1>
          <div className="custom-check w-1/2 flex items-center justify-end">
            <input
              type="number"
              placeholder="Minimum"
              onChange={(e) => handleRange("min", e.target.value)}
              className="bg-transparent p-4 border-[1px] border-dim w-1/2 rounded outline-none text-xs"
            />
            <p className="text-xs mx-2">To</p>
            <input
              type="number"
              placeholder="Maximum"
              onChange={(e) => handleRange("max", e.target.value)}
              className={`bg-transparent p-4 ${
                parseFloat(rangetoFollow.min) > parseFloat(rangetoFollow.max)
                  ? "!border-[red]"
                  : ""
              } border-[1px] border-dim p-2 w-1/2 rounded outline-none text-xs`}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-1/2 mb-2">
            <h1 className="font-bold text-xs flex items-center">
              Order of following{" "}
              <IoInformationCircleSharp className="ml-1 text-[16px]" />:
            </h1>
          </div>
          <div className="w-1/2">
            <ThemeProvider theme={theme}>
              <FormControl className="w-[100%]">
                <Select
                  onChange={(e) => handleOrderType(e.target.value)}
                  value={audienceType}
                  sx={{
                    height: "46px",
                    fontSize: "13px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "primary.main",
                    },
                    "& .MuiSelect-select": {
                      color: "primary.main",
                    },
                  }}
                >
                  <MenuItem value={"ascending"}>Ascending</MenuItem>
                  <MenuItem value={"desending"}>Decending</MenuItem>
                </Select>
              </FormControl>
            </ThemeProvider>
          </div>
        </div>
        <div className="flex items-center justify-between  my-2 flex-col sm:flex-row">
          <div className="flex flex-col justify-start my-1 sm:my-0 w-full sm:w-1/2">
            <h1 className="font-semibold text-xs">Schedule Campaign:</h1>
          </div>
          <div className="custom-check w-1/2 flex items-center my-2 justify-between">
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
              <div className="flex items-center border-dim border-[1px] rounded-md px-4 p-4">
                <input
                  className="bg-transparent uppercase border-none outline-none text-xs disabled:opacity-30"
                  type="date"
                  id="date-input"
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Schedule Campaign"
                  disabled={isChecked}
                  min={today}
                />
                <img
                  //onClick={handleCalenderClick}
                  src={calenderIcon}
                  className={`cursor-pointer w-[18px] ${
                    isChecked && "opacity-30"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={saveDataHandler}
          className="w-full bg-secondary px-4 py-2 rounded hover:bg-opacity-70 disabled:bg-opacity-50"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default Setup;
