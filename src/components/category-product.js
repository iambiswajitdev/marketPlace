import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import FeatureBlock from "../components/feature-block";
import ItemCard from "../components/item-card";
import ItemCard2 from "../components/item-card2";
import { Link, useHistory } from "react-router-dom";
import { CarouselButtonLeft, CarouselButtonRight } from "../utils/theme";

export default function CategoryProduct({ data }) {
  const history = useHistory();
  const button1Pre = CarouselButtonLeft + " left-0 ";
  const button2Pre = CarouselButtonLeft + " right-10 ";

  const PrevButton = ({ onClick, children }) => {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        aria-label="prev-button"
        className={button1Pre}
      >
        {children}
      </button>
    );
  };

  const NextButton = ({ onClick, children }) => {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        aria-label="CarouselButtonRight"
        className={CarouselButtonRight}
      >
        {children}
      </button>
    );
  };

  const ButtonGroup = ({ next, previous }) => {
    return (
      // <div className="absolute top-1/2">
      <div className="flex items-center absolute w-full -top-1/2 relative">
        <PrevButton onClick={() => previous()}>
          <ChevronLeft />
        </PrevButton>
        <NextButton onClick={() => next()}>
          <ChevronRight />
        </NextButton>
      </div>
    );
  };

  const PrevButton2 = ({ onClick, children }) => {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        aria-label="prev-button"
        className={button2Pre}
      >
        {children}
      </button>
    );
  };

  const NextButton2 = ({ onClick, children }) => {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        aria-label="next-button"
        className={CarouselButtonRight}
      >
        {children}
      </button>
    );
  };

  const ButtonGroup2 = ({ next, previous }) => {
    return (
      // <div className="absolute top-1/2">
      <div
        className="flex items-center w-full relative"
        style={{ top: "-600px" }}
      >
        <PrevButton2 onClick={() => previous()}>
          <ChevronLeft />
        </PrevButton2>
        <NextButton2 onClick={() => next()}>
          <ChevronRight />
        </NextButton2>
      </div>
    );
  };

  return (
    <div className="px-24 my-10">
      <div className="text-lg font-semibold text-gray-700">
        {data.category.categoryName}
      </div>
      <hr className="border border-dodger-blue-700 mb-4 opacity-50" />
      <div className="grid grid-cols-3 gap-4 grid-rows-2">
        <div className="col-span-2 row-span-1">
          <FeatureBlock
            backgroundImage={data.category.bannerImage}
            className={"py-24"}
            heading={data.category.subTitle}
            description={data.category.title}
          />
        </div>

        {/* RECOMMENDATION SECTION */}
        <div className="bg-white rounded-lg mb-2 p-3 row-span-2">
          <div className="text-gray-500 font-semibold mb-4">Recommended</div>
          {/* <hr className="border border-dodger-blue-500" /> */}
          <div className="w-full items-end mt-5">
            <Carousel
              arrows={false}
              additionalTransfrom={0}
              ssr={true}
              showDots={false}
              slidesToSlide={1}
              infinite
              autoPlay={false}
              centerMode={false}
              className=""
              containerClass="relative"
              dotListClass=""
              draggable
              customButtonGroup={<ButtonGroup2 />}
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
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
            >
              {/* <div className="w-full h-96 bg-red-200">1</div> */}
              <div className="w-full flex flex-col gap-5 items-end">
                {data.recommendedData.map((item, index) => {
                  const { image, title, ratings, price, numberOfRatings } =
                    item;
                  return (
                    <ItemCard2
                      key={index}
                      image={image}
                      title={title}
                      ratings={ratings}
                      price={price}
                      numberOfRatings={numberOfRatings}
                      onClick={() => history.push("/product")}
                    />
                  );
                })}
              </div>
            </Carousel>
          </div>
        </div>

        <div className="px-auto col-span-2 row-span-1">
          <Carousel
            arrows={false}
            additionalTransfrom={0}
            ssr={true}
            showDots={false}
            slidesToSlide={1}
            infinite
            autoPlay={false}
            centerMode={false}
            className=""
            containerClass="relative"
            dotListClass=""
            draggable
            customButtonGroup={<ButtonGroup />}
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
                items: 3,
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
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
          >
            {data.productData.map((item, index) => {
              const { image, title, ratings, price, numberOfRatings } = item;
              return (
                <div className="w-full px-3" key={index}>
                  <ItemCard
                    image={image}
                    title={title}
                    ratings={ratings}
                    price={price}
                    numberOfRatings={numberOfRatings}
                    onClick={() => history.push("/product")}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>

        {/* <div className="col-span-2 row-span-1">
          <div className="flex flex-row gap-4 justify-between">
            {data.productData.map((item) => {
              const { image, title, ratings, price, numberOfRatings } = item;
              return (
                <div className="w-1/3">
                  <ItemCard
                    image={image}
                    title={title}
                    ratings={ratings}
                    price={price}
                    numberOfRatings={numberOfRatings}
                  />
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
}
