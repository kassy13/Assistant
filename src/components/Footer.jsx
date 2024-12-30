import React from "react";
import logo from "../assets/logo.png";
import { FaInstagram, FaRegCopyright } from "react-icons/fa";
import { CiFacebook, CiLinkedin, CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegramLine, RiYoutubeLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
  return (
    <section className="px-2 mx-auto md:px-6">
    <footer className="w-full pt-10 container">
      <div className=" px-2 text-text flex flex-col justify-between text-sm py-6 md:px-0 md:flex-row">
        <div className="w-full md:w-[25%] mb-4 md:mb-0 md:items-start">
          <div className="w-1/2 mb-3 flex items-start">
            <img src={logo} className="w-[140px]" alt="network.ai logo" />
          </div>
          <p className="w-[80%] md:w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            blanditiis possimus omnis repellat earum quo, alias pariatur, ut id
            aspernatur in unde nihil harum.
          </p>
        </div>
        <div className="w-full md:w-[10%] mb-4 md:mb-0">
          <ul className="flex flex-col justify-start items-start md:justify-between">
            <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
            <li className="cursor-pointer mr-4 text-xs mb-3 md:mr-0 hover:opacity-75">
              Home
            </li>
            <li className="cursor-pointer mr-4 text-xs mb-3 md:mr-0 hover:opacity-75">
              Features
            </li>
            <li className="cursor-pointer mr-4 text-xs mb-3 md:mr-0 hover:opacity-75">
              Pricing
            </li>
            <li className="cursor-pointer mr-4 text-xs mb-3 md:mr-0 hover:opacity-75">
              FAQs
            </li>
            <li className="cursor-pointer mr-4 text-xs mb-3 md:mr-0 hover:opacity-75">
              Testimonials
            </li>
            <li className="cursor-pointer mr-4 text-xs mb-3 md:mr-0 hover:opacity-75">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[10%] mb-4 md:mb-0">
          <ul className="flex flex-col justify-start items-start md:justify-between">
            <h2 className="font-semibold text-lg mb-3">Legal</h2>
            <li className="cursor-pointer mr-4 text-xs mb-3 md:mr-0 hover:opacity-75">
              Privacy Policy
            </li>
            <li className="cursor-pointer mr-4 text-xs mb-3 md:mr-0 hover:opacity-75">
              Terms of Service
            </li>
            <li className="cursor-pointer mr-4 text-xs mb-3 md:mr-0 hover:opacity-75">
              Fulfillment Policy
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[15%] mb-4 md:mb-0">
          <ul className="flex flex-col justify-start items-start md:justify-between">
            <h2 className="font-semibold text-lg mb-3">Contact Us</h2>
            <li className="cursor-pointer mr-4 text-xs mb-3 md:mr-0 hover:opacity-75 flex items-center">
            <HiOutlineLocationMarker className="text-lg mr-1"/> Warsaw,&nbsp;00_&nbsp;967,&nbsp;Poland.
            </li>
            <li className="cursor-pointer mr-4 text-xs mb-3 md:mr-0 hover:opacity-75 flex items-center">
            <CiMail className="text-lg mr-1"/>  contact@example.com
            </li>
            <li className="cursor-pointer mr-4 text-xs mb-3 md:mr-0 hover:opacity-75 flex items-center">
            <span className="border mr-1 border-text p-1 rounded-full text-[9px]"><LuPhone /></span>  +234 736 753 0098
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[20%] mb-4 md:mb-0">
          <h2 className="font-semibold text-lg mb-3">Join Our Newsletter</h2>
          <div>
            <div className="flex w-full overflow-hidden items-center">
              <input type="email" placeholder="Enter Email Address" className="bg-white text-xs rounded-l md:w-[60%] text-black p-2 border-none outline-none"/>
              <button className="font-bold text-xs md:w-[40%] bg-secondary p-2 rounded-r">Subscribe</button>
            </div>
            <div className="mt-4">
            <h2 className="font-semibold text-lg mb-2">Our Socials</h2>
               <div className="flex items-center text-2xl">
               <span className="border mr-1 border-text p-1 rounded-full text-xs"> <FaXTwitter /></span>
               <FaInstagram className="mr-1"/>
               <CiLinkedin  className="mr-1 text-3xl"/>
               <RiYoutubeLine className="mr-1 text-3xl"/>
               </div>
            </div>
          </div>
        </div>
      </div>
      <hr  className="fading-hr"/>
        <div className="text-[grey] font-semibold flex items-center justify-center p-4"><FaRegCopyright className="mr-1"/><p>2024 NetworkX.ai</p></div>
    </footer>
    </section>
  );
};

export default Footer;
