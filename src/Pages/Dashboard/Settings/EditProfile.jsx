import React, {useState, useEffect} from "react";
import {useAuthStore} from "../../../AuthStore/GlobalStates";
import profileImage from "../../../assets/icons/Add profile picture icon.png";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = () => {
  const {token, user} = useAuthStore();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user");
    if (storedUserInfo) {
      const userInfo = JSON.parse(storedUserInfo);
      setFirstName(userInfo.first_name || "");
      setLastName(userInfo.last_name || "");
      setEmail(userInfo.email || "");
      setPhone(userInfo.phone || "");
    }
  }, []);

  const handleSave = async () => {
    try {
      const payload = {first_name, last_name, phone, email};
      const response = await fetch(
        "https://api.networkx.ai/api/v1/update-profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("Failed to update profile");

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("An error occurred while updating the profile.");
    }
  };

  return (
    <section className="lg:px-8 py-4 text-white lg:min-h-screen overflow-scroll scrollbar-hide lg:pb-20 md:w-full mt-14 md:mt-0">
      <div className="border border-white rounded-lg bg-setting_profile_bg p-5 lg:w-9/12">
        <h2 className="text-text text-xl font-bold">Edit Profile</h2>
        <p className="text-text text-base py-2">
          Update your profile details and contact information.
        </p>

        {/* Profile Image Section */}
        <div className="flex flex-col md:flex-row gap-5 items-center lg:justify-start">
          <img
            src={profileImage}
            alt="Profile"
            className="w-[100px] lg:w-[80px] h-[100px] lg:h-[80px] rounded-full"
          />
          <label className="bg-secondary p-2 px-4 rounded cursor-pointer text-white text-sm hover:bg-opacity-75">
            Upload Picture
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col gap-3 py-5">
          <div className="flex flex-col">
            <label className="text-text text-sm mb-2">First Name</label>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name…"
              className="bg-transparent border border-white rounded-md px-4 py-2 text-white focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-text text-sm mb-2">Last Name</label>
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name…"
              className="bg-transparent border border-white rounded-md px-4 py-2 text-white focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-text text-sm mb-3">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address…"
              className="bg-transparent border border-white rounded-md px-4 py-2 text-white focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-text text-sm mb-2">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number…"
              className="bg-transparent border border-white rounded-md px-4 py-2 text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Update Button */}
        <div className="flex justify-center items-center">
          <button
            onClick={handleSave}
            className="bg-secondary p-2 px-10 rounded text-white text-sm mt-3 lg:mt-0 hover:bg-opacity-75"
          >
            Update
          </button>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </section>
  );
};

export default EditProfile;
