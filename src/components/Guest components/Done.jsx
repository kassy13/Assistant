// import React from "react";
// import Calendars from "./Calendar";
// import {InlineWidget} from "react-calendly";

// const Done = () => {
//   return (
//     <div className="">
//       <h3 className="text-center py-2 text-3xl font-bold">
//         Done For You Packages
//       </h3>
//       <p className="text-center font-bold text-base ">
//         Would you like the experts to take care of everything for you?{" "}
//       </p>
//       <p className="text-center py-2 lg:text-sm text-base px-5">
//         Our Done-For-You Packages offer a comprehensive solution. Schedule a
//         call with one of our sales representatives to discuss your business
//         needs and objectives. From there, we’ll create a custom plan tailored to
//         help you achieve your goals seamlessly.
//       </p>
//       <div className="h-screen overflow-hidden">
//         <InlineWidget
//           url="https://calendly.com/networkx/30min"
//           styles={{
//             height: "80%",
//             width: "100%",
//             padding: "0px",
//             margin: "0px",
//             border: " none",
//             // position: "absolute",
//             scale: "1.2",
//             scrollbarWidth: "none", // For Firefox
//             msOverflowStyle: "none",
//           }}
//           pageSettings={{
//             backgroundColor: "#ffffff",
//             primaryColor: "#5368DF",
//             textColor: "#212121",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Done;

import React from "react";
import {InlineWidget} from "react-calendly";

const Done = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 lg:px-12 h-auto mb-8 mt-4">
      <h3 className="text-center py-4 text-2xl lg:text-3xl xxxl:text-4xl font-bold">
        Done For You Packages
      </h3>
      {/* <p className="text-center font-bold text-sm lg:text-base">
        Would you like the experts to take care of everything for you?
      </p> */}
      <p className="text-center py-2 text-xs lg:text-base xxxl:text-xl px-2 lg:px-24 lg:leading-6  ">
        Want the experts to handle it all for you? Book a call today for
        personalized planning and pricing!” Make the color, size, and font the
        same as the other heading texts
      </p>
      <div
        className="relative mt-10 md:mt-0 md:-translate-y-8 rounded-[13px] w-full h-[800px] lg:h-[700px] lg:overflow-y-scroll  flex items-center justify-center overflow-hidden   lg:scale-125 lg:mt-14 xxxl:scale-[1.5] xxxl:scale-x-[1.6] xxxl:my-36"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
      >
        <InlineWidget
          url="https://calendly.com/networkx/30min"
          styles={{
            height: "100%",
            width: "100%",
            padding: "0px",
            margin: "0px",
            border: "none",
          }}
          pageSettings={{
            backgroundColor: "#ffffff",
            primaryColor: "#5368DF",
            textColor: "#212121",
          }}
          className="calendly-widget"
        />
      </div>
      <style jsx>{`
        .calendly-widget {
          transform: scale(1.2);
          transform-origin: top;
        }

        /* Hide scrollbars for the parent container */
        .container::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .container {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        /* Reset scaling on mobile */
        @media (max-width: 768px) {
          .calendly-widget {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Done;
