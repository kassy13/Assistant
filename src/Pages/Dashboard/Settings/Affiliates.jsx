import React from "react";
import {RiInformation2Fill} from "react-icons/ri";
import {Link} from "react-router-dom";
import linkIcon from "../../../assets/icons/link icon.svg";
import CommissionsTable from "./Settings components/CommisionsTable";
import PayoutTable from "./Settings components/PayoutTable";

const Affiliates = () => {
  return (
    // <section className="mt-10 border border-white rounded-lg px-12 py-8 text-white">
    //   <h2 className="text-2xl font-bold mb-4 text-center">
    //     NetworkX Affiliate Program
    //   </h2>

    //   <div className="border border-white rounded-lg bg-setting_profile_bg p-5  gap-4">
    //     <div className="p-3 grid grid-cols-3">
    //       <div>
    //         <h3 className="text-xl">Invite a Friend</h3>
    //       </div>
    //       <div></div>
    //       <div></div>
    //     </div>
    //   </div>
    // </section>

    <section className="lg:px-4 py-4 text-white lg:min-h-[50vh]  overflow-scroll scrollbar-hide lg:pb-20 md:w-full mt-6 md:mt-0">
      <h2 className="text-2xl font-bold mb-4 text-center">
        NetworkX Affiliate Program
      </h2>

      <div className="border border-white rounded-lg bg-setting_profile_bg md:p-5  gap-4  md:text-lg lg:text-base py-1">
        <div className="md:p-3 grid grid-col-1 lg:grid-cols-3 gap-4 px-2">
          <div className="border border-white rounded-lg p-4">
            <h2 className="text-base font-bold mb-2 text-center">
              Invite A Friend
            </h2>
            <p className="text-dim mb-2 text-sm">
              For every sign up using your link, you’ll receive:
            </p>
            <div className="">
              {/* Benefits for Friend */}
              <div className="mb-2">
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li className="text-dim lg:text-sm">
                    <span className="font-semibold  text-secondary">
                      25% of lifetime revenue
                    </span>{" "}
                    generated from the referral
                  </li>
                </ul>
              </div>
              <span className="text-dim pb-2 block lg:text-sm">
                They will receive
              </span>
              <div className="mb-2">
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li className="text-dim lg:text-sm">
                    <span className="font-semibold text-secondary">
                      25% off
                    </span>{" "}
                    their first month
                  </li>
                </ul>
              </div>

              {/* User Name Input */}
              <div className="flex items-center  ">
                <div className="mt-2 mb-6 flex">
                  <input
                    type="text"
                    id="userName"
                    placeholder="Your name"
                    className="w-full px-4 py-1 pr-3 text-[8px] bg-black border border-none border-gray-300 rounded focus:outline-none  text-text text-xs"
                  />
                  <button
                    //   onClick={generateLink}
                    className="bg-secondary  px-2 rounded text-text text-xs text-[8px] text-nowrap pr-4 flex gap-1 items-center"
                  >
                    <img src={linkIcon} alt="" className="w-[10px] h-[10px]" />{" "}
                    Generate your link
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Post About Us */}
          <div className="space-y-4 border border-white rounded-lg p-4">
            <h3 className="text-base text-center font-bold leading-none">
              Post About Us
            </h3>
            <p className="text-sm leading-none text-center">
              Post about NetworkX on X to earn:
            </p>
            <ul className="list-disc leading-none pl-6 space-y-2 text-sm text-dim">
              <li>
                <span className="text-secondary">50</span> AI Smart Content
                Credits
              </li>
              <li>
                <span className="text-secondary">1,000</span> Direct Message
                Credits
              </li>
              <li>
                <span className="text-secondary">100</span> Link Clicks
              </li>
            </ul>
            <p className="text-[13px] text-nowrap leading-none">
              Post must include one of the following:
            </p>
            <ul className="list-disc leading-none  pl-6 space-y-2 text-text text-sm">
              <li>NetworkX's URL or your invite link</li>
              <li>NetworkX's X username (@NetworkX_ai)</li>
            </ul>
            <p className="text-[13px] leading-[1.2]  text-white">
              ** Credits will be revoked if the post is removed **
            </p>
          </div>

          {/* Affiliate Activities */}
          <div className="flex flex-col border border-white rounded-lg p-4 justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-base  font-bold text-center">
                Affiliate Activities
              </h3>
              <div className="flex flex-col ">
                <div className="flex justify-between border text-text text-xs border-text rounded-lg p-2 px-3 my-2 ">
                  <p className="">Link Clicks</p>
                  <p>100</p>
                </div>
                <div className="flex justify-between border text-text border-text rounded-lg p-2 px-3 my-2 text-xs">
                  <p className="">Sign Ups</p>
                  <p>15</p>
                </div>
                <div className="flex justify-between border text-text border-text rounded-lg p-2 px-3 my-2 text-xs">
                  <p className="">Total Earnings</p>
                  <p>$1500</p>
                </div>
                <div className="flex justify-between border text-text border-text rounded-lg p-2 px-3 my-2 text-xs">
                  <p className="">Current MRR</p>
                  <p>$500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4 px-2 py-4 md:py-0">
          {/* Payout */}
          {/* <div className=" border border-white rounded-lg p-4 justify-between items-center space-y-4 md:space-y-0 w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold">Commissions</h3>
              <div className="flex items-center gap-4 text-xs">
                <Link to={""} className="bg-secondary p-1 px-2 rounded">
                  Commissions
                </Link>
                <Link to={""}>Subscriptions</Link>
              </div>
            </div>
            <div className=" bg-setting_profile_bg">
              <div className="flex flex-col justify-center items-center py-20">
                <p className="py-2 font-bold">No sign ups yet</p>
                <p className="text-xs pt-2">
                  Send someone your link to get started
                </p>
              </div>
            </div>
          </div> */}
          <CommissionsTable />
          {/* Commissions */}
          {/* <div className="border border-white rounded-lg p-4 justify-between items-center space-y-4 md:space-y-0 w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold">Payout</h3>
              <div className="flex gap-6 items-center">
                <Link className="text-xs">
                  Available <span className="font-bolds">$0</span>
                </Link>
                <Link to={""} className="bg-secondary p-1 px-2 rounded text-xs">
                  Request payout
                </Link>
              </div>
            </div>
            <div className=" bg-setting_profile_bg">
              <div className="flex flex-col justify-center items-center py-20">
                <p className="py-2 font-bold">No sign ups yet</p>
                <p className="text-xs pt-2">
                  Send someone your link to get started
                </p>
              </div>
            </div>
          </div> */}
          <PayoutTable />
        </div>
      </div>
    </section>
  );
};

export default Affiliates;
