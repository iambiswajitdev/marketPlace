import React, { useState } from "react";
import Button from "../components/button";
import Logo from "../assets/images/logo2.png";
import login from "../assets/images/login.png";

// import Timer from "../components/timer";
import * as API from "../helpers/api";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { ArrowDownward } from "@material-ui/icons";
import { useLocation, useHistory } from "react-router";

//REDUX
import { useDispatch, useSelector } from "react-redux";

// const initialState = {
//   initialSeconds: 10,
//   initialMinute: 0,
// };

export default function Verification() {
  const history = useHistory();
  const state = useSelector((state) => state.AuthProvider);
  const counter = useSelector((state) => state);
  const location = useLocation();
  const dispatch = useDispatch();

  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(10);
  // const [resendOTP, setResendOTP] = useState(false);

  //USEEFFECTS
  // useEffect(() => {
  //   let myInterval = setInterval(() => {
  //     if (seconds > 0) {
  //       setSeconds(seconds - 1);
  //     }
  //     if (seconds === 0) {
  //       if (minutes === 0) {
  //         clearInterval(myInterval);
  //       } else {
  //         setMinutes(minutes - 1);
  //         setSeconds(59);
  //       }
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(myInterval);
  //   };
  // });

  // if (minutes === 0 && seconds === 0) {
  //   setResendOTP(true);
  // }

  //OTP
  const [otp, setOtp] = useState("");
  const [serverError, setServerError] = useState("");

  //HANDLE_CHANGE
  const handleChange = (e) => {
    setOtp(e);
  };

  //LOADER
  const [loading, setLoading] = useState(false);
  // const [second, setSecond] = useState(10);

  //ERROR-MSGS
  const [OTPError, setOTPError] = useState("");

  //HANDLE VERIFY
  const handleVerify = async () => {
    setLoading(true);
    setOTPError("");
    const flag = validateInput();
    if (!flag) {
      setLoading(false);
      return;
    }

    try {
      const requestObj = {
        emailId: location.state.email,
        verificationCode: otp,
      };

      if (state.isAuthenticated) {
        const response = await API.customer_email_verification(requestObj);
        if (response.status === 200) {
          setLoading(false);
          dispatch({
            type: "LOGIN",
            payload: {
              isAuthenticated: true,
              user: response.data.data,
              token: response.data.token,
            },
          });
          history.push({ pathname: "/" });
        }
        if (response.status === 409) {
          setLoading(false);
          setServerError("Incorrect verification code.");
        }
      } else {
        //this block will run when "isAuthenticated" is false
        const response = await API.check_password_verified_code(requestObj);
        if (response.status === 200) {
          setLoading(false);
          history.push({
            pathname: "/confirm-password",
            state: { email: location.state.email },
          });
        }
        if (response.status === 409) {
          setLoading(false);
          setServerError("Incorrect verification code.");
        }
      }
    } catch (e) {
      setLoading(false);
    }
  };

  //HANDLE RESEND OTP
  const handleResend = async () => {
    let flag = validateInput();
    if (!flag) {
      setLoading(false);
      return;
    }
    try {
      const requestObj = {
        emailId: location.state.email,
      };
      if (counter.counter === false) {
        const response = await API.resend_verification_code(requestObj);
        if (response.status === 200) {
          dispatch({
            type: "COUNTER_RESET",
          });
        }
      }
    } catch (e) {}
  };

  //INPUT VALIDATION
  const validateInput = () => {
    let flag = true;
    if (otp) {
      if (otp.length === 4) {
        setOTPError({
          field: "",
          message: "",
        });
        flag = true;
      } else {
        flag = false;
        setOTPError({
          field: "OTP",
          message: "That doesn't look like an OTP.",
        });
      }
    } else {
      flag = false;
      setOTPError({
        field: "OTP",
        message: "You missed a bit! Don't forget to add OTP.",
      });
    }
    return flag;
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center sm:py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${login})` }}
    >
      <div className=" absolute text-7xl font-bold capitalize text-white top-24 w-2/5 left-24">
        Verify your account to Get access to everything
      </div>
      <div className=" mr-24 xs:p-0 ml-auto md:w-full md:max-w-md">
        <div className="bg-white p-12 shadow-lg w-full rounded-2xl">
          <div className="flex justify-center py-5">
            <img src={Logo} alt="logo" />
          </div>

          <h1 className="font-bold text-center text-2xl mb-5">
            Enter verification code
          </h1>
          <div>
            We have just sent you a verification code to{" "}
            <span className="font-semibold">{location.state.email}</span>
          </div>
          <div className="px-5 py-7">
            <div className="mb-7">
              <OtpInput
                // value={this.state.otp}
                value={otp}
                onChange={handleChange}
                numInputs={4}
                separator={<span>-</span>}
                className=" text-black mx-auto"
                inputStyle={`border ${
                  OTPError.field === "OTP"
                    ? "border-red-300"
                    : "border-hippie-blue-500"
                }  text-5xl mx-2 focus:outline-none`}
                containerStyle=" text-center"
              />
              {OTPError.field === "OTP" && (
                <p className="my-1 text-center text-xs text-left text-red-500">
                  {OTPError.message}
                </p>
              )}
            </div>

            <Button
              size={"big"}
              className="w-full relative"
              variant={"primary"}
              id="loginBtn"
              onClick={handleVerify}
              loading={loading}
            >
              Verify
              <div className="transform -rotate-90 ml-2 loginArrow ">
                <ArrowDownward className="animate-bounce" fontSize={"small"} />
              </div>
            </Button>
            <div className="mt-2 text-red-500 text-sm text-center">
              {serverError}
            </div>
          </div>
          <div className="py-2">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button
                  className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                  onClick={handleResend}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="inline-block ml-1">
                    Send the code again in{" "}
                    {/* <span>
                    

                      <span className="text-sm text-gray-500">
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                      </span>
                    </span> */}
                  </span>
                </button>
              </div>
              {/* <div className="text-center sm:text-right  whitespace-nowrap">
                <Link to="/register">
                  <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <CreateOutlined style={{ fontSize: "15px" }} />
                    <span className="inline-block ml-1">Register</span>
                  </button>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="py-2">
            <div className="grid grid-cols-2 gap-1">
              <Link to="/">
                <div className="text-center sm:text-left whitespace-nowrap">
                  <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block align-text-top"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    <span className="inline-block ml-1">Back to Home</span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
