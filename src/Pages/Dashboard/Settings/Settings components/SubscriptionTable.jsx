import React, {useState} from "react";
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
import CommissionsTable from "./CommisionsTable";

const SubscriptionTable = () => {
  // Simulated data
  const [accounts, setAccounts] = useState([
    {user: "@User1", status: "Active", plan: "Basic"},
    {user: "@User1", status: "Active", plan: "Premium"},
    {user: "@User1", status: "Active", plan: "Premium"},
    {user: "@User1", status: "Inactive", plan: "Enterprise"},
    {user: "@User1", status: "Active", plan: "Premium"},
  ]);

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTable, setActiveTable] = useState("subscriptions");

  // Pagination logic
  const totalPages = Math.ceil(accounts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPayments = accounts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  if (activeTable === "commissions") {
    return <CommissionsTable />;
  }

  return (
    <div className=" border border-white rounded-lg p-4 justify-between items-center space-y-4 md:space-y-0 w-full relative">
      {accounts.length === 0 ? (
        <div>
          <div className="flex justify-between items-center border-b border-dim pb-4 mb-4">
            <h3 className="text-text text-base font-bold">Commission</h3>
            <div className="text-xs flex gap-1 items-center">
              <button
                className={`${
                  activeTable
                    ? " bg-secondary text-white px-2 py-1 rounded"
                    : "text-dim"
                }`}
              >
                Commissions
              </button>
              <button
                className={`${
                  activeTable
                    ? " bg-secondary text-white px-2 py-1 rounded"
                    : "text-dim"
                }`}
              >
                Subscriptions
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center py-20">
            <p className="py-2 font-bold">No sign ups yet</p>
            <p className="text-xs pt-2">
              Send someone your link to get started
            </p>
          </div>
        </div>
      ) : (
        <div>
          {/* Table Header */}
          <div className="flex justify-between items-center border-b border-dim pb-4 mb-4">
            <h3 className="text-text text-base font-bold">Commission</h3>
            <div className="text-xs flex gap-1 items-center">
              {/* <button
                className="bg-secondary text-white px-2 py-1 rounded"
                onClick={() => setActiveTable("commissions")}
              >
                Commissions
              </button>
              <button
                className="text-dim"
                onClick={() => setActiveTable("subscriptions")}
              >
                Subscriptions
              </button> */}

              <button
                onClick={() => setActiveTable("commissions")}
                className={`${
                  activeTable === "commissions"
                    ? "bg-secondary text-white px-2 py-1 rounded"
                    : "text-dim"
                }`}
              >
                Commissions
              </button>
              <button
                onClick={() => setActiveTable("subscriptions")}
                className={`${
                  activeTable === "subscriptions"
                    ? "bg-secondary text-white px-2 py-1 rounded"
                    : "text-dim"
                }`}
              >
                Subscriptions
              </button>
            </div>
          </div>

          {/* Table Body */}
          <div className="overflow-x-auto pb-8">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-[#0C2640] text-white text-[13px] ">
                  <th className="p-2 text-left">Accounts Referred</th>
                  <th className="p-2 ">Status</th>
                  <th className="p-2">Plan</th>
                </tr>
              </thead>
              <tbody>
                {paginatedPayments.map((payment, index) => (
                  <tr key={index} className=" text-[13px] ">
                    <td className="p-2 text-left pl-2 ">{payment.user}</td>
                    <td className="p-2 ">{payment.status}</td>
                    <td className="p-2">{payment.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="flex justify-between items-center mt-4 absolute w-[90%] bottom-0 py-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">Showing</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border bg-transparent border-white rounded p-[2px] text-sm"
              >
                {[5, 10, 15].map((num) => (
                  <option
                    key={num}
                    value={num}
                    className="bg-setting_profile_bg text-sm"
                  >
                    {num}
                  </option>
                ))}
              </select>
              <span className="text-sm">of {accounts.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="p-1 bg-white rounded"
              >
                <RiArrowLeftSLine color="gray" />
              </button>
              {Array.from({length: totalPages}, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`p-1 rounded text-xs px-1 font-bold ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-400"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="p-1 bg-white rounded"
              >
                <RiArrowRightSLine color="gray" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionTable;
