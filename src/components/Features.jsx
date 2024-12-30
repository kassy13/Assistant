import React, { useContext, useEffect, useState } from "react";
import { ScrollContexts } from "../store/ScrollContext";
import {
  FaRegBookmark,
  FaRegComment,
  FaRegHeart,
  FaRetweet,
  FaUsersViewfinder,
} from "react-icons/fa6";
import dashboardImg from "../assets/images/dashboard.png";
import { BsEnvelopePaper } from "react-icons/bs";
import { MdAutoMode, MdOutlineFileUpload, MdVerified } from "react-icons/md";
import { HiChartBar, HiLink } from "react-icons/hi";
import { FaSackDollar } from "react-icons/fa6";
import user1 from "../assets/DummyMessages/user1.jpeg";
import user2 from "../assets/DummyMessages/user2.jpeg";
import user3 from "../assets/DummyMessages/user3.jpeg";
import user4 from "../assets/DummyMessages/user4.jpeg";
import user5 from "../assets/DummyMessages/user5.jpeg";
import user6 from "../assets/DummyMessages/user6.jpeg";
import elon from "../assets/images/elon.jpg";
import ProfileCard from "./UI/ProfileCard";
import SaleChart from "./SaleChart";
import { IoCalendarOutline } from "react-icons/io5";
import { LuMousePointerClick } from "react-icons/lu";

const users = [
  {
    id: 1,
    displayName: "John Doe",
    handle: "@john_doe",
    followers: 120,
    leads: 450,
    image: user1,
  },
  {
    id: 2,
    displayName: "Jane Smith",
    handle: "@jane_smith",
    followers: 150,
    leads: 600,
    image: user2,
  },
  {
    id: 3,
    displayName: "Michael Brown",
    handle: "@michael_b",
    followers: 180,
    leads: 750,
    image: user3,
  },
  {
    id: 4,
    displayName: "Emily Johnson",
    handle: "@emily_j",
    followers: 200,
    leads: 820,
    image: user4,
  },
  {
    id: 5,
    displayName: "Chris Williams",
    handle: "@chris_w",
    followers: 700,
    leads: 370,
    image: user5,
  },
  {
    id: 6,
    displayName: "Patricia Miller",
    handle: "@patricia_m",
    followers: 600,
    leads: 530,
    image: user6,
  },
];

const Features = () => {
  const [userLength, setUserLength] = useState(6);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setUserLength(6);
      } else {
        setUserLength(3);
      }
    });
  }, []);
  const { feauturesRef } = useContext(ScrollContexts);
  return (
    <section className="px-2 md:px-6">
      <div
        className="container text-text flex flex-col items-center pt-[80px]"
        ref={feauturesRef}
      >
        <div className="text-xs bg-secondary px-5 py-1 rounded-full">
          Features
        </div>
        <h2 className="pt-4 pb-2 text-3xl text-center leading-snug font-semibold">
          Improve Your DM Experience
        </h2>
        <p className="text-secondary text-center">
          Boost your twitter/X engagement and conversation with Ai
        </p>
        <div className="flex flex-col w-full mt-6 md:flex-row">
          <div className="flex flex-col borderGradient p-6 w-full">
            <div className="bg-[#022b4c77] justify-center w-full rounded-lg px-4 py-4 flex flex-col items-center md:flex-row">
              <div className="bg-[#001725] max-w-[400px] w-full rounded p-4 mx-2 mb-4 md:mb-0">
                <div className="flex items-center">
                  <img
                    src={elon}
                    className="h-[30px] w-[30px] rounded-full mr-1"
                    alt="profile image"
                  />
                  <div>
                    <h3 className="text-sm font-semibold flex items-center">
                      Elon Musk <MdVerified className="text-[#1D9BF0] ml-1" />
                    </h3>
                    <p className="text-xs">@elonmusk</p>
                  </div>
                </div>
                <p className="py-2">Legalize humor!!</p>
                <div className="text-xs">
                  <span className="mr-1">5:11pm</span>.
                  <span className="mx-1">Jun 15, 2024</span>
                  <span className="mx-1 text-xs">
                    <span className="font-bold text-sm">88.1M </span>Views
                  </span>
                </div>
                <div className="text-xs mt-1 flex items-center justify-between">
                  <div className="flex items-center border-[#1D9BF0] border-[1px] p-[3px] relative">
                    <FaRegComment className="text-sm mr-[1px]" />
                    21k{" "}
                    <LuMousePointerClick className="absolute text-xl bottom-[-12px] right-0" />{" "}
                  </div>
                  <div className="flex items-center border-[#1D9BF0] border-[1px] p-[3px] relative">
                    <FaRetweet className="text-sm mr-[1px]" />
                    52k{" "}
                    <LuMousePointerClick className="absolute text-xl bottom-[-12px] right-0" />{" "}
                  </div>
                  <div className="flex items-center ">
                    <FaRegHeart className="text-sm mr-[1px]" />
                    453k
                  </div>
                  <div className="flex items-center">
                    <FaRegBookmark className="text-sm mr-[1px]" />
                    5.2k
                  </div>
                  <div className="flex items-center">
                    <MdOutlineFileUpload className="text-[19px] mr-[1px]" />
                  </div>
                </div>
              </div>
              <div className="bg-[#001725] h-full flex flex-col justify-center max-w-[400px] w-full rounded p-4 mx-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-semibold flex items-center">
                      Elon Musk <MdVerified className="text-[#1D9BF0] ml-1" />
                    </h3>
                    <p className="text-xs">@elonmusk</p>
                  </div>
                  <div className="rounded-full border-white border-[1px] p-1 px-2 text-xs">
                    Following
                  </div>
                </div>
                <p className="text-xs flex items-center py-1">
                  <IoCalendarOutline className="text-sm mr-1" />
                  Joined June 2009
                </p>
                <div className="text-xs mt-1 w-[85%] flex items-center justify-between">
                  <div className="flex items-center border-[#1D9BF0] border-[1px] p-[3px] relative">
                    <span className="font-bold mr-1">651</span>Following{" "}
                    <LuMousePointerClick className="absolute text-xl bottom-[-12px] right-0" />{" "}
                  </div>
                  <div className="flex items-center border-[#1D9BF0] border-[1px] p-[3px] relative">
                    <span className="font-bold mr-1">188.4M</span>Followers{" "}
                    <LuMousePointerClick className="absolute text-xl bottom-[-12px] right-0" />{" "}
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold mr-1">151</span>Subscriptions
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="flex items-center text-secondary font-medium">
                <FaUsersViewfinder className="mr-1" /> Find Active Leads in Your
                Niche:
              </h2>
              <p className="text-sm">
                Dm boosts allows you to streamline lead generation process by
                helping you find active leads in your niche. Search For related
                posts and accounts, copy Urls's Scrape and reach out
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <div className="flex flex-col borderGradient p-6 md:w-1/2">
            <div className="flex items-end">
              <div className="flex flex-col justify-center items-center rounded-lg bg-[#022b4c77] p-4 py-[20px] md:py-[80px]">
                <div className="flex flex-col items-end">
                  <h1 className="text-center text-sm mx-auto mb-3 font-semibold">
                    Today
                  </h1>
                  <div className="bg-secondary p-3 text-sm ml-10 rounded-3xl rounded-br-none">
                    Hey Josh, I see that you're in the e-commerce space, could
                    you benefit from an outband DM mrketing tool that targets
                    active prospects in your ideal customer profile?
                  </div>
                  <p className="text-sm text-dim mt-1">11:24 AM.Sent</p>
                </div>
                {/* <button className="text-center flex items-center my-2 border border-white p-2 py-1 text-xs rounded-lg">
                <PiMagicWandFill className="mr-2" /> Generate message
              </button> */}
              </div>
            </div>
            <div>
              <h2 className="flex items-center mt-2 text-secondary font-medium">
                <BsEnvelopePaper className="mr-1" />
                Personalised Outreach
              </h2>
              <p className="text-sm">
                Send personalised messages to multiple users and connect with
                verified & non-verified accounts
              </p>
            </div>
          </div>
          <div className="flex flex-col borderGradient p-6 md:w-1/2">
            <div className="flex items-end">
              <div className="flex flex-col justify-center items-center rounded-lg bg-[#022b4c77] p-4 ">
                <div className="flex flex-col items-end my-1">
                  <h1 className="text-center text-xs mx-auto mb-3 font-semibold">
                    Today
                  </h1>
                  <div className="bg-[#657786] p-3 text-sm mr-10 rounded-3xl rounded-bl-none">
                    Hey Adam, are you interested in growing your network on X
                    through DM outreach?
                  </div>
                  <p className="text-xs text-dim mt-1 mr-auto">11:24 AM.Seen</p>
                </div>
                <div className="flex flex-col items-end my-1">
                  <div className="bg-[#657786] p-3 text-sm mr-10 rounded-3xl rounded-bl-none">
                    Just following up to see if you're still interested in
                    scaling up your network on X.
                  </div>
                  <p className="text-xs text-dim mt-1 mr-auto">8:24 PM.Seen</p>
                </div>
                <div className="flex flex-col items-end my-1">
                  <div className="bg-secondary p-3 text-sm ml-10 rounded-3xl rounded-br-none">
                    Hi Mark - thanks for the follow up. i am very interested,
                    can you tell me more?
                  </div>
                  <p className="text-xs text-dim mt-1">8:32 PM.Sent</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="flex items-center mt-2 text-secondary font-medium">
                <MdAutoMode className="mr-1" />
                Automated Follow-Ups
              </h2>
              <p className="text-sm">
                DM-Boost enables automatic follow-up to keep track of prospects'
                responses & conversion through personalised DM's
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <div className="flex flex-col relative borderGradient p-6 md:w-1/2">
            <div className="mb-0 sm:mb-[50px] p-5 w-full sm:w-auto">
              <ProfileCard followers={"200"} />
              <div className="absolute top-[100px] right-4 hidden sm:top-[130px] sm:block">
                <ProfileCard followers={"3.5k"} />
              </div>
            </div>
            <h2 className="flex items-center mt-2 text-secondary font-medium">
              <HiLink className="mr-1" />
              Connect & Grow The Network:
            </h2>
            <p className="text-sm">
              Our system connects you to over 400+ real active X users daily.
              Grow followers and network of friends.
            </p>
          </div>
          <div className="flex flex-col borderGradient p-6 md:w-1/2">
            <SaleChart />
            <h2 className="flex items-center mt-2 text-secondary font-medium">
              <FaSackDollar className="mr-1" />
              Sell A Product Or Service::
            </h2>
            <p className="text-sm">
              Target a market on X through posts and use our platform to reach
              out to target audience to scale products x100%
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <div className="flex flex-col borderGradient p-6 w-full">
            <img
              src={dashboardImg}
              alt="dashboard image"
              className="h-[400px] border w-full object-cover object-top overflow-hidden rounded-lg"
            />
            <h2 className="flex items-center mt-2 text-secondary font-medium">
              <HiChartBar className="mr-1" />
              Track results of your campaigns:
            </h2>
            <p className="text-sm">
              With our advanced dashboard, you can track the results of your
              campaigns through clear chart representations. This allows you to
              visualize key metrics and trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
