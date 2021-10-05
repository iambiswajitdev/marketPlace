import React from "react";
import * as C from "../helpers/constant";
import { ImLocation } from "react-icons/im";
import iPhone from "../assets/images/iPhone.jpeg";
import Moto from "../assets/images/moto.jpeg";
import Button2 from "../components/button2";
import Button from "../components/button";

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

const address = [
  {
    id: "1",
    type: "HOME",
    name: "Vaibhav Sinha",
    phone: "6205630243",
    pin: "828104",
    address:
      "S/o Mr Dilip Kumar Sinha Shyam Nagar, Bhuli Dhanbad, Near Aadarsh Vidya Mandir School",
    city: "Dhanbad",
    state: "Jharkhand",
  },
  {
    id: "2",
    type: "office",
    name: "Vaibhav Sinha",
    phone: "6205630243",
    pin: "700064",
    address:
      "S/o Mr Dilip Kumar Sinha Shyam Nagar, Bhuli Dhanbad, Near Aadarsh Vidya Mandir School",
    city: "Kolkata",
    state: "Jharkhand",
  },
  {
    id: "3",
    type: "office",
    name: "Vaibhav Sinha",
    phone: "6205630243",
    pin: "603203",
    address:
      "S/o Mr Dilip Kumar Sinha Shyam Nagar, Bhuli Dhanbad, Near Aadarsh Vidya Mandir School",
    city: "Kattankulathur",
    state: "Jharkhand",
  },
];

export default function Cart() {
  const [counter, setCounter] = React.useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="px-24 py-4">
      <div className="grid grid-cols-7 gap-4">
        <div class="col-span-5 bg-white rounded shadow-lg p-4">
          <div className="flex justify-between mb-2">
            <div className="font-semibold text-lg">My Cart(2)</div>
            <div className="flex gap-4">
              <div className="flex my-auto text-sm text-gray-500 ">
                <ImLocation className="my-auto" />
                <span className="font-semibold">Deliver to</span>
              </div>
              <div>
                <select
                  name="category"
                  id="category"
                  className="focus:outline-none"
                >
                  {address.map((item) => {
                    return (
                      <option
                        value="volvo"
                        className="w-auto capitalize"
                        //   key={item.id}
                      >
                        {item.city + " - " + item.pin}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          {/* <hr /> */}

          {data.map((item) => {
            const { id, name, image, price, discount, qauntity, seller } = item;
            return (
              <>
                <div className="grid grid-cols-12 gap-4 pt-4 border-t ">
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
                  <div className="col-span-4 text-sm">
                    <div>Delivery by 11 AM, Tomorrow</div>
                    <div className="text-green-600">FREE</div>
                  </div>
                </div>
                <div className="flex gap-4 my-1">
                  <div className="flex gap-2 my-auto">
                    <div
                      className={`w-7 h-7 rounded-full bg-gray-200 cursor-pointer table-cell align-middle text-center noselect ${
                        counter === 1 && "cursor-not-allowed"
                      }`}
                      onClick={counter !== 1 && handleDecrement}
                    >
                      -
                    </div>

                    <input
                      value={counter}
                      className="w-12 h-7 bg-gray-200 text-center rounded focus:outline-none"
                    />

                    <div
                      className="w-7 h-7 rounded-full bg-gray-200 cursor-pointer table-cell align-middle text-center noselect"
                      onClick={handleIncrement}
                    >
                      +
                    </div>
                  </div>
                  <div>
                    <Button2 className="my-auto px-4 py-2 rounded hover:bg-gray-200 text-gray-800 font-semibold text-base hover:text-dodger-blue-500 uppercase">
                      Save for later
                    </Button2>
                  </div>
                  <div>
                    <Button2 className="my-auto px-4 py-2 rounded hover:bg-gray-200 text-gray-800 font-semibold text-base hover:text-dodger-blue-500 uppercase">
                      Remove
                    </Button2>
                  </div>
                </div>
              </>
            );
          })}
          <hr />
          <div className="h-16 w-full flex justify-end">
            <div className="w-60 my-auto">
              <Button
                size={"big"}
                className="w-full"
                variant={"primary"}
                //   onClick={handleSubmit}
                //   loading={loading}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>

        <div class="col-span-2 bg-white rounded shadow-lg p-4 h-72">
          <div className="mb-3 uppercase font-semibold text-gray-500">
            Price Details
          </div>
          <hr />
          <div className="flex justify-between my-3">
            <div>Price (2 items)</div>
            <div>{C.CURRENCY} 1,91,790</div>
          </div>
          <div className="flex justify-between mb-3">
            <div>Discount</div>
            <div className="text-green-600">- {C.CURRENCY} 29,868</div>
          </div>
          <div className="flex justify-between mb-3">
            <div>Delivery Charges</div>
            <div className="text-green-600">FREE</div>
          </div>
          <hr />
          <div className="flex justify-between my-3 font-bold">
            <div>Total Amount</div>
            <div>{C.CURRENCY} 1,61,922</div>
          </div>
          <hr />
          <div className="mt-3 text-green-600 font-semibold">
            You will save {C.CURRENCY} 29,868 on this order
          </div>
        </div>
      </div>
    </div>
  );
}
