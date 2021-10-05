import React from "react";
import { useState } from "react";
import { CTABase } from "../utils/theme";
import { Mail } from "@material-ui/icons";
import Input from "./input";
import Button from "./button";

const initialData = {
  email: "",
};

export default function CTA() {
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    try {
      const requestObj = {
        email: formData.email,
      };
      console.log(requestObj);
    } catch (e) {}
  };

  return (
    <div className={CTABase}>
      <div className="xxl:w-5/12 xl:w-5/12 lg:w-5/12 md:w-full sm:w-full flex flex-row text-white xxl:gap-5 xl:gap-5 lg:gap-5 md:gap-3">
        <div>
          <Mail style={{ fontSize: "56px" }} className="text-dodger-blue-800" />
        </div>
        <div className="flex flex-col leading-3 my-auto">
          <div className="uppercase text-md font-semibold pt-1">
            Subscribe to our Newsletter
          </div>
          <div className="text-sm mt-1">
            Get all the latest information on Events, Sales and other
          </div>
        </div>
      </div>

      <div className="xxl:w-5/12 xl:w-5/12 lg:w-5/12 md:w-3/2 sm:w-full ">
        <div className="px-2">
          <Input
            placeholder="Email"
            className="mb-10px"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="xxl:w-2/12 xl:w-2/12 lg:w-2/12 md:w-full sm:w-full px-2 ">
        <Button
          size={"big"}
          className="w-full"
          variant={"primary"}
          onClick={handleSubmit}
          loading={loading}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}
