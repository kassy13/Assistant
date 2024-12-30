import React from "react";
import {RiCloseLine} from "react-icons/ri";

const RemoveAccountModal = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999999]">
      <div className="bg-setting_profile_bg rounded-lg border border-white shadow-lg p-6 w-full max-w-lg relative">
        <h2 className="text-text font-bold text-lg my-3">
          Are You Sure You Want to Reconnect Your Account?
        </h2>
        <RiCloseLine
          size={24}
          className="absolute top-2 right-4"
          onClick={onClose}
        />

        <p className="text-text text-center text-sm mb-6 font-light">
          Reconnecting your account will sync your data and settings again. If
          there are any issues during the process, you may need to log in or
          verify your information.
        </p>
        <p className="text-text text-center text-sm mb-6 font-light">
          Click <span className="font-bold">‘Reconnect'</span> to proceed or
          <span className="font-bold">'Cancel'</span> to return.
        </p>
        <div className="flex justify-end gap-4 w-full">
          <button
            onClick={() => {
              console.log("Account reconnected"); /// Replace with actual remove logic
              onClose();
            }}
            className="px-4 py-2 w-full text-sm bg-secondary text-white rounded-md"
          >
            Reconnect
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border text-sm  border-text text-text rounded-md w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveAccountModal;
