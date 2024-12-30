import {Link as ScrollLink} from "react-scroll";

import logo from "../../assets/images/final main logo.svg";
import {FaRegCopyright} from "react-icons/fa";
import mail from "../../assets/images/guest img/icons/Letter.svg";
import global from "../../assets/images/guest img/icons/Global.svg";
import {Link} from "react-router-dom";
import linkedin from "../../assets/images/guest img/icons/linkedin icon.svg";
import youtubr from "../../assets/images/guest img/icons/youtube icon.svg";
import slack from "../../assets/images/guest img/icons/Slack Icon 1.svg";
import x from "../../assets/images/guest img/icons/x icon.svg";
import {useContext, useEffect, useRef, useState} from "react";
import {useAuthStore} from "../../AuthStore/GlobalStates";
import {ScrollContexts} from "../../store/ScrollContext";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {token} = useAuthStore();
  const [email, setEmail] = useState("");
  const {scrollFnc, feauturesRef, pricingRef, faqsRef, videoRef, contactRef} =
    useContext(ScrollContexts);
  const formData = {
    email: email,
  };
  console.log(token);
  const subscribe = async () => {
    try {
      const response = await fetch(
        "https://api.networkx.ai/api/v1/newsletter/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            // Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("resss", response);

      if (!response.ok) {
        const errorData = await response.json();
        console.log("errdata", errorData);
        console.error("Error:", errorData.message);
        toast.error(errorData.message);
        setEmail("");
        return;
      }

      console.log("Successfully subscribed");
      toast.success("You Have succesfully Subscribed to NetworkX Newsletter.");
      // Reset the email input field
      setEmail("");
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  // const subscribe = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://api.networkx.ai/api/v1/newsletter/subscribe",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     if (!response.ok) {
  //       // const errorText = await response.text(); // Handle non-JSON responses
  //       // console.error("Error response:", errorText);
  //       return;
  //     }

  //     console.log("Successfully subscribed");
  //     console.log(response);
  //   } catch (err) {
  //     // console.error("Error:", err.message);
  //     console.log(err);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      console.log("Email is required");
      return;
    }
    console.log("sub button clicked", email);
    subscribe();
  };

  return (
    <section className="px-4 mx-auto  lg:px-20">
      <footer className="w-full pt-10 ">
        <div className=" px-2 text-text flex flex-col justify-between text-sm   py-6 lg:px-0 lg:flex-row">
          <div className="w-full lg:w-[25%] mb-4 md:mb-0 md:items-start">
            <div className=" mb-2 flex items-start w-[210px] xxxl:w-[270px] lg:-mt-2">
              <img src={logo} className="" alt="network.ai logo" />
            </div>
            <p className="w-full md:text-xl lg:text-sm xxxl:text-base">
              <span className="text-hero_bg  font-extralight leading-relaxed">
                NetworkX.ai
              </span>{" "}
              is an advanced SaaS tool designed to help you maximize your X
              account effortlessly. Leverage AI-driven content creation, DM
              automation, and targeted growth tools to engage your audience and
              drive results. Simplify your social media strategy with
              cutting-edge technology tailored for your success.
            </p>
          </div>
          <div className="w-full lg:w-[10%] mb-4 md:mb-0">
            <ul className="flex flex-col justify-start items-start md:justify-between">
              <h2 className="font-semibold text-lg md:text-2xl lg:text-lg xxxl:text-2xl mb-3">
                Pages
              </h2>

              {[
                {name: "Features", ref: feauturesRef},
                {name: "Testimonials", ref: videoRef},
                {name: "Pricing", ref: pricingRef},
                {name: "FAQs", ref: faqsRef},
                {name: "Contact Us", ref: contactRef},
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollFnc(item.ref)}
                  className={` cursor-pointer mr-4 text-base md:text-xl lg:text-sm xxxl:text-lg  mb-3 md:mr-0 hover:opacity-75`}
                >
                  {item.name}
                </button>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-[10%] mb-4 md:mb-0">
            <ul className="flex flex-col justify-start items-start md:justify-between">
              <h2 className="font-semibold text-lg md:text-2xl lg:text-lg xxxl:text-2xl mb-3">
                Legal
              </h2>
              <Link
                to={"/policy"}
                className="cursor-pointer mr-4 text-base md:text-xl  lg:text-sm  xxxl:text-lg  mb-3 md:mr-0 hover:opacity-75"
              >
                Privacy Policy
              </Link>
              <Link
                to={"/terms"}
                className="cursor-pointer mr-4 text-base md:text-xl lg:text-sm xxxl:text-lg  text-nowrap  mb-3 md:mr-0 hover:opacity-75"
              >
                Terms of Service
              </Link>
              <Link
                to={"/fullfilment"}
                className="cursor-pointer mr-4 text-base md:text-xl  lg:text-sm xxxl:text-lg   mb-3 md:mr-0 hover:opacity-75"
              >
                Fulfillment Policy
              </Link>
              <Link
                to={"/fair-use"}
                className="cursor-pointer mr-4 text-base md:text-xl  lg:text-sm xxxl:text-lg   mb-3 md:mr-0 hover:opacity-75"
              >
                Fair Use Policy
              </Link>
              <Link
                to={"/dpa"}
                className="cursor-pointer mr-4 text-base md:text-xl  lg:text-sm xxxl:text-lg  mb-3 md:mr-0 hover:opacity-75"
              >
                DPA
              </Link>
              <Link
                to={"/affiliates-policy"}
                className="cursor-pointer mr-4 text-base md:text-xl  lg:text-sm xxxl:text-lg  mb-3 md:mr-0 hover:opacity-75"
              >
                Affiliate Policy
              </Link>
            </ul>
          </div>
          <div className="w-full lg:w-[15%] mb-4 md:mb-0">
            <ul className="flex flex-col justify-start items-start md:justify-between">
              <h2 className="font-semibold text-lg md:text-2xl lg:text-lg xxxl:text-2xl mb-3">
                Get in touch
              </h2>

              <li className="cursor-pointer mr-4 mb-3 md:mr-0 hover:opacity-75 flex items-center text-base md:text-xl lg:text-sm xxxl:text-lg ">
                <a
                  href="mailto:support@networkx.ai"
                  className="flex items-center"
                >
                  <img src={mail} alt="Mail Icon" className="w-5 h-5 mr-1" />
                  support@networkx.ai
                </a>
              </li>

              <li className="cursor-pointer mr-4 text-xs xxxl:text-lg  mb-3 md:mr-0 hover:opacity-75 flex items-center">
                <img src={global} alt="" className="w-5 h-5 mr-1" />
                <p className="text-sm md:text-xl  lg:text-xs text-nowrap xxxl:text-lg ">
                  PO Box 94, Coopers Plains,{" "}
                </p>
              </li>
              <div className="ml-6 mt-[-8px] md:text-xl  lg:text-xs xxxl:text-lg ">
                <p className="pb-2">New York 14870-0094</p>
                <p>United States</p>
              </div>
            </ul>
          </div>
          <div className="w-full md:w-[70%] lg:w-[20%] mb-4 md:mb-0">
            <h2 className="font-semibold text-lg md:text-xl lg:text-lg xxxl:text-2xl mb-3">
              Join our newsletter
            </h2>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex w-full overflow-hidden items-center"
              >
                <input
                  type="email"
                  placeholder="Enter email address…"
                  value={email} // Bind the state
                  onChange={(e) => setEmail(e.target.value)} // Update the state
                  className="bg-text text-xs md:text-xl lg:text-xs xxxl:text-sm rounded-l w-full md:w-[100%] text-black p-2 border-none outline-none"
                />
                <button className="font-bold text-xs md:text-xl lg:text-xs xxxl:text-sm   bg-hero_bg p-2 rounded-r text-center pr-2">
                  Subscribe
                </button>
              </form>
              <div className="mt-5">
                <h2 className="font-semibold text-lg mb-3">
                  Connect with us on
                </h2>
                <div className="flex items-center gap-8 lg:gap-0  lg:justify-between text-2xl lg:mr-16">
                  <img src={x} alt="" className="w-4 h-4" />
                  <img src={linkedin} alt="" className="w-4 h-4" />
                  <img src={youtubr} alt="" className="w-5 h-5" />
                  <img src={slack} alt="" className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="fading-hr" />
        <div className="text-text font-semibold flex items-center justify-center pt-3 pb-5">
          <FaRegCopyright className="mr-1" />
          <p>{currentYear} NetworkX.ai</p>
        </div>
        {/* ToastContainer */}
        <ToastContainer />
      </footer>
    </section>
  );
};

export default Footer;
