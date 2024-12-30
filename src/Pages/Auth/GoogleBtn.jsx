import React, { useEffect, useRef, useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../AuthStore/AuthProvider";
import goggleLogo from "../../assets/images/goggleIcon.png";

const GoogleBtn = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { goggleSignIn } = useAuth();
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    handleWidth();
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { access_token } = tokenResponse;

      try {
        const res = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        const data = await res.json();
        setUserInfo(data);
        console.log("User Info:", data);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    },
    onError: () => {
      console.error("Google Sign-In failed");
    },
  });

  // const userinfo = {
  //   sub: "104484213234268109513",
  //   name: "Faithful Chibuike",
  //   given_name: "Faithful",
  //   family_name: "Chibuike",
  //   picture:
  //     "https://lh3.googleusercontent.com/a/ACg8ocJtO9qW-33KZLOHTIgGowLeRYVfqFZ5LQd7MUih5P_m5opEAQ=s96-c",
  //   sub: "104484213234268109513",
  // };

  // return (
  //   <div
  //     className="flex cursor-pointer my-2 items-center justify-center text-sm w-auto rounded-lg font-light text-dim"
  //     ref={containerRef}
  //   >
  //     {width > 0 && (
  //       <GoogleLogin
  //         theme="outline"
  //         size="large"
  //         buttonText="Sign in with Google"
  //         cookiePolicy={'single_host_origin'}
  //         width={width.toString()}
  //         onSuccess={(codeResponse) => {goggleSignIn(codeResponse.credential), console.log(codeResponse)}}
  //       />
  //     )}
  //   </div>
  //   );

  return (
    <div
      onClick={login}
      className="flex items-center cursor-pointer justify-center  border-[2px] p-2 rounded-lg mt-2 border-[#E1EAFD] border-opacity-45 hover:opacity-75"
    >
      <img src={goggleLogo} className="w-[15px] mr-2" alt="goggle logo" />
      <p className="text-sm mt-[3px]">Continue with Google</p>
    </div>
  );
};

export default GoogleBtn;
