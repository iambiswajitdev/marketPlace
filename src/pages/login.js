import React, { useState } from "react";
import Button from "../components/button";
import Logo from "../assets/images/logo2.png";
import login from "../assets/images/login.png";
import { useHistory } from "react-router";
import * as appUtils from "../helpers/appUtils";
import * as API from "../helpers/api";
import { Link } from "react-router-dom";
import Input from "../components/input";
import { ArrowDownward, CreateOutlined } from "@material-ui/icons";

//REDUX
import { useDispatch } from "react-redux";

const initialFormData = {
  email: "",
  password: "",
};

export default function Login() {
  // const user = useSelector((state) => state.AuthProvider);
  const dispatch = useDispatch();
  const history = useHistory();

  //LOADER
  const [loading, setLoading] = useState(false);

  //FORM-DATA
  const [formData, setFormData] = useState(initialFormData);

  //ERROR-MSGS
  // const [errorMsg, setErrorMsg] = useState("");
  const [serverMsg, setServerMsg] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  //HANDLE-CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setErrorEmail("");
        // setErrorMsg(false);
        break;
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
    setServerMsg("");
    let flag = validate();
    if (!flag) {
      setLoading(false);
      return;
    }

    try {
      const requestObj = {
        emailId: formData.email,
        password: formData.password,
      };
      console.log(requestObj);
      const response = await API.login_customer(requestObj);

      console.log(response);

      if (response.status === 200) {
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

      if (response.status === 401) {
        setLoading(false);
        if (response.data.isActive === 0) {
          dispatch({
            type: "LOGIN",
            payload: {
              isAuthenticated: true,
            },
          });
          history.push({
            pathname: "/email_verification",
            state: { email: formData.email },
          });
        } else {
          // setErrorMsg("");
          setServerMsg(response.data.message);
        }
      }
      if (response.status === 404) {
        setLoading(false);
        setServerMsg(`${formData.email} is not registered with us`);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  //VALIDATE-INPUT
  const validate = () => {
    const { email, password } = formData;
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

    if (password) {
      if (password.length > 8) {
        setErrorPassword({
          field: "password",
          message: "",
        });
        flag = true;
      }
    } else {
      setErrorPassword({
        field: "password",
        message: "You missed a bit! Don't forget to add your password.",
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
        Sign In to start shopping
      </div>
      <div className=" mr-24 xs:p-0 ml-auto md:w-full md:max-w-md">
        <div className="bg-white p-12 shadow-lg w-full rounded-2xl">
          <div className="flex justify-center py-5">
            <img src={Logo} alt="logo" />
          </div>
          <h1 className="font-bold text-center text-2xl mb-5">
            Welcome to Market Place
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

            <div className="mb-4">
              <Input
                placeholder="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errorPassword.field === "password" && (
                <p className="my-1 text-center text-xs text-left text-red-500">
                  {errorPassword.message}
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
              Login
              <div className="transform -rotate-90 ml-2 loginArrow">
                <ArrowDownward className="animate-bounce" fontSize={"small"} />
              </div>
            </Button>
            <div className="text-center text-sm text-red-500 mt-2">
              {serverMsg}
            </div>
          </div>
          <div className="py-2">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <Link to="/forgot-password">
                  <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
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
                    <span className="inline-block ml-1">Forgot Password</span>
                  </button>
                </Link>
              </div>
              <div className="text-center sm:text-right  whitespace-nowrap">
                <Link to="/register">
                  <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <CreateOutlined style={{ fontSize: "15px" }} />
                    <span className="inline-block ml-1">Register</span>
                  </button>
                </Link>
              </div>
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
