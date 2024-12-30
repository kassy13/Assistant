import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { IoMailOpen, IoMailUnread } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import SelectMessage from "../../components/SelectMessage";
import ViewMessage from "./ViewMessage";
import { TbMessage2Cancel, TbMessageOff } from "react-icons/tb";
import loader from "../../assets/Spinner.svg";
import SelectAccount from "../../components/SelectAccount";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore, useDetailsStore } from "../../AuthStore/GlobalStates";

const Message = () => {
  const { token, user } = useAuthStore();
  const { activeAccountId, getActiveAccountId } = useDetailsStore();
  const [selectMenu, setSelectMenu] = useState(false);
  const [viewMessage, setViewMessage] = useState(null);
  const [MessageData, setMessageData] = useState([]);
  const [texts, setTexts] = useState([]);
  const elementRef = useRef(null);

  //loading texts
  const [textsLoading, setTextsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user) {
      navigate("/signin");
    } else if (token && !user.active_plan) {
      navigate("/dashboard/pricing");
      toast("Please Subscribe to access our services!");
    }
  }, [token, user, navigate]);

  useEffect(() => {
    setTextsLoading(true);
    const x_id = getActiveAccountId();
    const getConversations = async () => {
      try {
        const response = await fetch(
          "https://api.networkx.ai/api/v1/conversations",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ x_id: x_id }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setMessageData(data);
          setTexts({ state: "all", messages: data });
        } else {
          const dataError = await response.text();
          console.log(dataError);
          setMessageData(null);
          setTexts({ state: "all", messages: null });
          setViewMessage(null)
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTextsLoading(false);
      }
    };
    if (x_id) {
      getConversations();
    }
  }, [activeAccountId]);

  const handleClickOutside = (event) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setSelectMenu(false);
    }
  };

  const filterUnread = () => {
    const unread = MessageData.filter((item) => !item.is_read);
    setTexts({ state: "unread", messages: unread });
  };
  const filterAll = () => {
    setTexts({ state: "all", messages: MessageData });
  };
  const filterUnreplied = () => {
    const unreplied = MessageData.filter((item) => item.sent_by === "other");
    setTexts({ state: "unreplied", messages: unreplied });
  };

  return (
    <div
      className="container border-[1px] border-[#5B657A] h-[78vh] overflow-hidden flex text-white flex-col bg-[#010C1E] rounded-lg md:flex-row"
      onClick={handleClickOutside}
    >
      {getActiveAccountId() !== null ? (
        <>
          <div className="w-full h-full md:w-[40%]">
            <div
              ref={elementRef}
              className="flex relative items-center px-6 py-2 pb-3 justify-between w-full border-b-[1px] border-b-dim"
            >
              <p>Messages</p>
              <div>
                <SelectAccount
                  setSelectMenu={setSelectMenu}
                  selectMenu={selectMenu}
                  style={"p-5 pt-0"}
                  messageSelect={"!border-none bg-transparent"}
                />
              </div>
            </div>
            <div>
              <div className="w-full p-4 py-2 flex items-center justify-between text-start border-b border-b-dim md:border-none">
                <div
                  onClick={filterAll}
                  className={`flex items-center text-xs mx-2 mr-3 cursor-pointer  ${
                    texts.state !== "all" ? "text-dim" : "text-text"
                  } md:text-sm hover:opacity-50`}
                >
                  <HiMail className="mr-1 text-lg" /> All{" "}
                  <span className="hidden ml-1 lg:block">messages</span>
                </div>
                <div className="w-[1px] bg-dim h-[30px]" />
                <div
                  onClick={filterUnread}
                  className={`flex items-center text-xs mx-2 mr-3 cursor-pointer ${
                    texts.state !== "unread" ? "text-dim" : "text-text"
                  } md:text-sm hover:opacity-50`}
                >
                  <IoMailUnread className="mr-1 text-lg" /> Unread{" "}
                  <span className="hidden ml-1 lg:block">messages</span>
                </div>
                <div className="w-[1px] bg-dim h-[30px]" />
                <div
                  onClick={filterUnreplied}
                  className={`flex items-center  text-xs mx-2 mr-3 cursor-pointer ${
                    texts.state !== "unreplied" ? "text-dim" : "text-text"
                  } md:text-sm hover:opacity-50`}
                >
                  <IoMailOpen className="mr-1 text-lg" /> Unreplied
                </div>
              </div>
            </div>

            <div className="border-t border-dim h-[1px] hidden md:block md:border-l" />
            <div className="h-[60vh] overflow-y-scroll ..twitter-scroll scrollbar-hide chat">
              {!textsLoading &&
                texts.messages?.map((text) => (
                  <div
                    onClick={() => {
                      setViewMessage({
                        x_id: getActiveAccountId(),
                        user_id: text.x_id,
                      });
                      console.log(viewMessage);
                    }}
                    key={text.conversation_id}
                  >
                    <div
                      className={`p-3 px-5 flex cursor-pointer items-center hover:opacity-75 z-[9] ${
                        !text.is_read && "bg-[#091324]"
                      }`}
                    >
                      <img
                        src={text.photo}
                        alt="user image"
                        className="rounded-full mr-3 h-[40px] w-[40px] object-cover"
                      />
                      <div className="flex w-full items-center">
                        <div>
                          <h3 className="text-white font-semibold text-sm flex items-center">
                            <p className="max-w-[80%] text-sm whitespace-nowrap overflow-hidden">
                              {text.name}
                            </p>{" "}
                            <span className="text-xs font-normal flex items-center">
                              {text.verified && (
                                <MdVerified className="text-[#548cf7] ml-1" />
                              )}{" "}
                              {/* <p className="ml-1 opacity-50">@{text.username}</p> */}
                            </span>
                          </h3>
                          <p className="text-xs text-dim">
                            {text?.latest_message?.slice(0, 35)}
                            {text?.latest_message?.length > 35 && "..."}
                          </p>
                        </div>
                        {!text.is_read && (
                          <div className="bg-secondary h-[7px] w-[7px] rounded-full ml-auto" />
                        )}
                      </div>
                    </div>
                    <div className="border-t border-dim h-[1px] hidden md:block md:border-l" />
                  </div>
                ))}
              {textsLoading && (
                <div className="relative w-full h-[100%] py-3 flex items-center justify-center">
                  <img src={loader} className="w-[50px]" />
                </div>
              )}
              {texts?.messages?.length < 1 && (
                <div className="text-dim flex flex-col items-center justify-center p-4 h-full">
                  <TbMessageOff className="text-4xl" />
                  <h2 className="py-2">
                    {" "}
                    No messages match your filter criteria{" "}
                  </h2>
                </div>
              )}
              {!texts?.messages && (
                <div className="text-dim flex flex-col items-center justify-center p-4 h-full">
                  <TbMessageOff className="text-4xl" />
                  <h2 className="py-2 text-center">
                    {" "}
                    Something went wrong, check your connected account and try
                    again{" "}
                  </h2>
                </div>
              )}
            </div>
          </div>
          <div className="border-t border-dim h-[1px] md:border-l md:h-[100vh] relative" />
          <>
            {viewMessage ? (
              <ViewMessage
                viewMessage={viewMessage}
                setViewMessage={setViewMessage}
              />
            ) : (
              <SelectMessage />
            )}
          </>
        </>
      ) : (
        <div className="flex flex-col text-center w-full justify-center items-center h-full text-dim text-lg">
          <TbMessage2Cancel className="text-5xl mr-2" /> Set a connected account
          to active to continue conversations through NetworkX.
        </div>
      )}
    </div>
  );
};

export default Message;
