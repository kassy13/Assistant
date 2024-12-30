import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useAuthStore } from "../../AuthStore/GlobalStates";
import useFunctionStore from "../../store/FunctionStore";

const TwoFA_Modal = ({ twoFaData,setTwoFaData }) => {
  const { fetchData } = useFunctionStore()
  const [verifiaction, setVerification] = useState("");
  const [verificationError, setVerificationError] = useState(true);

  const [errorMessage, setErrorMessage] = useState();

  const { token, setLoading } = useAuthStore();

  const ValidateInput = (value) => {
    setVerification(value);
    if (value.length < 2) {
      setVerificationError(true);
      setErrorMessage("Please enter a valid input");
    } else {
      setErrorMessage("");
      setVerificationError(false)
    }
  };

  const runTwoFactorAunthentication = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { twitter_token } = twoFaData;
    try {
      const response = await fetch(
        "https://api.networkx.ai/api/v1/save-xaccount",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ twitter_token, code: verifiaction }),
        }
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        if(data.success){
          toast('Your X account has been added.')
          fetchData()
          setTwoFaData(null)
        }
      } else {
        const errorText = await response.json();
        console.log({errorText})
        toast(errorText.errors || 'An error occurred, Try again')
        throw new Error(errorText.message || "An error occurred");
      }
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="absolute overflow-hidden w-[100%] h-[100vh] top-0 left-0 flex items-center justify-center z-[9999]">
      <form
        onSubmit={runTwoFactorAunthentication}
        className="max-w-[600px] text-white w-full relative z-[99] bg-[#091324] border p-12 py-[70px] rounded-xl"
      >
        <div className="border border-dim rounded-md p-4 py-3 my-3">
          {verificationError && (
            <p className="text-xs text-[red]">{errorMessage}</p>
          )}
          <p className="mb-2 mt-1 text-sm">{twoFaData.message}</p>
          <div className="border border-dim rounded-md p-4 py-3 my-3">
            <input
              type="text"
              onChange={(e) => {
                ValidateInput(e.target.value);
              }}
              onBlur={() => ValidateInput(verifiaction)}
              value={verifiaction}
              placeholder="enter here"
              className="text-dim placeholder-dim bg-transparent p-2 w-full outline-none text-xs"
            />
          </div>
        </div>
        <button
          disabled={verificationError}
          className="rounded-lg bg-secondary text-text font-semibold p-6 py-2 hover:bg-opacity-70 disabled:bg-[#253860]"
        >
          Proceed
        </button>
        <FaX
          onClick={() => setTwoFaData(null)}
          className="absolute top-8 right-8 cursor-pointer hover:opacity-65"
        />
      </form>
      <div
        className="absolute inset-0 rounded h-[100%] w-full z-[9] flex items-center justify-center cursor-pointer backdrop-blur-lg"
        style={{ backdropFilter: "blur(25px)" }}
      />
    </div>
  );
};

export default TwoFA_Modal;
