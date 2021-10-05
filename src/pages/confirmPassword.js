import React, { useState } from "react";
import Button from "../components/button";
import Logo from "../assets/images/logo2.png";
import login from "../assets/images/login.png";
import { useHistory, useLocation } from "react-router";
import * as appUtils from "../helpers/appUtils";
import * as API from "../helpers/api";
import { Link } from "react-router-dom";
import Input from "../components/input";
import Lottie from "react-lottie";
import animationData from "../components/lottie/success.json";
import { ArrowDownward, RemoveRedEye, VisibilityOff } from "@material-ui/icons";

//REDUX
import { useDispatch } from "react-redux";

const initialFormData = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function ConfirmPassword() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [passwordView, setPasswordView] = useState(false);

  //LOADER
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  //FORM-DATA
  const [formData, setFormData] = useState(initialFormData);

  //ERROR-MSGS
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  //HANDLE-CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "password":
        setErrorPassword("");
        break;
      default:
    }
    setFormData({ ...formData, [name]: value });
  };

  //HANDLE-SUBMIT
  const handleSubmit = async () => {
    setLoading(true);
    let flag = validate();
    if (!flag) {
      setLoading(false);
      return;
    }
    try {
      const requestObj = {
        emailId: location.state.email,
        password: formData.password,
      };
      const response = await API.customer_confirm_forgot_password(requestObj);
      console.log(response);
      if (response.status === 200) {
        setSuccessMsg(true);
      }

      if (response.status === 401) {
        if (response.data.isActive === 0) {
          history.push({
            pathname: "/email_verification",
            state: { email: formData.email },
          });
        }
      }
    } catch (e) {}
  };

  const handleLogin = () => {
    dispatch({
      type: "LOGOUT",
    });
    history.push({
      pathname: "/login",
    });
  };

  //VALIDATE-INPUT
  const validate = () => {
    const { confirmPassword, password } = formData;
    let flag = true;

    let validatePassword = appUtils.validatePass(password);
    if (validatePassword === 1) {
      setErrorPassword({
        field: "password",
        message: "",
      });
      if (confirmPassword) {
        if (confirmPassword === password) {
          setErrorConfirmPassword({
            field: "confirmPassword",
            message: "",
          });
        } else {
          setErrorConfirmPassword({
            field: "confirmPassword",
            message: "That doesn't look like the same.",
          });
          flag = false;
        }
      } else if (confirmPassword.length === 0) {
        setErrorConfirmPassword({
          field: "confirmPassword",
          message:
            "You missed a bit! Don't fogot to add your confirm password.",
        });
        flag = false;
      }
    }
    if (!(validatePassword === 1)) {
      let msg = "";
      if (validatePassword === 0) {
        msg = "You missed a bit! Don't forget to add your password.";
      } else {
        msg = "That doesn't look like an email address.";
      }
      setErrorPassword({
        field: "password",
        message: msg,
      });
      flag = false;
    }
    return flag;
  };

  const toggleView = () => {
    setPasswordView(!passwordView);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center sm:py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${login})` }}
    >
      <div className=" absolute text-7xl font-bold capitalize text-white top-24 w-2/5 left-24">
        Forgot your password? Let's get you a new one
      </div>
      <div className=" mr-24 xs:p-0 ml-auto md:w-full md:max-w-md">
        {successMsg ? (
          <div
            className="bg-white p-10 py-32 shadow-lg w-full rounded-2xl relative"
            // style={{ height: "calc(100vh - 200px)" }}
          >
            <Lottie options={defaultOptions} height={300} width={300} />
            <div className="text-center">
              <div className="text-3xl font-semibold">Password Updated</div>
              <div className="text-base">
                Your password has been changed successfully. Use you new
                password to login.
              </div>
              <div className="w-2/3 mx-auto mt-2">
                <Button
                  size={"big"}
                  className="w-full relative"
                  variant={"primary"}
                  id="loginBtn"
                  onClick={handleLogin}
                >
                  Back to login
                  <div className="transform -rotate-90 ml-2 loginArrow ">
                    <ArrowDownward
                      className="animate-bounce"
                      fontSize={"small"}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-12 shadow-lg w-full rounded-2xl">
            <div className="flex justify-center py-5">
              <img src={Logo} alt="logo" />
            </div>
            <h1 className="font-bold text-center text-2xl mb-5">
              Give us your email and we will send you a verification code
            </h1>
            <div className="px-5 py-7">
              <div className="mb-4 relative">
                <Input
                  placeholder="New Password"
                  name="password"
                  type={passwordView ? "text" : "password"}
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="right-3 absolute top-3">
                  <div onClick={toggleView}>
                    {passwordView ? <RemoveRedEye /> : <VisibilityOff />}
                  </div>
                </div>
                {errorPassword.field === "password" && (
                  <p className="my-1 text-center text-xs text-left text-red-500">
                    {errorPassword.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errorConfirmPassword.field === "confirmPassword" && (
                  <p className="my-1 text-center text-xs text-left text-red-500">
                    {errorConfirmPassword.message}
                  </p>
                )}
              </div>

              <Button
                size={"big"}
                className="w-full relative"
                variant={"primary"}
                id="loginBtn"
                onClick={handleSubmit}
                loading={loading}
              >
                Send me the code
                <div className="transform -rotate-90 ml-2 loginArrow ">
                  <ArrowDownward
                    className="animate-bounce"
                    fontSize={"small"}
                  />
                </div>
              </Button>
            </div>

            <div className="py-2">
              <div className="grid grid-cols-2 gap-1">
                <Link to="/login">
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
                      <span className="inline-block ml-1">Back to Login</span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
