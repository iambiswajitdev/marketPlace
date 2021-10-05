import React from "react";

// ICONS
import { FaPowerOff } from "react-icons/fa";
import { BsFillPersonFill, BsFillFolderFill } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";
import { AiFillWallet, AiTwotoneContainer } from "react-icons/ai";

import { useHistory } from "react-router-dom";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function UserMenu({ active }) {
  console.log(active);
  const state = useSelector((state) => state.AuthProvider);
  const userData = state.user;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    // history.go(0);
    history.push("/");
  };

  //   const dispatch = useDispatch();

  return (
    <div className="w-80 pr-2">
      {/* USER IMAGE */}
      <div className="bg-white shadow-lg rounded p-3 flex gap-4 mb-4">
        <div className="rounded-full w-12 h-12">
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg"
            alt="dp"
          />
        </div>
        <div className="">
          <div className="text-sm">Hello,</div>
          <div className="font-semibold">{userData?.customerName}</div>
        </div>
      </div>

      <div className="bg-white rounded shadow-lg p-3 mb-4 divide-y">
        <Link to="/orders">
          <div
            className={`${
              active === "orders" ? "text-dodger-blue-500" : "text-gray-500"
            } flex justify-between gap-3 hover:bg-gray-200 hover:text-dodger-blue-500 p-2 rounded cursor-pointer`}
          >
            <div className="flex flex-row gap-3">
              <div>
                <AiTwotoneContainer className="text-xl text-dodger-blue-500" />
              </div>

              <div
                className={`hover:bg-gray-200 rounded uppercase font-semibold`}
              >
                My orders
              </div>
            </div>

            <div className="my-auto">
              <HiChevronRight />
            </div>
          </div>
        </Link>

        <div className=" p-2 cursor-default">
          <div className="flex justify-start gap-3 mb-2">
            <div>
              <BsFillPersonFill className="text-xl text-dodger-blue-500" />
            </div>
            <div className="uppercase text-gray-500 font-medium">
              Account Details
            </div>
          </div>
          <Link to="/account">
            <div
              className={`${
                active === "account"
                  ? "font-semibold text-dodger-blue-500"
                  : "hover:text-dodger-blue-500 text-gray-500"
              } hover:bg-gray-200 pl-8 py-2 rounded `}
            >
              Profile Information
            </div>
          </Link>
          <Link to="/address">
            <div
              className={`${
                active === "address"
                  ? "font-semibold text-dodger-blue-500"
                  : "hover:text-dodger-blue-500 text-gray-500"
              } hover:bg-gray-200 pl-8 py-2 rounded `}
            >
              Manage Address
            </div>
          </Link>
          <Link to="/pan-card-information">
            <div
              className={`${
                active === "pan"
                  ? "font-semibold text-dodger-blue-500"
                  : "hover:text-dodger-blue-500 text-gray-500"
              } hover:bg-gray-200 pl-8 py-2 rounded `}
            >
              PAN Card Information
            </div>
          </Link>
        </div>

        <div className=" p-2 cursor-default">
          <div className="flex justify-start gap-3 mb-2">
            <div>
              <AiFillWallet className="text-xl text-dodger-blue-500" />
            </div>
            <div className="uppercase text-gray-500 font-medium">Payments</div>
          </div>
          <div className="hover:bg-gray-200 pl-8 py-2 rounded hover:text-dodger-blue-500 text-gray-500">
            Saved UPI
          </div>
          <div className="hover:bg-gray-200 pl-8 py-2 rounded hover:text-dodger-blue-500 text-gray-500">
            Saved Cards
          </div>
        </div>

        <div className=" p-2 cursor-default">
          <div className="flex justify-start gap-3 mb-2">
            <div>
              <BsFillFolderFill className="text-xl text-dodger-blue-500" />
            </div>
            <div className="uppercase text-gray-500 font-medium">My Stuff</div>
          </div>
          <div className="hover:bg-gray-200 pl-8 py-2 rounded hover:text-dodger-blue-500 text-gray-500">
            My Review & Ratings
          </div>

          <Link to="/wishlist">
            <div
              className={`${
                active === "wishlist"
                  ? "font-semibold text-dodger-blue-500"
                  : "hover:text-dodger-blue-500 text-gray-500"
              } hover:bg-gray-200 pl-8 py-2 rounded `}
            >
              {" "}
              My Wishlist
            </div>
          </Link>
        </div>

        <div
          className="flex justify-start gap-3 hover:bg-gray-200 text-gray-500 hover:text-dodger-blue-500 p-2 cursor-pointer"
          onClick={handleLogout}
        >
          <div>
            <FaPowerOff className="text-xl text-dodger-blue-500" />
          </div>
          <div className="uppercase font-medium"> Logout</div>
        </div>
      </div>
    </div>
  );
}
