import React, {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useAuthStore} from "../../../AuthStore/GlobalStates";

const Security = () => {
  const {token} = useAuthStore();
  const [old_password, setoldPassword] = useState("");
  const [new_password, setnewPassword] = useState("");
  const [new_passwordConfirm, setnewpasswordConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handlePasswordUpdate = async () => {
    try {
      const response = await fetch(
        "https://api.networkx.ai/api/v1/update-password",
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({old_password, new_password}),
        }
      );

      console.log("Response:", response);

      if (!response.ok) {
        throw new Error("Failed to update password");
      }

      const responseText = await response.text();
      console.log("Raw response body:", responseText);

      if (responseText) {
        const data = JSON.parse(responseText);
        console.log("Password updated successfully:", data);
        toast.success("Password updated successfully!");
      } else {
        console.warn("Received empty response body");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("An error occurred while updating the password.");
    }
  };

  return (
    <section className="lg:px-8 py-4 text-white lg:min-h-[50vh]  overflow-scroll scrollbar-hide lg:pb-20 md:w-full mt-14 md:mt-0">
      <ToastContainer />
      <div className="border border-white rounded-lg bg-setting_profile_bg p-5 lg:w-9/12 ">
        <h2 className="text-text text-2xl font-bold lg:mx-10">
          Update Password
        </h2>
        <p className="text-text lg:mx-10 lg:text-[15px] py-3">
          Update your password to ensure your account remains strong, secure,
          and well-protected.
        </p>
        <div className="space-y-3 lg:mx-10">
          <div className="relative  ">
            <input
              value={old_password}
              onChange={(e) => setoldPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white lg:text-sm"
              placeholder="Enter current password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-3 right-3 flex items-center text-gray-500 hover:text-gray-300"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="relative ">
            <input
              value={new_password}
              onChange={(e) => setnewPassword(e.target.value)}
              type={showConfirmPassword ? "text" : "password"}
              className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white lg:text-sm"
              placeholder="Enter your new password..."
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute top-3 right-3 flex items-center text-gray-500 hover:text-gray-300"
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="relative">
            <input
              value={new_passwordConfirm}
              onChange={(e) => setnewpasswordConfirm(e.target.value)}
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white lg:text-sm"
              placeholder="Confirm your new password…"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-3 right-3 flex items-center text-gray-500 hover:text-gray-300"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div>
            <button
              onClick={handlePasswordUpdate}
              className="bg-secondary p-2 px-10 rounded text-white text-sm mt-1"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
