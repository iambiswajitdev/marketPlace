import React from "react";
import Logo from "../assets/images/logo2.png";

import {
  Favorite,
  KeyboardArrowDown,
  LocalOffer,
  Person,
  PinDrop,
  ShoppingCart,
} from "@material-ui/icons";

import Button from "./button";
import Button2 from "./button2";

import { BiGitCompare } from "react-icons/bi";
import { Link, useLocation, useHistory } from "react-router-dom";

//REDUX
import { useSelector } from "react-redux";
import SideMenu from "./sideMenu";

export default function MegaMenu() {
  const state = useSelector((state) => state.AuthProvider);
  const [show, setShow] = React.useState(false);
  const location = useLocation();
  const history = useHistory();

  let menuData = [];
  state.category &&
    state.category.map((item) => {
      return menuData.push(item);
    });

  const handleMouseOver = (mega, id) => {
    // setMouseOver(true);
    if (mega === true) {
    }
  };

  const handleMouseOut = () => {};

  const handleCart = () => {
    history.push("/cart");
  };

  return (
    <div>
      {/* TOP SECTION */}
      <div className="px-24 bg-white py-1">
        <div className="grid grid-flow-col grid-cols-2 gap-4">
          <div className="uppercase text-sm my-auto text-gray-500">
            Welcome to Market Place
          </div>
          <div className="text-sm">
            <div className="grid grid-flow-col grid-cols-12 gap-2">
              <div className="my-auto ">
                <Button2>USD</Button2>
              </div>
              <div className="my-auto ">
                <Button2>Eng</Button2>
              </div>
              <div className="my-auto col-span-2">
                <Button2>Blog</Button2>
              </div>
              <div className="my-auto col-span-2">
                <Button2>Contact Us</Button2>
              </div>
              <div className="col-span-2 my-auto">
                <Button2>My Account</Button2>
              </div>
              {/* <div className="col-span-6">
                {state.isAuthenticated ? (
                  <Link to="/account">
                    <Button
                      size={"small"}
                      className="w-full my-auto text-xs"
                      variant={"primary"}
                    >
                      <Person fontSize={"small"} className="mx-2" />
                      Welcome, {state.user.customerName.split(" ")[0]}
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button
                      size={"small"}
                      className="w-full my-auto text-xs"
                      variant={"primary"}
                    >
                      <Person fontSize={"small"} className="mx-2" />
                      Signin / Register
                    </Button>
                  </Link>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-10 px-24 flex flex-row justify-between">
        <div className="uppercase text-sm text-gray-500 my-auto w-1/4">
          <Link to="/">
            {" "}
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="w-3/4 flex flex-row gap-5 divide-x divide-gray-500">
          <div className="w-4/6 pt-1 mt-1 relative mx-auto text-gray-600 my-auto">
            <div className="relative border-2 border-yellow-500 focus:border-yellow-600 focus:border-4 rounded-lg overflow-hidden h-10 flex flex-row bg-white">
              <div
                type="submit"
                className="w-auto left-0 top-0 h-10/12 border-r border-gray-400"
              >
                <div className="py-2 text-sm text-center px-5 w-auto">
                  <select
                    name="category"
                    id="category"
                    className="focus:outline-none"
                  >
                    <option select="selected">All</option>
                    {menuData.map((item) => {
                      return (
                        <option
                          value="volvo"
                          className="w-auto capitalize"
                          key={item.id}
                        >
                          {item.catName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <input
                className="w-full h-full pl-4 pr-12 rounded-r text-sm focus:outline-none my-auto ml-0"
                type="search"
                name="search"
                placeholder="Search"
                // style={{paddingLeft: "calc("}}
              />
            </div>
            <button type="submit" className="absolute right-0 -top-1 mt-5 mr-4">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                // xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                // style={{enableBackforund: "new 0 0 56.966 56.966"}}
                // xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <div className="w-2/6 flex flex-row gap-2 justify-end text-xs text-gray-500 my-auto pl-2">
            <Button2 className="my-auto px-4 py-2 rounded hover:bg-gray-200">
              <div className="mx-auto">
                <Favorite />
                <div className="mt-1">Wishlist</div>
              </div>
            </Button2>
            <Button2 className="my-auto px-4 py-2 rounded hover:bg-gray-200">
              <div className="mx-auto">
                <div className="flex flex-row justify-center">
                  <BiGitCompare className="text-2xl" />
                </div>
                <div className="mt-1">Compare</div>
              </div>
            </Button2>
            {/* <Link to="/cart"> */}
            <Button2
              className="my-auto px-4 py-2 rounded hover:bg-gray-200"
              onClick={handleCart}
            >
              <div className="mx-auto">
                <ShoppingCart />
                <div className="mt-1">Cart</div>
              </div>
            </Button2>
            {/* </Link> */}
          </div>{" "}
        </div>
      </div>

      {/* MENU */}
      <div className="w-full px-24 flex flex-row justify-between bg-white gap-2">
        <div
          className="uppercase text-sm text-white px-2 my-auto bg-dodger-blue-500 py-2 flex flex-row justify-between w-80 relative"
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          Browse Categories
          <div
            id="arrow"
            className={`transition transform duration-100 ease-in-out ${
              show && location.pathname !== "/" && "-rotate-180"
            }`}
          >
            <KeyboardArrowDown style={{ fontSize: "18px" }} />
          </div>
          {show && location.pathname !== "/" ? (
            <div className="absolute top-9 left-0">
              <SideMenu />
            </div>
          ) : null}
        </div>

        <div className="w-3/4 flex flex-row gap-5">
          <div className="w-4/6 relative mx-auto text-gray-600 my-auto flex flex-row justify-evenly gap-1">
            <div className="my-auto flex-1">
              <Link to="/">
                <Button2>
                  <span className="text-gray-800 text-sm">Home</span>
                </Button2>
              </Link>
            </div>
            <div className="my-auto flex-1">
              <Button2>
                <span className="text-gray-800 text-sm">Shop</span>
              </Button2>
            </div>
            <div className="my-auto flex-1">
              <Button2>
                <span className="text-gray-800 text-sm">Vendor</span>
              </Button2>
            </div>
            <div className="my-auto flex-1">
              <Button2>
                <span className="text-gray-800 text-sm">Best Sellers</span>
              </Button2>
            </div>
            <div className="my-auto flex-1">
              <Button2>
                <span className="text-gray-800 text-sm">Customer Service</span>
              </Button2>
            </div>
          </div>
          <div className="w-2/6 flex flex-row gap-2 justify-end text-xs text-gray-500 my-auto pl-2">
            <Button2>
              <PinDrop />
              Track Order
            </Button2>
            <Button2>
              <LocalOffer />
              Daily Deals
            </Button2>
          </div>
        </div>
      </div>

      <div className="hidden px-24 pb-2 bg-white flex flex-row gap-4 justify-between shadow-xl">
        {menuData &&
          menuData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col cursor-default font-semibold menuDiv "
                // onMouseOver={handleMouseOver}
                // onMouseOut={handleMouseOut}
                onMouseEnter={() => handleMouseOver(item.mega, item.id)}
                onMouseLeave={handleMouseOut}
              >
                <div className="text-sm cursor-default flex flex-row gap-1 justify-center">
                  <div id="menuTitle" className="font-medium">
                    {item.catName}
                  </div>
                  {item.subcategory.length ? (
                    <div
                      id="arrow"
                      className="transition duration-100 ease-in-out"
                    >
                      <KeyboardArrowDown style={{ fontSize: "18px" }} />
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
