import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import toast from "react-hot-toast";
import { SiTicktick } from "react-icons/si";
import useFunctionStore from "../../store/FunctionStore";
import { useAuthStore } from "../../AuthStore/GlobalStates";

const AddAccount = ({ setAddAccountModal, setTwoFaData }) => {
  const { token, setLoading } = useAuthStore();
  const { fetchData } = useFunctionStore()
  const [username_email, setusername_email] = useState("");
  const [password, setpassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const validateName = (value) => {
    setusername_email(value);
    if (value.length < 4) {
      setUsernameError(true);
      setErrorMessage("X username must be at least 3 characters long");
    } else {
      setErrorMessage("");
      setUsernameError(false);
    }
  };
  const validatePassword = (value) => {
    setpassword(value);
    if (value.length < 5) {
      setPasswordError(true);
      setErrorMessage("X password cannot be less that 5 characters");
    } else {
      setErrorMessage("");
      setPasswordError(false);
    }
  };

  const toastAdded = () => {
    return (
      <div className="flex items-center">
        <SiTicktick className="text-[green] mr-2" /> X account added
        successfully
      </div>
    );
  };

  const toastUnsuccessful= (text) => {
    return (
      <div className="flex items-center">
        <FaX className="text-[red] mr-2" />{text}</div>
    );
  };

  const addAccounts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.networkx.ai/api/v1/add-xaccount",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username_email, password }),
        }
      );
      console.log(response)
      if (response.status === 401) {
        forceLogout();
      }
      const resdata = await response.json()
      console.log({resdata})
      return resdata
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const saveXaccount = async (e) => {
    e.preventDefault();
    try {
      const accountData = await addAccounts();
      console.log({accountData})
      if(accountData.twitter_token){
        setTwoFaData(accountData);
        setAddAccountModal(false);
      }else if(accountData.errors){
        console.log(accountData.errors);
        toast(toastUnsuccessful(accountData.errors)); 
        throw new Error(errorText.errors);
      } else {
        setAddAccountModal(false);
        toast(toastAdded);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setAddAccountModal(false);
      fetchData()
    }
  };

  return (
    <div className="absolute overflow-hidden w-[100%] h-[100vh] z-[999] top-0 left-0 flex items-center justify-center">
      <form
        onSubmit={saveXaccount}
        className="max-w-[600px] text-white w-full relative z-[999] bg-[#091324] border p-12 py-[70px] rounded-xl"
      >
        <p className="font-medium">Add Account</p>
        {(usernameError || password) && (
          <p className="text-xs text-[red]">{errorMessage}</p>
        )}
        <div className="border border-dim rounded-md p-4 py-3 my-3">
          <input
            type="text"
            onChange={(e) => {
              validateName(e.target.value);
            }}
            onBlur={() => validateName(username_email)}
            value={username_email}
            placeholder="Enter your X username or email"
            className="text-dim placeholder-dim bg-transparent p-2 w-full outline-none text-xs"
          />
        </div>
        <div className="border border-dim rounded-md p-4 py-3 my-3">
          <input
            type="password"
            onChange={(e) => {
              validatePassword(e.target.value);
            }}
            onBlur={() => validatePassword(password)}
            placeholder="Enter your X Password"
            className="text-dim placeholder-dim bg-transparent p-2 w-full outline-none text-xs"
          />
        </div>
        <button
          disabled={usernameError || passwordError || !password || !username_email}
          className="rounded-lg bg-secondary text-text font-semibold p-6 py-2 hover:bg-opacity-70 disabled:bg-[#253860]"
        >
          Proceed
        </button>
        <FaX
          onClick={() => setAddAccountModal(false)}
          className="absolute top-8 right-8 cursor-pointer hover:opacity-65"
        />
      </form>
      <div
        className="absolute inset-0 rounded h-[100%] w-full z-[998] flex items-center justify-center cursor-pointer backdrop-blur-lg"
        style={{ backdropFilter: "blur(25px)" }}
      />
    </div>
  );
};

export default AddAccount;
