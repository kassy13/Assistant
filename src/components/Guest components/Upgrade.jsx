// export default Upgrade;
// import React from "react";
import {motion} from "framer-motion";
import expand from "../../assets/images/guest img/expand your network.svg";
import take from "../../assets/images/guest img/take selling.svg";
import grow from "../../assets/images/guest img/grow your follow 2.svg";
import growmain from "../../assets/images/guest img/grow your follow.svg";
import growmainbg from "../../assets/images/guest img/growmainbg.svg";
import monetize from "../../assets/images/guest img/monetize.svg";
import transactions from "../../assets/images/guest img/transactions.svg";
import expandbg from "../../assets/images/guest img/expand 2.svg";
import takeselling from "../../assets/images/guest img/take selling bg.svg";
import takeSellingNorm from "../../assets/images/guest img/take selling.svg";
import monetizebg from "../../assets/images/guest img/monetize main.svg";
import growbg from "../../assets/images/guest img/grow yours.svg";
import bgupgrade from "../../assets/images/guest img/bg upgrade.svg";
import expandnetwork from "../../assets/images/guest img/expand your network.svg";

const Upgrade = () => {
  // Animation Variants
  const containerVariant = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariant = {
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        damping: 15,
      },
    },
  };

  const parallaxVariant = {
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 1.2, ease: "easeOut"},
    },
    hover: {
      scale: 1.01,
      rotate: 0.1, // Reduced rotation to a subtle angle
      boxShadow: "0px 15px 40px rgba(50, 150, 255, 0.5)",
      transition: {duration: 0.4, ease: "easeInOut"},
    },
  };

  return (
    <motion.div
      className="px-5 lg:py-8 md:px-12 lg:px-16 relative h-fit "
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 opacity-70 blur-xl " />

      {/* Header */}
      <h1 className="text-center font-semibold xlt:text-xl lt:text-2xl md:text-[32px] lg:text-3xl pb-4 text-text xxxl:text-4xl">
        Upgrade Your X Experience
      </h1>
      <motion.p
        className="text-center text-base md:text-[22px] md:leading-[30px] lg:text-lg xxxl:text-[22px] pb-10 text-gray-300"
        variants={textVariant}
      >
        Super boost your engagement and conversations on X with our
        AI smart assistant
      </motion.p>

      {/* <motion className="flex flex-col lg:flex-row justify-between gap-5 h-full  lg:px-16 ">
        <div className="flex flex-col gap-5 w-full lt:h-[70vh] lg:h-[95vh] justify-between   ">
          <div className="bg-gradient-card  rounded-3xl xlt:h-[50vh]  sm:h-[47%] lt:h-[47%] mac:h-[48%] p-[2px] transition-all hover:scale-[1.02] hover:shadow-[0px_10px_100px_5px_#0653C099] ">
            <div className="    w-full  relative  h-full rounded-3xl  ">
              <p className="sm:text-text xlt:text-[14px] lt:text-[16px] md:text-[22px] lg:text-xl  mac:text-2xl xxxl:text-3xl   text-center font-semibold px-6 relative z-20  pt-4 xlt:py-6 lt:py-5 md:py-3 lg:py-4 mac:py-7 xxxl:py-11 xl:py-9 h-full text-text ">
                Expand Your Network And Sales Funnel Through DM Marketing
              </p>

              <div className="absolute top-0  left-0 w-full h-full z-10 rounded-3xl   ">
                <img
                  src={expandbg}
                  alt=""
                  className="w-full h-full  object-cover rounded-3xl "
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-card-reverse  rounded-3xl xlt:h-[50vh] lt:h-[53%] mac:h-[52%] p-[2px] transition-all hover:scale-[1.02] hover:shadow-[0px_10px_100px_5px_#0653C099] ">
            <div className="  w-full  relative  h-full rounded-3xl  ">
              <p className="text-text xlt:text-[14px] lt:text-[16px] md:text-[22px] lg:text-xl  mac:text-2xl xxxl:text-3xl  text-center font-semibold px-6 relative z-20  pt-4 xlt:py-5 lt:py-5 md:py-5 lg:py-4   mac:py-6 xl:py-8 xxxl:py-10 h-full">
                Take Selling A Product Or Service To The Next Level
              </p>

              <div className="absolute top-0  left-0 w-full h-full z-10 rounded-3xl   ">
                <img
                  src={takeselling}
                  alt=""
                  className="w-full h-full  object-cover rounded-3xl "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full  justify-between xlt:h-[90vh] lt:h-[80vh] lg:h-[95vh]   ">
          <div className=" relative h-full xlt:h-[60%] lt:h-[70%] sm:h-[60%] md:h-[100vh] lg:h-[62%] bg-gradient-card  rounded-3xl p-[2px] transition-all hover:scale-[1.02] hover:shadow-[0px_10px_100px_5px_#0653C099]">
            <div className="  w-full  relative  h-full rounded-3xl  ">
              <p className="text-text xlt:text-[14px] lt:text-[16px] md:text-[22px] lg:text-xl  mac:text-2xl xxxl:text-3xl  text-center font-semibold px-6 relative z-20  py-4 lt:py-4 xlt:py-2   md:py-3 lg:py-4 mac:py-7 xxxl:py-11 xl:py-9  h-full">
                Grow Your Following And Engagement Via AI Posts And Replies
              </p>

              <div className="absolute top-0 left-0 w-full h-full z-10 ">
                <img
                  src={grow}
                  alt=""
                  className="w-full h-full object-cover rounded-3xl "
                />
              </div>
            </div>
          </div>

          <div className="relative h-[100%] xlt:h-[40%] lt:h-[60%]  sm:h-[40%]  md:h-[60vh] lg:h-[40%]  bg-gradient-card-reverse  rounded-3xl p-[2px] transition-all hover:scale-[1.02] hover:shadow-[0px_10px_100px_5px_#0653C099] ">
            <div className="  w-full  relative  h-full rounded-3xl   ">
              <p className="text-text xlt:text-[14px]  lt:text-[16px] md:text-[22px] lg:text-xl  mac:text-2xl xxxl:text-3xl text-center font-semibold px-6 relative z-20  py-6 xlt:py-2 lt:py-6 sm:py-5 md:py-4 lg:py-6 mac:py-9 h-full    ">
                Monetize Off X’s Revenue Share Model
              </p>

              <div className="absolute top-0 left-0 w-full h-full z-10">
                <img
                  src={monetizebg}
                  alt=""
                  className="w-full h-full object-cover rounded-3xl "
                />
              </div>
            </div>
          </div>
        </div>
      </motion> */}

      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-5 h-full  lg:px-16 ">
        {/* FIrst */}
        <div className="flex flex-col gap-5 w-full lt:h-[70vh] lg:h-[95vh] justify-between   ">
          <div className="bg-gradient-card  rounded-3xl xlt:h-[50vh]  sm:h-[47%] lt:h-[47%] mac:h-[48%] p-[2px] transition-all hover:scale-[1.02] hover:shadow-[0px_10px_100px_5px_#0653C099] ">
            <div className="relative w-full h-full rounded-3xl gradient-border">
              <div
                className="overflow-y-hidden w-full h-full rounded-3xl bgUpgrade"
                // style={{
                //   backgroundImage: `url(${bgupgrade})`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center bottom",
                // }}
              >
                <p className="text-text sm:text-text xlt:text-[14px] lt:text-[16px] md:text-[22px] lg:text-xl mac:text-2xl xxxl:text-3xl text-center font-semibold px-6 pt-4 md:pt-0 md:my-6  lg:my-4 xxxl:my-12 ">
                  Expand Your Network And Sales Funnel Through DM Marketing
                </p>
                <div className="relative w-full h-full  overflow-hidden  ">
                  <img
                    src={expandnetwork}
                    alt=""
                    className="w-full h-full object-contain mac:object-cover xxl:object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Take selling */}
          <div className="bg-gradient-card-reverse  rounded-3xl xlt:h-[50vh] lt:h-[50%] mac:h-[52%] p-[2px] transition-all hover:scale-[1.02] hover:shadow-[0px_10px_100px_5px_#0653C099] ">
            <div className="  w-full  relative  h-full rounded-3xl gradient-border ">
              <div
                className="overflow-y-hidden w-full h-full rounded-3xl bgUpgrade"
                // style={{
                //   backgroundImage: `url(${bgupgrade})`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center bottom",
                // }}
              >
                <p className="text-text xlt:text-[14px] lt:text-[16px] md:text-[22px] lg:text-xl  mac:text-2xl xxxl:text-3xl  text-center font-semibold px-6 pt-5 mac:pt-5 md:py-8 lg:py-4  mac:py-0 xxxl:py-10 ">
                  Take Selling A Product Or Service To The Next Level
                </p>

                <div className="relative w-full h-full  overflow-hidden  px-2 ">
                  <img
                    src={takeSellingNorm}
                    alt=""
                    className="w-full h-full  object-contain  "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col gap-5 w-full  justify-between xlt:h-[90vh] lt:h-[80vh] lg:h-[95vh]   ">
          <div className=" relative h-full xlt:h-[60%] lt:h-[60%] sm:h-[60%] md:h-[60%] lg:h-[62%] mac:h-[60%] bg-gradient-card  rounded-3xl p-[2px] transition-all hover:scale-[1.02] hover:shadow-[0px_10px_100px_5px_#0653C099]">
            <div className="  w-full  relative  h-full rounded-3xl gradient-border ">
              <div
                className="overflow-y-hidden w-full h-full rounded-3xl bgUpgrade"
                // style={{
                //   backgroundImage: `url(/assets/images/guest img/bg upgrade.svg)`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center bottom",
                // }}
              >
                <p className="text-text xlt:text-[14px] lt:text-[16px] md:text-[22px] lg:text-xl  mac:text-2xl xxxl:text-3xl  text-center font-semibold px-6 relative z-20 my-4 md:my-6 lg:my-4 xxxl:my-12">
                  Grow Your Following And Engagement Via AI Posts And Replies
                </p>

                <div className="relative w-full h-full  overflow-hidden translate-y-  ">
                  <img
                    src={growmain}
                    alt=""
                    className="w-full h-full object-cover xxxl:object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[100%] xlt:h-[40%] lt:h-[40%]  sm:h-[40%]  md:h-[40%] lg:h-[38%] mac:h-[40%]  bg-gradient-card-reverse  rounded-3xl p-[2px] transition-all hover:scale-[1.02] hover:shadow-[0px_10px_100px_5px_#0653C099] ">
            <div className="  w-full  relative  h-full rounded-3xl gradient-border  ">
              <div
                className="overflow-y-hidden w-full h-full rounded-3xl bgUpgrade"
                // style={{
                //   backgroundImage: `url(${bgupgrade})`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center bottom",
                // }}
              >
                <p className="text-text xlt:text-[14px]  lt:text-[16px] md:text-[22px] lg:text-xl  mac:text-2xl xxxl:text-3xl text-center font-semibold py-4 translate-y-3 mac:translate-y-4 1900:translate-y-10">
                  Monetize Off X’s Revenue Share Model
                </p>

                <div className="relative w-full h-full  overflow-hidden -translate-y-14  lg:-translate-y-14 mac:-translate-y-16">
                  <img
                    src={transactions}
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Upgrade;
