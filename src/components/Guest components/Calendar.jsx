import React from "react";
import {InlineWidget} from "react-calendly";
const Calendars = () => {
  return (
    <div>
      <InlineWidget
        url="https://calendly.com/networkx/30min"
        styles={{
          height: "80%",
          width: "100%",
          padding: "0px",
          margin: "0px",
          border: " none",
          // position: "absolute",
          scale: "1.1",
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none",
        }}
        pageSettings={{
          backgroundColor: "#ffffff",
          primaryColor: "#5368DF",
          textColor: "#212121",
        }}
      />
    </div>
  );
};

export default Calendars;
