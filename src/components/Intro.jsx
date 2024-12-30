import React from "react";
import Devices from "../assets/images/devices.png";

const Intro = () => {
  return (
    <section className="px-2 md:px-6">
      <div className="container  text-text flex flex-col justify-between items-center px-2 md:px-0 md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold leading-snug mb-4 text-center md:text-start">
            Your Personalized Twitter/X <br /> Assistant
          </h2>
          <p className="text-md text-center md:text-start">
            Meet your new Twitter/X DM sidekick! Our AI assistant is like having
            a helpful friend in your messages. It sorts through chats, suggests
            responses, and even does some tasks for you. Whether you're a busy
            bee or just want to be more social, our AI buddy has your back.
          </p>
        </div>
        <div className="w-full flex items-center shadow ml-0 justify-end mt-8 md:ml-6 md:w-1/2 md:mt-0">
          <img src={Devices} alt="Desktop" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
