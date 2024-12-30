import React, {useContext} from "react";
import {motion} from "framer-motion";
import feature1 from "../../assets/images/guest img/feature1.svg";
// import feature2 from "../../assets/images/guest img/feature2.svg";
import feature3 from "../../assets/images/guest img/feature3.svg";
import feature2 from "../../assets/images/guest img/features 4.svg";
import dmFeature from "../../assets/images/guest img/dm feature.svg";
import automation from "../../assets/images/guest img/dm automation.svg";
import icon1 from "../../assets/images/guest img/icons/Pen New Square.svg";
import icon2 from "../../assets/images/guest img/icons/Letter Unread.svg";
import icon3 from "../../assets/images/guest img/icons/Chart 2.svg";
import check from "../../assets/images/guest img/icons/Check Circle.svg";
import {Grow} from "@mui/material";
import {ScrollContexts} from "../../store/ScrollContext";

const CoreFeatures = () => {
  const {feauturesRef} = useContext(ScrollContexts);
  return (
    <div
      className="px-4 md:px-12 lg:px-32 py-12 lg:py-8 bg-learning-bg bg-no-repeat bg-contain bg-blend-overlay bg-[50%_100%] "
      id="Features"
      ref={feauturesRef}
    >
      <div>
        <motion.h1
          className="text-text md:text-[32px] lg:text-3xl  text-2xl  xxxl:text-4xl text-center font-bold py-4 pb-5 "
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1}}
          viewport={{once: true}}
        >
          Core Features
        </motion.h1>
        <motion.p
          className="text-center xlt:text-base text-xl md:text-[22px] lg:text-xl xxxl:text-2xl  text-text   pb-4 px-[2px] md:px-4 lg:px-0"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay: 0.5, duration: 1}}
          viewport={{once: true}}
        >
          Discover the essential features that fuel growth and simplify managing
          your X account.
        </motion.p>
      </div>

      <div className="px-4 lg:px-0 flex flex-col gap-6">
        <div className="flex flex-col-reverse lg:flex-row mt-6 sm:mt-0 lg:my-9 lg:mb-3 justify-between lg:gap-12 gap-3 w-full  xl:items-center  h-full ">
          <motion.div
            className="w-full pt-4 lg:pt-0  lg:flex lg:flex-col lg:justify-between  xl:h-[48vh]"
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            <motion.div
              className=" flex gap-3 items-center mb-2 lg:mb-0 "
              whileHover={{scale: 1.02}}
            >
              <img src={icon1} alt="" className="md:w-10 md:h-10 w-7 h-7" />
              <motion.h1 className="text-transparent bg-clip-text text-white text-xl md:text-[28px] xl:text-[30px] xxxl:text-[36px]  font-bold ">
                AI Smart Content
              </motion.h1>
            </motion.div>
            <motion.p
              className="text-text text-base md:text-xl lg:text-[19.5px] mac:text-[21px] xxxl:text-[28px] xl:text-[24px] lg:leading-[1.65] xl:leading-[1.8] font-light"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{delay: 0.5, duration: 1}}
              viewport={{once: true}}
            >
              We leverage X’s API in combination with OpenAI’s most advanced GPT
              models to create and publish high-quality, custom-tailored content
              directly on your page. This seamless integration ensures that each
              post is engaging, relevant, and crafted to resonate with your
              unique audience, allowing you to maintain a compelling online
              presence effortlessly.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 lg:flex lg:gap-4 text-text mt-3 sm:mt-0 md:mt-4 lg:mt-0 "
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{delay: 1, duration: 1}}
              viewport={{once: true}}
            >
              <div className="flex flex-wrap gap-1 items-center">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className="font-bold text-sm md:text-xl lg:text-base xl:text-[18px] xxxl:text-[22px] ">
                  AI poster
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className="font-bold text-sm md:text-xl lg:text-base xl:text-[18px] xxxl:text-[22px] ">
                  AI Replier
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className="font-bold text-nowrap text-sm md:text-xl lg:text-base xl:text-[18px] xxxl:text-[22px]">
                  AI Scheduler
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image container */}
          <motion.div
            className=" w-full relative rounded-xl
          "
          >
            <img
              src={feature1}
              alt=""
              className="w-full  h-full object-contain lg:object-cover lg:rounded-xl rounded-sm"
              style={{boxShadow: "0px 4px 70px 10px #1D9BF040"}}
            />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row  items-center justify-between lg:gap-9 gap-4 my-5 w-full h-full lg:my-3  ">
          <div className="w-full h-full relative  rounded-xl  ">
            <img
              src={feature2}
              alt=""
              className="w-full h-full object-cover  lg:rounded-xl rounded-sm"
              style={{boxShadow: "0px 4px 70px 10px #1D9BF040"}}
            />
          </div>

          <motion.div
            className="w-full  h-full lg:h-[60vh]  mac:h-[53vh]  flex flex-col justify-between  "
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.5, duration: 1}}
            viewport={{once: true}}
          >
            <motion.div
              className="flex gap-2 items-center  mb-3 lg:mb-0 "
              whileHover={{scale: 1.02}}
            >
              <img src={icon2} alt="" className="md:w-10 md:h-10 w-7 h-7" />
              <motion.h1 className="text-transparent bg-clip-text text-white text-xl md:text-[28px] xl:text-[30px] xxxl:text-[36px] font-bold ">
                DM Automation
              </motion.h1>
            </motion.div>
            <motion.p
              className="text-text text-base md:text-xl lg:text-[19.5px] mac:text-[21px] xl:text-[24px] xxxl:text-[28px] lg:leading-[1.65] xl:leading-[1.8] font-light"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{delay: 0.5, duration: 1}}
              viewport={{once: true}}
            >
              Reach your target audience directly and effectively with our
              world-class DM assistant, designed to connect you with the people
              who matter most to your business. This powerful marketing tool
              helps you grow your following by fostering meaningful interactions
              and provides an ideal platform for promoting and selling your
              products or services with ease and precision.
            </motion.p>

            <motion.div
              className="flex justify-between flex-wrap lg:grid lg:grid-cols-2 lg:gap-3  gap-3 text-[14px] lg:text-[15.5px] xl:text-[18px] text-text pt-3 text-nowrap lg:pt-0"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{delay: 1, duration: 1}}
              viewport={{once: true}}
            >
              <div className="flex gap-1 items-center text-nowrap ">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className=" font-bold md:text-xl lg:text-base xxxl:text-[22px]">
                  Customized Follow Up
                </p>
              </div>
              <div className="flex gap-1 items-center text-nowrap">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className=" font-bold md:text-xl lg:text-base xxxl:text-[22px]">
                  A/B Testing
                </p>
              </div>
              <div className="flex gap-1 items-center text-nowrap">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className=" font-bold md:text-xl lg:text-base xxxl:text-[22px]">
                  Follow/Like Before DMing
                </p>
              </div>
              <div className="flex gap-1 items-center text-nowrap">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className=" font-bold md:text-xl lg:text-base xxxl:text-[22px]">
                  AI Messages
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-9 xl:mt-3 ">
          <motion.div
            className="w-full lg:w-1/2 h-full lg:flex lg:flex-col lg:justify-between  xl:flex xl:flex-col xl:justify-between   lg:h-[55vh] mac:h-[50vh] "
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            <motion.div
              className="flex gap-2 items-center mb-2 lg:mb-0"
              whileHover={{scale: 1.02}}
            >
              <img src={icon2} alt="" className="md:w-10 md:h-10 w-7 h-7" />
              <motion.h1 className="text-transparent bg-clip-text text-white text-xl md:text-[28px]  xl:text-[30px] xxxl:text-[36px] font-bold ">
                Growth Tools
              </motion.h1>
            </motion.div>
            <motion.p
              className="text-text md:text-xl lg:text-[19.5px] mac:text-[21px] xl:text-[24px] xxxl:text-[28px] lg:leading-[1.65] xl:leading-[1.8] font-light"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{delay: 0.5, duration: 1}}
              viewport={{once: true}}
            >
              These tools empower you to organically enhance your account,
              helping you reach new followers and increase engagement without
              the need for constant manual effort. By fostering a more active
              and steadily growing online presence, you can build a loyal
              audience and strengthen your brand's impact over time.
            </motion.p>

            <motion.div
              className=" grid grid-cols-2 md:flex md:justify-between md:flex-wrap lg:grid lg:grid-cols-3 lg:gap-x-10  gap-3 text-[14px] lg:text-base xl:text-[18px] text-text  text-nowrap mt-2 lg:mt-0 "
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{delay: 1, duration: 1}}
              viewport={{once: true}}
            >
              <div className="flex gap-1 items-center">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className=" font-bold md:text-xl lg:text-base xxxl:text-[22px]">
                  Follow Assistant
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className=" font-bold md:text-xl lg:text-base xxxl:text-[22px]">
                  Unfollow Assistant
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className=" font-bold md:text-xl lg:text-base xxxl:text-[22px]">
                  Like Assistant
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className=" font-bold md:text-xl lg:text-base xxxl:text-[22px]">
                  Unlike Assistant
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className=" font-bold md:text-xl lg:text-base xxxl:text-[22px]">
                  Repost Assistant
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={check} alt="" className="w-5 h-5 xl:w-6 xl:h-6" />
                <p className=" font-bold md:text-xl lg:text-base xxxl:text-[22px]">
                  Repost Assistant
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:w-1/2 h-full  rounded-xl ">
            <img
              src={feature3}
              alt=""
              className="w-full h-full object-cover rounded-xl "
              style={{boxShadow: "0px 4px 70px 10px #1D9BF040"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
