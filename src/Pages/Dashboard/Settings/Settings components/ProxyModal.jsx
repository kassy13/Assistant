import React, {useState} from "react";
import {
  RiCloseFill,
  RiDeleteBinFill,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

const ProxyModal = ({isOpen, onClose}) => {
  const [protocol, setProtocol] = useState("HTTP");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isOpen) return null;

  const handleProtocolSelect = (option) => {
    setProtocol(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[99999999]">
      <div
        className="bg-[#091324] rounded-lg p-6 lg:p-10 lg:w-[60%] max-w-lg text-white relative border mt-12 overflow-visible w-full mx-4 lg:mx-0"
        style={{
          boxShadow: "0px 4px 20px #1D9BF026",
          paddingBottom: isDropdownOpen ? "4rem" : "2rem", // Add padding when dropdown is open
        }}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="text-white py-2 px-4 rounded hover:text-secondary"
          >
            <RiCloseFill size={24} />
          </button>
        </div>

        {/* Modal Header */}
        <h3 className="text-xl font-bold text-center pb-4">Proxy</h3>
        <p className="text-center text-text mb-6">Update proxy settings</p>

        {/* Form Section */}
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-4 gap-8">
            <label className="block mb-2 text-sm font-bold col-span-1">
              Host
            </label>
            <input
              type="text"
              className="w-full p-1 border rounded border-white bg-transparent col-span-3 pl-2"
            />
          </div>
          <div className="grid grid-cols-4 gap-8">
            <label className="block mb-2 text-sm font-bold col-span-1">
              Port
            </label>
            <input
              type="text"
              className="w-full p-1 border rounded border-text bg-transparent col-span-3 pl-2"
            />
          </div>
          <div className="grid grid-cols-4 gap-8">
            <label className="block mb-2 text-sm font-bold col-span-1">
              Username
            </label>
            <input
              type="text"
              className="w-full p-1 border rounded border-text bg-transparent col-span-3 pl-2"
            />
          </div>
          <div className="grid grid-cols-4 gap-8">
            <label className="block mb-2 text-sm font-bold col-span-1">
              Password
            </label>
            <input
              type="password"
              className="w-full p-1 border rounded border-text bg-transparent col-span-3 pl-2"
            />
          </div>
          <div className="grid grid-cols-4 gap-8">
            <label className="block mb-2 text-sm font-bold col-span-1">
              Protocol
            </label>
            {/* Custom Select */}
            <div className="relative col-span-3 pl-2 w-full">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-1 border rounded border-text bg-transparent cursor-pointer text-text flex justify-between items-center transition pl-2 "
              >
                {protocol}
                {isDropdownOpen ? (
                  <RiArrowUpSLine className="text-white" />
                ) : (
                  <RiArrowDownSLine className="text-white" />
                )}
              </div>
              {isDropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 bg-[#091324] border border-text rounded shadow-lg w-full z-50 text-xs">
                  {["HTTP", "HTTPS", "SOCKS4", "SOCKS5,"].map((option) => (
                    <li
                      key={option}
                      className="p-2 hover:bg-secondary hover:text-white cursor-pointer text-white text-sm "
                      onClick={() => handleProtocolSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </form>

        {/* Footer Section */}
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          <button
            type="button"
            className="bg-secondary text-white py-2 px-2 rounded w-full hover:bg-secondary-dark text-sm"
          >
            Update Proxy
          </button>
          <button
            type="button"
            className="bg-transparent border border-text text-white py-2 px-2 rounded w-full flex items-center justify-center gap-3 text-sm"
          >
            <RiDeleteBinFill /> Delete Proxy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProxyModal;
