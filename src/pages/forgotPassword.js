import React, { useState } from "react";
import Button from "../components/button";
import Logo from "../assets/images/logo2.png";
import login from "../assets/images/login.png";
import { useHistory } from "react-router";
import * as appUtils from "../helpers/appUtils";
import * as API from "../helpers/api";
import { Link } from "react-router-dom";
import Input from "../components/input";
import { ArrowDownward } from "@material-ui/icons";

//REDUX
// import { useSelector, useDispatch } from "react-redux";

const initialFormData = {
  email: "",
  password: "",
};

export default function ForgotPassword() {
  const history = useHistory();

  //LOADER
  const [loading, setLoading] = useState(false);

  //FORM-DATA
  const [formData, setFormData] = useState(initialFormData);

  //ERROR-MSGS
  // const [errorMsg, setErrorMsg] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [serverError, setServerError] = useState("");

  //HANDLE-CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setErrorEmail("");
        // setErrorMsg(false);
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
        emailId: formData.email,
      };

      console.log(requestObj);
      const response = await API.customer_forgot_password(requestObj);

      if (response.status === 200) {
        history.push({
          pathname: "/email_verification",
          state: { email: formData.email },
        });

        // dispatch({
        //   type: "LOGIN",
        //   payload: {
        //     isAuthenticated: true,
        //     user: response.data.data,
        //     token: response.data.token,
        //   },
        // });
      }

      if (response.status === 401) {
        if (response.data.isActive === 0) {
          history.push({
            pathname: "/email_verification",
            state: { email: formData.email },
          });
        }
      }
    } catch (e) {
      setLoading(false);
      setServerError("Internet Error!");
      console.log("server error");
    }
  };

  //VALIDATE-INPUT
  const validate = () => {
    const { email } = formData;
    let flag = true;

    let validateEmail = appUtils.validateEmail(email);
    if (validateEmail === 1) {
      setErrorEmail({
        field: "email",
        message: "",
      });
    }
    if (!(validateEmail === 1)) {
      let msg = "";
      if (validateEmail === 0) {
        msg = "You missed a bit! Don't forget to add your email address.";
      } else {
        msg = "That doesn't look like an email address.";
      }
      setErrorEmail({
        field: "email",
        message: msg,
      });
      flag = false;
    }
    return flag;
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
        <div className="bg-white p-12 shadow-lg w-full rounded-2xl">
          <div className="flex justify-center py-5">
            <img src={Logo} alt="logo" />
          </div>
          <h1 className="font-bold text-center text-2xl mb-5">
            Give us your email and we will send you a verification code
          </h1>
          <div className="px-5 py-7">
            <div className="mb-4">
              <Input
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errorEmail.field === "email" && (
                <p className="my-1 text-center text-xs text-left text-red-500">
                  {errorEmail.message}
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
                <ArrowDownward className="animate-bounce" fontSize={"small"} />
              </div>
            </Button>
            <div className="text-center text-sm text-red-500 mt-2">
              {serverError}
            </div>
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
      </div>
    </div>
  );
}
