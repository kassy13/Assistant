import React from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import boost from "../../assets/images/guest img/boost.svg";
import {
  RiArrowRightLine,
  RiArrowRightSFill,
  RiArrowRightSLine,
} from "react-icons/ri";
import boostbg from "../../assets/images/guest img/boost bg.svg";
import Button from "./Button";
const Boost = () => {
  return (
    <motion.div
      className="px-4 lg:px-12 my-12 lg:py-0 lg:my-0 "
      initial={{opacity: 0, y: 50}} // Start faded out and below the viewport
      animate={{opacity: 1, y: 0}} // Move to full opacity and original position
      transition={{duration: 1, ease: "easeInOut"}}
    >
      <div className="px-2 lg:px-16   ">
        <div className="bg-gradient-card p-[2px] rounded-2xl">
          <div className="   relative rounded-2xl ">
            <div
              className="flex lg:flex-row flex-col-reverse md:risks question 
          justify-between  bg-[071C3E] rounded-2xl w-full "
            >
              <div className="p-6 text-text flex flex-col justify-center w-full  relative z-10">
                <h2 className="text-center lg:text-left text-xl lg:text-[26px] xxl:text-4xl  md:text-[26px] lg:text-nowrap text-wrap pb-3 font-bold ">
                  Ready To Supercharge Your DM Strategy?
                </h2>
                <p className="text-[17px] xxxl:text-[22px]   mb-6 text-center lg:text-left">
                  Start your free trial today and unlock the power of our
                  top-tier DM marketing tool!
                </p>
                <div className="text-center lg:text-left">
                  {/* <Link
                    to={"/signUp"}
                    className="bg-secondary   bg-blue-gradient shadow-[0px_4px_100px_5px_#0653C099] p-2 px-4 rounded-sm text-white text-sm inline-flex items-center transition-all hover:scale-[1.02]  "
                  >
                    Start Free Trial{" "}
                    <RiArrowRightLine size={20} className="pl-1" />
                  </Link> */}
                  <Button
                    text={"Start Free Trial"}
                    arrow={<RiArrowRightSLine size={24} className="pl-1 " />}
                    link={"/signUp"}
                  />
                </div>
              </div>
              <div className="w-full  relative z-10">
                <img
                  src={boost}
                  alt=""
                  className=" w-full h-full rounded-xl object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full z-0">
                <img
                  src={boostbg}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Boost;

// import React from "react";
// import {Link} from "react-router-dom";
// import {motion} from "framer-motion";
// import boost from "../../assets/images/guest img/boost.svg";

// const Boost = () => {
//   return (
//     <motion.div
//       className="px-4 lg:px-12 my-20 lg:py-2"
//       initial={{opacity: 0, y: 50}} // Start faded out and below the viewport
//       animate={{opacity: 1, y: 0}} // Move to full opacity and original position
//       transition={{duration: 1, ease: "easeInOut"}}
//     >
//       <div className="rounded-lg bg-gradient-card p-[1px]">
//         <div className="flex lg:flex-row flex-col gap-10 lg:gap-32 justify-between bg-setting_profile_bg rounded-lg p-6 lg:p-10">
//           {/* Text Section */}
//           <div className="text-text flex flex-col">
//             <h2 className="text-xl md:text-2xl lg:text-3xl text-wrap pb-3">
//               Ready To Boost Your DM Marketing Efforts?
//             </h2>
//             <p className="text-[17px] mb-6">
//               Sign up for a free trial and start using our premier DM
//               marketing tool today!
//             </p>
//             <Link className="bg-secondary inline bg-blue-gradient shadow-[0px_4px_100px_5px_#0653C099] p-2 px-4 rounded-sm text-white text-sm">
//               Start Free Trial
//             </Link>
//           </div>

//           {/* Image Section */}
//           <div className="flex items-center justify-center">
//             <img
//               src={boost}
//               alt="Boost DM Marketing"
//               className="w-full max-w-[300px]"
//             />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Boost;
