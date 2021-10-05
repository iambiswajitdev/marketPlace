import React, { useState } from "react";
import CategoryProduct from "../components/category-product";
import CTA from "../components/cta";
import FeatureBlock from "../components/feature-block";
import PopularBrand from "../components/popular-brands";

import Carousel from "react-multi-carousel";
//StarRatings
import StarRatings from "react-star-ratings";

//IMAGES
import Banner1 from "./../assets/images/banner-1.png";
import Banner2 from "./../assets/images/banner-2.png";
import Banner3 from "./../assets/images/banner-3.png";

import Product from "./../assets/images/product.png";
import Product2 from "./../assets/images/product2.png";
import Product3 from "./../assets/images/product3.png";
import Product4 from "./../assets/images/product4.png";
import Banner6 from "./../assets/images/banner-6.png";

import Banner7 from "./../assets/images/banner-7.png";
import Product5 from "./../assets/images/product5.png";
import Product6 from "./../assets/images/product6.png";
import Product7 from "./../assets/images/product7.png";
import Product8 from "./../assets/images/product8.png";

import Samsung from "./../assets/images/samsung.png";
import Apple from "./../assets/images/apple.png";
import Nike from "./../assets/images/nike.png";
import Playstation from "./../assets/images/playstation.png";
import Tissot from "./../assets/images/tissot.png";
import Kutchina from "./../assets/images/kutchina.png";

import OfferBanner from "./../assets/images/offer-banner.png";
import {
  CarouselButtonLeft,
  CarouselButtonRight,
  ItemCardRatings,
  ItemCardStars,
} from "../utils/theme";

import ItemCard2 from "../components/item-card2";

//ICONS
import {
  ChevronLeft,
  ChevronRight,
  FlashOn,
  LocalShippingOutlined,
  LocationOn,
  LockOutlined,
  MonetizationOnOutlined,
  QuestionAnswerOutlined,
  ShoppingCart,
} from "@material-ui/icons";
import Button from "../components/button";
import VendorCard from "../components/vendor_card";
import ActiveLastBreadcrumb from "../components/breadcrumbs";
import Input from "../components/input";
import Banner from "../components/banner";

//FEATURED PRODUCT DATA
const featuredData = [
  {
    id: 1,
    heading: "Top Products",
    description: "Trending Nike Shoes",
    backgroundImage: Banner1,
  },
  {
    id: 2,
    heading: "New Arrivals",
    description: "Vegan Friendly Makeup",
    backgroundImage: Banner2,
  },
  {
    id: 3,
    heading: "Best Seller",
    description: "The pursuit of perfect sound",
    backgroundImage: Banner3,
  },
];

//POPULAR BRAND DATA
const popularBrandData = [
  {
    id: 1,
    title: "Samsung",
    image: Samsung,
  },
  {
    id: 2,
    title: "Apple",
    image: Apple,
  },
  {
    id: 3,
    title: "Nike",
    image: Nike,
  },
  {
    id: 4,
    title: "Playstation",
    image: Playstation,
  },
  {
    id: 5,
    title: "Tissot",
    image: Tissot,
  },
  {
    id: 6,
    title: "Kutchina",
    image: Kutchina,
  },
];
// PRODUCT DATA
const electronicData = {
  category: {
    categoryName: "Apple",
    bannerImage: Banner6,
    title: "The future of health is on your wrist.",
    subTitle: "Apple Watch 6",
  },
  recommendedData: [
    {
      id: 1,
      image: Product,
      title: "Macbook Air",
      price: "1120",
      numberOfRatings: "1203",
      ratings: 4.5,
    },
    {
      id: 2,
      image: Product2,
      title: "iPhone 12",
      price: "499",
      numberOfRatings: "2203",
      ratings: 5,
    },
    {
      id: 3,
      image: Product3,
      title: "Apple Airpods Pro",
      price: "199",
      numberOfRatings: "203",
      ratings: 4,
    },
    {
      id: 4,
      image: Product4,
      title: "Apple Watch 6",
      price: "499",
      numberOfRatings: "569",
      ratings: 4.6,
    },
  ],
  productData: [
    {
      id: 1,
      image: Product,
      title: "Macbook Air",
      price: "1120",
      numberOfRatings: "1203",
      ratings: 4.5,
    },
    {
      id: 2,
      image: Product2,
      title: "iPhone 12",
      price: "499",
      numberOfRatings: "2203",
      ratings: 5,
    },
    {
      id: 3,
      image: Product3,
      title: "Apple Airpods Pro",
      price: "199",
      numberOfRatings: "203",
      ratings: 4,
    },
  ],
};

const sneakerData = {
  category: {
    categoryName: "Sneakers",
    bannerImage: Banner7,
    title: "Impossible is Nothing",
    subTitle: "Adidas Original",
  },
  recommendedData: [
    {
      id: 1,
      image: Product5,
      title: "Mens Adidas Superstar",
      price: "99",
      numberOfRatings: "1903",
      ratings: 3.5,
    },
    {
      id: 2,
      image: Product6,
      title: "Mens Adidas Sport Tee",
      price: "17.12",
      numberOfRatings: "103",
      ratings: 4,
    },
    {
      id: 3,
      image: Product7,
      title: "Mens Adidas Down Jacket",
      price: "85.70",
      numberOfRatings: "203",
      ratings: 4,
    },
    {
      id: 4,
      image: Product8,
      title: "Mens Adidas Slides",
      price: "38.55",
      numberOfRatings: "123",
      ratings: 4.6,
    },
  ],
  productData: [
    {
      id: 1,
      image: Product5,
      title: "Mens Adidas Superstar",
      price: "99",
      numberOfRatings: "1903",
      ratings: 3.5,
    },
    {
      id: 2,
      image: Product6,
      title: "Mens Adidas Sport Tee",
      price: "17.12",
      numberOfRatings: "103",
      ratings: 4,
    },
    {
      id: 3,
      image: Product7,
      title: "Mens Adidas Down Jacket",
      price: "85.70",
      numberOfRatings: "203",
      ratings: 4,
    },
  ],
};

// HOT DEALS
const hotDeals = {
  singleProduct: {
    name: "asd",
  },
  recommendedData: [
    {
      id: 1,
      image: Product,
      title: "Macbook Air",
      price: "1120",
      numberOfRatings: "1203",
      ratings: 4.5,
    },
    {
      id: 2,
      image: Product2,
      title: "iPhone 12",
      price: "499",
      numberOfRatings: "2203",
      ratings: 5,
    },
    {
      id: 3,
      image: Product3,
      title: "Apple Airpods Pro",
      price: "199",
      numberOfRatings: "203",
      ratings: 4,
    },
  ],
};

export default function Home() {
  const button2Pre = CarouselButtonLeft + " right-10 ";
  const [image, setImage] = useState(Product5);
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
      <div
        className="flex items-center w-full relative"
        style={{ top: "-460px" }}
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

  const handleImageChange = (e) => {
    setImage(e);
  };

  return (
    <div>
      <Banner />
      {/* FEATURED SECTION */}
      <div className="flex flex-row px-24 w-full gap-3 mt-5">
        {featuredData.map((item) => {
          const { id, heading, description, backgroundImage } = item;
          return (
            <div className="w-1/3" key={id}>
              <FeatureBlock
                heading={heading}
                description={description}
                backgroundImage={backgroundImage}
                className={"py-8"}
              />
            </div>
          );
        })}
      </div>

      {/* SHIPPING SECTION */}
      <div className="w-full px-24 my-8">
        <div className="p-2 border-2 border-gray-300 rounded-lg">
          <div className="flex flex-row gap-2 bg-white rounded-lg p-3 justify-around">
            <div className="w-1/4 flex flex-row">
              <div className="w-1/6 flex justify-center my-auto">
                <LocalShippingOutlined
                  className="text-gray-600"
                  style={{ fontSize: "40px" }}
                />
              </div>
              <div className="w-5/6 my-auto text-sm leading-5">
                <div className="text-gray-500 font-semibold">
                  Free Shipping and Return
                </div>
                <div className="font-light">For all order above $99</div>
              </div>
            </div>

            <div className="w-1/4 flex flex-row">
              <div className="w-1/6 flex justify-center my-auto">
                <LockOutlined
                  className="text-gray-600"
                  style={{ fontSize: "35px" }}
                />
              </div>
              <div className="w-5/6 my-auto text-sm leading-5">
                <div className="text-gray-500 font-semibold">
                  Secure Payment
                </div>
                <div className="font-light">We ensure secure payment</div>
              </div>
            </div>

            <div className="w-1/4 flex flex-row">
              <div className="w-1/6 flex justify-center my-auto">
                <MonetizationOnOutlined
                  className="text-gray-600"
                  style={{ fontSize: "35px" }}
                />
              </div>
              <div className="w-5/6 my-auto text-sm leading-5">
                <div className="text-gray-500 font-semibold">
                  Money Back Guarantee
                </div>
                <div className="font-light">Within 30 days</div>
              </div>
            </div>

            <div className="w-1/4 flex flex-row">
              <div className="w-1/6 flex justify-center my-auto">
                <QuestionAnswerOutlined
                  className="text-gray-600"
                  style={{ fontSize: "30px" }}
                />
              </div>
              <div className="w-5/6 my-auto text-sm leading-5">
                <div className="text-gray-500 font-semibold">
                  Customer Support
                </div>
                <div className="font-light">Call or email us 24 x 7</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPULAR BRANDS */}
      <div className="px-24 my-8">
        <div className="text-lg font-semibold text-gray-700">
          Most Popular Brands
        </div>
        <div className="flex flex-row justify-between my-2">
          {popularBrandData.map((item) => {
            const { id, title, image } = item;
            return <PopularBrand key={id} title={title} image={image} />;
          })}
        </div>
      </div>

      {/* HOT DEALS */}
      <div className="px-24 my-10">
        <div className="text-lg font-semibold text-gray-700">
          Hot Deals of the Day
        </div>
        <hr className="border border-dodger-blue-700 mb-4 opacity-50" />
        <div className="grid grid-cols-3 gap-4 grid-rows-2 ">
          <div className="col-span-2 row-span-2 flex flex-row bg-white p-2 mb-1 rounded-lg ">
            <div className="w-7/12 h-full flex flex-row">
              <div className="h-full w-1/4 flex flex-col">
                <div
                  className="bg-contain border bg-center bg-no-repeat w-full h-1/5"
                  style={{ backgroundImage: `url(${Product5})` }}
                  onClick={() => handleImageChange(Product5)}
                ></div>
                <div
                  className="bg-contain border bg-center border-t-0 bg-no-repeat w-full h-1/5"
                  style={{ backgroundImage: `url(${Product6})` }}
                  onClick={() => handleImageChange(Product6)}
                ></div>
                <div
                  className="bg-contain border bg-center border-t-0 bg-no-repeat w-full h-1/5"
                  style={{ backgroundImage: `url(${Product7})` }}
                  onClick={() => handleImageChange(Product7)}
                ></div>
                <div
                  className="bg-contain border bg-center border-t-0 bg-no-repeat w-full h-1/5"
                  style={{ backgroundImage: `url(${Product8})` }}
                  onClick={() => handleImageChange(Product8)}
                ></div>
              </div>
              <div className="h-full w-3/4 flex flex-col">
                <div
                  className="bg-contain bg-white border border-l-0 bg-center bg-no-repeat w-full h-4/5"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="flex flex-row gap-2 my-2">
                  <div className="w-1/2">
                    <Button
                      size={"normal"}
                      className="w-full"
                      variant={"secondary"}
                      // onClick={handleSubmit}
                      // loading={loading}
                    >
                      <ShoppingCart fontSize={"small"} />
                      Add to Cart
                    </Button>
                  </div>
                  <div className="w-1/2">
                    <Button
                      size={"normal"}
                      className="w-full"
                      variant={"primary"}
                      // onClick={handleSubmit}
                      // loading={loading}
                    >
                      <FlashOn fontSize={"small"} />
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-5/12 h-full p-4">
              <ActiveLastBreadcrumb />
              <div className="flex flex-col gap-4 mt-4">
                <div className="font-medium text-gray-600 text-xl">
                  Adidas Shoes
                </div>
                <div className="text-dodger-blue-500 text-xs font-semibold">
                  Special price ends in less than 18h:34m:08s
                </div>
                <div className="font-bold text-xl">
                  <span>$ 84.00</span>
                  <span className="text-gray-500 line-through px-3 text-sm font-normal">
                    $ 100.00
                  </span>
                  <span className="text-dodger-blue-500 px-3 text-sm font-semibold">
                    15% off
                  </span>
                </div>
                <div className={ItemCardStars}>
                  <StarRatings
                    rating={4.5}
                    starRatedColor="orange"
                    // changeRating={this.changeRating}
                    starDimension="20px"
                    starSpacing="2px"
                    numberOfStars={5}
                    name="rating"
                  />
                  <span className={ItemCardRatings}>(1903 Reviews)</span>
                </div>
                <div className="flex flex-row gap-3">
                  <div className="text-sm my-auto">Size: </div>
                  <div className="border bg-white px-6 py-1 text-xs cursor-pointer hover:bg-gray-300">
                    s
                  </div>
                  <div className="border bg-white px-6 py-1 text-xs cursor-pointer hover:bg-gray-300">
                    l
                  </div>
                  <div className="border bg-white px-6 py-1 text-xs cursor-pointer hover:bg-gray-300">
                    xl
                  </div>
                  <div className="border bg-white px-6 py-1 text-xs cursor-pointer hover:bg-gray-300">
                    xxl
                  </div>
                </div>
                <div className="text-sm">
                  <LocationOn fontSize={"small"} /> Deliver to
                </div>
                <div className="flex flex-row gap-2 justify-between">
                  {/* IT SHOULD BE A SELECT BOX */}
                  <div className="w-2/3">
                    <Input
                      placeholder="Enter delivery zip code"
                      className="mb-10px border-dodger-blue-200"
                      name="email"
                    />
                  </div>
                  <div className="w-1/3">
                    <Button
                      size={"big"}
                      className="w-full"
                      variant={"primary"}
                      // onClick={handleSubmit}
                      // loading={loading}
                    >
                      Check
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row mt-2">
                    <div className="text-sm my-auto mt-1 mr-3">SuperComNet</div>

                    <div>
                      <StarRatings
                        rating={3}
                        starRatedColor="orange"
                        // changeRating={this.changeRating}
                        starDimension="12px"
                        starSpacing="2px"
                        numberOfStars={5}
                        name="rating"
                      />
                    </div>
                  </div>
                  <ul className="text-gray-500 text-sm list-inside list-disc my-1">
                    <li>14 days return policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* BEST SELLING SECTION */}
          <div className="bg-white rounded-lg mb-2 p-3 row-span-2">
            <div className="text-gray-500 font-semibold mb-4">Best Selling</div>
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
                  {hotDeals.recommendedData.map((item, index) => {
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
                      />
                    );
                  })}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* VENDOR */}
      <div className="px-24 my-8">
        <div className="text-lg font-semibold text-gray-700 mb-2">
          Top Weekly Vendor
        </div>
        <div className="flex flex-row justify-between gap-4">
          <VendorCard />
          <VendorCard />
          <VendorCard />
          <VendorCard />
        </div>
      </div>

      {/* CATEGORY BY PRODUCTS */}
      <CategoryProduct data={sneakerData} />

      {/* SHIPPING SECTION */}
      <div className="w-full px-24 my-8">
        <div
          className="rounded bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${OfferBanner})` }}
        >
          <div className="flex flex-row gap-2 py-5 justify-around">
            <div className="w-1/6 flex flex-row text-white text-2xl font-black my-auto">
              UPTO 50% SALE
            </div>

            <div className="w-1/3 flex flex-row italic text-3xl uppercase justify-center my-auto">
              Lowest price ever
            </div>

            <div className="w-1/3 flex flex-row justify-end my-atuo">
              <div className="w-1/2">
                <Button
                  size={"big"}
                  className="w-full"
                  variant={"primary"}
                  // onClick={handleSubmit}
                  // loading={loading}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY BY PRODUCTS */}
      <CategoryProduct data={electronicData} />

      {/* CTA */}
      <div className="px-24">
        <CTA />
      </div>
    </div>
  );
}
