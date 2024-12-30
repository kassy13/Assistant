import React, { useState } from "react";
import { Slider } from "@mui/material";
import { SiTicktick } from "react-icons/si";

const CustomPricing = () => {
  const [aiCredit, setAiCredit] = useState(50000);
  const [price, setPrice] = useState(299);

  const setValue = (e) => {
    setAiCredit(e.target.value * 100);
    setPrice(e.target.value);
  };

  // format number to display with commas
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="w-full flex flex-col mt-4 items-start bg-[#091324] p-6 rounded-lg">
      <p className="uppercase text-xs">Enterprise</p>
      <h3 className="font-semibold text-xl text-white py-2">${price}/mo</h3>
      <li className="flex items-center border-text border-b-[1px] py-3 text-xs w-full">
        <SiTicktick className="mr-1 text-xs" />
        Flexible payment starting from $299
      </li>
      <li className="flex items-center border-text border-b-[1px] py-3 text-xs w-full">
        <SiTicktick className="mr-1 text-xs" />
        Connect unlimited account
      </li>
      <li className="flex items-center border-text border-b-[1px] py-3 text-xs w-full">
        <SiTicktick className="mr-1 text-xs" />
        Private mentorship sector
      </li>
      <li className="flex items-center border-text border-b-[1px] py-3 text-xs w-full">
        <SiTicktick className="mr-1 text-xs" />
        Specialized converting text
      </li>
      <div className="p-4 bg-[#0E1A2C] rounded-lg w-full my-2">
        <h1 className="text-secondary font-semibold text-xl">
          {formatNumber(aiCredit)}{" "}
          <span className="text-sm text-text font-normal">
            AI Credits / month
          </span>
        </h1>
      </div>
      <Slider
        size="small"
        defaultValue={299}
        min={299}
        max={900}
        onChange={setValue}
        aria-label="Small"
        valueLabelDisplay={"auto"}
      />
      <button className="bg-text text-black font-semibold text-sm rounded-full px-6 py-1 mt-4 text-center hover:bg-opacity-80">
        Get started
      </button>
    </div>
  );
};

export default CustomPricing;
