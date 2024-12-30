import { InlineWidget } from "react-calendly";

const Booking = () => {
  return (
    <div className="container flex text-center flex-col items-center justify-center h-full relative z-[999] leading-[45px]">
      <h1 className="text-white font-bold text-2xl mb-2">
        Done-For-You Package
      </h1>
      <div className="text-white text-xl mb-[10px] font-semibold flex items-center w-full md:mb-[-40px]">
        <hr className="fading-hr w-full" />
        <p className="w-full font-normal text-lg">
          Schedule a Meeting with NetworkX.ai
        </p>
        <hr className="fading-hr w-full" />
      </div>
      <div className="relative z-[99] rounded-[13px] w-[100%] h-[700px] flex items-center justify-center">
        <InlineWidget
          url="https://calendly.com/networkx/30min"
          styles={{ height: "100%", width: "96%", padding: '0px', margin: '0px', border: ' none' }}
          pageSettings={{
            backgroundColor: "#ffffff",
            primaryColor: "#5368DF",
            textColor: "#212121",
          }}
        />
      </div>
    </div>
  );
};

export default Booking;
