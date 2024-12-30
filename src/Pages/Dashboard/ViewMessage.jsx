import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import loader from "../../assets/Spinner.svg";
import toast from "react-hot-toast";
import { MdVerified } from "react-icons/md";
import { HiMiniGif } from "react-icons/hi2";
import { useAuthStore } from "../../AuthStore/GlobalStates";
import { BsEmojiSmileFill, BsFillImageFill } from "react-icons/bs";
import { RiSendPlane2Fill, RiSendPlaneFill } from "react-icons/ri";
import { LuSendHorizonal } from "react-icons/lu";

const ViewMessage = ({ viewMessage, setViewMessage }) => {
  const { token } = useAuthStore();
  const [messages, setMessages] = useState([]);
  const [messageLoading, setMessageLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [sendMessageState, setSendMessageState] = useState(null);
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    if (window.innerWidth < 768 && viewMessage) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [viewMessage]);

  useEffect(() => {
    const getMessages = async () => {
      setMessageLoading(true);
      try {
        const response = await fetch(
          "https://api.networkx.ai/api/v1/conversation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(viewMessage),
          }
        );
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
          console.log(data);
        } else {
          const dataError = await response.text();
          console.log(dataError);
          setViewMessage(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setMessageLoading(false);
      }
    };
    getMessages();
  }, [viewMessage, token, setViewMessage]);

  const sendMessage = async () => {
    try {
      const messageDum = {
        id: "sending",
        sent_by: "me",
        text: message,
        time: "Now",
      };
      setMessages((prevMessages) => ({
        ...prevMessages,
        messages: [messageDum, ...prevMessages.messages],
      }));
      inputRef.current.value = "";
      setSendMessageState("sending");
      const response = await fetch(
        "https://api.networkx.ai/api/v1/send-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...viewMessage, message: message }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSendMessageState("sent");
        console.log({ data }, "nnnnn");
      } else {
        const errorData = await response.json();
        setSendMessageState("failed");
        console.log({ errorData });
        toast(errorData?.errors);
      }
    } catch (error) {
      console.log(error);
      setSendMessageState("failed");
    } finally {
      setMessage("");
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const formatTime = (e) => {
    const dateObj = new Date(e);
    const options = { month: "long", year: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  function parseDate(dateString) {
    const [datePart, timePart] = dateString.split(" at ");
    return new Date(`${datePart}, ${timePart}`);
  }

  // Example comparison function
  function areTimesDifferent(currentTimeString, previousTimeString) {
    const currentDate = parseDate(currentTimeString);
    const previousDate = parseDate(previousTimeString);

    return (
      currentDate.getMinutes() !== previousDate.getMinutes() ||
      currentDate.getHours() !== previousDate.getHours()
    );
  }

  return (
    <div className="bg-primary overflow-y-hidden absolute z-[999] top-0 md:relative p-4 pt-2 h-[100%] w-full flex flex-col md:h-[100%] md:w-2/3">
      <div className="h-[100%] w-[100%]">
        {viewMessage && !messageLoading && (
          <div className="py-2">
            <div
              key={messages.user?.id}
              className="flex flex-col text-center w-full items-center min-h-[30%] border-b border-dim bg-primary sticky p-4 pl-0 top-0"
            >
              <div className="absolute left-0 top-0 flex items-center">
                {/* <IoMdArrowRoundBack
                  onClick={() => setViewMessage(null)}
                  className="text-white text-2xl hover:text-dim cursor-pointer"
                /> */}
                <img
                  src={messages.user?.photo}
                  alt="user image"
                  className="w-[26px] h-[26px] mx-2 object-cover rounded-full"
                />
                <h3 className="font-semibold text-sm text-[white] flex items-center">
                  {messages.user?.name}
                  <span>
                    {messages.user?.is_blue_verified && (
                      <MdVerified className="text-[#548cf7] ml-1" />
                    )}{" "}
                  </span>
                </h3>
              </div>
              <img
                src={messages.user?.photo}
                alt="user image"
                className="w-[50px] h-[50px] mx-2 object-cover rounded-full"
              />
              <h3 className="font-semibold text-sm text-[white] flex items-center">
                {messages.user?.name}
                <span>
                  {messages.user?.is_blue_verified && (
                    <MdVerified className="text-[#548cf7] ml-1" />
                  )}{" "}
                </span>
              </h3>
              <p className="text-[grey] text-sm">
                @{messages.user?.screen_name}
              </p>
              <p className="text-xs my-1">{messages.user?.description}</p>
              <p className="text-sm text-[grey] my-1">
                {" "}
                Joined {formatTime(messages.user?.joined)}
                {" . "}
                {message.user?.followers_count}Followers
              </p>
            </div>
          </div>
        )}

        {viewMessage && !messageLoading && (
          <>
            <div
              className="w-full h-[100%] pb-[260px] overflow-y-scroll scrollbar-hide"
              ref={chatContainerRef}
            >
              {messages.messages
                ?.map((message, originalIndex) => {
                  const currentMessageTime = message.time;
                  const nextMessageTime =
                    originalIndex > 0
                      ? messages.messages[originalIndex - 1].time
                      : null;

                  // Use the function to compare times
                  const shouldDisplayTime =
                    !nextMessageTime ||
                    areTimesDifferent(currentMessageTime, nextMessageTime);

                  return (
                    <div key={originalIndex} className="mt-1">
                      <div
                        className={`${
                          message.sent_by === "other" &&
                          "bg-[#2E3336] rounded-bl-none mr-auto"
                        } ${
                          message.sent_by === "me" &&
                          "bg-[#1C9BF3]  rounded-br-none ml-auto"
                        } text-white p-4 py-2 rounded-2xl w-fit max-w-[60%] text-xs ${
                          !shouldDisplayTime && "!rounded-2xl"
                        }`}
                      >
                        {message.text}
                      </div>
                      {shouldDisplayTime && (
                        <div
                          className={`${
                            message.sent_by === "other" && "mr-auto text-start"
                          } ${
                            message.sent_by === "me" && "ml-auto text-end"
                          } text-dim text-xs py-1 w-[70%]`}
                        >
                          {message.id !== "sending" ? message.time : ""}
                          {message.id === "sending" && originalIndex === 0
                            ? sendMessageState
                            : ""}
                        </div>
                      )}
                    </div>
                  );
                })
                .reverse()}
            </div>
            <div className="flex items-center bg-primary absolute p-2 pb-6 left-0 bottom-0 w-full">
              <div className="bg-[#212121] flex items-center w-full px-4 rounded-2xl">
                <div className="flex items-center text-secondary">
                  <BsFillImageFill className="text-lg mr-2" />
                  <HiMiniGif className="ml-1 text-lg mr-2" />
                  <BsEmojiSmileFill className="ml-1 text-lg" />
                </div>
                <textarea
                  placeholder="Start a new message"
                  ref={inputRef}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mx-auto w-full h-[50px] bg-[#212121] bg-opacity-60 rounded p-[15px] outline-none scrollbar-hide placeholder:text-dim placeholder:text-sm"
                ></textarea>
                <button
                  disabled={message === "" || sendMessageState === "sending"}
                  onClick={sendMessage}
                  className="text-secondary text-xl"
                >
                 <LuSendHorizonal className="text-md ml-1" />
                </button>
              </div>
            </div>
          </>
        )}

        {messageLoading && (
          <div className="relative w-full h-[100vh] py-3 flex items-center justify-center md:h-[70vh] ">
            <img src={loader} className="w-[60px]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewMessage;
