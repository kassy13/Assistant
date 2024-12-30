// import React from "react";
// import gptTurbo from "../../assets/images/guest img/GPT Logo.svg";
// import Xicon from "../../assets/images/guest img/X Icon.svg";
// import powered from "../../assets/images/guest img/powered.svg";
// const PoweredBy = () => {
//   return (
//     <div className="pt-8 bg-settings_bg] lg:mx-12 mx-4">
//       <div className="rounded-2xl bg-poweredby-gradient shadow-custom-blue">
//         <div className=" rounded-2xl w-full h-full  pt-12 pb-6  ">
//           <div>
//             <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-[#E1EAFD] to-[#878C97] tracking-tight lg:text-2xl text-center text-3xl font-bold bg-gradient-text ">
//               Powered By
//             </h3>
//             <div className="lg:px-20 lg:py-4 my-7">
//               <div className="relative p-[1px] rounded-2xl bg-gradient-card">
//                 <div className="bg-setting_profile_bg rounded-2xl w-full flex flex-col lg:flex-row gap-12 justify-between p-4 lg:p-8 shadow-[0px_0px_60px_0px_rgba(29,155,240,0.25)] ">
//                   <div className=" rounded-2xl w-full lg:w-[50%] h-full  backdrop-blur-[700px] shadow-custom  p-6">
//                     <img
//                       src={gptTurbo}
//                       alt=""
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                   <div className="text-text">
//                     <h2 className="font-semibold tracking-tight text-3xl pb-3">
//                       GPT 4 Turbo:
//                     </h2>
//                     <p className="text-[15px] font-bold">
//                       <span className="text-secondary">NetworkX.ai</span> is
//                       powered by GPT-4 Turbo, the latest and most advanced model
//                       from OpenAI. By integrating this cutting-edge technology,
//                       our platform delivers fast, intelligent, and highly
//                       accurate responses tailored to your needs. With GPT-4
//                       Turbo at the core of our SaaS tool, we’re committed to
//                       providing an exceptional AI-driven
//                       experience for our users.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="lg:px-20 lg:py-4 my-7">
//               <div className="relative p-[1px] rounded-2xl bg-gradient-card ">
//                 <div className="bg-setting_profile_bg rounded-2xl w-full flex flex-col lg:flex-row-reverse gap-12 justify-between p-8 shadow-[0px_0px_60px_0px_rgba(29,155,240,0.25)] ">
//                   <div className=" rounded-2xl w-full lg:w-[50%] h-full">
//                     <img
//                       src={Xicon}
//                       alt=""
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                   <div className="text-text">
//                     <h2 className="font-semibold tracking-tight text-3xl pb-3">
//                       X’s API:
//                     </h2>
//                     <p className="text-[15px] font-bold">
//                       <span className="text-secondary">NetworkX.ai</span>{" "}
//                       leverages X’s API to seamlessly connect our platform with
//                       real-time data from X. This integration allows us to
//                       retrieve and deliver live insights directly to and from
//                       your account, ensuring you stay updated and engaged. With
//                       X’s API powering our software, we bring you fast,
//                       accurate, and dynamic interactions to enhance
//                       your experience.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PoweredBy;

import React from "react";
import {motion} from "framer-motion"; // Import Framer Motion
import gptTurbo from "../../assets/images/guest img/GPT Logo.svg";
import Xicon from "../../assets/images/guest img/X Icon.svg";
import powered from "../../assets/images/guest img/powered.svg";
import turboBg from "../../assets/images/guest img/gpt ai bg.svg";
import xBg from "../../assets/images/guest img/x ai bg.svg";

const PoweredBy = () => {
  return (
    <div className="mt-6 lg:mt-10  lg:pt-0 md:mx-12 lg:mx-28 mx-4">
      <motion.div
        className="rounded-2xl shadow-custom-blue px-4 md:px-0 bg-[#132447] "
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
      >
        <div className="rounded-2xl w-full h-full pt-2 lg:pt-0 pb-6   ">
          <motion.div
            initial={{x: -200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1}}
          >
            <h3 className=" tracking-tight md:text-[32px] lg:text-3xl xxxl:text-4xl text-center text-[24px] font-bold text-text py-4 lg:pt-7">
              Powered By
            </h3>

            <div className="lg:px-20 pb-6 lg:py-4 rounded-2xl mt-6 lg:mt-0">
              <div className="bg-gradient-card w-full  h-full p-[1px] rounded-2xl ">
                <motion.div
                  className="relative  rounded-2xl   "
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 1, delay: 0.5}}
                >
                  <div className=" rounded-2xl w-full flex flex-col lg:flex-row  justify-between items-center md:p-4 ">
                    <motion.div
                      className="rounded-2xl w-full lg:w-[17%] md:w-full  md:flex md:justify-center h-full relative z-20 lg:mr-4 "
                      initial={{scale: 0.9, opacity: 0}}
                      animate={{scale: 1, opacity: 1}}
                      transition={{duration: 1}}
                    >
                      <div className=" rounded-2xl w-full flex flex-col lg:flex-row-reverse justify-between items-center  lg:p-0  xl:py-4">
                        <img
                          src={gptTurbo}
                          alt="GPT-4 Turbo"
                          className="lg:w-72 lg:h-48 object-contain scale-[0.75] lg:scale-100 "
                        />
                      </div>
                    </motion.div>
                    <div className="text-text pb-6 md:pb-0 z-20 w-[80%] lg:pl-6">
                      <h2 className="font-semibold tracking-tight text-2xl md:text-4xl lg:text-4xl pb-3 md:text-center lg:text-left">
                        GPT 4 Turbo:
                      </h2>
                      <p className="text-base md:text-xl lg:text-sm xxxl:text-xl xxxl:pr-5 font-bold xl:text-base md:text-center lg:text-left md:pb-5 lg:pb-0">
                        <span className="text-secondary ">NetworkX.ai</span> is
                        powered by GPT-4 Turbo, the latest and most advanced
                        model from OpenAI. By integrating this cutting-edge
                        technology, our platform delivers fast, intelligent, and
                        highly accurate responses tailored to your needs. With
                        GPT-4 Turbo at the core of our SaaS tool, we’re
                        committed to providing an exceptional AI-driven
                        experience for our users.
                      </p>
                    </div>
                    <div className="absolute w-full h-full top-0 z-10  left-0">
                      <img
                        src={turboBg}
                        alt=""
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{x: -200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1}}
          >
            <div className="lg:px-20  pb-6 lg:py-4 rounded-2xl ">
              <div className="bg-gradient-card w-full  h-full p-[1px] rounded-2xl ">
                <motion.div
                  className="relative  rounded-2xl    "
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 1, delay: 0.5}}
                >
                  <div className=" rounded-2xl w-full flex flex-col lg:flex-row-reverse justify-between items-center  lg:p-0  xl:py-4">
                    <motion.div
                      className="rounded-2xl w-full lg:w-[17%] md:w-full  md:flex md:justify-center h-full relative z-20 lg:mr-4 "
                      initial={{scale: 0.9, opacity: 0}}
                      animate={{scale: 1, opacity: 1}}
                      transition={{duration: 1}}
                    >
                      <img
                        src={Xicon}
                        alt="GPT-4 Turbo"
                        className="lg:w-72 lg:h-48 object-contain scale-[0.75] lg:scale-100 "
                      />
                    </motion.div>
                    <div className="text-text pb-4 md:pb-0 z-20 w-[76%] lg:pl-8 ">
                      <h2 className="font-semibold tracking-tight text-2xl md:text-4xl pb-3 md:text-center lg:text-left">
                        X’s API:
                      </h2>
                      <p className="text-base lg:text-sm font-bold md:text-xl xl:text-base xxxl:text-xl xxxl:pr-5 md:text-center lg:text-left md:pb-6 lg:pb-0">
                        <span className="text-secondary">NetworkX.ai</span>{" "}
                        leverages X’s API to seamlessly connect our platform
                        with real-time data from X. This integration allows us
                        to retrieve and deliver live insights directly to and
                        from your account, ensuring you stay updated and
                        engaged. With X’s API powering our software, we bring
                        you fast, accurate, and dynamic interactions to enhance
                        your experience.
                      </p>
                    </div>
                    <div className="absolute w-full h-full top-0 z-10  left-0">
                      <img
                        src={xBg}
                        alt=""
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PoweredBy;
