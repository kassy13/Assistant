import React, { useState, useEffect } from "react";
import { IoMdMail } from "react-icons/io";
import { TbShieldLockFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthStore/AuthProvider";
import Loader from "../../components/UI/Loader";
import GoogleBtn from "./GoogleBtn";
import { useAuthStore } from "../../AuthStore/GlobalStates";
import { TiUser } from "react-icons/ti";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";

const SignUp = () => {
  const { register } = useAuth();
  const { token, user, loading } = useAuthStore();
  const navigate = useNavigate();

  const [formMessage, setFormMessage] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstNameError, setfirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [ConfirmPasswordError, setConfirmPasswordError] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(null);

  useEffect(() => {
    if (token && user) {
      navigate("/dashboard");
    }
  }, [token]);

  const displayPassword = (value) => {
     passwordVisible === value ? setPasswordVisible(null) :     setPasswordVisible(value);
  };

  const validateFirstName = (value) => {
    setfirstNameError(value.trim() === "");
  };

  const validateLastName = (value) => {
    setLastNameError(value.trim() === "");
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(value === "" || !emailRegex.test(value));
  };

  const validatePassword = (value) => {
    const passwordRegex =
      /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    setPasswordError(value === "" || !passwordRegex.test(value));
  };

  const validateConfirmPassword =(e)=> {
    setPasswordError(password !== e)
  }

  const submitCredentials = async (e) => {
    e.preventDefault();
    validateFirstName(firstName);
    validateLastName(lastName);
    validateEmail(email);
    validatePassword(password);

    if (
      firstName &&
      lastName &&
      !lastNameError &&
      !emailError &&
      !passwordError
    ) {
      try {
        await register({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        });
      } catch (error) {
        setFormMessage(error.message);
      }
    }
  };

  if (token && user) {
    return <></>;
  }

  return (
    <div className="auth-bg p-2">
      <div className="container flex flex-col items-center justify-center h-[100vh] p-2">
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
          className="flex flex-col items-center text-text border-opacity-45 border-[1px] bg-[#010c1e] border-[#E1EAFD] p-8 py-5 rounded-lg max-w-[600px] w-full"
        >
          <h2 className="text-xl font-semibold mb-2 mx-auto">Sign Up</h2>
          {formMessage && (
            <p className="text-sm text-[red] mr-auto">
              {formMessage}, Try again
            </p>
          )}
          <div className="flex justify-between w-[100%] flex-col md:flex-row">
            <div className="w-[100%] md:w-[49%]">
              <label htmlFor="name" className="text-xs mb-1">
                First Name*
              </label>
              <div
                className={`flex items-center bg-transparent  ${
                  firstNameError && "border-[red]"
                } border-[1px] p-3 rounded-md mt-2 border-[#E1EAFD] border-opacity-45`}
              >
                <TiUser className="mr-2 text-lg" />
                <input
                  placeholder="Enter First Name..."
                  className="bg-transparent text-xs outline-none"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    validateFirstName(e.target.value);
                  }}
                  onBlur={() => validateFirstName(firstName)}
                  name="name"
                  type="text"
                />
              </div>
            </div>
            <div className="w-[100%] md:w-[49%]">
              <label htmlFor="email" className="text-xs mb-1">
                Last Name*
              </label>
              <div
                className={`flex items-center bg-transparent  ${
                  lastNameError && "border-[red]"
                } border-[1px] p-3 rounded-md mt-2 border-[#E1EAFD] border-opacity-45`}
              >
                <TiUser className="mr-2 text-lg" />
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                    validateLastName(e.target.value);
                  }}
                  onBlur={() => validateLastName(lastName)}
                  name="lastname"
                  placeholder="Enter Last Name..."
                  type="text"
                  className="bg-transparent text-xs outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between py-1 w-[100%] flex-col md:flex-row">
            <div className="w-[100%] md:w-[49%]">
              <label htmlFor="username" className="text-xs mb-1">
                Username*
              </label>
              <div
                className={`flex items-center bg-transparent  border-[1px] p-3 rounded-md mt-2 border-[#E1EAFD] border-opacity-45`}
              >
                <TiUser className="mr-2 text-lg" />
                <input
                  placeholder="Enter username.."
                  type="text"
                  className="bg-transparent text-xs outline-none"
                />
              </div>
            </div>
            <div className="w-[100%] md:w-[49%]">
              <label htmlFor="email" className="text-xs mb-1">
                Email Address*
              </label>
              <div
                className={`flex items-center bg-transparent  ${
                  emailError && "border-[red]"
                } border-[1px] p-3 rounded-md mt-2 border-[#E1EAFD] border-opacity-45`}
              >
                <IoMdMail className="mr-2" />
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  onBlur={() => validateEmail(email)}
                  name="email"
                  placeholder="Enter Email Address"
                  type="email"
                  className="bg-transparent text-xs outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between py-1 w-[100%] flex-col md:flex-row">
            <div className="w-[100%] md:w-[49%]">
              <label htmlFor="password" className="text-xs mb-1">
                Password*
              </label>
              <div
                className={`flex items-center bg-transparent  ${
                  passwordError && "border-[red]"
                } border-[1px] p-3 rounded-md mt-2 border-[#E1EAFD] border-opacity-45`}
              >
                <TbShieldLockFilled className="mr-2 text-lg" />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  onBlur={() => validatePassword(password)}
                  name="password"
                  placeholder="Enter Password"
                  type={passwordVisible === 1 ? "text" : "password"}
                  className="bg-transparent w-full text-xs outline-none"
                />
                <div onClick={() => displayPassword(1)}>
                  {passwordVisible === 1 ? <PiEyeSlashFill /> : <PiEyeFill />}
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[49%]">
              <label htmlFor="email" className="text-xs mb-1">
                Confirm Password*
              </label>
              <div
                className={`flex items-center bg-transparent  ${
                  ConfirmPasswordError && "border-[red]"
                } border-[1px] p-3 rounded-md mt-2 border-[#E1EAFD] border-opacity-45`}
              >
                <TbShieldLockFilled className="mr-2 text-lg" />
                <input
                  onChange={(e) => {
                    validateConfirmPassword(e.target.value);
                  }}
                  onBlur={(e) => validateConfirmPassword(e.target.value)}
                  name="confirm password"
                  placeholder="Confirm password..."
                  type={passwordVisible === 2 ? "text" : "password"}
                  className="bg-transparent w-full text-xs outline-none"
                />
                <div onClick={() => displayPassword(2)}>
                  {passwordVisible === 2 ? <PiEyeSlashFill /> : <PiEyeFill />}
                </div>
              </div>
            </div>
          </div>

          {passwordError && (
            <p className="text-[12px] text-[red] mr-auto">
              Password must be at least 8 characters long and contain at least
              one special character.
            </p>
          )}
          <button
            disabled={
              !firstName ||
              !lastName ||
              !email ||
              !password ||
              firstNameError ||
              lastNameError ||
              emailError ||
              passwordError
            }
            className="my-2 w-[100%] justify-center p-4 text-white bg-secondary px-8 rounded-lg font-light disabled:text-text disabled:bg-opacity-65"
          >
            <span className="text-sm">Continue</span>
          </button>

          <div className="flex justify-center items-center w-[70%]">
            <hr className="w-full h-[1px] border-none bg-text" />
            <p className="px-2">OR</p>
            <hr className="w-full h-[1px] border-none bg-text" />
          </div>
          <div className="w-full">
            <GoogleBtn />
          </div>
          <p className="text-text mt-2 text-sm opacity-85 font-light text-center">
            Already have an account?{" "}
            <Link to="/signIn" className="underline text-secondary">
              Sign In
            </Link>
          </p>
        </form>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default SignUp;
