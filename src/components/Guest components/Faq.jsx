import React, {useContext, useRef, useState} from "react";

import {FaMinus, FaPlus} from "react-icons/fa";

import Heading from "../UI/Heading";
import {ScrollContexts} from "../../store/ScrollContext";
import {Link} from "react-router-dom";
import turbo from "../../assets/images/guest img/Turbo.svg";
import equiped from "../../assets/images/guest img/equipped bg.svg";
import {RiArrowRightSLine} from "react-icons/ri";
import Button from "./Button";

const Faq = () => {
  const [selectedQues, setSelectedQues] = useState(null);
  const [visibleItems, setVisibleItems] = useState(7);
  const [isExpanded, setIsExpanded] = useState(false);
  const faqContainerRef = useRef(null);
  const handleSeeMore = () => {
    if (isExpanded) {
      // Collapse to the original 5 items and scroll to the top
      setVisibleItems(7);
      setIsExpanded(false);
      faqContainerRef.current?.scrollIntoView({behavior: "smooth"}); // Scroll to top of FAQs
    } else {
      // Expand to show all items or next 5
      setVisibleItems((prev) =>
        prev + 7 >= faqObj.length ? faqObj.length : prev + 7
      );
      if (visibleItems + 7 >= faqObj.length) {
        setIsExpanded(true); // No more items to show
      }
    }
  };
  const faqObj = [
    {
      question: "What is NetworkX.ai, and how does it work?",
      description: `NetworkX.ai is a powerful AI-driven software designed to help users grow, engage, and monetize their accounts on X effortlessly. By leveraging live data from X’s API and OpenAI's GPT-4-Turbo, NetworkX.ai automates key tasks like sending direct messages, creating and posting tailored content, and engaging with other accounts.`,
      platformDescription: "The platform is divided into three main features:",
      features: [
        "DM Automation: Send up to 500 personalized DMs daily to expand your network or promote a product or service.",
        "AI Smart Content: Generate and post niche-specific AI posts and replies, ensuring consistent content and engagement.",
        "Growth Tools: Automate tasks like following, unfollowing, liking, unliking, reposting, unreposting, and more to streamline account management.",
      ],
      conclusion: `NetworkX.ai empowers creators, marketers, and entrepreneurs to save time and focus on strategic growth, turning their X accounts into profitable assets with ease.`,
      id: 1,
    },
    {
      question: "Who can benefit the most from using NetworkX.ai?",
      description: `NetworkX.ai is designed for anyone looking to save time, boost engagement, grow their following, or monetize on X. Whether you’re a professional or a casual user, it’s especially beneficial for:`,
      platformDescription: "The platform is especially beneficial for:",
      features: [
        "Content Creators: Automate posts and replies to increase engagement and monetize through X’s ad revenue-sharing program.",
        "Entrepreneurs and Businesses: Expand networks, promote products or services, and connect with potential clients using DM automation.",
        "Marketers: Streamline audience engagement and manage large-scale growth strategies efficiently.",
        "Everyday X Users: Save time by automating repetitive tasks and enhancing interactions with key accounts.",
      ],
      conclusion: `NetworkX.ai offers the tools you need to achieve your goals on X, no matter who you are or your level of expertise.`,
      id: 2,
    },
    {
      question: "Does NetworkX.ai require any technical expertise to use?",
      description: `NetworkX.ai is designed to be user-friendly, so you don’t need any technical expertise to get started. We’ve made the software simple and easy to navigate, ensuring that anyone can use it, regardless of experience. Additionally, we offer a large library of tutorial videos that cover every feature, helping you quickly become a master at using the platform. Whether you're a beginner or an advanced user, our resources will guide you every step of the way.`,

      id: 3,
    },
    {
      question: "How frequently is NetworkX.ai updated with new features?",
      description: `NetworkX.ai is continuously updated with new features, improvements, and bug fixes. Our full development team works hard to add updates almost daily, ensuring the platform evolves with the latest technology and meets the needs of our users. We also take user feedback seriously and regularly incorporate feature requests to give you the tools you want most. You can expect frequent enhancements that keep your experience seamless and up to date, with major updates being communicated directly to you.`,
      id: 4,
    },
    {
      question:
        "Does NetworkX.ai provide any resources or tutorials to help me get started?",
      description: `Yes, NetworkX.ai provides a comprehensive library of video tutorials designed to help you get started and make the most of our platform. These tutorials cover everything from basic features to advanced functionalities, transforming any user from a beginner to an expert in no time. Whether you're setting up your first campaign or exploring more advanced automation features, our tutorials guide you through each step, ensuring a smooth and easy experience.`,
      id: 5,
    },

    {
      question: "What types of content can the AI poster create?",
      description: `The AI poster feature can generate a wide variety of content based on the prompt you provide. Whether you need informative, promotional, or conversational posts, the AI can create content tailored to your needs. The customization options are flexible, allowing you to align posts with your goals and desired tone, as long as they comply with legal and platform guidelines.`,
      id: 6,
    },
    {
      question: "How does the AI replier feature work?",
      description: `The AI replier feature allows you to automate responses to specific accounts. You simply input the accounts you want the AI to respond to, and whenever one of these accounts posts, a webhook is triggered. This sends the post and your specified prompt to OpenAI, which generates a reply. NetworkX.ai then automatically posts the generated response under the original post, ensuring consistent and relevant engagement with the selected accounts.`,
      id: 8,
    },
    {
      question:
        "How many direct messages can I send per day with DM automation?",
      description: `X has a daily limit of 500 direct messages, but we recommend sending no more than 350 messages per day to stay on the safe side and avoid any potential issues. To make your outreach appear more natural and human-like, we suggest setting a range for your DM automation, allowing the system to send out a randomized number of messages within that range. This helps maintain a more organic activity pattern and reduces the risk of being flagged for spammy behavior.`,
      id: 12,
    },

    {
      question: "Can I send personalized DMs to each recipient?",
      description: `Yes, you can send personalized DMs to each recipient using our AI DM feature. This feature allows you to create tailored messages for individual users, ensuring that each DM feels personal and relevant. Whether you're targeting specific accounts or creating custom messages based on user data, the AI-powered tool makes it easy to engage with your audience in a personalized way.`,
      id: 13,
    },

    {
      question:
        "Can I set up follow-up messages if someone doesn't respond to my DM?",
      description: `Yes, you can set up follow-up messages when creating your DM campaign. During the campaign setup, you can add follow-up messages that will be automatically sent if someone doesn't respond to your initial DM within a specified time frame. You have full control over the timing and content of these follow-ups, allowing you to make them as relevant and engaging as possible to increase your chances of getting a response.`,
      id: 14,
    },

    {
      question: "What actions can I automate using the growth tools?",
      description: `With NetworkX.ai's growth tools, you can automate a variety of actions to enhance your account's activity and engagement. These include:`,

      features: [
        "Following accounts",
        "Unfollowing accounts",
        "Liking posts",
        "Unliking posts",
        "Reposting posts",
        "Unreposting posts",
      ],
      conclusion: `These tools help streamline your workflow and make it easier to grow your presence on X without the need for manual effort.`,
      id: 17,
    },

    {
      question: "How do the growth tools help increase my account visibility?",
      description: `The growth tools help increase your account visibility by automating interactions with other accounts, such as following, liking, and reposting content. These actions increase your account’s presence within your niche and help you engage with a larger audience, leading to more visibility and potential followers.`,
      id: 19,
    },

    {
      question:
        "Is it possible to combine the growth tools with other features like DM automation?",
      description: `Yes, you can combine the growth tools with DM automation to create a more personalized and effective outreach strategy. For example, you can follow an account before sending them a DM, or like their most recent post prior to initiating the DM. This helps build a more organic connection with the account and can improve the chances of engagement when your DM is sent.`,
      id: 21,
    },
    {
      question: "What pricing plans are available for NetworkX.ai?",
      description: `NetworkX.ai offers a variety of pricing options to cater to different needs, from casual users to large businesses. Our plans include:`,

      // montlytitle: "Monthly Plans",
      // montlydetails: [
      //   "Basic Plan: Ideal for casual users looking to try out the software with limited usage.",
      //   "Pro Plan: Designed for creators and marketers who need higher usage limits.",
      //   "Enterprise Plan: Tailored for businesses with full access to all features, priority support, and the highest usage limits.",
      // ],

      featuresLast: [
        {
          title: "Monthly Plans",
          details: [
            "Basic Plan: Ideal for casual users looking to try out the software with limited usage.",
            "Pro Plan: Designed for creators and marketers who need higher usage limits.",
            "Enterprise Plan: Tailored for businesses with full access to all features, priority support, and the highest usage limits.",
          ],
        },
        {
          title: "Per-Credit Pricing",
          details: [
            "For users who prefer flexibility, this plan allows you to pay only for the credits you use, based on the volume of tasks you automate.",
          ],
        },
        {
          title: '"Done for You" Customized Package',
          details: [
            "This package is for businesses or users with specific goals. We schedule a call to evaluate your needs and objectives, then create a completely customized plan to achieve those goals. We handle everything for you, from strategy to execution, ensuring a seamless and effective solution tailored to your success.",
          ],
        },
        {
          title: "Add-Ons",
          details: [
            "You can enhance your plan with additional features, such as extra account seats, custom prompts written by experts, and more.",
          ],
        },
      ],

      conclusion: `We also offer a free trial to help you explore the platform before committing. For detailed information on each plan’s features and pricing, visit our pricing page.
    `,
      id: 25,
    },
  ];

  const handleQuestions = (id) => {
    if (selectedQues === id) {
      setSelectedQues(null);
    } else {
      setSelectedQues(id);
    }
  };

  const {faqsRef} = useContext(ScrollContexts);

  return (
    <div className="px-4 lg:px-20 -mt-12 " id="FAQs">
      <div className=" text-text flex flex-col items-center" ref={faqsRef}>
        {/* <Heading text={"FAQs"} headText={"Your Questions Answered"} /> */}
        <div className="w-full text-center ">
          <h1
            className="text-2xl font-bold text-text tracking-tight lg:text-3xl  xxxl:text-4xl "
            ref={faqContainerRef}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-[17px] py-4 text-text xxxl:text-xl">
            Find answers to common questions and learn more about our software.
          </p>
        </div>
        <div className="w-full p-2 md:p-8 ">
          {faqObj.slice(0, visibleItems).map((faqs) => (
            <div key={faqs.id} className="">
              <div
                className="w-full  px-4 lg:pt-2 lg:pb-5 cursor-pointer  h-auto"
                onClick={() => handleQuestions(faqs.id)}
              >
                <div className="flex justify-between items-center mt-4 mb-4 lg:mb-0 h-auto ">
                  <h3 className="font-extrabold hover:opacity-75 text-[17px] xxxl:text-xl pb-2">
                    {faqs.question}
                  </h3>
                  {selectedQues === faqs.id ? (
                    <FaMinus className="cursor-pointer ml-5" />
                  ) : (
                    <FaPlus className="cursor-pointer ml-5" />
                  )}
                </div>
                <div
                  className={` transition-all duration-500 ease-in-out overflow-hidden ${
                    selectedQues === faqs.id ? "slide-down-faqs" : "slide-up"
                  }`}
                >
                  <p className="text-[15px] xxxl:text-lg">{faqs.description}</p>
                  {faqs.platformDescription && (
                    <p className="mt-2 text-[15px] xxxl:text-lg font-bold">
                      {faqs.platformDescription}
                    </p>
                  )}
                  {faqs.features && (
                    <ul className="mt-2 list-disc pl-4 pb-3 text-sm xxxl:text-lg">
                      {faqs.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  )}
                  {faqs.conclusion && (
                    <p className="mb-2 text-[15px] xxxl:text-lg">
                      {faqs.conclusion}
                    </p>
                  )}
                  {faqs?.featuresLast?.map((feature, index) => (
                    <div key={index} className=" p-4  ">
                      <h4 className="font-bold text-lg">{feature.title}</h4>
                      <ul className="list-disc pl-5">
                        {feature.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="text-[15px] xxxl:text-lg"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
            </div>
          ))}
          {/* <div>
            <div
              className="w-full py-2 px-4 cursor-pointer md:py-7"
              onClick={() => handleQuestions(25)}
            >
              <div className="flex justify-between items-center mt-4">
                <h3 className="font-semibold hover:opacity-75 text-[17px]">
                  What pricing plans are available for NetworkX.ai?
                </h3>

                {selectedQues == 25 ? (
                  <FaMinus className="cursor-pointer ml-5" />
                ) : (
                  <FaPlus className="cursor-pointer ml-5" />
                )}

                <p className="mt-2 text-[15px] font-bold">
                  NetworkX.ai offers a variety of pricing options to cater to
                  different needs, from casual users to large businesses. Our
                  plans include:
                </p>
              </div>
            </div>
          </div> */}

          {/* See More / See Less Button */}
        </div>
        <div className="w-full text-center text-text pt-4">
          {/* <button
            className="bg-secondary text-white p-2 rounded-lg px-6 hover:bg-opacity-85"
            onClick={handleSeeMore}
          >
            {isExpanded ? "See Less" : "See More"}
          </button> */}

          <button
            className={`relative inline-flex justify-center items-center gap-2 px-3 py-[6px] text-sm xxxl:text-lg font-medium bg-hero_bg transition-all duration-600 ease-in-out transform hover:scale-105 focus:outline-none text-white w-36 `}
            onClick={handleSeeMore}
          >
            {isExpanded ? "See Less" : "See More"}
            {/* Decorative 3D Effects */}
            <span className="absolute bottom-[-0.2rem] right-[0.1rem] w-full h-[0.2rem] bg-blue-900 skew-x-[-45deg] transition-all duration-300 ease-in-out group-hover:bottom-[-0.15rem] group-hover:h-[0.15rem] group-hover:right-[0.05rem]"></span>
            <span className="absolute left-[-0.2rem] bottom-[-0.1rem] w-[0.2rem] h-full bg-blue-900 skew-y-[-45deg] transition-all duration-300 ease-in-out group-hover:left-[-0.15rem] group-hover:w-[0.15rem] group-hover:bottom-[-0.05rem]"></span>
          </button>
        </div>
      </div>
      <div className=" px-4 mt-16 lg:mt-20 mb-16">
        {/* Outer container with gradient border */}

        <div className="relative overflow-hidden p-[1px] rounded-2xl bg-gradient-card bg-gradient-to-b from-[#E1EAFD] to-[#1D9BF0] w-full ">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between justify-center w-full h-full  relative p-8 rounded-2xl overflow-hidden">
            {/* Text Content */}
            <div className="!text-text z-20 relative lg:pl-5 lg:mt-2">
              <h3 className="font-semibold lg:text-[26px] text-xl lg:text-3xl pb-4 text-text text-center lg:text-left  xxxl:text-4xl">
                Equipped With Leading-Edge Technology
              </h3>
              <p className="text-[17px] text-text mb-7 text-center lg:text-left xxxl:text-xl">
                We continuously upgrade our software with the latest{" "}
                <span>
                  <br />
                </span>
                innovations in LLMs to provide you with the best growth tools.
              </p>
              {/* <Link className="bg-secondary text-sm px-6 text-white p-2 rounded-lg self-start inline-flex items-center justify-center gap-1 w-full lg:w-auto text-center lg:text-left  bg-blue-gradient shadow-[0px_4px_100px_5px_#0653C099]  transition-all hover:scale-[1.02] ">
                Start Your Free Trial <RiArrowRightSLine size={16} />
              </Link> */}
              <div className="w-full flex justify-center lg:justify-start">
                <Button
                  style={"w-full"}
                  link={"/signUp"}
                  text={" Start Your Free Trial"}
                  arrow={<RiArrowRightSLine size={24} />}
                />
              </div>
            </div>

            {/* Turbo Image */}
            <div className="relative  flex justify-center w-full h-full lg:w-48 lg:h-48 xxxl:w-56 lg:mr-24 z-20 lg:-mt-2 ">
              <img
                src={turbo}
                alt="image"
                className=" w-40 h-40 xxxl:w-72   lg:w-full lg:h-full relative z-10 object-contain xxxl:object-cover "
              />
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full top-0 left-0">
              <img
                src={equiped}
                alt=""
                className="w-full h-full object-cover lg:scale-x-[1.25] lg:scale-y-[1.39] scale-y-[2]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
