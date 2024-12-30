import React, {useContext, useEffect, useRef, useState} from "react";
import loader from "../../assets/Spinner.svg";
import {FaArrowDownLong} from "react-icons/fa6";
import {SiTicktick, SiX} from "react-icons/si";
import useFunctionStore from "../../store/FunctionStore";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {ScrollContexts} from "../../store/ScrollContext";
import {useAuthStore} from "../../AuthStore/GlobalStates";
import {Link} from "react-router-dom";
import {RiCloseCircleFill} from "react-icons/ri";
import tick from "../../assets/images/guest img/icons/blue tick.svg";
import bad from "../../assets/images/guest img/icons/red close.svg";
import spinner from "../../assets/Spinner.svg";
import { useAuth } from "../../AuthStore/AuthProvider";
const Montly = () => {
  const [isMonthly, setisMonthly] = useState(true);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const {forceLogout} = useAuth();
  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };
  const [plans, setPlans] = useState([]);
  const [showPlan, setShowPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  // const {subscribe} = useFunctionStore();
  const {token} = useAuthStore();
  //   const {pricingRef} = useContext(ScrollContexts);
  const elementRef = useRef(null);

  const filteredPlans = isMonthly
    ? plans.filter((plan) => plan.is_monthly)
    : plans.filter((plan) => !plan.is_monthly);

  const duration = isMonthly ? "mo" : "yr";
  console.log(filteredPlans);
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const leadPriceArray = [
    {numofleads: "25000", price: "$149"},
    {numofleads: "50000", price: "$199"},
    {numofleads: "75000", price: "$249"},
    {numofleads: "100000", price: "$299"},
    {numofleads: "125000", price: "$349"},
    {numofleads: "150000", price: "$399"},
    {numofleads: "175000", price: "$449"},
    {numofleads: "200000", price: "$499"},
    {numofleads: "225000", price: "$549"},
    {numofleads: "250000", price: "$599"},
    {numofleads: "275000", price: "$649"},
    {numofleads: "300000", price: "$699"},
    {numofleads: "325000", price: "$749"},
    {numofleads: "350000", price: "$799"},
    {numofleads: "375000", price: "$849"},
    {numofleads: "400000", price: "$899"},
    {numofleads: "425000", price: "$949"},
    {numofleads: "450000", price: "$999"},
  ];
  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.networkx.ai/api/v1/plans", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("response", response);
        if (response.ok) {
          const data = await response.json();
          setPlans(data.plans);
          console.log("setted plans", plans);
          console.log("data", data);
        } else if (!response.ok) {
          const errorData = await response.json();
          console.error(errorData);
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error("failed to fetch plans:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);
  useEffect(() => {
    const subscribe = async (planID) => {
      if (!token) {
        navigate("/signup");
      } else {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api.networkx.ai/api/v1/subscribe?plan=${planID}&website=${websiteURL}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response?.status === 401) {
            forceLogout();
            throw new Error();
          }
          console.log("response function subscribe", response);
          if (response.ok) {
            const data = await response.json();
            console.log("data function subscribe", data);
            if (data.success) {
              window.location.href = data.url;
            } else {
              throw data.error;
            }
          } else {
            const dataError = await response.json();
            console.log(dataError);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
          console.log("K");
        }
      }
    };
  }, []);
  console.log("setted plans2", plans);
  console.log("montlyyy", isMonthly);
  return (
    <div className="w-full ">
      <div className="text-center flex flex-col justify-center items-center  ">
        <h3 className="text-2xl lg:text-3xl  font-bold pb-3 lg:pt-6">
          Monthly Packages
        </h3>
        <p className="lg:w-[80%] xxxl:text-xl pb-6 ">
          Upgrade your X experience with our monthly packages, designed to fit
          various needs and grow your business. Whether you're just starting out
          or managing a larger operation, our plans offer tailored solutions to
          drive success.
        </p>
      </div>
      <div className=" flex justify-center items-center gap-6 lg:gap-0 ">
        <p
          onClick={() => setisMonthly(true)}
          className={`${
            isMonthly ? " text-secondary underline" : " text-text"
          } lg:px-6 lg:p-2 text-sm font-semibold cursor-pointer xxxl:text-xl`}
        >
          Monthly
        </p>
        <p
          onClick={() => setisMonthly(false)}
          className={`${
            !isMonthly ? " text-secondary underline" : " text-text"
          } lg:px-3 px-3 lg:p-2 text-sm font-semibold cursor-pointer  xxxl:text-xl`}
        >
          Yearly Deal (20% off)
        </p>
      </div>

      <div className="">
        <div className=" rounded-full p- bg-d  text-primary my-4 mb-2 text-xs  xxxl:text-base font-semibold flex flex-col ">
          <span className="hidden md:block self-center bg-text rounded-full p-2 px-4">
            74% prefer this plan
          </span>
          <span className="block md:hidden self-center bg-text rounded-full p-2 px-4">
            74% prefer the premium plan
          </span>
        </div>
        {/* <FaArrowDownLong className="hidden md:block" /> */}
      </div>

      {loading ? (
        <div className="w-full  flex justify-center gap-1">
          <img src={spinner} alt="Loading" className="w-[30px]" />
        </div>
      ) : (
        <div
          className={`flex flex-col  w-full h-full justify-center  lg:mb-6 gap-0 md:gap-0 mt-9   ${
            isMonthly ? "slide-in-left" : "slide-in-right"
          } md:flex-row`}
        >
          <div className="flex justify-start flex-row overflow-x-scroll lg:overflow-hidden scrollbar-hide h-auto lg:w-full lg:h-full   lg:flex lg:flex-row lg:justify-between  gap-5 md:gap-8  w-screen  px-3 py-8 pb-12 mb:py-0  lg:mx-10 lg:px-8 lg:pb-12 xxl:px-12 lg:gap-10 lg:pt-6 -translate-y-5 xxl:grid xxl:grid-cols-3  xxl:mx-16   ">
            <div className="relative w-full h-full bg-gradient-card rounded-3xl p-[0.5px] transition-all hover:scale-[1.02] hover:shadow-[0px_10px_30px_5px_#0653C099]">
              <Link
                onClick={() => subscribe()}
                className="bg-setting_profile_bg w-[300px] lg:w-full h-full  lg:max-h-[500px] xxxl:max-h-[850px] px-6 py-6 rounded-3xl flex flex-col"
                style={{
                  backgroundClip: "padding-box",
                  border: "0.5px solid transparent",
                  borderRadius: "inherit",
                }}
              >
                <div>
                  <p className="uppercase text-xs bg-hero_bg text-center text-text self-center rounded-full px-8 p-2 py-3 mx-4 font-bold lg:text-[15px] xxxl:text-xl">
                    {isMonthly === true ? plans[0]?.name : plans[0]?.name}
                  </p>

                  <h3 className="font-extrabold text-xl lg:text-2xl xxxl:text-3xl text-white py-5 text-center">
                    {/* $49/mo */}
                    {isMonthly
                      ? `$ ${plans[0]?.prices.monthly.amount} /mo`
                      : `$ ${plans[0].prices.yearly.amount} /yr`}
                  </h3>
                  <p className="text-text font-bold text-[13.2px] xxxl:text-base my-2 text-center">
                    Perfect For Trying Out NetworkX
                  </p>
                </div>
                <div>
                  <ul className="flex flex-col justify-center  w-full px-2 font-bold ">
                    <li className="flex items-start xxxl:items-center py-4 text-xs border-b-[1px] border-text w-full ">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        250 AI Smart Content Credits
                      </p>
                    </li>
                    <li className="flex items-start xxxl:items-center py-4 text-xs  border-b-[1px] border-text">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        2,500 DM Automation Credits
                      </p>
                    </li>
                    <li className="flex items-start xxxl:items-center py-4 text-xs  border-b-[1px] border-text">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        3,000 Growth Tools Credits
                      </p>
                    </li>
                    <li className="flex items-start xxxl:items-center py-4 text-xs border-b-[1px] border-text">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        3,500 Lead Scrapping Credits
                      </p>
                    </li>
                    <li className="flex items-startxxxl:items-center py-4 text-xs">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        Connect 1 Account
                      </p>
                    </li>
                  </ul>
                  <div className="mt-4 flex lg:px-3">
                    {/* <button
                    onClick={() => subscribe()}
                    className="bg-secondary text-text  text-xs lg:text-sm rounded-3xl px-4 py-2 text-center w-full font-bold mb-3 mx-auto mt-auto hover:bg-opacity-80"
                  >
                    Start Your Free Trial
                  </button> */}
                    <button
                      className={`relative inline-flex justify-center items-center gap-2 px-4 py-[6px] text-sm xxxl:text-lg font-medium bg-hero_bg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none text-white w-full text-center `}
                      onClick={() => subscribe()}
                    >
                      Start Your Free Trial
                      {/* Decorative 3D Effects */}
                      <span className="absolute bottom-[-0.2rem] right-[0.1rem] w-full h-[0.2rem] bg-blue-900 skew-x-[-45deg] transition-all duration-300 ease-in-out group-hover:bottom-[-0.15rem] group-hover:h-[0.15rem] group-hover:right-[0.05rem]"></span>
                      <span className="absolute left-[-0.2rem] bottom-[-0.1rem] w-[0.2rem] h-full bg-blue-900 skew-y-[-45deg] transition-all duration-300 ease-in-out group-hover:left-[-0.15rem] group-hover:w-[0.15rem] group-hover:bottom-[-0.05rem]"></span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>

            <div className="relative  w-full h-full bg-gradient-card rounded-3xl p-[0.5px] transition-all hover:scale-[1.02] hover:shadow-[0px_10px_30px_5px_#0653C099]">
              <Link
                onClick={() => subscribe()}
                className="bg-setting_profile_bg w-[300px] lg:w-full h-full  lg:max-h-[500px] xxxl:max-h-[700px] px-6 py-6 rounded-3xl flex flex-col"
                style={{
                  backgroundClip: "padding-box",
                  border: "0.5px solid transparent",
                  borderRadius: "inherit",
                }}
              >
                <div className="">
                  <p className="uppercase text-xs bg-hero_bg text-center text-text self-center rounded-full px-8 p-2 py-3 mx-4  font-bold lg:text-[15px] xxxl:text-xl">
                    {/* Premium Plan */}
                    {isMonthly === true ? plans[1]?.name : plans[1]?.name}
                  </p>
                  <h3 className="font-extrabold text-xl lg:text-2xl xxl:text-3xl text-white py-5 text-center ">
                    {/* $99/mo */}
                    {isMonthly
                      ? `$ ${plans[1]?.prices.monthly.amount} /mo`
                      : `$ ${plans[1].prices.yearly.amount} /yr`}
                  </h3>
                  <p className="text-text font-bold text-[13.2px] xxl:text-base my-2 text-center">
                    Perfect For Growing Accounts
                  </p>
                </div>
                <div>
                  <ul className="flex flex-col justify-center  w-full px-2 font-bold ">
                    <li className="flex items-start xxxl:items-center py-4 text-xs border-b-[1px] border-text w-full ">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        1000 AI Smart Content Credits
                      </p>
                    </li>
                    <li className="flex items-start xxxl:items-center py-4 text-xs  border-b-[1px] border-text">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        10,000 DM Automation Credits
                      </p>
                    </li>
                    <li className="flex items-start xxxl:items-center py-4 text-xs  border-b-[1px] border-text">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        12,500 Growth Tools Credits
                      </p>
                    </li>
                    <li className="flex items-start xxxl:items-center py-4 text-xs border-b-[1px] border-text">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        15,000 Lead Scrapping Credits
                      </p>
                    </li>
                    <li className="flex items-start xxxl:items-center py-4 text-xs ">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        Connect 5 Account
                      </p>
                    </li>
                  </ul>
                  <div className=" mt-4 flex lg:px-3 ">
                    {/* <button
                    onClick={() => subscribe()}
                    className="bg-secondary text-text font-bold text-xs lg:text-sm rounded-3xl px-4 py-2 text-center w-[100%] mb-3 mx-auto mt-auto hover:bg-opacity-80"
                  >
                    Start Your Free Trial
                  </button> */}
                    <button
                      className={`relative inline-flex justify-center items-center gap-2 px-4 py-[6px] text-sm font-medium bg-hero_bg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none text-white w-full text-center xxxl:text-lg `}
                      onClick={() => subscribe()}
                    >
                      Start Your Free Trial
                      {/* Decorative 3D Effects */}
                      <span className="absolute bottom-[-0.2rem] right-[0.1rem] w-full h-[0.2rem] bg-blue-900 skew-x-[-45deg] transition-all duration-300 ease-in-out group-hover:bottom-[-0.15rem] group-hover:h-[0.15rem] group-hover:right-[0.05rem]"></span>
                      <span className="absolute left-[-0.2rem] bottom-[-0.1rem] w-[0.2rem] h-full bg-blue-900 skew-y-[-45deg] transition-all duration-300 ease-in-out group-hover:left-[-0.15rem] group-hover:w-[0.15rem] group-hover:bottom-[-0.05rem]"></span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative w-full h-full bg-gradient-card rounded-3xl p-[0.5px] transition-all hover:scale-[1.02] hover:shadow-[0px_10px_30px_5px_#0653C099]">
              <Link
                onClick={() => subscribe()}
                className="bg-setting_profile_bg w-[300px] lg:w-full h-full lg:max-h-[500px] xxxl:max-h-[700px] px-6 py-6 rounded-3xl flex flex-col"
                style={{
                  backgroundClip: "padding-box",
                  border: "0.5px solid transparent",
                  borderRadius: "inherit",
                }}
              >
                <div className="">
                  <p className="uppercase text-xs bg-hero_bg text-center text-text self-center rounded-full px-8 p-2 py-3 mx-4  font-bold lg:text-[15px] xxxl:text-xl text-nowrap">
                    {/* Enterprise Plan */}
                    {isMonthly === true ? plans[2]?.name : plans[2]?.name}
                  </p>
                  <h3 className="font-extrabold text-xl lg:text-2xl xxxl:text-3xl text-white py-5 text-center ">
                    {/* $499/mo */}
                    {isMonthly
                      ? `$ ${plans[2]?.prices.monthly.amount} /mo`
                      : `$ ${plans[2].prices.yearly.amount} /yr`}
                  </h3>
                  <p className="text-text font-bold text-[13.2px] xxxl:text-base my-2 text-center">
                    Perfect For Scaling Up Businesses
                  </p>
                </div>
                <div>
                  <ul className="flex flex-col justify-center  w-full px-2 font-bold ">
                    <li className="flex items-start xxxl:items-center py-4 text-xs border-b-[1px] border-text w-full ">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        10,000 AI Smart Content Credits
                      </p>
                    </li>
                    <li className="flex items-start xxxl:items-center py-4 text-xs  border-b-[1px] border-text">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        100,000 DM Automation Credits
                      </p>
                    </li>
                    <li className="flex items-start xxxl:items-center py-4 text-xs  border-b-[1px] border-text">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        125,000 Growth Tools Credits
                      </p>
                    </li>
                    <li className="flex items-start xxxl:items-center py-4 text-xs border-b-[1px] border-text">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        150,000 Lead Scrapping Credits
                      </p>
                    </li>
                    <li className="flex items-start xxxl:items-center py-4 text-xs ">
                      <img
                        src={tick}
                        alt=""
                        className="w-4 h-4 xxxl:w-5 xxxl:h-5"
                      />{" "}
                      <p className=" w-full pl-2 xxxl:text-lg">
                        Connect unlimited Account
                      </p>
                    </li>
                  </ul>
                  <div className=" mt-4 flex lg:px-3 ">
                    {/* <button
                    onClick={() => subscribe()}
                    className="bg-secondary text-text font-bold text-xs lg:text-sm w-full rounded-lg px-4 py-2 text-center  mb-3 mx-auto mt-auto hover:bg-opacity-80 lg:text-[14px]"
                  >
                    Start Your Free Trial
                  </button> */}
                    <button
                      className={`relative inline-flex justify-center items-center gap-2 px-4 py-[6px] text-sm font-medium bg-hero_bg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none text-white w-full text-center xxxl:text-lg`}
                      onClick={() => subscribe()}
                    >
                      Start Your Free Trial
                      {/* Decorative 3D Effects */}
                      <span className="absolute bottom-[-0.2rem] right-[0.1rem] w-full h-[0.2rem] bg-blue-900 skew-x-[-45deg] transition-all duration-300 ease-in-out group-hover:bottom-[-0.15rem] group-hover:h-[0.15rem] group-hover:right-[0.05rem]"></span>
                      <span className="absolute left-[-0.2rem] bottom-[-0.1rem] w-[0.2rem] h-full bg-blue-900 skew-y-[-45deg] transition-all duration-300 ease-in-out group-hover:left-[-0.15rem] group-hover:w-[0.15rem] group-hover:bottom-[-0.05rem]"></span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* <CustomPricing /> */}

      {/* <div className="lg:px-20 mt-6 lg:mt-0">
        See More
        <p
          className="text-center lg:py-14 cursor-pointer w-full inline-flex justify-center items-center  "
          onClick={toggleTableVisibility}
        >
          <span className="text-center bg-secondary p-1 px-4 rounded text-sm">
            {isTableVisible ? "See less" : "See more"}
          </span>
        </p>

        Table Section
        {isTableVisible && (
          <div className="bg-[#091324] text-white lg:p-6 p-2 rounded-lg shadow-lg overflow-x-auto mt-7">
            <table className="min-w-full text-left lg:table-auto">
              General Header
              <thead>
                <tr className="border-b-2 border-gray-700 ">
                  <th className="lg:px-6 py-4 font-bold lg:text-lg text-sm">
                    Features
                  </th>
                  <th className="lg:px-6 py-4 font-bold lg:text-lg text-sm">
                    Basic Plan
                  </th>
                  <th className="lg:px-6 py-4 font-bold lg:text-lg text-sm">
                    Enterprise Plan
                  </th>
                  <th className="lg:px-6 py-4 font-bold lg:text-lg text-sm">
                    Premium Plan
                  </th>
                </tr>
              </thead>

              Subheader
              <tbody>
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 bg-[#1D9BF026]  lg:text-xl font-bold text-left pl-8"
                  >
                    AI Smart Content
                  </td>
                </tr>
                <tr className=" hover:bg-[#1D9BF026] hover:border hover:border-text  transition duration-300 ease-in-out">
                  <td className="px-6 py-4 ">AI Posts credits</td>
                  <td className="px-6 py-4 text-sm lg:text-base">
                    <span className="text-white text-sm">250 Credits</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white text-sm">1,000 Credits</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white text-sm">10,000 Credits</span>
                  </td>
                </tr>

                <tr className=" hover:bg-[#1D9BF026] hover:border hover:border-text  transition duration-300 ease-in-out">
                  <td className="lg:px-6  px-6 py-4">AI Posting Assistant</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary block">
                      <img src={tick} alt="" className=" w-4 h-4  " />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary ">
                      <img src={tick} alt="" className="w-4 h-4 " />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary ">
                      <img src={tick} alt="" className="w-4 h-4  " />
                    </span>
                  </td>
                </tr>
                <tr className=" hover:bg-[#1D9BF026] hover:border hover:border-text  transition duration-300 ease-in-out">
                  <td className="px-6 py-4">AI Replier Assistant</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className=" hover:bg-[#1D9BF026] hover:border hover:border-text  transition duration-300 ease-in-out">
                  <td className="px-6 py-4">AI Content Auto Poster</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className=" hover:bg-[#1D9BF026] hover:border hover:border-text  transition duration-300 ease-in-out">
                  <td className="px-6 py-4">AI Content Schedule</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                Second
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 bg-[#1D9BF026] text-xl font-bold text-left pl-8  "
                  >
                    Direct Messaging Automation
                  </td>
                </tr>
                <tr className="  hover:bg-[#1D9BF026] hover:border hover:border-text  transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Automated Direct Messages</td>
                  <td className="px-6 py-4">
                    <span className="text-white text-sm">2,500 Credits</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white text-sm">10,000 Credits</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white text-sm">100,000 Credits</span>
                  </td>
                </tr>
                <tr className=" hover:bg-[#1D9BF026] hover:border hover:border-text  transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Scraping Leads</td>
                  <td className="px-6 py-4">
                    <span className="text-white text-sm">3,500 Credits</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white text-sm">15,000 Credits</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white text-sm">150,000 Credits</span>
                  </td>
                </tr>
                <tr className=" hover:bg-[#1D9BF026] hover:border hover:border-text  transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Live Messaging</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className=" hover:bg-[#1D9BF026] hover:border hover:border-text  transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Dynamic Follow Up Sequencing</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className=" hover:bg-[#1D9BF026] hover:border hover:border-text  transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Randomize Text</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className=" hover:bg-[#1D9BF026] hover:border hover:border-text  transition duration-300 ease-in-out">
                  <td className="px-6 py-4">A/B Testing</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={bad} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className=" hover:bg-[#1D9BF026] hover:border hover:border-text  transition duration-300 ease-in-out">
                  <td className="px-6 py-4">AI DMs</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={bad} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                Add more rows for other features
                Third

                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 bg-[#1D9BF026] text-xl font-bold text-left pl-8"
                  >
                    Growth Tools
                  </td>
                </tr>
                <tr className=" border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Growth Credits</td>
                  <td className="px-6 py-4">
                    <span className="text-text text-sm">3,000 Credit</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-text text-sm">12,500 Credit</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-text text-sm">125,000 Credit</span>
                  </td>
                </tr>

                <tr className="border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Follow tool</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <span className="text-secondary">
                        <img src={tick} alt="" className="w-4 h-4" />
                      </span>
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className="border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Like tool</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className="border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">UnLike tool</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className="border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Retweet tool</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className="border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Unretweet tool</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>

                
                fourth

                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 bg-[#1D9BF026] text-xl font-bold text-left pl-8"
                  >
                    Extras
                  </td>
                </tr>
                <tr className=" border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Amount of Accounts</td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-text text-sm">1</span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-text text-sm">5</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-text text-sm">Unlimited</span>
                  </td>
                </tr>

                <tr className="border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Customer support </td>

                  <td className="px-6 py-4">
                    <span className="text-text text-sm">
                      Basic Customer Support
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-text text-sm">5</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-text text-sm">Unlimited</span>
                  </td>
                </tr>
                <tr className="border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Like tool</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className="border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Video Tutorials</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className="border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Blog Section</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className="border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Follow before DM</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={bad} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
                <tr className="border-gray-700 hover:bg-[#1D9BF026] hover:border hover:border-text transition duration-300 ease-in-out">
                  <td className="px-6 py-4">Private Coaching</td>
                  <td className="lg:px-16 px-9 py-4 text-center">
                    <span className="text-secondary">
                      <img src={bad} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={bad} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                  <td className="lg:px-16 px-9 py-4">
                    <span className="text-secondary">
                      <img src={tick} alt="" className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            Plan Buttons
            <div className="w-full flex justify-end my-7 gap-5">
              <Link className="bg-secondary hover:bg-opacity-85 p-2 text-white rounded-md lg:px-10 text-xs lg:text-sm text-center">
                Choose Basic plan
              </Link>
              <Link className="bg-secondary hover:bg-opacity-85 p-2 text-white rounded-md lg:px-10 text-xs lg:text-sm text-center">
                Choose Enterprise plan
              </Link>
              <Link className="bg-secondary hover:bg-opacity-85 p-2 text-white rounded-md lg:px-10 text-xs lg:text-sm text-center">
                Choose Premium plan
              </Link>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Montly;
