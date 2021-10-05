import React from "react";

import Carousel from "react-multi-carousel";
import Banner1 from "../assets/images/main.png";
import Banner2 from "../assets/images/main2.png";
import Banner3 from "../assets/images/main3.png";
import Banner4 from "../assets/images/main4.png";

import { useSelector } from "react-redux";
import SideMenu from "./sideMenu";

export default function Banner() {
  const state = useSelector((state) => state.AuthProvider);

  let menuData = [];
  state.category &&
    state.category.map((item) => {
      return menuData.push(item);
    });

  return (
    <div className="flex flex-row gap-4 h-auto mx-24 my-2">
      <SideMenu />
      <div
        className="bg-green-800 shadow-lg rounded overflow-hidden"
        style={{ width: "calc(100% - 20rem" }}
      >
        <Carousel
          arrows={false}
          additionalTransfrom={0}
          ssr={true}
          showDots={false}
          slidesToSlide={1}
          infinite
          autoPlay={true}
          centerMode={false}
          className=""
          containerClass="relative"
          dotListClass=""
          draggable
          // customButtonGroup={<ButtonGroup2 />}
          renderButtonGroupOutside={true}
          focusOnSelect={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
        >
          <div
            className="w-full h-96 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${Banner4})`, height: "450px" }}
          ></div>
          <div
            className="w-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${Banner1})`, height: "450px" }}
          ></div>
          <div
            className="w-full h-96 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${Banner2})`, height: "450px" }}
          ></div>
          <div
            className="w-full h-96 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${Banner3})`, height: "450px" }}
          ></div>
        </Carousel>
      </div>
    </div>
  );
}
