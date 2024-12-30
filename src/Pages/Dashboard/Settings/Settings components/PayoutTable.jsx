import React, {useState} from "react";
import {
  RiArrowLeftLine,
  RiArrowLeftSLine,
  RiArrowRightLine,
  RiArrowRightSLine,
} from "react-icons/ri";

const PayoutTable = () => {
  const [payouts, setPayouts] = useState([
    {date: "October 24th 2024", amount: "$150", method: "PayPal"},
    {date: "October 23rd 2024", amount: "$220", method: "PayPal"},
    {date: "October 22nd 2024", amount: "$50", method: "PayPal"},
    {date: "October 21st 2024", amount: "$400", method: "PayPal"},
    {date: "October 20th 2024", amount: "$400", method: "PayPal"},
    {date: "October 24th 2024", amount: "$150", method: "PayPal"},
    {date: "October 23rd 2024", amount: "$220", method: "PayPal"},
    {date: "October 22nd 2024", amount: "$50", method: "PayPal"},
    {date: "October 21st 2024", amount: "$400", method: "PayPal"},
    {date: "October 20th 2024", amount: "$400", method: "PayPal"},
  ]);

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(payouts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPayouts = payouts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="border border-white rounded-lg p-4 space-y-4 w-full relative">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b border-dim pb-4 mb-4">
        <h3 className="text-base text-text font-bold">Payouts</h3>
        <div className="flex gap-4">
          <div className="text-center flex items-center gap-1">
            <p className="text-xs font-semibold ">Available</p>
            <p className="text-base font-bold text-text tracking-tighter">$0</p>
          </div>
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
            Request Payout
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto pb-8">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-[#0C2640] text-white text-[13px] ">
              <th className="p-2 text-left">Date Paid Out</th>
              <th className="p-2">Amount Paid</th>
              <th className="p-2">Paid Via</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPayouts.map((payout, index) => (
              <tr key={index} className="text-[13px]">
                <td className="p-1 text-left  pl-2">{payout.date}</td>
                <td className="p-2">{payout.amount}</td>
                <td className="p-2">{payout.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-4 absolute w-[90%] bottom-0 py-4 ">
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
          <span className="text-sm">of {payouts.length}</span>
        </div>

        <div className="flex items-center gap-2  ">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="p-1 bg-gray-200 rounded"
            disabled={currentPage === 1}
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
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="p-1 bg-gray-200 rounded"
            disabled={currentPage === totalPages}
          >
            <RiArrowRightSLine color="gray" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayoutTable;
