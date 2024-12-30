import React from "react";

const Heading = ({ text, headText }) => {
  return (
    <div className="text-text flex flex-col items-center">
      <div className="text-xs bg-secondary px-5 py-1 rounded-full">{text}</div>
      <h2 className="pt-4 text-center pb-2 text-3xl leading-snug font-semibold">
        {headText}
      </h2>
    </div>
  );
};

export default Heading;
