import React from "react";
import { FaX } from "react-icons/fa6";
import spinner from '../../assets/Spinner.svg'

const DelateModal = ({ setDeleteModal, deleteCampaign, type, loading }) => {
  return (
    <div className="fixed w-[100vw] h-[100vh] top-0 left-0 flex items-center justify-center text-dim z-[9999]">
      <div className="bg-[#d5e2fd] relative z-[99] p-8 max-w-[400px] rounded-xl">
        <h1 className="text-md font-semibold text-center text-black">
          You're about to delete this {type}
        </h1>
        <p className="text-sm text-center py-3">
          This {type} won't appear on your {type} history anymore and this
          action cannot be reversed
        </p>
        <div className="flex items-center justify-center">
          <button
            onClick={() => setDeleteModal(null)}
            className="bg-white text-black p-6 py-2 rounded-md mx-2 hover:bg-opacity-35"
          >
            Cancel
          </button>
          <button
            onClick={deleteCampaign}
            disabled={loading}
            className="bg-[#E33629] flex items-center text-white font-semibold p-6 py-2 rounded-md mx-2 hover:bg-opacity-65 disabled:opacity-75"
          >
            Delete
            {loading && (
              <img src={spinner} alt="spinner" className="ml-1 w-[25px]" />
            )}
          </button>
        </div>
        <FaX
          onClick={() => setDeleteModal(null)}
          className="absolute top-3 right-4"
        />
      </div>
      <div
        className="absolute inset-0 rounded h-[100%] w-full z-[9] flex items-center justify-center cursor-pointer backdrop-blur-md"
        style={{ backdropFilter: "blur(5px)" }}
      />
    </div>
  );
};

export default DelateModal;
