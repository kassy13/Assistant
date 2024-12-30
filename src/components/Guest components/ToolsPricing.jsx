import React from "react";

const ToolsPricing = () => {
  // Example data for columns
  const data = [
    {
      header: "AI Posts Credits",
      rows: [
        {
          subHeading: "Light Usage",
          items: [
            {credits: "25 Credits", price: "$4.99", rate: "($0.1996/Credit)"},
            {credits: "100 Credits", price: "$14.99", rate: "($0.1499/Credit)"},
            {credits: "250 Credits", price: "$24.99", rate: "($0.1199/Credit)"},
          ],
        },
        {
          subHeading: "Average Usage",
          items: [
            {credits: "500 Credits", price: "$49.99", rate: "($0.0999/credit)"},
            {
              credits: "1,000 Credits",
              price: "$79.49",
              rate: "($0.0799/credit)",
            },
            {
              credits: "5,000 Credits",
              price: "$299.99",
              rate: "($0.0599/credit)",
            },
          ],
        },
        {
          subHeading: "Heavy Usage",
          items: [
            {
              credits: "10,000 Credits",
              price: "$499.99",
              rate: "($0.0499/credit)",
            },
            {
              credits: "25,000 Credits",
              price: "$999.49",
              rate: "($0.0399/credit)",
            },
            {
              credits: "50,000 Credits",
              price: "$1,499.99",
              rate: "($0.0299/credit)",
            },
          ],
        },
        {
          subHeading: "Enterprise Usage",
          items: [
            {
              credits: "100,000 Credits ",
              price: "$2,499.99",
              rate: "($0.0249/credit)",
            },
          ],
        },
      ],
    },
    {
      header: "DM Automation Credits",
      rows: [
        {
          subHeading: "Light Usage",
          items: [
            {credits: "250 Credits", price: "$2.99", rate: "($0.0119/credit)"},
            {
              credits: "1,000 Credits",
              price: "$9.99",
              rate: "($0.0099/credit)",
            },
            {
              credits: "2,500 Credits",
              price: "$19.99",
              rate: "($0.0079/credit)",
            },
          ],
        },
        {
          subHeading: "Average Usage",
          items: [
            {
              credits: "5,000 Credits",
              price: "$34.99",
              rate: "($0.0069/credit)",
            },
            {
              credits: "10,000 Credits",
              price: "$49.49",
              rate: "($0.0049/credit)",
            },
            {
              credits: "50,000 Credits",
              price: "$179.99",
              rate: "($0.0036/credit)",
            },
          ],
        },
        {
          subHeading: "Heavy Usage",
          items: [
            {
              credits: "100,000 Credits",
              price: "$249.99",
              rate: "($0.0025/credit)",
            },
            {
              credits: "250,000 Credits",
              price: "$499.49",
              rate: "($0.0018/credit)",
            },
            {
              credits: "500,000 Credits",
              price: "$749.99",
              rate: "($0.0015/credit)",
            },
          ],
        },
        {
          subHeading: "Enterprise Usage",
          items: [
            {
              credits: "1,000,000 Credits",
              price: "$1,299.99",
              rate: "($0.0013/Credit)",
            },
          ],
        },
      ],
    },
    {
      header: "Growth Tools Credits",
      rows: [
        {
          subHeading: "Light Usage",
          items: [
            {credits: "250 Credits", price: "$2.99", rate: "($0.0099/credit)"},
            {
              credits: "1,000 Credits",
              price: "$7.49",
              rate: "($0.0075/credit)",
            },
            {
              credits: "2,500 Credits",
              price: "$14.99",
              rate: "($0.0059/credit)",
            },
          ],
        },
        {
          subHeading: "Average Usage",
          items: [
            {
              credits: "5,000 Credits",
              price: "$24.99",
              rate: "($0.0049/credit)",
            },
            {
              credits: "10,000 Credits",
              price: "$39.49",
              rate: "($0.0039/credit)",
            },
            {
              credits: "50,000 Credits",
              price: "$149.99",
              rate: "($0.0029/credit)",
            },
          ],
        },
        {
          subHeading: "Heavy Usage",
          items: [
            {
              credits: "100,000 Credits",
              price: "$199.99",
              rate: "($0.0019/credit)",
            },
            {
              credits: "250,000 Credits",
              price: "$399.49",
              rate: "($0.0016/credit)",
            },
            {
              credits: "500,000 Credits",
              price: "$699.99",
              rate: "($0.0013/credit)",
            },
          ],
        },
        {
          subHeading: "Enterprise Usage",
          items: [
            {
              credits: "1,000,000  Credits",
              price: "$999.99",
              rate: "($0.0010/credit)",
            },
          ],
        },
      ],
    },
    {
      header: "Lead Scraping Credits",
      rows: [
        {
          subHeading: "Light Usage",
          items: [
            {credits: "250 Credits", price: "$1.99", rate: "($0.0079/credit)"},
            {
              credits: "1,000 Credits",
              price: "$5.99",
              rate: "($0.0059/credit)",
            },
            {
              credits: "2,500 Credits",
              price: "$14.99",
              rate: "($0.0059/credit)",
            },
          ],
        },
        {
          subHeading: "Average Usage",
          items: [
            {
              credits: "5,000 Credits",
              price: "$19.99",
              rate: "($0.0039/credit)",
            },
            {
              credits: "10,000 Credits",
              price: "$29.49",
              rate: "($0.0023/credit)",
            },
            {
              credits: "50,000 Credits",
              price: "$119.99",
              rate: "($0.0059/credit)",
            },
          ],
        },
        {
          subHeading: "Heavy Usage",
          items: [
            {
              credits: "100,000 Credits",
              price: "$149.99",
              rate: "($0.0014/credit)",
            },
            {
              credits: "250,000 Credits",
              price: "$299.49",
              rate: "($0.0011/credit)",
            },
            {
              credits: "500,000 Credits",
              price: "$499.99",
              rate: "($0.0009/credit)",
            },
          ],
        },
        {
          subHeading: "Enterprise Usage",
          items: [
            {
              credits: "1,000,000 Credits ",
              price: "$799.99",
              rate: "($0.0008/credit)",
            },
          ],
        },
      ],
    },
  ];
  const getSubHeadingColor = (subHeading) => {
    const colors = {
      "Light Usage": "bg-secondary",
      "Average Usage": "bg-[#1D9BF0]",
      "Heavy Usage": "bg-[#177FCC]",
      "Enterprise Usage": "bg-[#115FA0]",
    };
    return colors[subHeading] || "bg-secondary"; // Default color
  };

  return (
    <section className="mt-8 mb-8 ">
      <p className="text-center pb-4 text-text lg:text-3xl font-bold text-xl mt-8 lg:mt-16 mb-2 xxl:mb-4">
        Pricing Plans
      </p>
      <div className="p-2 border rounded-lg  bg-setting_profile_bg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0 lg:mt-3 ">
          {data.map((column, index) => (
            <div key={index} className="shadow-md rounded-lg  lg:p-1 ">
              {/* Column Header */}
              <h2 className="text-lg xxxl:text-2xl font-bold mb-4 text-center text-text ">
                {column.header}
              </h2>

              {/* Rows */}
              {column.rows.map((row, rowIdx) => (
                // <div
                //   key={rowIdx}
                //   className="mb-6 border-secondary border-2 rounded-lg"
                // >
                //   {/* SubHeading with Dynamic Color */}
                //   <div
                //     className={`${getSubHeadingColor(
                //       row.subHeading
                //     )} text-white text-sm font-bold py-1 px-2 rounded-md`}
                //   >
                //     {row.subHeading}
                //   </div>

                //   {/* Items */}
                //   <div className="space-y-4 px-3 text-text n ">
                //     {row.items.map((item, itemIdx) => (
                //       <div
                //         key={itemIdx}
                //         className="flex justify-between items-center lg:gap-4 text-text  border-b border-gray-300 last:border-b-0 p-2 text-xs  "
                //       >
                //         <div className="flex  ">
                //           <span className=" text-xs  font-bold ">
                //             {item.credits}
                //           </span>
                //         </div>
                //         <div className="font-bold text-nowrap   flex flex-col gap-1">
                //           <span> {item.price}</span>

                //           <span className=" text-xs">{item.rate}</span>
                //         </div>
                //       </div>
                //     ))}
                //   </div>
                // </div>
                <div
                  key={rowIdx}
                  className={`mb-6 last-of-type:mb-2 pb-[2px] pl-[2px] pr-[2px] xxxl:text-lg   rounded-lg ${getSubHeadingColor(
                    row.subHeading
                  )}`}
                >
                  {/* SubHeading */}
                  <div className="text-white text-sm font-bold py-1 px-2 xxxl:text-lg  rounded-md">
                    {row.subHeading}
                  </div>

                  {/* Items */}
                  <div className=" px-2 text-text bg-[#091324] rounded-lg ">
                    {row.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex justify-between items-center text-nowrap lg:gap-2.5 text-text border-b border-gray-300   text-xs last:border-b-0  last-of-type:lg:text-wrap  last-of-type:mac:text-nowrap py-4 "
                      >
                        <div className="flex ">
                          <span className="text-[13px] xxxl:text-lg font-extrabold">
                            {item.credits}
                          </span>
                        </div>
                        <div className="font-bold text-nowrap flex flex-col   text-right gap-1  ">
                          <span className="text-[13px] xxxl:text-lg">{item.price}</span>
                          <span className="text-[10px] xxxl:text-base">{item.rate}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsPricing;
