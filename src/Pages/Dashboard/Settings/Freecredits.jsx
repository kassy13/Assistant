import React from "react";

const FreeCredits = () => {
  // Define tasks for each column
  const columnOne = [
    {title: "Follow us on X", credits: "100 DM Automation Credit"},
    {title: "Follow us on LinkedIn", credits: "100 Direct Message Credits"},
    {title: "Follow us on Youtube", credits: "100 Direct Message Credits"},
    {title: "Follow us on Instagram", credits: "100 Direct Message Credits"},
    {title: "Follow us on Facebook", credits: "100 Direct Message Credits"},
    {title: "Follow us on Tiktok", credits: "100 Direct Message Credits"},
  ];

  const columnTwo = [
    {title: "Join our Slack community", credits: "100 Direct Message Credits"},
    {
      title: "Join our Telegram community",
      credits: "100 DM Automation Credits",
    },
    {
      title: "Join our Discord community",
      credits: "100 Direct Message Credits",
    },
  ];

  const columnThree = [
    {
      title: "Post about NetworkX on X to earn:",
      credits: "50 AI Smart Content Credits",
    },
    {title: "", credits: "1,000 Direct Message Credits"},
    {
      title: "Also receive:",
      credits:
        "25% of lifetime revenue generated from the referral if you use your invite link",
    },
    {
      title: "Post must include one of the following:",
      credits: "NetworkX's URL or your invite link",
    },
    {title: "NetworkX's X username (@NetworkX_ai)", credits: ""},
    {
      title:
        "Once you’ve posted, please message our support team with a link to your post and we will add the credit to your account",
      credits: "100 Direct Message Credits",
    },
  ];

  return (
    <section className="lg:px-4 py-4 text-white lg:min-h-[50vh]  overflow-scroll scrollbar-hide lg:pb-20 md:w-full mt-6 md:mt-0">
      <h2 className="text-2xl font-bold mb-3 text-center">Free Credits</h2>
      <p className="text-sm mb-3 text-center">
        Earn free credits by completing simple tasks! Take advantage of this
        opportunity to unlock extra rewards at no cost!
      </p>

      {/* Three-column grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border border-white rounded-lg bg-setting_profile_bg p-5 items-start">
        {/* Column 1 */}
        <div className="space-y-3 border border-white rounded-lg bg-setting_profile_bg p-2">
          <h3 className="text-center pt-1 text-base font-bold">
            Follow Our Socials
          </h3>
          {columnOne.map((task, index) => (
            <div key={index}>
              <li className="font-semibold text-sm mb-2">{task.title}</li>
              <div className="flex justify-between items-center border border-white rounded text-xs text-nowrap p-2">
                <p className="text-dim">{task.credits}</p>
                <button className="bg-secondary p-1 px-2 rounded text-white text-[10.5px]">
                  Perform Task
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="space-y-3 border border-white rounded-lg bg-setting_profile_bg p-2">
          <h3 className="text-center pt-1  text-base font-bold">
            Join Our Groups
          </h3>
          {columnTwo.map((task, index) => (
            <div key={index}>
              <li className="font-semibold text-sm mb-2">{task.title}</li>
              <div className="flex justify-between items-center border border-white rounded text-xs text-nowrap p-2">
                <p className="text-dim">{task.credits}</p>
                <button className="bg-secondary p-1 px-2 rounded text-white text-[10.5px]">
                  Perform Task
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="space-y-3 border border-white rounded-lg bg-setting_profile_bg p-2">
          <h3 className="text-center pt-1 text-base font-bold">
            Post About Us
          </h3>
          <div>
            <li className="font-semibold text-sm mb-2">
              Post about NetworkX on X to earn:
            </li>

            <div className="flex justify-between items-center border border-white rounded text-xs text-nowrap p-2">
              <p className="text-dim"> 50 AI Smart Content Credits</p>
              <button className="bg-secondary p-1 px-2 rounded text-white text-[10.5px]">
                Perform Task
              </button>
            </div>
            <div className="text-sm py-3">
              <p>Also receive:</p>
              <p className="pt-1">
                <span className="text-secondary">
                  {" "}
                  25% of lifetime revenue generated{" "}
                </span>
                from the referral if you use your invite link
              </p>
              <p>Post must include one of the following:</p>
              <li className="pt-1">NetworkX's URL or your invite link</li>
              <li>NetworkX's X username (@NetworkX_ai)</li>

              <p className="leading-none pt-2">
                **Credits will be revoked if the post is removed.**
              </p>

              <p className="border border-white rounded text-xs  p-2 mt-3 text-wrap">
                Once you’ve posted, please message our support team with a link
                to your post and we will add the credit to your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeCredits;
