import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaCircleExclamation } from "react-icons/fa6";

const Prompt = ({ setStepIndex }) => {
  const [prompt, setprompt] = useState(
    window.localStorage.getItem("posterPrompt") || ""
  );

  const saveandContinue = () => {
    window.localStorage.setItem("posterPrompt", prompt);
    setStepIndex(1);
  };
  const handlePromptChange = (value) => {
    setprompt(value);
  };

  return (
    <div className="max-w-[700px] w-full mx-auto text-text">
      <div className="bg-[#E1EAFD] w-full mt-2 p-2 min-h-[300px] rounded-md">
        <h1 className="text-black text-center font-bold border-b-[2px] py-2 border-b-[#878C97]">
          Write A Prompt For Your Posts
        </h1>
        <textarea
          onChange={(e) => handlePromptChange(e.target.value)}
          value={prompt}
          placeholder="Enter a detailed prompt to guide the AI model on what to post to your account…"
          className="w-full min-h-[300px] outline-none border-none bg-transparent text-black p-2 text-sm placeholder:italic placeholder:text-black"
        ></textarea>
        <div className="flex justify-between items-center pt-4 h-[10%] border-t-[1px] border-t-[#737373]">
          <div>
            <button className="bg-[#091324] flex items-center text-xs rounded-md p-2 my-1">
              Best Prompt Practices
              <FaCircleExclamation className="ml-2" />
            </button>
            <button className="bg-[#091324] flex items-center text-xs rounded-md p-2 my-1">
              Purchase Customized Prompts By Experts{" "}
              <BiChevronRight className="ml-2 text-sm" />
            </button>
          </div>
          <button
            onClick={saveandContinue}
            className="bg-secondary p-2 rounded text-xs disabled:opacity-70"
            disabled={prompt.length < 1}
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
