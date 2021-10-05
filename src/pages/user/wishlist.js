import React from "react";

//REDUX
import { useSelector } from "react-redux";

import DateFormat from "dateformat";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import UserMenu from "../../components/userMenu";
import Clock from "../../assets/images/wall.jpeg";
import * as AppUtils from "../../helpers/constant";
import { CgTrack } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

import * as C from "../../helpers/constant";
import { ImLocation } from "react-icons/im";
import iPhone from "../../assets/images/iPhone.jpeg";
import Moto from "../../assets/images/moto.jpeg";
import Button2 from "../../components/button2";
import Button from "../../components/button";
import { RiEqualizerFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "Apple iPhone 12 (Blue 128GB)",
    image: iPhone,
    price: 169800,
    discount: 15,
    qauntity: 1,
    seller: "SuperComNet",
  },
  {
    id: 2,
    name: "MOTOROLA G60 (Dynamic Gray, 128 GB)  (6 GB RAM)",
    image: Moto,
    price: 21990,
    discount: 20,
    qauntity: 1,
    seller: "SuperComNet",
  },
];

export default function Wishlist() {
  const state = useSelector((state) => state.AuthProvider);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filter, setFilter] = React.useState("all");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="py-4 px-24"
      // style={{ backgroundImage: `url(${login})` }}
    >
      <div className="flex flex-row gap-4">
        <UserMenu active={"wishlist"} />
        <div className="flex-1 bg-white shadow-lg rounded py-2 mb-4 px-4 text-gray-600">
          <div className="flex justify-between gap-4 py-3">
            <div className="font-semibold text-lg">My Wishlist (2)</div>
            <div aria-controls="simple-menu" aria-haspopup="true">
              <Button
                size={"small"}
                className="w-full my-auto text-xs"
                variant={"primary"}
                onClick={handleClick}
              >
                <RiEqualizerFill /> <span className="px-2">Filter</span>
              </Button>
            </div>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  setFilter("all");
                  handleClose();
                }}
              >
                All Orders
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setFilter("pending");
                  handleClose();
                }}
              >
                Open Orders
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setFilter("delivered");
                  handleClose();
                }}
              >
                Delivered Orders
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setFilter("cancelled");
                  handleClose();
                }}
              >
                Cancelled Orders
              </MenuItem>
            </Menu>
          </div>

          {data.map((item) => {
            const { id, name, image, price, discount, qauntity, seller } = item;
            return (
              <>
                <div className="my-3 grid grid-cols-12 gap-4 pt-2 border-t">
                  <div className="col-span-2">
                    <div
                      className="w-32 h-32 mx-auto bg-contain bg-no-repeat bg-center"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                  </div>
                  <div className="col-span-6">
                    <div className="text-base font-semibold">{name}</div>
                    <div className="text-sm text-gray-600 mb-2">
                      Seller: {seller}
                    </div>
                    <div>
                      <span className="font-bold text-lg">
                        {C.CURRENCY}
                        {(price * (100 - discount)) / 100}
                      </span>
                      <span className="text-gray-500 text-sm px-2 line-through">
                        {C.CURRENCY}
                        {price}
                      </span>
                      <span className="text-green-600 font-semibold">
                        {discount}% off
                      </span>
                    </div>
                  </div>
                  <div className="col-span-4 text-sm ml-auto">
                    <div>
                      <FaTrash
                        className="text-gray-600 cursor-pointer"
                        // onClick={handleDelete}
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
