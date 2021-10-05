import { Button, Select } from "@material-ui/core";
import { ArrowDownward, CreateOutlined } from "@material-ui/icons";
import { Col, Container, Row } from "react-bootstrap";
import Input from "../../components/input";
import { logoImg } from "../../utils/statickData";
import { Link } from "react-router-dom";

const VendorRegister = () => {
  return (
    <>
      <div className="vendorLogin sm:py-12">
        <Container>
          <Row>
            <Col lg={8} xs={12}>
              <h1 className="absolute text-7xl font-bold capitalize text-white top-24 w-2/5 left-24">
                vendor registration
              </h1>
            </Col>
            <Col lg={4} xs={12}>
              <div className="bg-white registre  p-12 shadow-lg w-full rounded-2xl">
                <div className="flex justify-center py-5">
                  <img src={logoImg} alt="logo" />
                </div>
                <h1 className="font-bold text-center text-2xl mb-5">
                  Welcome to Market Place
                </h1>
                <div className="registration">
                  <Input placeholder="first Name" name="" />
                  <Input className="mt-3" placeholder="last Name" name="" />
                  <Input className="mt-3" placeholder="mobile No" name="" />
                  <Input className="mt-3" placeholder="email Id" name="email" />
                  <Input
                    className="mt-3"
                    type="password"
                    placeholder="password"
                    name="password"
                  />
                  <Select className="mt-3 form-control">
                    <option>country Name</option>
                  </Select>
                  <Select className="mt-3 form-control">
                    <option>state Name</option>
                  </Select>
                  <Input className="mt-3" placeholder="zip Code" name="" />
                  <Input
                    className="mt-3"
                    placeholder="business Name"
                    name="email"
                  />
                  <Input className="mt-3" placeholder="licence No" name="" />
                  <Input
                    className="mt-3"
                    placeholder="expire Date"
                    name="email"
                  />
                  <Input className="mt-3" placeholder="details" name="" />
                </div>
                <Button
                  size={"big"}
                  variant={"primary"}
                  className="w-full vendorBtn relative mt-3"
                  id="loginBtn"
                >
                  Login
                  <div className="transform -rotate-90 ml-2 loginArrow ">
                    <ArrowDownward
                      className="animate-bounce"
                      fontSize={"small"}
                    />
                  </div>
                </Button>
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
                          <span className="inline-block ml-1">
                            Forgot Password
                          </span>
                        </button>
                      </Link>
                    </div>
                    <div className="text-center sm:text-right  whitespace-nowrap">
                      <Link to="/vendor/login">
                        <button className="transition duration-200 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                          <CreateOutlined style={{ fontSize: "15px" }} />
                          <span className="inline-block ml-1">login</span>
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
                          <span className="inline-block ml-1">
                            Back to Home
                          </span>
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default VendorRegister;
