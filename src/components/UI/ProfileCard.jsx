import React from "react";
import profImage from "../../assets/DummyMessages/user1.jpeg";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";

const ProfileCard = ({ followers }) => {
  return (
    <div className="w-full relative border-[1px] border-dim bg-black text-white p-2 rounded-xl">
      <img
        src={profImage}
        className="absolute top-[-24px] h-[55px] w-[55px] rounded-full object-cover border-black border-[2px]"
        alt="user profile image"
      />
      <button className="absolute top-3 right-3 border-dim border-[1px] rounded-full p-2 py-1 text-[10px]">
        Edit Profile
      </button>
      <h2 className="font-bold text-lg mt-[20px]">Oscar Hill</h2>
      <p className="text-sm text-dim">@oscarHill</p>
      <p className="text-sm">Developer | Crypto | Tech</p>
      <div className="flex flex-col items-start text-dim text-sm font-medium sm:items-center sm:flex-row">
        <p className="flex items-center mr-4">
          <CiLocationOn className="mr-1" /> San Francisco
        </p>
        <p className="flex items-center">
          <IoCalendarOutline className="mr-1" />
          Joined October 2021
        </p>
      </div>
      <div className="flex items-center">
        <div className="text-dim mr-4">
          <span className="font-bold text-white">38 </span>Following
        </div>
        <div className="text-dim">
          <span className="font-bold text-white"> {followers}</span> Followers
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
