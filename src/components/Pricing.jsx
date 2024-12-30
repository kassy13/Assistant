import React, { useContext, useEffect, useRef, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { ScrollContexts } from "../store/ScrollContext";
import useFunctionStore from "../store/FunctionStore";
import loader from "../assets/Spinner.svg";
import { FaArrowDownLong, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useAuthStore } from "../AuthStore/GlobalStates";

const Pricing = ({ py }) => {
  const [isMonthly, setisMonthly] = useState(true);
  const [plans, setPlans] = useState([]);
  const [showPlan, setShowPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const { pricingRef } = useContext(ScrollContexts);
  const {token} = useAuthStore() 
  const { subscribe } = useFunctionStore();

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

  const filteredPlans = isMonthly
    ? plans.filter((plan) => plan.is_monthly)
    : plans.filter((plan) => !plan.is_monthly);

  const duration = isMonthly ? "mo" : "yr";
  console.log(filteredPlans);

  // format number to display with commas
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const leadPriceArray = [
    { numofleads: "25000", price: "$149" },
    { numofleads: "50000", price: "$199" },
    { numofleads: "75000", price: "$249" },
    { numofleads: "100000", price: "$299" },
    { numofleads: "125000", price: "$349" },
    { numofleads: "150000", price: "$399" },
    { numofleads: "175000", price: "$449" },
    { numofleads: "200000", price: "$499" },
    { numofleads: "225000", price: "$549" },
    { numofleads: "250000", price: "$599" },
    { numofleads: "275000", price: "$649" },
    { numofleads: "300000", price: "$699" },
    { numofleads: "325000", price: "$749" },
    { numofleads: "350000", price: "$799" },
    { numofleads: "375000", price: "$849" },
    { numofleads: "400000", price: "$899" },
    { numofleads: "425000", price: "$949" },
    { numofleads: "450000", price: "$999" },
  ];
  const elementRef = useRef(null);
  const handleClickOutside = (event) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setShowPlan(false);
    }
  };

  return (
    <div
      className={`container text-text overflow-hidden flex flex-col items-center ${py}`}
      ref={pricingRef}
      onClick={handleClickOutside}
    >
      <div className="text-xs bg-secondary px-5 py-1 rounded-full unselectable">Pricing</div>
      <h1 className="font-semibold text-3xl my-4 leading-snug text-center">
        Discover Your Perfect Plan
      </h1>
      <div className="text-white flex justify-center my-4 items-center border-text p-[2px] border-[2px] overflow-hidden rounded-full">
        <p
          onClick={() => setisMonthly(true)}
          className={`${
            isMonthly
              ? "bg-text text-primary rounded-full"
              : "bg-primary text-text"
          } px-6 p-2 text-sm font-semibold cursor-pointer`}
        >
          Monthly
        </p>
        <p
          onClick={() => setisMonthly(false)}
          className={`${
            !isMonthly
              ? "bg-text text-primary rounded-full"
              : "bg-primary text-text"
          } px-3 p-2 text-sm font-semibold cursor-pointer`}
        >
          Yearly Deal (20% off)
        </p>
      </div>
      {plans.length > 0 && (
        <>
          <div className="bg-text rounded-full p-2 px-4 text-primary my-4 mb-2 text-xs font-semibold">
            <p className="hidden md:block">74% prefer this plan</p>
            <p className="block md:hidden">74% prefer the premium plan</p>
          </div>
          <FaArrowDownLong className="hidden md:block" />
        </>
      )}
      <div
        className={`flex flex-col w-full justify-center ${
          isMonthly ? "slide-in-left" : "slide-in-right"
        } md:flex-row`}
      >
        {filteredPlans.map((plan) => (
          <div key={plan.id} className="flex justify-center">
            {(plan.id === 1 || plan.id === 4) && (
              <div className="flex flex-col max-h-[380px] w-[280px] h-full  bg-[#061227] p-4 rounded-2xl m-2 mx-4 border-box border-text border-[2px]">
                <p className="uppercase text-xs bg-secondary rounded-full px-4 font-medium py-1 mr-auto">
                  Basic Plan
                </p>
                <h3 className="font-semibold text-xl text-white py-2">
                  ${plan.price}/{duration}
                </h3>
                <p className="text-text font-medium text-[12px] my-1">
                  Perfect For Trying Out NetworkX
                </p>
                <ul className="flex flex-col justify-center mb-2">
                  <li className="flex items-start py-3 text-xs">
                    <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                    <p className="border-b-[1px] border-text w-full pb-2">
                      Video Tutorials account
                    </p>
                  </li>
                  <li className="flex items-start py-3 text-xs">
                    <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                    <p className="border-b-[1px] border-text w-full pb-2">
                      Connect 1 Account
                    </p>
                  </li>
                  <li className="flex items-start py-3 text-xs">
                    <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                    <p className="border-b-[1px] border-text w-full pb-2">
                      5,000 Leads
                    </p>
                  </li>
                  <li className="flex items-start py-3 text-xs">
                    <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                    <p className="border-b-[1px] border-text w-full pb-2">
                      Randomized Text
                    </p>
                  </li>
                </ul>
                <button
                  onClick={() => subscribe(plan.id)}
                  className="bg-secondary text-text font-semibold text-xs rounded-full px-4 py-1 text-center w-[80%] mb-3 mx-auto mt-auto hover:bg-opacity-80"
                >
                  Start Your Free Trial
                </button>
              </div>
            )}

            {(plan.id === 2 || plan.id === 5) && (
              <>
                <div className="flex flex-col max-h-[480px] w-[280px] h-full bg-[#3f8fff21] p-4 rounded-2xl m-2 mx-4 border-box border-secondary border-[2px]">
                  <p className="uppercase text-xs bg-secondary rounded-full px-4 font-medium py-1 mr-auto">
                    premium plan
                  </p>
                  <h3 className="font-semibold text-xl text-white py-2">
                    ${plan.price}/{duration}
                  </h3>
                  <p className="text-text font-medium text-[12px] my-1">
                    Perfect For Growing Accounts
                  </p>
                  <ul className="flex flex-col justify-center mb-2">
                    <li className="flex items-start py-3 text-xs">
                      <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                      <p className="border-b-[1px] border-text w-full pb-2">
                        Everything From The Basic Plan Plus
                      </p>
                    </li>
                    <li className="flex items-start py-3 text-xs">
                      <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                      <p className="border-b-[1px] border-text w-full pb-2">
                        Connect 5 Accounts
                      </p>
                    </li>
                    <li className="flex items-start py-3 text-xs">
                      <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                      <p className="border-b-[1px] border-text w-full pb-2">
                        15,000 Leads
                      </p>
                    </li>
                    <li className="flex items-start py-3 text-xs">
                      <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                      <p className="border-b-[1px] border-text w-full pb-2">
                        A/B Testing{" "}
                      </p>
                    </li>
                    <li className="flex items-start py-3 text-xs">
                      <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                      <p className="border-b-[1px] border-text w-full pb-2">
                        High Converting DM Copies
                      </p>
                    </li>
                  </ul>
                  <button
                    onClick={() => subscribe(plan.id)}
                    className="bg-secondary text-text font-semibold text-xs rounded-full px-4 py-1 text-center w-[80%] mb-4 mx-auto mt-auto hover:bg-opacity-80"
                  >
                    Start Your Free Trial
                  </button>
                </div>
              </>
            )}

            {(plan.id === 3 || plan.id === 6) && (
              <div className="flex flex-col max-h-[380px] w-[280px] h-full  bg-[#061227] p-4 rounded-2xl m-2 mx-4 border-box border-text border-[2px]">
                <p className="uppercase text-xs bg-secondary rounded-full px-4 font-medium py-1 mr-auto">
                  enterprise plan
                </p>
                {/* <h3 className="font-semibold text-xl text-white py-2">
                  ${plan.price}/{duration}
                </h3> */}
                <div className="flex relative items-center my-2 mt-3 justify-between text-xs p-1 rounded border-text border-[1px]">
                  <div
                    onClick={() => setShowPlan((prevShowPlan) => !prevShowPlan)}
                    className="flex cursor-pointer items-center px-1 justify-between w-full hover:opacity-50"
                  >
                    <p>
                      {selectedPlan
                        ? `${formatNumber(selectedPlan.numofleads)} leads for ${
                            selectedPlan.price
                          }`
                        : "Select Amount of Leads"}
                    </p>
                    {showPlan ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {showPlan && (
                    <ul
                      ref={elementRef}
                      className="bg-white rounded-b pricing-bar text-black p-2 overflow-y-scroll h-[200px] w-full absolute top-[25px] left-0"
                    >
                      {leadPriceArray.map((price) => (
                        <li
                          onClick={() => {
                            setSelectedPlan(price), setShowPlan(false);
                          }}
                          className="bg-[#d3d3d32e] cursor-pointer flex items-center justify-between rounded p-1 my-1 hover:opacity-75"
                        >
                          <p>{price.numofleads} Leads</p> - <p>{price.price}</p>
                        </li>
                      ))}
                      <li className="bg-[#d3d3d32e] flex items-center justify-between rounded p-1 my-1">
                        450001+ Leads Book a call for a custom deal
                      </li>
                    </ul>
                  )}
                </div>
                <p className="text-text font-medium text-[12px] my-1">
                  Perfect For Scaling Up Businesses
                </p>
                <ul className="flex flex-col justify-center mb-2">
                  <li className="flex items-start py-3 text-xs">
                    <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                    <p className="border-b-[1px] border-text w-full pb-2">
                      Everything From The Premium Plan Plus
                    </p>
                  </li>
                  <li className="flex items-start py-3 text-xs">
                    <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                    <p className="border-b-[1px] border-text w-full pb-2">
                      Connect Unlimited Accounts
                    </p>
                  </li>
                  <li className="flex items-start py-3 text-xs">
                    <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                    <p className="border-b-[1px] border-text w-full pb-2">
                      Private Coaching
                    </p>
                  </li>
                  <li className="flex items-start py-3 text-xs">
                    <SiTicktick className="mr-1 mt-[2px] text-xs" />{" "}
                    <p className="border-b-[1px] border-text w-full pb-2">
                      White Label Agency Guide
                    </p>
                  </li>
                </ul>
                <button
                  onClick={() => subscribe(plan.id)}
                  className="bg-secondary text-text font-semibold text-xs rounded-full px-4 py-1 text-center w-[80%] mb-3 mx-auto mt-auto hover:bg-opacity-80"
                >
                  Start Your Free Trial
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      {plans.length < 1 && <img src={loader} className="w-[50px]" />}
      {/* <CustomPricing /> */}
    </div>
  );
};

export default Pricing;
