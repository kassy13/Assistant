import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import background from "../assets/cta.jpeg";

const Cta = ({ style, styleBtn }) => {
  return (
    <section className="px-2 md:px-6">
      <div className="container !my-14 overflow-hidden relative cta-bg text-text bg-secondary rounded-2xl  py-[70px]">
        <div
          className={`rounded-lg flex ${style} justify-between items-center p-6`}
        >
          <h1 className="font-semibold leading-snug text-[white] text-center">
            Ready to improve your X DMs?
          </h1>
          <button
            className={`rounded-md flex items-center bg-white px-4 py-2 text-black font-medium text-sm ${styleBtn} hover:bg-opacity-75`}
          >
            Start Free Trial <FaArrowRight className="ml-1" />
          </button>
        </div>
        <img
          src={background}
          draggable="false"
          className="absolute unselectable top-0 left-0 w-full opacity-[3%]"
        />
      </div>
    </section>
  );
};

export default Cta;
