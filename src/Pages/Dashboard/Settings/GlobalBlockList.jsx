import React, {useState} from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLine,
  RiDeleteBinFill,
  RiSearch2Fill,
  RiSearchFill,
} from "react-icons/ri";

const GlobalBlockList = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    {
      username: "@sarah1234",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@touchyfeels",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@kassy13",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@sommy",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@touchyfeels2",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@kingston",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@sarah1234",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@touchyfeels",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@kassy13",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@sommy",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@touchyfeels2",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@kingston",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@sarah1234",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@touchyfeels",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@kassy13",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@sommy",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@touchyfeels2",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@kingston",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@sarah1234",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@touchyfeels",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@kassy13",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@sommy",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@touchyfeels2",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
    {
      username: "@kingston",
      source: "Manual",
      createdAt: "Oct 09, 2024, 2:35 PM",
    },
  ];

  // Search filter based on the first letters of the username
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const toggleSelectUser = (username) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(username)
        ? prevSelected.filter((user) => user !== username)
        : [...prevSelected, username]
    );
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage > 2) pageNumbers.push("...");
      for (
        let i = Math.max(1, currentPage - 1);
        i <= Math.min(totalPages, currentPage + 1);
        i++
      ) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 1) pageNumbers.push("...");
    }
    return pageNumbers;
  };

  const addToBlockList = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="hidden lg:block lg:px-8 py-4 text-white lg:min-h-[50vh]  overflow-scroll scrollbar-hide lg:pb-20 md:w-full mt-6 md:mt-0">
        <div className="border border-white rounded-lg bg-setting_profile_bg lg:p-5">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 pt-4 lg:pt-0 w-full">
            <h2 className="text-xl font-bold mb-4 md:mb-0">
              Global Block List
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Block List"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-3 pl-9 lg:w-60 w-full md:w-full rounded-lg bg-transparent border border-gray-500 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <RiSearchFill
                  size={18}
                  className="absolute top-[13px] left-2"
                />
              </div>
              <div className="flex items-center justify-between w-full gap-3">
                <button
                  onClick={addToBlockList}
                  className="bg-secondary text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none lg:w-auto w-full text-nowrap"
                >
                  Add To Block List
                </button>
                <div className="lg:hidden">
                  <RiDeleteBinFill size={20} />
                </div>
              </div>
              <div>
                <RiDeleteBinFill size={20} className="hidden lg:block" />
              </div>
            </div>
          </div>
          <div className="border lg:p-8 rounded-lg">
            <table className="w-full text-sm border-separate border-spacing-y-2 lg:min-w-[700px]">
              <thead>
                <tr className="bg-[#D9D9D900] border rounded-lg grid grid-cols-4 lg:gap-6 w-full lg:text-center text-left">
                  <th className="p-4 text-left rounded-lg ">Select</th>

                  <th className="p-4 text-left rounded-lg">Username</th>
                  <th className="p-4 text-left rounded-lg">Source</th>
                  <th className="p-4 text-left rounded-lg">Created At</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.length === 0 ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="text-center py-4 text-gray-500 w-full grid grid-cols-8 text-nowrap"
                    >
                      No results found
                    </td>
                  </tr>
                ) : (
                  paginatedUsers.map((user, index) => (
                    <tr
                      key={index}
                      className={`rounded-lg shadow-lg bg-[#D9D9D900] border border-white mb-3 hover:border-blue-500 w-full grid grid-cols-4 gap-6`}
                      onClick={() => toggleSelectUser(user.username)}
                    >
                      <td className="p-4">
                        <label>
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={selectedUsers.includes(user.username)}
                            onChange={() => toggleSelectUser(user.username)}
                          />
                          <span
                            className={`w-4 h-4 border-2 rounded flex items-center justify-center cursor-pointer ${
                              selectedUsers.includes(user.username)
                                ? "border-blue-500 bg-blue-500"
                                : "bg-transparent border-gray-500"
                            }`}
                          >
                            {selectedUsers.includes(user.username) && (
                              <span className="text-white">✔</span>
                            )}
                          </span>
                        </label>
                      </td>
                      <td className="p-4">{user.username}</td>
                      <td className="p-4">{user.source}</td>
                      <td className="p-4">{user.createdAt}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            <div className="flex justify-between items-center mt-6">
              <p>{selectedUsers.length} Users selected</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="bg-text text-gray-600 px-2 py-2 rounded-md hover:bg-opacity-80"
                >
                  <RiArrowLeftSLine />
                </button>
                {/* <span className="text-xs bg-secondary text-white p-1 rounded-sm">
                {currentPage}
              </span> */}
                {generatePageNumbers().map((num, idx) => (
                  <button
                    key={idx}
                    onClick={() => num !== "..." && setCurrentPage(num)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === num
                        ? "bg-blue-500 text-white"
                        : " text-gray-500 hover:bg-text"
                    }`}
                    disabled={num === "..."}
                  >
                    {num}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className="bg-text text-gray-600 px-2 py-2 rounded-md hover:bg-opacity-80"
                >
                  <RiArrowRightSLine />
                </button>
              </div>

              <div className="flex gap-1 items-center">
                <p className="text-sm">Showing</p>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="bg-setting_profile_bg border border-gray-500 text-white rounded-lg px-4 py-2 focus:outline-none text-sm pr-2"
                >
                  <option value={5} className="bg-transparent ">
                    5
                  </option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
                <p className="text-sm">Out of {users.length}</p>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-70 z-[99999999] h-screen flex items-center justify-center text-xs md:text-base lg:pt-10 ">
                <div className="bg-setting_profile_bg border border-white p-6 rounded-lg max-w-lg w-full text-text">
                  <div className="flex justify-between items-center">
                    <h3 className=" font-semibold mb-4 text-xl">
                      Add An Account To The Block List
                    </h3>
                    <button
                      onClick={closeModal}
                      className=" text-white rounded-sm pb-4"
                    >
                      <RiCloseLine size={22} />
                    </button>
                  </div>
                  <div className="p-4 border border-text rounded-lg text-text text-sm mb-3">
                    <p className="mb-2  ">
                      Warning: This will block any lead matching the username
                      across all accounts and campaigns.
                    </p>
                    <p className=" ">
                      For current clients, select "Block Client Account" to
                      avoid contacting existing clients.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3">Block account</h3>
                    <input
                      type="text"
                      placeholder="Type account’s username here..."
                      className="bg-transparent text-white p-3 w-full rounded-lg border border-text text-sm"
                    />
                  </div>
                  <div className="pt-3">
                    <p className="text-sm">Block Client Account</p>
                    <div className="pt-2 flex items-center gap-1">
                      {/* <input
                      type="checkbox"
                      name=""
                      id="block"
                      className="bg-setting_profile_bg"
                    /> */}
                      <input
                        type="checkbox"
                        name=""
                        id="block"
                        className="bg-transparent border-2 rounded cursor-pointer "
                      />

                      <label htmlFor="block" className="font-light">
                        Block account due to it being a client
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6 justify-between">
                    <button
                      onClick={closeModal}
                      className="bg-secondary text-text font-bold py-2 px-5 rounded-md w-full text-center"
                    >
                      Block Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="lg:hidden lg:px-8 py-4 text-white lg:min-h-[50vh] overflow-hidden scrollbar-hide lg:pb-20 md:w-full mt-6 md:mt-0">
        <div className="border border-white rounded-lg bg-setting_profile_bg lg:p-5">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 pt-4 lg:pt-0 w-full">
            <h2 className="text-xl font-bold mb-4 md:mb-0">
              Global Block List
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Block List"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-3 pl-9 lg:w-60 w-full md:w-full rounded-lg bg-transparent border border-gray-500 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <RiSearchFill
                  size={18}
                  className="absolute top-[13px] left-2"
                />
              </div>
              <div className="flex items-center justify-between w-full gap-3">
                <button
                  onClick={addToBlockList}
                  className="bg-secondary text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none lg:w-auto w-full text-nowrap"
                >
                  Add To Block List
                </button>
                <div className="lg:hidden">
                  <RiDeleteBinFill size={20} />
                </div>
              </div>
              <div>
                <RiDeleteBinFill size={20} className="hidden lg:block" />
              </div>
            </div>
          </div>
          <div className="border lg:p-8 rounded-lg">
            <div className="overflow-hidden">
              <table className="w-full text-sm lg:min-w-[700px]">
                <thead>
                  <tr
                    className="bg-[#D9D9D900] border rounded-lg grid w-full text-left lg:text-center"
                    style={{
                      gridTemplateColumns: "1fr 2fr 2fr 2fr", // Default (mobile) widths
                    }}
                    lg:style={{
                      gridTemplateColumns: "1fr 3fr 3fr 3fr", // Larger widths for laptops
                    }}
                  >
                    <th className="p-2 text-left rounded-lg">Select</th>
                    <th className="p-2 text-left rounded-lg">Username</th>
                    <th className="p-2 text-left rounded-lg">Source</th>
                    <th className="p-2 text-left rounded-lg">Created At</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedUsers.length === 0 ? (
                    <tr>
                      <td
                        colSpan="8"
                        className="text-center py-4 text-gray-500 w-full text-nowrap"
                      >
                        No results found
                      </td>
                    </tr>
                  ) : (
                    paginatedUsers.map((user, index) => (
                      <tr
                        key={index}
                        // className={`rounded-lg shadow-lg bg-[#D9D9D900] border border-white mb-3 hover:border-blue-500 w-full grid grid-cols-4`}
                        onClick={() => toggleSelectUser(user.username)}
                        className="bg-[#D9D9D900] border rounded-lg grid w-full text-left lg:text-center"
                        style={{
                          gridTemplateColumns: "1fr 2fr 2fr 2fr", // Default (mobile) widths
                        }}
                        lg:style={{
                          gridTemplateColumns: "1fr 3fr 3fr 3fr", // Larger widths for laptops
                        }}
                      >
                        <td className="p-2 lg:p-4 text-center">
                          <label>
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={selectedUsers.includes(user.username)}
                              onChange={() => toggleSelectUser(user.username)}
                            />
                            <span
                              className={`w-4 h-4 border-2 rounded flex items-center justify-center cursor-pointer ${
                                selectedUsers.includes(user.username)
                                  ? "border-blue-500 bg-blue-500"
                                  : "bg-transparent border-gray-500"
                              }`}
                            >
                              {selectedUsers.includes(user.username) && (
                                <span className="text-white">✔</span>
                              )}
                            </span>
                          </label>
                        </td>
                        <td className="p-2 lg:p-4">{user.username}</td>
                        <td className="p-2 lg:p-4">{user.source}</td>
                        <td className="p-2 lg:p-4">{user.createdAt}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-6">
              <p>{selectedUsers.length} Users selected</p>

              <div className="flex gap-1 items-center">
                <p className="text-sm">Showing</p>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="bg-setting_profile_bg border border-gray-500 text-white rounded-lg px-4 py-2 focus:outline-none text-sm pr-2"
                >
                  <option value={5} className="bg-transparent ">
                    5
                  </option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
                <p className="text-sm">Out of {users.length}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-fulll justify-center py-3">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="bg-text text-gray-600 px-2 py-2 rounded-md hover:bg-opacity-80"
              >
                <RiArrowLeftSLine />
              </button>
              {generatePageNumbers().map((num, idx) => (
                <button
                  key={idx}
                  onClick={() => num !== "..." && setCurrentPage(num)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === num
                      ? "bg-blue-500 text-white"
                      : " text-gray-500 hover:bg-text"
                  }`}
                  disabled={num === "..."}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="bg-text text-gray-600 px-2 py-2 rounded-md hover:bg-opacity-80"
              >
                <RiArrowRightSLine />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalBlockList;
