import {CiLocationOn} from "react-icons/ci";
import {MdErrorOutline, MdOutlineSupportAgent} from "react-icons/md";

import {useState, useEffect, useContext} from "react";
import spinner from "../../assets/Spinner.svg";
import MapElement from "../Map";
import user from "../../assets/images/guest img/icons/User Rounded.svg";
import mail from "../../assets/images/guest img/icons/Letter.svg";
import chat from "../../assets/images/guest img/icons/chat icon.svg";
import global from "../../assets/images/guest img/icons/Global.svg";
import {ScrollContexts} from "../../store/ScrollContext";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [validForm, setValidForm] = useState();
  const [loading, setLoading] = useState(false);
  const [fromMessage, setFormMessage] = useState("");
  const {contactRef} = useContext(ScrollContexts);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  // const success = "Your message has been sent, we will get back to you soon.";
  // const failed = "Oops... Something went wrong, please try again later.";

  useEffect(() => {
    if (
      name !== "" &&
      email !== "" &&
      /^\S+@\S+\.\S+$/.test(email) &&
      message !== ""
    ) {
      setValidForm(true);
      setFormMessage("");
    } else setValidForm(false);
  }, [name, email, message]);

  const resetInput = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const data = {
    service_id: "service_78q9wxp",
    template_id: "template_6xkz9ma",
    user_id: "wgCin4U5i8jKho8Zb",
    template_params: {
      name: name,
      email: email,
      message: message,
      "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
    },
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (validForm) {
      try {
        const response = await fetch(
          "https://api.emailjs.com/api/v1.0/email/send",
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          resetInput();
          // setFormMessage(success);
          toast.success(
            "Your message has been sent. We will get back to you soon."
          );
          setLoading(false);
        } else {
          // setFormMessage(failed);
          throw new Error("Oops... Something went wrong.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error("Please check your email address and try again.");
        // setFormMessage("Please Check your Email address and try again");
      }
    } else {
      // setFormMessage("Please confirm your inputed info");

      toast.warning("Please confirm your inputted information.");
    }
    setLoading(false);
    resetInput();
  };

  return (
    <section
      className=" lg:py-[20px]  text-white  px-6 lg:!px-24 xxl:px-16  "
      id="contact"
      ref={contactRef}
    >
      <h1 className="text-text tracking-tight lg:text-3xl xxxl:text-4xl text-center text-3xl font-bold  ">
        Contact Us
      </h1>
      <p className="text-[17px] xxxl:text-xl text-text my-5 lg:mx-24 leading-6 text-center lg:px-24">
        Do you have questions, comments, or just want to say hi? If so, please
        fill out the form below, and we'll get back to you as soon as possible.
      </p>
      <div className="flex flex-col justify-between md:flex-col-reverse  md:px-0 lg:flex-row lg:mt-10 xxl:gap-6">
        <div className="w-full lg:w-[48%] xxl:w-[100%] ">
          {/* {fromMessage !== "" && (
            <p
              className={`flex text-start text-sm py-2 items-start ${
                fromMessage === success ? "text-[green]" : "text-[red]"
              } `}
            >
              <MdErrorOutline className="mr-1 mt-[3px]" /> {fromMessage}
            </p>
          )} */}
          <form className="flex flex-col items-start w-full">
            {/* Full Name Field */}
            <div className="w-full relative">
              <label className="text-sm xxxl:text-xl font-medium">
                Full Name
              </label>
              <div className="relative w-full">
                <input
                  className="flex items-center w-full bg-primary border-[1px] p-4 pl-12 my-4 rounded-lg border-text "
                  placeholder="Enter your full name…"
                  onChange={handleName}
                  value={name}
                  required
                />
                <div className="absolute inset-y-0 left-4 flex items-center">
                  <img src={user} alt="User Icon" className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Email Address Field */}
            <div className="w-full relative">
              <label className="text-sm font-medium xxxl:text-xl">
                Email Address
              </label>
              <div className="relative w-full">
                <input
                  className="flex items-center w-full bg-primary border-[1px] p-4 pl-12 my-4 rounded-lg border-text"
                  placeholder="Enter your email address…"
                  type="email"
                  onChange={handleEmail}
                  value={email}
                  required
                />
                <div className="absolute inset-y-0 left-4 flex items-center">
                  <img src={mail} alt="Email Icon" className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="w-full relative">
              <label className="text-sm font-medium xxxl:text-xl">
                Message
              </label>
              <div className="relative w-full">
                <textarea
                  className="flex items-center w-full bg-primary border-[1px] min-h-[120px] lg:min-h-[365px] p-4 pl-12 my-4 rounded-lg border-text"
                  placeholder="Write your message here"
                  onChange={handleMessage}
                  value={message}
                  required
                ></textarea>
                <div className="absolute top-4 left-4 flex items-center">
                  <img src={chat} alt="Message Icon" className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            {/* <button
              disabled={!validForm}
              onClick={sendMessage}
              className="relative bg-[#3F8EFF] w-full self-start py-1 px-10 text-white min-h-[35px] min-w-[55px] rounded-lg font-semibold hover:opacity-85"
            >
              {loading && (
                <div className="absolute rounded-lg left-0 top-0 h-[100%] flex justify-center items-center w-[100%] bg-black/70 z-[999]">
                  <img src={spinner} alt="Loading" className="w-[30px]" />
                </div>
              )}
              <span className={loading ? "hidden" : ""}>Submit</span>
            </button> */}
            <button
              className={`relative inline-flex justify-center items-center gap-2 px-3 py-[6px] text-sm font-medium bg-hero_bg transition-all duration-600 ease-in-out transform hover:scale-105 focus:outline-none text-white w-full `}
              disabled={!validForm}
              onClick={sendMessage}
            >
              {loading && (
                <div className="flex gap-1">
                  Submitting
                  <img src={spinner} alt="Loading" className="w-[30px]" />
                </div>
              )}
              <span className={loading ? "hidden" : "xxxl:text-lg"}>
                Submit
              </span>
              {/* Decorative 3D Effects */}
              <span className="absolute bottom-[-0.2rem] right-[0.1rem] w-full h-[0.2rem] bg-blue-900 skew-x-[-45deg] transition-all duration-300 ease-in-out group-hover:bottom-[-0.15rem] group-hover:h-[0.15rem] group-hover:right-[0.05rem]"></span>
              <span className="absolute left-[-0.2rem] bottom-[-0.1rem] w-[0.2rem] h-full bg-blue-900 skew-y-[-45deg] transition-all duration-300 ease-in-out group-hover:left-[-0.15rem] group-hover:w-[0.15rem] group-hover:bottom-[-0.05rem]"></span>
            </button>
          </form>
        </div>
        <div className="w-full h-full flex flex-col md:items-end justify-end mt-6 md:mt-0 lg:w-[48%] xxl:w-full">
          <div className="flex items-center w-full  border-text border p-4 rounded-lg text-text  lg:mt-10 py-4">
            <div>
              <img src={global} alt="" className="w-5 h-5 mr-2" />
            </div>
            <p className="text-sm ml-1 my-[1px] text-[9px] xxxl:text-lg">
              PO Box 94, Coopers Plains, NY 14870-0094, United States
            </p>
          </div>

          <MapElement />
        </div>
      </div>
      {/* ToastContainer */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
