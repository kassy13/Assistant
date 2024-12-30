// import React, {useState} from "react";
// import ToolsPricing from "./ToolsPricing";
// import aiPost from "../../assets/images/guest img/icons/ai post icon.svg";
// import direct from "../../assets/images/guest img/icons/direct message.svg";
// import growth from "../../assets/images/guest img/icons/growth credit.svg";

// import {useState} from "react";

// const PerCredit = () => {
//   const creditOptions = {
//     aiPost: [
//       {credits: "25 Credits", price: "$4.99"},
//       {credits: "100 Credits", price: "$14.99"},
//       {credits: "250 Credits", price: "$1.99"},
//     ],
//   };

//   const [selectedCredits, setSelectedCredits] = useState({
//     aiPost: {value: null, price: 0},
//     // directMessages: {value: null, price: 0},
//     // leadGeneration: {value: null, price: 0},
//     // growthCredits: {value: null, price: 0},
//   });

//   return (
//     <div className="lg:px-8">
//       <div>
//         <h3 className="text-center py-2 text-3xl font-bold text-text">
//           Per Credit Packages
//         </h3>
//         <p className="text-center font-bold text-base ">
//           Personalize your experience with our flexible, per-credit packages.
//         </p>
//         <p className="text-center py-2 text-sm px-5">
//           Enhance your X account with exactly what you need without the monthly
//           subscription. Our per-credit options allow you to select and purchase
//           only what you want, ensuring you get maximum value with
//           tailored features.
//         </p>

//         <div className="p-2 border border-[#474646] bg-setting_profile_bg mb-7 rounded-lg shadow-lg lg:px-12 px-3 py-6 mt-8">
//           {/* Header */}
//           <div className="flex justify-between pb-3">
//             <div className="text-center lg:text-left font-bold text-lg">
//               Product
//             </div>
//             <div className="text-center lg:text-left font-bold text-lg">
//               Select amount
//             </div>
//             <div className="text-center font-bold text-lg">Price</div>
//           </div>

//           {/* Items */}
//           <div className="flex flex-col space-y-4 mt-4">
//             {/* Single Item */}
//             <div className="flex justify-between items-center lg:grid lg:grid-cols-3 lg:items-start">
//               <div className="text-center font-medium flex items-center gap-1">
//                 <img src={aiPost} alt="" className="w-5 h-5" />
//                 <p className="text-text">AI Posts Credit</p>
//         </div>
//         <div className="text-center">
//           <div className="relative">
//             {/* Custom Dropdown */}
//             <div className="dropdown">
//               <button className="border border-gray-300 bg-transparent rounded-md py-1 px-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 {selectedCredit || "Select amount"}
//               </button>
//               <div className="dropdown-menu absolute bg-white shadow-md rounded-md mt-1 w-full hidden">
//                 {creditOptions.aiPost.map((option, index) => (
//                   <div
//                     key={index}
//                     className="dropdown-item p-2 cursor-pointer hover:bg-gray-200"
//                     onClick={() => handleCreditChange(option.credits, option.price)}
//                   >
//                     {option.credits}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-center font-medium">{selectedPrice}</div>
//       </div>

//       {/* Other product items can be added similarly */}
//     </div>
//             </div>

//             {/* Single Item */}
//             <div className="flex justify-between items-center lg:grid lg:grid-cols-3">
//               <div className="text-center font-medium flex items-center gap-1 text-text">
//                 <img src={direct} alt="" className="w-5 h-5" />
//                 <p>Direct Messages Credits</p>
//               </div>
//               <div className="text-center">
//                 <div className="relative">
//                   <select className="border border-gray-300 bg-transparent rounded-md py-1 px-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
//                     <option value="">Select amount</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     {/* Add more options as necessary */}
//                   </select>
//                 </div>
//               </div>
//               <div className="text-center font-medium">$50.00</div>
//             </div>

//             {/* Single Item */}
//             <div className="flex justify-between items-center lg:grid lg:grid-cols-3">
//               <div className="text-center font-medium flex items-center gap-1 text-text">
//                 <img src={aiPost} alt="" className="w-5 h-5" />
//                 <p>Lead Generation Credits</p>
//               </div>
//               <div className="text-left ml-10">
//                 <div className="relative">
//                   <select className="border border-gray-300 bg-transparent rounded-md py-1 px-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
//                     <option value="">Select amount</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     {/* Add more options as necessary */}
//                   </select>
//                 </div>
//               </div>
//               <div className="text-center font-medium ml-30 lg:text-right">
//                 $75.00
//               </div>
//             </div>

//             {/* Single Item */}
//             <div className="flex justify-between items-center lg:grid lg:grid-cols-4">
//               <div className="text-center font-medium flex items-center gap-1 text-text">
//                 <img src={aiPost} alt="" className="w-5 h-5" />
//                 <p>Growth Credits Credits</p>
//               </div>
//               <div className="text-center flex justify-center w-full col-span-2 ml-10">
//                 <div className="relative">
//                   <select className="border border-gray-300 bg-transparent rounded-md py-1 px-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
//                     <option value="">Select amount</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     {/* Add more options as necessary */}
//                   </select>
//                 </div>
//               </div>
//               <div className="text-center font-medium lg:text-right">
//                 $75.00
//               </div>
//             </div>
//           </div>

//           {/* Total */}
//           <div className="flex justify-between items-center mt-5 lg:grid lg:grid-cols-3">
//             <div className="text-center lg:text-left font-medium">Total</div>
//             <div className="text-center lg:text-right font-medium lg:col-span-2">
//               $0.00
//             </div>
//           </div>

//           {/* Transaction Details */}
//           <div className="flex justify-between items-center mt-5">
//             <div className="text-center font-medium">
//               This transaction is a one-time fee
//             </div>
//             <div className="text-center font-light bg-secondary text-white rounded p-1 px-3">
//               Pay $0.00
//             </div>
//           </div>
//         </div>
//       </div>

//       <ToolsPricing />
//     </div>
//   );
// };

// export default PerCredit;

import React, {useState} from "react";
import ToolsPricing from "./ToolsPricing";
import aiPost from "../../assets/icons/SmartContentWhite.png";
import direct from "../../assets/icons/DMIconWhite.png";
import growth from "../../assets/icons/GrowthToolsWhite.png";
import CreditSelector from "./CreditSelector";
import last from "../../assets/icons/sidebar icons/User Id.svg";
import Button from "./Button";

const PerCredit = () => {
  const creditOptions = {
    aiPost: [
      // {credits: "0 Credits", price: "$0"},
      {credits: "25 Credits", price: "$4.99", rate: "$0.1996 Per Credit"},
      {credits: "100 Credits", price: "$14.99", rate: "$0.1499 Per Credit"},
      {credits: "250 Credits", price: "$19.99", rate: "$0.1199 Per Credit"},

      {credits: "500 Credits", price: "$49.99", rate: "$0.0999 Per Credit)"},
      {
        credits: "1,000 Credits",
        price: "$79.49",
        rate: "$0.0799 Per Credit",
      },
      {
        credits: "5,000 Credits",
        price: "$299.99",
        rate: "$0.0599 Per Credit",
      },

      {
        credits: "10,000 Credits",
        price: "$499.99",
        rate: "$0.0499 Per Credit",
      },
      {
        credits: "25,000 Credits",
        price: "$999.49",
        rate: "$0.0399 Per Credit",
      },
      {
        credits: "50,000 Credits",
        price: "$1,499.99",
        rate: "$0.0299 Per Credit",
      },

      {
        credits: "100,000 Credits ",
        price: "$2,499.99",
        rate: "$0.0249  Per Credit",
      },
    ],
    directMessages: [
      // {credits: "0 Credits", price: "$0"},
      {credits: "250 Credits", price: "$2.99", rate: "$0.0119 Per Credit"},
      {credits: "1000 Credits", price: "$9.99", rate: "$0.0099 Per Credit"},
      {credits: "2500 Credits", price: "$19.99", rate: "$0.0079 Per Credit"},
      {credits: "5,000 Credits", price: "$34.99", rate: "$0.0069 Per Credit"},
      {
        credits: "10,000 Credits",
        price: "$49.49",
        rate: "$0.0049 Per Credit",
      },
      {
        credits: "50,000 Credits",
        price: "$179.99",
        rate: "$0.0036 Per Credit",
      },
      {
        credits: "100,000 Credits",
        price: "$249.99",
        rate: "$0.0025 Per Credit",
      },
      {
        credits: "250,000 Credits",
        price: "$499.49",
        rate: "$0.0018 Per Credit",
      },
      {
        credits: "500,000 Credits",
        price: "$749.99",
        rate: "$0.0015 Per Credit",
      },
      {
        credits: "1,000,000 Credits",
        price: "$1,299.99",
        rate: "$0.0013 Per Credit",
      },
    ],
    leadGenerate: [
      // {credits: "0 Credits", price: "$0"},
      {credits: "250 Credits", price: "$1.99", rate: "$0.0079 Per Credit"},
      {credits: "1,000 Credits", price: "$5.99", rate: "$0.0059 Per Credit"},
      {credits: "2,500 Credits", price: "$14.99", rate: "$0.0048 Per Credit"},
      {credits: "5,000 Credits", price: "$19.99", rate: "$0.0039 Per Credit"},
      {credits: "10,000 Credits", price: "$29.49", rate: "$0.0029 Per Credit"},
      {
        credits: "50,000 Credits",
        price: "$119.99",
        rate: "$0.0023  Per Credit",
      },
      {
        credits: "100,000 Credits",
        price: "$149.99",
        rate: "$0.0014 Per Credit",
      },
      {
        credits: "250,000 Credits",
        price: "$299.49",
        rate: "$0.0011 Per Credit",
      },
      {
        credits: "500,000 Credits",
        price: "$499.99",
        rate: "$0.0009 Per Credit",
      },
      {
        credits: "1,000,000 Credits",
        price: "$799.99",
        rate: "$.0008 Per Credit",
      },
    ],
    growthTools: [
      // {credits: "select Credits", price: "$0"},
      {credits: "250 Credits", price: "$2.99", rate: "$0.0099 Per Credit"},
      {credits: "1,000 Credits", price: "$7.49", rate: "$0.0075 Per Credit"},
      {credits: "2,500 Credits", price: "$14.99", rate: "$0.0059 Per Credit"},
      {credits: "5,000 Credits", price: "$24.99", rate: "$0.0049 Per Credit"},
      {credits: "10,000 Credits", price: "$39.49", rate: "$0.0039 Per Credit"},
      {credits: "50,000 Credits", price: "$149.99", rate: "$0.0029 Per Credit"},
      {
        credits: "100,000 Credits",
        price: "$199.99",
        rate: "$0.0019 Per Credit",
      },
      {
        credits: "250,000 Credits",
        price: "$399.49",
        rate: "$0.0016 Per Credit",
      },
      {
        credits: "500,000 Credits",
        price: "$699.99",
        rate: "$0.0013 Per Credit",
      },
      {
        credits: "1,000,000  Credits",
        price: "$999.99",
        rate: "$0.0010 Per Credit",
      },
    ],
  };

  const [selectedCredits, setSelectedCredits] = useState({
    aiPost: {credits: null, price: "$0.00"},
    directMessages: {credits: null, price: "$0.00"},
    leadGenerate: {credits: null, price: "$0.00"},
    growthTools: {credits: null, price: "$0.00"},
  });

  const handleCreditChange = (product, value) => {
    const selectedOption = creditOptions[product].find(
      (option) => option.credits === value
    );
    setSelectedCredits({
      ...selectedCredits,
      [product]: selectedOption || {credits: null, price: "$0.00"},
    });
  };

  const calculateTotal = () => {
    const aiPostPrice =
      parseFloat(selectedCredits.aiPost.price.replace("$", "")) || 0;
    const directMessagesPrice =
      parseFloat(selectedCredits.directMessages.price.replace("$", "")) || 0;
    const leadGenerate =
      parseFloat(selectedCredits.leadGenerate.price.replace("$", "")) || 0;
    const growthTools =
      parseFloat(selectedCredits.growthTools.price.replace("$", "")) || 0;
    return aiPostPrice + directMessagesPrice + leadGenerate + growthTools;
  };
  console.log(selectedCredits);

  return (
    <div className="lg:px-20 ">
      <div className="xxxl:py-5 ">
        <h3 className="text-center py-2 text-[22px] lg:text-3xl xxxl:text-4xl font-bold text-text lg:pt-6">
          Per Credit Packages
        </h3>
        <p className="text-center lg:font-bold text-base xxxl:text-xl">
          Personalize your experience with our flexible, per-credit packages.
        </p>
        {/* <p className="text-center py-2 text-sm px-5">
          Enhance your X account with exactly what you need without the monthly
          subscription. Our per-credit options allow you to select and purchase
          only what you want, ensuring you get maximum value with tailored
          features.
        </p> */}

        <div className="p-2  border-[1.5px] border-text bg-setting_profile_bg lg:mb-7 rounded-lg shadow-lg lg:px-12 px-4 py-6 mb-12  mt-9 shadow-[0px_10px_30px_5px_#0653C099]">
          {/* Header */}
          <div className="flex justify-between pb-3">
            <div className="text-center lg:text-left font-bold lg:text-lg xxxl:text-[24px] text-sm ">
              Product
            </div>
            <div className="text-center lg:text-left font-bold lg:text-lg text-sm xxxl:text-[24px] lg:pl-24 xxl:pl-36">
              Select amount
            </div>
            <div className="text-center font-bold lg:text-lg xxxl:text-[24px] text-sm">
              Price
            </div>
          </div>

          {/* Items */}
          <div className="flex flex-col   lg:space-y-4 mt-4 gap-3 md:gap-1 ">
            {/* Single Item - AI Post */}
            {/* <div className="grid grid-cols-3 gap-1 lg:gap-0 lg:grid lg:grid-cols-3 lg:items-center">
              <div className="text-center font-medium flex items-center lg:gap-1">
                <img src={aiPost} alt="" className="w-5 h-5 bg-violet-100" />
                <p className="text-text lg:text-base text-xs ">
                  AI Posts Credit
                </p>
              </div>
              <div className="text-center">
                <CreditSelector
                  productKey="aiPost"
                  creditOptions={creditOptions}
                  selectedCredits={selectedCredits}
                  handleCreditChange={handleCreditChange}
                />
              </div>
              <div className="text-right font-medium">
                {selectedCredits.aiPost.price}
              </div>
            </div> */}
            <div className="grid grid-cols-[1.5fr_3fr_1fr] gap-2 items-center lg:grid-cols-[2fr_3fr_1fr] xxxl:grid-cols-[2fr_4.5fr_1fr]  ">
              <div className="lg:text-center font-medium flex flex-col lg:flex-row lg:items-center gap-1">
                <img src={aiPost} alt="AI Post Icon" className="w-5 h-5  " />
                <p className="text-text text-[13px]  lg:text-base xxxl:text-xl">
                  AI Smart Content Credits
                </p>
              </div>
              <div className="text-center">
                <CreditSelector
                  productKey="aiPost"
                  creditOptions={creditOptions}
                  selectedCredits={selectedCredits}
                  handleCreditChange={handleCreditChange}
                  className="min-w-[100px] lg:min-w-full  w-full text-sm xxxl:text-xl text-nowrap "
                />
              </div>
              <div className="text-right xxxl:text-xl font-medium">
                {selectedCredits.aiPost.price}
              </div>
            </div>

            {/* Single Item - Direct Messages */}
            <div className="grid grid-cols-[1.5fr_3fr_1fr] gap-2 items-center lg:grid-cols-[2fr_3fr_1fr] xxxl:grid-cols-[2fr_4.5fr_1fr] ">
              <div className="lg:text-center font-medium flex flex-col lg:flex-row lg:items-center gap-1">
                <img src={direct} alt="" className="w-5 h-5" />
                <p className="text-text text-[12.5px] lg:text-base xxxl:text-xl">
                  DM Automation Credits
                </p>
              </div>
              <div className="text-center">
                <CreditSelector
                  productKey="directMessages"
                  creditOptions={creditOptions}
                  selectedCredits={selectedCredits}
                  handleCreditChange={handleCreditChange}
                />
              </div>
              <div className="text-right xxxl:text-xl font-medium">
                {selectedCredits.directMessages.price}
              </div>
            </div>
            {/* SIngles */}

            <div className="grid grid-cols-[1.5fr_3fr_1fr] gap-2 items-center lg:grid-cols-[2fr_3fr_1fr] xxxl:grid-cols-[2fr_4.5fr_1fr] ">
              <div className="lg:text-center font-medium flex flex-col lg:flex-row lg:items-center gap-1">
                <img src={last} alt="" className="w-5 h-5" />
                <p className="text-text text-[12.5px] lg:text-base xxxl:text-xl">
                  Lead Generation Credits
                </p>
              </div>
              <div className="text-center">
                <CreditSelector
                  productKey="leadGenerate" // Correctly references "leadGenerate"
                  creditOptions={creditOptions}
                  selectedCredits={selectedCredits}
                  handleCreditChange={handleCreditChange}
                />
              </div>
              <div className="text-right xxxl:text-xl font-medium ">
                {selectedCredits.leadGenerate.price}
              </div>
            </div>

            {/* Single */}

            <div className="grid grid-cols-[1.5fr_3fr_1fr] gap-2 items-center lg:grid-cols-[2fr_3fr_1fr] xxxl:grid-cols-[2fr_4.5fr_1fr] ">
              <div className="lg:text-center font-medium flex flex-col lg:flex-row lg:items-center gap-1">
                <img src={growth} alt="" className="w-5 h-5" />
                <p className="text-text text-[12.5px] lg:text-base xxxl:text-xl">
                  Growth Tool Credits
                </p>
              </div>
              <div className="text-center">
                <CreditSelector
                  productKey="growthTools" // Correctly references "growthTools"
                  creditOptions={creditOptions}
                  selectedCredits={selectedCredits}
                  handleCreditChange={handleCreditChange}
                />
              </div>
              <div className="text-right xxxl:text-xl font-medium">
                {selectedCredits.growthTools.price}
              </div>
            </div>

            {/* Total */}
          </div>
          <div className="flex justify-between items-center gap-3 flex-col lg:flex-row mt-4 lg:mt-10 lg:grid lg:grid-cols-[2fr_3fr_1fr]">
            <div className="text-left lg:text-left xxxl:text-2xl font-medium w-full ">
              Total
            </div>

            <div className="lg:text-center font-medium w-full ">
              <p className="text-[13px] lg:text-sm xxxl:text-xl lg:text-nowrap font-extrabold lg:font-bold">
                This transaction is a one-time fee
              </p>
            </div>
            <div className="lg:text-center font-light flex lg:justify-end   text-white   cursor-pointer w-full lg:ml-4">
              {/* <button className="bg-secondary p-1 px-3 rounded font-bol">
                Pay ${calculateTotal().toFixed(2)}
              </button> */}
              <Button text={`Pay $ ${calculateTotal().toFixed(2)}`} />
            </div>
          </div>

          {/* Transaction Details */}
          {/* <div className="flex flex-col lg:flex-row justify-between items-center  mt-12">
            <div className="text-center font-medium">
              This transaction is a one-time fee
            </div>
            <div className="text-center font-light bg-secondary text-white rounded p-1 px-3 cursor-pointer">
              Pay ${calculateTotal().toFixed(2)}
            </div>
          </div> */}
        </div>

        <ToolsPricing />
      </div>
    </div>
  );
};

export default PerCredit;
