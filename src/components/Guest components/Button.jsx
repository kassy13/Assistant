// import React from "react";
// import {RiArrowRightSLine} from "react-icons/ri";
// import {Link} from "react-router-dom";

// const Button = ({link, text, arrow, size, style, onclick}) => {
//   return (
//     <div className="relative inline-block">
//       <Link
//         to={link}
//         className={`relative inline-flex items-center gap-2 px-3 py-[6px] text-sm font-medium bg-hero_bg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none text-white ${style}`}
//       >
//         {text}
//         {arrow}
//         {size}
//         {/* Decorative 3D Effects */}
//         <span className="absolute bottom-[-0.4rem] right-[0.2rem] w-full h-[0.4rem] bg-blue-900  skew-x-[-45deg] transition-all duration-300 ease-in-out group-hover:bottom-[-0.3rem] group-hover:h-[0.3rem] group-hover:right-[0.1rem]"></span>
//         <span className="absolute left-[-0.4rem] bottom-[-0.2rem] w-[0.4rem] h-full bg-blue-900 skew-y-[-45deg] transition-all duration-300 ease-in-out group-hover:left-[-0.3rem] group-hover:w-[0.3rem] group-hover:bottom-[-0.1rem]"></span>
//       </Link>
//     </div>
//   );
// };

// export default Button;

import React from "react";
import {Link} from "react-router-dom";

const Button = ({link, text, arrow, size, style, onclick}) => {
  return (
    <div className="relative inline-block">
      <Link
        to={link}
        className={`relative inline-flex items-center gap-2 px-3 py-[6px] text-sm font-medium bg-hero_bg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none text-white xxxl:text-[20px] xxxl:py-[8px] ${style}`}
      >
        {text}
        {arrow}
        {size}
        {/* Decorative 3D Effects */}
        <span className="absolute bottom-[-0.2rem] right-[0.1rem] w-full h-[0.2rem] bg-blue-900 skew-x-[-45deg] transition-all duration-300 ease-in-out group-hover:bottom-[-0.15rem] group-hover:h-[0.15rem] group-hover:right-[0.05rem]"></span>
        <span className="absolute left-[-0.2rem] bottom-[-0.1rem] w-[0.2rem] h-full bg-blue-900 skew-y-[-45deg] transition-all duration-300 ease-in-out group-hover:left-[-0.15rem] group-hover:w-[0.15rem] group-hover:bottom-[-0.05rem]"></span>
      </Link>
    </div>
  );
};

export default Button;
