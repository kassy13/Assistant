// // import {InlineWidget} from "react-calendly";
// // import Calendars from "./Calendar";

// // const BookaCall = () => {
// //   return (
// //     <div className="container flex text-center flex-col items-center justify-center h-full relative leading-[45px] w-full px-12 ">
// //       <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#E1EAFD] to-[#878C97] tracking-tight lg:text-3xl text-center text-3xl font-bold bg-gradient-text">
// //         Book A Call With Us
// //       </h1>
// //       <div className="text-white text-xl mb-[10px] font-semibold flex items-center w-full md:mb-[-40px]">
// //         <p className="w-full font-normal text-lg text-text py-6">
// //           Schedule a call with us to explore how we can help you with
// //           all of your needs.
// //         </p>
// //       </div>
// //       <div
// //         className="relative mt-[-20px]  rounded-[13px] w-[100%] h-[800px] flex items-center justify-center scrollbar-none  overflow-hidden "
// //         style={{
// //           scrollbarWidth: "none", // For Firefox
// //           msOverflowStyle: "none", // For Internet Explorer and Edge
// //         }}
// //       >
// //         <InlineWidget
// //           url="https://calendly.com/networkx/30min"
// //           styles={{
// //             height: "80%",
// //             width: "100%",
// //             padding: "0px",
// //             margin: "0px",
// //             border: " none",
// //             // position: "absolute",
// //             scale: "1.2",
// //             scrollbarWidth: "none", // For Firefox
// //             msOverflowStyle: "none",
// //           }}
// //           pageSettings={{
// //             backgroundColor: "#ffffff",
// //             primaryColor: "#5368DF",
// //             textColor: "#212121",
// //           }}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default BookaCall;

// import {InlineWidget} from "react-calendly";

// const BookaCall = () => {
//   return (
//     <div className="container flex text-center flex-col items-center justify-center h-full relative leading-[45px] w-full px-4 lg:px-12 py-8">
//       <h1 className=" tracking-tight lg:text-3xl text-center text-3xl font-bold text-text">
//         Book A Call With Us
//       </h1>
//       <div className="text-white text-xl mb-[10px] font-semibold flex items-center w-full md:mb-[-40px]">
//         <p className="w-full font-normal text-lg text-text py-6">
//           Schedule a call with us to explore how we can help you with
//           all of your needs.
//         </p>
//       </div>
//       <div
//         className="relative translate-y-10 rounded-[13px] w-full h-[500px] flex items-center justify-center overflow-hidden scale-125 mt-10"
//         style={{
//           scrollbarWidth: "none", // Firefox
//           msOverflowStyle: "none", // IE and Edge
//         }}
//       >
//         <InlineWidget
//           url="https://calendly.com/networkx/30min"
//           styles={{
//             height: "100%",
//             width: "100%",
//             padding: "0px",
//             margin: "0px",
//             border: "none",
//             transform: "translate-y('200px')",
//           }}
//           pageSettings={{
//             backgroundColor: "#ffffff",
//             primaryColor: "#5368DF",
//             textColor: "#212121",
//           }}
//           className="calendly-widget"
//         />
//       </div>
//       <style jsx>{`
//         .calendly-widget {
//           transform: scale(1.2);
//           transform-origin: top;
//         }

//         /* Hide scrollbars for the parent container */
//         .container::-webkit-scrollbar {
//           display: none; /* Chrome, Safari, Opera */
//         }

//         .container {
//           -ms-overflow-style: none; /* IE and Edge */
//           scrollbar-width: none; /* Firefox */
//         }

//         /* Reset scaling on mobile */
//         @media (max-width: 768px) {
//           .calendly-widget {
//             transform: scale(1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BookaCall;

import {InlineWidget} from "react-calendly";

const BookaCall = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-full relative w-full px-4 lg:px-12 md:py-12  leading-[45px] text-center  lg:-translate-y-28 -translate-y-16">
      {/* Header Section */}
      <h1 className="tracking-tight lg:text-3xl text-2xl xxxl:text-4xl font-bold text-text">
        Book A Call With Us
      </h1>
      <div className="text-xl mb-10 font-semibold flex items-center w-full">
        <p className="w-full font-normal text-[15px] lg:text-lg xxxl:text-xl text-text pt-6">
          Schedule a call with us to explore how we can help you with
          all of your needs.
        </p>
      </div>

      {/* Calendly Widget Section */}
      {/* <div
        className="relative rounded-[13px] w-full h-[700px] flex items-center justify-center overflow-hidden  lg:mt-10 scrollbar-hidden bg-dim relative "
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
            // transform: "translateY(-50px)", // Move widget up by 50px
            position: "absolute",
          }}
          pageSettings={{
            backgroundColor: "#ffffff",
            primaryColor: "#5368DF",
            textColor: "#212121",
          }}
          className="calendly-widget"
        />
      </div> */}

      {/* CSS-in-JS for Advanced Styling */}

      <div
        className="relative lg:mt-4 md:mt-0 rounded-[13px] w-full h-[900px] lg:h-[700px] lg:overflow-y-scroll  flex items-center justify-center overflow-hidden  lg:scale-125 lg:pt-0  xxxl:scale-[1.5] xxxl:scale-x-[1.6] xxxl:my-16"
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
            position: "absolute",
            objectFit: "cover",
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

export default BookaCall;
