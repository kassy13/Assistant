import React, {useContext, useEffect, useRef, useState} from "react";
import {SiTicktick} from "react-icons/si";
import {ScrollContexts} from "../../store/ScrollContext";
import useFunctionStore from "../../store/FunctionStore";
import loader from "../../assets/Spinner.svg";
import {FaArrowDownLong, FaChevronDown, FaChevronUp} from "react-icons/fa6";
import {useAuthStore} from "../../AuthStore/GlobalStates";
import {Link, NavLink} from "react-router-dom";
import Montly from "./Montly";
import AddOns from "./AddOns";
import Done from "./Done";
import PerCredit from "./PerCredit";

const Price = ({py, activeTab, setActiveTab}) => {
  // const [activeTab, setActiveTab] = useState("monthly");
  const [plans, setPlans] = useState([]);

  const {pricingRef} = useContext(ScrollContexts);
  const {token} = useAuthStore();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch("https://api.networkx.ai/api/v1/plans", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setPlans(data.plans);
          console.log(data);
        } else if (!response.ok) {
          const errorData = await response.json();
          console.error(errorData);
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error("failed to fetch plans:", error);
      }
    };
    fetchPlans();
  }, []);

  // format number to display with commas
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
  const elementRef = useRef(null);
  const handleClickOutside = (event) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setShowPlan(false);
    }
  };

  // Data for each tab
  const tabs = [
    {id: "monthly", label: "Monthly Packages"},
    {id: "per-credit", label: "Per Credit Packages"},
    {id: "done-for-you", label: "Done For You Packages"},
    {id: "add-ons", label: "Add Ons"},
  ];

  // Content for each tab
  const tabContent = {
    monthly: <Montly />,
    "per-credit": <PerCredit />,
    "done-for-you": <Done />,
    "add-ons": <AddOns />,
  };
  return (
    <div
      className={` text-text overflow-hidden flex flex-col items-center relative z-10 px-2 lg:px-0 ${py} lg:pt-16`}
      id="Pricing"
      ref={pricingRef}
      onClick={handleClickOutside}
    >
      <h3 className="text-text tracking-tight text-[22px] text-center lg:text-[31px] xxxl:text-4xl font-bold  lg:pb-3">
        Pricing
      </h3>

      <div className="lg:px-12 xxl:px-0 md:py-8 lg:py-0 w-full px-2">
        <div className=" lg:mx-auto mt-8 flex flex-col justify-center">
          {/* Navigation Links */}
          <nav className="grid grid-cols-2 lg:inline-flex lg:self-center py-2 px-2 lg:py-1 lg:px-1 lg:space-x-4 mb-6 rounded-3xl lg:p-0 lg:rounded-full border border-hero_bg text-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-block px-4 py-2 rounded-full transition-colors text-sm xxxl:text-xl ${
                  activeTab === tab.id ? "bg-hero_bg text-white" : "text-white"
                } lg:px-10 lg:py-3`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Content Container */}
          <div className="lg:pl-6 lg:pr-6 rounded-lg text-white ">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
