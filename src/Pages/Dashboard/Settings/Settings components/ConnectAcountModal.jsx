import React from "react";
import {RiCloseLine, RiTwitterXFill} from "react-icons/ri";

const ConnectAccountModal = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-md bg-opacity-85 z-[9999999]">
      <div className="bg-[#021028] shadow-lg rounded-lg p-6 mx-4 lg:px-10 lg:py-8  w-[100%] max-w-lg  text-white relative border">
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-white text-lg hover:text-secondary"
        >
          <RiCloseLine size={24} />
        </button>
        <h3 className="text-xl text-center font-bold mb-2">Add Account</h3>
        <div className="mb-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your X username or email address…"
            className="border p-2 rounded-lg w-full bg-transparent text-sm lg:text-base"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your X password…"
            className="border  p-2 rounded-lg w-full bg-transparent text-sm lg:text-base"
          />
        </div>
        <button
          onClick={onClose}
          className=" text-white text-sm rounded-md bg-secondary p-2 px-4 hover:bg-opacity-85"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ConnectAccountModal;
