import React, { useState, useEffect } from "react";
import { BsShieldLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthStore/AuthProvider";
import { useGoogleLogin } from "@react-oauth/google";
import Loader from "../../components/UI/Loader";
import { TiUser } from "react-icons/ti";
import GoogleBtn from "./GoogleBtn";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "../../AuthStore/GlobalStates";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";

const SignIn = () => {
  const { login } = useAuth();
  const { token, user, loading } = useAuthStore();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [formMessage, setFormMessage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (token && user.active_plan) {
      navigate("/dashboard");
    } else if (token && !user.active_plan) {
      navigate("/dashboard/pricing");
    }
  }, [token, user]);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(value === "" || !emailRegex.test(value));
  };

  const validatePassword = (value) => {
    setPasswordError(value.length < 6);
  };

  const submitCredentials = async (e) => {
    console.log("login ran");
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError) {
      try {
        await login({ login: email, password });
      } catch (error) {
        console.log(error);
        setFormMessage(error.message);
      }
    }
  };

  const Googlelogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    flow: "auth-code",
  });

  if (token && user.active_plan) {
    return <></>;
  }

  return (
    <div className="auth-bg p-2">
      <div className="container flex flex-col items-center justify-center h-[97vh]">
        <div className="text-center text-[#E1EAFD] flex flex-col justify-center items-center mb-4">
          <div className="text-xs bg-secondary px-4 py-1 rounded-full unselectable text-white">
            Welcome to NetworkX
          </div>
          <h1 className="text-3xl tracking-wide my-2 mb-1 font-medium">
            Maximize Your X Account's Potential
          </h1>
          <p className="max-w-[600px]">
            Unlock new potential for your X account with our AI assistant
          </p>
        </div>
        <form
          onSubmit={submitCredentials}
          style={{ boxShadow: "0 0 18px #3f8fff49" }}
          className="flex flex-col text-text bg-primary border-[#E1EAFD] border-opacity-45 border-[1px] p-4 px-7 rounded-lg max-w-[350px] w-full"
        >
          <h2 className="text-xl font-medium text-center">Sign In</h2>
          <div className="my-5 flex flex-col">
            {formMessage && (
              <p className="text-sm text-[red]">{formMessage}, Try again</p>
            )}
            <div className="pb-2">
              <label htmlFor="email" className="text-xs mb-1">
                Username/Email*
              </label>
              <div
                className={`flex items-center bg-transparent  ${
                  emailError && "border-[red]"
                } border-[1px] p-3 rounded-md mt-2 border-[#E1EAFD] border-opacity-45`}
              >
                <TiUser className="mr-2 text-lg" />
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  onBlur={() => validateEmail(email)}
                  name="email"
                  placeholder="Enter username or email"
                  className="bg-transparent w-full text-xs outline-none"
                />
              </div>
            </div>
            <div className="py-2">
              <label htmlFor="password" className="text-xs mb-">
                Enter Password*
              </label>
              <div
                className={`flex items-center bg-transparent  ${
                  passwordError && "border-[red]"
                } border-[1px] p-3 rounded-md mt-2 border-[#E1EAFD] border-opacity-45`}
              >
                <BsShieldLockFill className="mr-2 text-lg" />
                <input
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  onBlur={() => validatePassword(password)}
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  className="bg-transparent w-[100%]  text-xs outline-none"
                />
                <div onClick={() => setPasswordVisible((prev) => !prev)}>
                  {passwordVisible ? <PiEyeSlashFill /> : <PiEyeFill />}
                </div>
              </div>
            </div>
            <p className="ml-auto cursor-pointer mb-2 text-xs underline hover:opacity-70">
              Forgot Password?
            </p>
            <button
              disabled={!email || !password || emailError || passwordError}
              className="flex my-2 items-center justify-center p-4 bg-secondary text-white w-full rounded-lg font-light disabled:text-text disabled:bg-opacity-50"
            >
              <span className="w-full text-sm">Continue</span>{" "}
              {/* <FaArrowRight className="text-lg justify-self-end ml-auto" /> */}
            </button>
            <div className="flex justify-center items-center">
              <hr className="w-full h-[1px] border-none bg-[#E1EAFD] bg-opacity-45"></hr>
              <p className="px-2 text-sm">OR</p>
              <hr className="w-full h-[1px] border-none bg-[#E1EAFD] bg-opacity-45" />
            </div>
            <GoogleBtn />
          </div>
          <p className="text-text text-xs opacity-85 font-light text-center">
            New to NetworkX?
            <Link to="/signUp" className="underline ml-1 text-secondary">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <Toaster />
      {loading && <Loader />}
    </div>
  );
};

export default SignIn;
