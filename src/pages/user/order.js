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
import Button from "../../components/button";
import { RiEqualizerFill } from "react-icons/ri";

const data = [
  {
    id: 1,
    image: Clock,
    name: "Titan Analog 30.5 cm x 30.5 cm",
    color: "Gray",
    seller: "RetailNet",
    price: 1299,
    date_of_transaction: "05-08-2021",
    delivery_status: "delivered",
  },
  {
    id: 2,
    image: Clock,
    name: "Titan Analog 30.5 cm x 30.5 cm",
    color: "Gray",
    seller: "RetailNet",
    price: 1299,
    date_of_transaction: "05-09-2021",
    delivery_status: "pending",
  },
  {
    id: 3,
    image: Clock,
    name: "Titan Analog 30.5 cm x 30.5 cm",
    color: "Gray",
    seller: "RetailNet",
    price: 1299,
    date_of_transaction: "05-06-2021",
    delivery_status: "cancelled",
  },
  {
    id: 4,
    image: Clock,
    name: "Titan Analog 30.5 cm x 30.5 cm",
    color: "Gray",
    seller: "RetailNet",
    price: 1299,
    date_of_transaction: "05-06-2021",
    delivery_status: "cancelled",
  },
  {
    id: 5,
    image: Clock,
    name: "Titan Analog 30.5 cm x 30.5 cm",
    color: "Gray",
    seller: "RetailNet",
    price: 1299,
    date_of_transaction: "05-06-2021",
    delivery_status: "cancelled",
  },
  {
    id: 6,
    image: Clock,
    name: "Titan Analog 30.5 cm x 30.5 cm",
    color: "Gray",
    seller: "RetailNet",
    price: 1299,
    date_of_transaction: "05-06-2021",
    delivery_status: "cancelled",
  },
  {
    id: 7,
    image: Clock,
    name: "Titan Analog 30.5 cm x 30.5 cm",
    color: "Gray",
    seller: "RetailNet",
    price: 1299,
    date_of_transaction: "05-06-2021",
    delivery_status: "cancelled",
  },
];

export default function Order() {
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
        <UserMenu active={"orders"} />
        <div className="flex-1 bg-white shadow-lg rounded py-2 mb-4 px-4 text-gray-600">
          <div className="flex justify-between gap-4 py-3">
            <div className="font-semibold text-lg">Orders</div>
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

          {data
            .filter((item) => {
              if (filter === "all") {
                return item;
              } else {
                return item.delivery_status === filter;
              }
            })
            .map((item) => {
              const {
                name,
                color,
                seller,
                price,
                delivery_status,
                date_of_transaction,
              } = item;
              const date = DateFormat(date_of_transaction, "dS mmmm, yy");

              return (
                <div
                  className="rounded border flex p-4 hover:shadow-lg mb-3"
                  key={item.id}
                >
                  <div className="flex-1 h-full flex justify-between gap-4">
                    <div className="w-24 ">
                      <div
                        className="w-20 h-20 bg-center bg-contain"
                        style={{ backgroundImage: `url(${Clock})` }}
                      ></div>
                    </div>
                    <div className="flex-1 ">
                      <div className="font-medium pb-2">{name}</div>
                      <div className="text-xs">Color: {color}</div>
                      <div className="text-xs">Seller: {seller}</div>
                    </div>
                  </div>
                  <div className="flex-1 h-full flex justify-between gap-4">
                    <div className="w-24 ">
                      {AppUtils.CURRENCY} {price}
                    </div>
                    <div className="flex-1 ">
                      {delivery_status === "delivered" ? (
                        <>
                          <div className="font-semibold pb-2 flex gap-1 ">
                            <div className="my-auto">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                            <div>
                              <div>Delivered on {date}</div>
                            </div>
                          </div>
                          <div className="text-xs font-normal pb-2">
                            Your item has been delivered
                          </div>
                          <div className=" text-dodger-blue-500 font-semibold flex gap-1 cursor-pointer hover:underline">
                            <div className="my-auto">
                              <IoStar />
                            </div>
                            <div>Rate and Review Product</div>
                          </div>
                        </>
                      ) : delivery_status === "cancelled" ? (
                        <>
                          <div className="font-semibold pb-2 flex gap-1 ">
                            <div className="my-auto">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            </div>
                            <div>
                              <div>Cancelled on {date}</div>
                            </div>
                          </div>
                          <div className="text-xs font-normal pb-2">
                            Your requested a cancellation
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="font-semibold pb-2 flex gap-1 ">
                            <div className="my-auto">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            </div>
                            <div>
                              <div>Order placed on {date}</div>
                            </div>
                          </div>
                          <div className="text-xs font-normal pb-2">
                            In Transit
                          </div>
                          <div className=" text-dodger-blue-500 font-semibold flex gap-1 cursor-pointer hover:underline">
                            <div className="my-auto">
                              <CgTrack />
                            </div>
                            <div>Track</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
