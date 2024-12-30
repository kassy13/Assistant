import React, { useRef, useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import messageBgIcon from "../../../assets/icons/MessageBg.svg";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { ImClock } from "react-icons/im";
import { FaCircleExclamation, FaCircleInfo } from "react-icons/fa6";

const Sequence = ({ setStepIndex }) => {
  const prevData = JSON.parse(window.localStorage.getItem("sequence"));
  const [data, setData] = useState({
    messageVariants: prevData?.messageVariant || [""],
    followUpVariants: prevData?.followUpvariant || [],
  });

  const [current, setCurrent] = useState({ type: "message", index: 0 });
  const [days, setDays] = useState(prevData?.days || 1);

  const addVariant = (type) => {
    setData((prev) => {
      const updatedData = { ...prev };

      if (type === "message") {
        updatedData.messageVariants = [...updatedData.messageVariants, ""];
      } else if (type === "followUp") {
        updatedData.followUpVariants = [...updatedData.followUpVariants, ""];
      }

      return updatedData;
    });

    const newIndex =
      type === "message"
        ? data.messageVariants.length
        : data.followUpVariants.length;

    setCurrent({ type, index: newIndex });
  };

  const handleSetValue = (e) => {
    const value = e.target.value;
    setData((prev) => {
      const updatedData = { ...prev };

      if (current.type === "message") {
        updatedData.messageVariants[current.index] = value;
      } else if (current.type === "followUp") {
        updatedData.followUpVariants[current.index] = value;
      }

      return updatedData;
    });
  };

  const handleDaysInput = (e) => {
    if (e < 1) {
      setDays(1);
    } else setDays(e);
  };

  const handleCursorPosition = (e) => {
    setCursorPosition(e.target.selectionStart);
  };

  const saveAndContinue = () => {
    const campData = {
      ...(data.messageVariants.length > 0 && {
        Messages: data.messageVariants[0],
      }),
      ...(data.messageVariants.length > 0 && {
        messageVariant: data.messageVariants,
      }),
      ...(data.followUpVariants.length > 0 && {
        followUp: data.followUpVariants[0],
      }),
      ...(data.followUpVariants.length > 0 && days !== null && { days }),
      ...(data.followUpVariants.length > 0 && {
        followUpvariant: data.followUpVariants,
      }),
    };
    if (data.messageVariants[0].length > 0) {
      window.localStorage.setItem("sequence", JSON.stringify(campData));
    }
    setStepIndex(2);
  };

  const handleRandomize = () => {
    let currentValue;
    if (current === 0) {
      currentValue = Messages;
    } else if (current === 1) {
      currentValue = variant;
    } else if (current === 2) {
      currentValue = followUp;
    }
    const randomaizeTemplate = " [Option 1 | Option 2 | Option 3 ] ";

    const newMessage =
      currentValue.slice(0, cursorPosition) +
      randomaizeTemplate +
      currentValue.slice(cursorPosition);
    console.log(currentValue);

    if (current === 0) {
      setMessages(newMessage);
    } else if (current === 1) {
      setVariant([newMessage]);
    } else if (current === 2) {
      setFollowUp(newMessage);
    }
  };

  const composeWithAi = async () => {
    try {
      const response = await fetch(
        "https://api.networkx.ai/api/v1/ai-generate-personalized-message",
        {
          method: "GET",
        }
      );
      const resData = response.json();
      console.log(resData);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("function ran");
    }
  };
  //redp
  return (
    <div className="container pt-0 flex justify-between h-[calc(100%-200px)] overflow-auto flex-col-reverse md:pt-4 md:flex-row md:max-h-[700px]">
      <div className="w-full mt-[5px] bg-[rgb(9,19,36)] p-4 text-text border-text border-[1px] rounded-md md:w-[25%]">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-md flex items-center">
              <img src={messageBgIcon} className="mr-1 w-[19px]" /> Opening
              Message
            </p>
            <div className="bg-secondary text-[11px] p-1 px-2 rounded-md">
              A/B Configuration
            </div>
          </div>

          <div className="pl-4 pt-2 flex flex-col border-l-[1px] border-l-text max-h-[180px] overflow-scroll scrollbar-hide p-2 ml-2 pb-4">
            {data.messageVariants.map((value, index) => (
              <div
                onClick={() => setCurrent({ type: "message", index })}
                key={`message-${index}`}
                className="flex relative items-center border-text pl-0 border-[1px] cursor-pointer p-2 my-[2px] unselectable rounded-md italic text-text text-sm"
              >
                {current.type === "message" && current.index === index && (
                  <BsFillCaretRightFill className="text-secondary ml-[-8px] text-2xl" />
                )}
                <span className="bg-secondary ml-1 text-center flex items-center justify-center font-bold rounded-full w-[20px] h-[20px] mr-1">
                  {String.fromCharCode(65 + index)}
                </span>
                Message:{" "}
                {data.messageVariants[index]?.slice(0, 11) ||
                  `Variant #${index + 1}`}
              </div>
            ))}
            {data.messageVariants.length < 10 && (
              <button
                onClick={() => addVariant("message")}
                className="ml-auto text-sm flex items-center pt-2"
              >
                <IoMdAddCircle className="mr-1 text-lg" /> Add Variant
              </button>
            )}
          </div>

          <div className="h-[15px] bg-text w-[1px] ml-2" />

          {data.followUpVariants.length > 0 && (
            <div className="flex items-center text-sm stop-select">
              <ImClock className="mr-2 text-xl my-1 text-primary bg-text rounded-full p-1" />
              Wait for{" "}
              <span className="flex items-center font-bold bg-text rounded text-dim p-2 py-0 mx-2 text-xs">
                <input
                  value={days}
                  type="number"
                  onChange={(e) => handleDaysInput(e.target.value)}
                  className="bg-transparent outline-none border-none w-[15px]"
                />
                <div className="ml-1 py-[1px]">
                  <MdOutlineKeyboardArrowUp onClick={() => setDays(days + 1)} />
                  <MdOutlineKeyboardArrowDown
                    onClick={() => setDays(days - 1)}
                  />
                </div>
              </span>{" "}
              day{days > 1 && "s"} then
            </div>
          )}

          <div className="h-[15px] bg-text w-[1px] ml-2" />
          {data.followUpVariants.length < 1 ? (
            <button
              onClick={() => addVariant("followUp")}
              className="mr-auto text-sm flex items-center"
            >
              <IoMdAddCircle className="mr-1 text-[18px]" /> Add Follow Up
            </button>
          ) : (
            <div className="flex items-center justify-between">
              <p className="text-md flex items-center">
                <img src={messageBgIcon} className="mr-1 w-[19px]" /> Follow Up
              </p>
              <div className="bg-secondary text-[11px] p-1 px-2 rounded-md">
                A/B Configuration
              </div>
            </div>
          )}
          {data.followUpVariants.length > 0 && (
            <div className="pl-4 pt-2 flex flex-col border-l-[1px] border-l-text border-b-text border-b-[1px] max-h-[180px] overflow-scroll scrollbar-hide p-2 rounded-bl ml-2 pb-4">
              {data.followUpVariants.map((value, index) => (
                <div
                  onClick={() => setCurrent({ type: "followUp", index })}
                  key={`followUp-${index}`}
                  className="flex relative items-center border-text pl-0 border-[1px] cursor-pointer p-2 my-[2px]  unselectable rounded-md italic text-text text-sm"
                >
                  {current.type === "followUp" && current.index === index && (
                    <BsFillCaretRightFill className="text-secondary ml-[-8px] text-2xl" />
                  )}
                  <span className="bg-secondary ml-1 text-center flex items-center justify-center font-bold rounded-full w-[20px] h-[20px] mr-1">
                    {String.fromCharCode(65 + index)}
                  </span>
                  Follow Up:{" "}
                  {data.followUpVariants[index]?.slice(0, 11) ||
                    `Variant #${index + 1}`}
                </div>
              ))}
              {data.followUpVariants.length < 10 && (
                <button
                  onClick={() => addVariant("followUp")}
                  className="ml-auto pt-2 text-sm flex items-center z-[999]"
                >
                  <IoMdAddCircle className="mr-1 text-lg" /> Add Variant
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="text-text w-full h-full flex flex-col justify-between md:w-[73%]">
        <header className="flex justify-between flex-col md:flex-row">
          <p className="py-4 md:py-2">Compose your message</p>
          <button
            onClick={handleRandomize}
            className="bg-secondary p-4 py-2 ml-auto rounded flex items-center"
          >
            {"{ }"} Randomization <FaCircleExclamation className="ml-2" />
          </button>
        </header>
        <div className="bg-[#E1EAFD] mt-2 p-2 rounded-md h-[90%]">
          <textarea
            value={
              current.type === "message"
                ? data.messageVariants[current.index] || ""
                : data.followUpVariants[current.index] || ""
            }
            onChange={handleSetValue}
            placeholder="Write your campaign message here…"
            className="w-full h-[85%] min-h-[300px] outline-none border-none bg-transparent text-black p-2 text-sm placeholder:italic placeholder:text-black"
          ></textarea>

          <div className="flex justify-between items-center pt-4 h-[10%] border-t-[1px] border-t-[#737373]">
            <button
              onClick={composeWithAi}
              className="bg-[#091324] flex items-center text-sm rounded-md p-2"
            >
              Compose with AI <FaCircleInfo className="ml-2" />
            </button>
            <button
              disabled={data.messageVariants[0].length < 1}
              onClick={saveAndContinue}
              className="bg-secondary p-2 rounded text-sm disabled:opacity-75"
            >
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sequence;
