import React from "react";

//footer
import Logo from "./../assets/images/logo.png";
import FB from "./../assets/images/facebook.png";
import Insta from "./../assets/images/insta.png";
import Twitter from "./../assets/images/twitter.png";
import Pintrest from "./../assets/images/pintrest.png";
import Discover from "./../assets/images/discover.png";
import Maestro from "./../assets/images/maestro.png";
import Visa from "./../assets/images/visa.png";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//REDUX
import { useDispatch } from "react-redux";

export default function Footer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    history.push("/login");
  };

  return (
    <div className="bg-dodger-blue-800 px-24 mt-10 py-5 text-white">
      <div className="flex flex-row flex-wrap py-5">
        <div className="w-1/4 text-white my-3">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="text-xs my-3">Got Question? Call us 24/7</div>
          <div className="my-3">+415 123 4567</div>
          <div className="text-xs text-gray-400 my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </div>
          <div className="flex flex-wrap flex-row my-3 gap-2">
            <div>
              <img src={FB} alt="facebook" className="w-6 h-6 rounded-full" />
            </div>
            <div>
              <img
                src={Insta}
                alt="facebook"
                className="w-6 h-6 rounded-full"
              />
            </div>
            <div>
              <img
                src={Twitter}
                alt="facebook"
                className="w-6 h-6 rounded-full"
              />
            </div>
            <div>
              <img
                src={Pintrest}
                alt="facebook"
                className="w-6 h-6 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="w-1/4 text-white my-3">
          <div className="uppercase">Company</div>
          <div className="flex flex-col text-sm my-3 gap-2">
            <div>About Us</div>
            <div>Team Member</div>
            <div>Career</div>
            <div>Contact Us</div>
            <div>Affilate</div>
            <div>Order History</div>
            <Link className="vandorFottermanu" to="/vendor/login">
              <div>vendor login</div>
            </Link>
            <Link className="vandorFottermanu" to="/vendor/register">
              <div>vendor registration</div>
            </Link>
          </div>
        </div>

        <div className="w-1/4 text-white my-3">
          <div className="uppercase">My Account</div>
          <div className="flex flex-col text-sm my-3 gap-2">
            <Link to="/login">
              <div>Login</div>
            </Link>
            <Link to="/register">
              <div>Sign Up</div>
            </Link>
            <div onClick={handleLogout} className="cursor-pointer">
              Logout
            </div>
            <div>Contact Us</div>
            <div>Affilate</div>
            <div>Order History</div>
          </div>
        </div>

        <div className="w-1/4 text-white my-3">
          <div className="uppercase">Customer Service</div>
          <div className="flex flex-col text-sm my-3 gap-2">
            <div>About Us</div>
            <div>Team Member</div>
            <div>Career</div>
            <div>Contact Us</div>
            <div>Affilate</div>
            <div>Order History</div>
          </div>
        </div>
      </div>
      <hr className="border border-gray-700" />
      <div className="w-full py-5 text-xs">
        <div className="flex flex-row text-gray-500 gap-3 pb-1">
          <div className="font-medium text-gray-400">Appliances:</div>
          <div className="cursor-pointer hover:underline">Television</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Air Conditioner</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Refrigator</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Washing Machine</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Speaker</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Camera</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">View All</div>
        </div>
        <div className="flex flex-row text-gray-500 gap-3 pb-1">
          <div className="font-medium text-gray-400">Cloths and Apparel:</div>
          <div className="cursor-pointer hover:underline">T-shirts</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Dress</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Sneakers</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Backpacks</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Watches</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Jeans</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Sunglasses</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Boots</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">View All</div>
        </div>
        <div className="flex flex-row text-gray-500 gap-3 pb-1">
          <div className="font-medium text-gray-400">Home and Kitchen:</div>
          <div className="cursor-pointer hover:underline">Sofa</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Chair</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Bed Sheet</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Decor</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Cookware</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Utensil</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Chimney</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">
            Tools and Utility
          </div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">
            Cleaning and Bath
          </div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Kids</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">View All</div>
        </div>
        <div className="flex flex-row text-gray-500 gap-3 pb-1">
          <div className="font-medium text-gray-400">Beauty, Toys & More:</div>
          <div className="cursor-pointer hover:underline">
            Beauty & Personal Care
          </div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Men's Grooming</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Food & Drinks</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Baby Care</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Books</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Sports & Fitness</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">View All</div>
        </div>
        <div className="flex flex-row text-gray-500 gap-3 pb-1">
          <div className="font-medium text-gray-400">Electronics</div>
          <div className="cursor-pointer hover:underline">Audio</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">
            Camera & Accessories
          </div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">
            Computer Peripherals
          </div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Gaming</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Laptop & Desktop</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Mobile</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Storage</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">Tablets</div>
          <div className="font-light text-gray-700">|</div>
          <div className="cursor-pointer hover:underline">View All</div>
        </div>
      </div>
      <hr className="border border-gray-700" />
      <div className="w-full pt-5 text-xs flex flex-row justify-between">
        <div>Copyright 2021 Marketplace | All Rights Reserved</div>
        <div className="flex flex-row gap-2">
          <div className="my-auto">We're using safe payment for</div>
          <div>
            <img src={Maestro} alt="facebook" className="w-12 h-6" />
          </div>
          <div>
            <img src={Discover} alt="facebook" className="w-12 h-6" />
          </div>
          <div>
            <img src={Visa} alt="facebook" className="w-12 h-6" />
     