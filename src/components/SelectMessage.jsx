import React from "react";
import { IoMail } from "react-icons/io5";

const SelectMessage = () => {
  return (
    <div className="w-2/3 items-center justify-center hidden md:flex flex-col">
     <IoMail  className="text-4xl mr-1"/>
      <p className="">Click any message to open it</p>
    </div>
  );
};

export default SelectMessage;
