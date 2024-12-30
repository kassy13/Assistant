import { CiLocationOn } from "react-icons/ci";
import { MdErrorOutline, MdOutlineSupportAgent } from "react-icons/md";
import MapElement from "./Map";
import { useState, useEffect } from "react";
import spinner from '../assets/Spinner.svg'

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [validForm, setValidForm] = useState();
  const [loading, setLoading] = useState(false);
  const [fromMessage, setFormMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const success = "Your message has been sent, we will get back to you soon.";
  const failed = "Oops... Something went wrong, please try again later.";

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
          setFormMessage(success);
          setLoading(false);
        } else {
          setFormMessage(failed);
          throw new Error("Oops... Something went wrong.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setFormMessage("Please Check your Email address and try again");
      }
    } else {
      setFormMessage("Please confirm your inputed info");
    }
    setLoading(false);
    resetInput();
  };

  return (
    <section className="container flex flex-col py-[60px] justify-between text-white !px-6 md:px-0 md:flex-row">
      <div className="w-full md:w-[48%]">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-sm my-3 leading-6">
          Do you have questions, comments, or just want to say hi? If so, please
          fill out the form below, and we'll get back to you as soon as
          possible. Your feedback and inquiries are important to us!
        </p>
        {fromMessage !== "" && (
          <p
            className={`flex text-start text-sm py-2 items-start ${
              fromMessage === success ? "text-[green]" : "text-[red]"
            } `}
          >
            <MdErrorOutline className="mr-1 mt-[3px]" /> {fromMessage}
          </p>
        )}
        <form className="flex flex-col items-start">
          <label>Name</label>
          <input
            className="flex items-center w-full bg-[#091324] border-[1px] p-4 my-4 rounded-lg border-text"
            placeholder="Full Name"
            onChange={handleName}
            value={name}
            required
          />
          <label>Email</label>
          <input
            className="flex items-center w-full bg-[#091324] border-[1px] p-4 my-4 rounded-lg border-text"
            placeholder="Email Address"
            type="email"
            onChange={handleEmail}
            value={email}
            required
          />
          <label>Message</label>
          <textarea
            className="flex items-center w-full bg-[#091324] border-[1px] min-h-[120px] p-4 my-4 rounded-lg border-text"
            placeholder="Write your message here"
            onChange={handleMessage}
            value={message}
            required
          ></textarea>
          <button
            disabled={!validForm}
            onClick={sendMessage}
            className="relative bg-secondary self-start py-1 px-10 text-white min-h-[35px] min-w-[55px] rounded-full font-semibold hover:opacity-85"
          >
            {loading && (
              <div className="absolute rounded-full left-0 top-[0] h-[100%] flex justify-center items-center w-[100%] bg-black/70 z-[999]">
                <img src={spinner} className="w-[30px]"/>
              </div>
            )} 
            <span className={loading ? 'hidden' : ''}>Send</span>
          </button>
        </form>
      </div>
      <div className="w-full flex flex-col md:items-end justify-end mt-6 md:mt-0 md:w-[48%]">
        <div className="flex items-center text-white">
          <span className="bg-[#091324] p-2 text-xl rounded">
            <MdOutlineSupportAgent />
          </span>
          <p className="font-medium text-white ml-1">Get In Touch</p>
        </div>
        <MapElement />
        <div className="flex mb-[0px] items-center bg-[#253860] px-4 p-2 rounded text-dim md:mb-[50px]">
          <CiLocationOn />
          <p className="text-sm ml-1">
            7 Chatfield PI E, Painted Post, NY 14870, United States.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
