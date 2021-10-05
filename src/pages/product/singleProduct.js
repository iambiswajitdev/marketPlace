import React from "react";

import StarRatings from "react-star-ratings";

import Button from "../../components/button";
import Input from "../../components/input";

import { FlashOn, LocationOn, ShoppingCart } from "@material-ui/icons";

import { ItemCardRatings, ItemCardStars } from "../../utils/theme";

import ActiveLastBreadcrumb from "../../components/breadcrumbs";

//IMAGES
import Product5 from "../../assets/images/product5.png";
import Product6 from "../../assets/images/product6.png";
import Product7 from "../../assets/images/product7.png";
import Product8 from "../../assets/images/product8.png";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FaStar } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

export default function SingleProduct() {
  const classes = useStyles();
  //   const button2Pre = CarouselButtonLeft + " right-10 ";
  const [image, setImage] = React.useState(Product5);

  const handleImageChange = (e) => {
    setImage(e);
  };
  return (
    <div className="px-24 my-4">
      <div className="grid grid-cols-2 gap-4 grid-rows-2 ">
        <div className="col-span-2 row-span-2 flex flex-row bg-white p-2 mb-1 rounded-lg ">
          <div className=" w-2/5">
            <div className="flex flex-row " style={{ height: "500px" }}>
              <div className="h-full w-1/4 flex flex-col ">
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
          </div>
          <div className="w-3/5 h-full p-4">
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
              <div className="flex flex-row gap-2 justify-between w-1/2">
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
              {/* <div className="flex">
                <div className="w-1/2 flex justify-between gap-4">
                  <div className="w-auto">Highlights</div>
                  <ul className="list-disc list-inside flex-1">
                    <li>ad</li>
                  </ul>
                </div>
              </div> */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span className="font-semibold text-lg">Product Details</span>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between mb-2">
                      <div className="w-40 text-gray-600 font-semibold">
                        Color
                      </div>
                      <div className="flex-1">Black</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="w-40 text-gray-600 font-semibold">
                        Outer material
                      </div>
                      <div className="flex-1"> Mesh</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="w-40 text-gray-600 font-semibold">
                        Model name
                      </div>
                      <div className="flex-1">
                        Nike Downshifter 11 Men's Running Shoe
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="w-40 text-gray-600 font-semibold">
                        Occasion
                      </div>
                      <div className="flex-1">Sports</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="w-40 text-gray-600 font-semibold">
                        Closure
                      </div>
                      <div className="flex-1">Lace-Ups</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="w-40 text-gray-600 font-semibold">
                        Ideal for
                      </div>
                      <div className="flex-1"> Men</div>
                    </div>
                    <div>
                      The Nike Downshifter 11 gives you lightweight, flexible
                      support to keep you going. It continues the same soft
                      cushioning from the last version and adds more support
                      around the midfoot to make it comfortable to wear long
                      after your workout
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>

              {/* <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span className="font-semibold text-lg">
                    Ratings and Review
                  </span>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between mb-2">
                      <div className="w-40 text-gray-600 font-semibold">
                        Color
                      </div>
                      <div className="flex-1">Black</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="w-40 text-gray-600 font-semibold">
                        Outer material
                      </div>
                      <div className="flex-1"> Mesh</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="w-40 text-gray-600 font-semibold">
                        Model name
                      </div>
                      <div className="flex-1">
                        Nike Downshifter 11 Men's Running Shoe
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="w-40 text-gray-600 font-semibold">
                        Occasion
                      </div>
                      <div className="flex-1">Sports</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="w-40 text-gray-600 font-semibold">
                        Closure
                      </div>
                      <div className="flex-1">Lace-Ups</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="w-40 text-gray-600 font-semibold">
                        Ideal for
                      </div>
                      <div className="flex-1"> Men</div>
                    </div>
                    <div>
                      The Nike Downshifter 11 gives you lightweight, flexible
                      support to keep you going. It continues the same soft
                      cushioning from the last version and adds more support
                      around the midfoot to make it comfortable to wear long
                      after your workout
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion> */}

              <div className="bg-white shadow-lg w-full p-4">
                <div className="font-semibold">Ratings and Review</div>

                <div className="flex text-3xl gap-4 my-2">
                  4.4 <FaStar className="my-auto" />
                  <div className="text-base my-auto">
                    (1844 Ratings and 456 Reviews)
                  </div>
                </div>

                <div className="border-t pt-2">
                  <div className="flex gap-1 text-xs bg-green-500 w-8 text-white justify-center rounded">
                    5 <FaStar className="my-auto" />
                  </div>
                  <div className="text-sm">
                    Awesome sound quality just what you need in your room. bass
                    is not that high but accurate enough.. good product. go for
                    it. and Flipkart also provides very good service..
                  </div>
                  <div className="flex gap-2 justify-start text-xs text-gray-500 my-2">
                    <div className="font-bold">Vaibhav Sinha</div>
                    <div>12th Sept</div>
                  </div>
                </div>
                <div className="border-t pt-2">
                  <div className="flex gap-1 text-xs bg-green-500 w-8 text-white justify-center rounded">
                    4 <FaStar className="my-auto" />
                  </div>
                  <div className="text-sm">
                    Awesome sound quality just what you need in your room. bass
                    is not that high but accurate enough.. good product. go for
                    it. and Flipkart also provides very good service..
                  </div>
                  <div className="flex gap-2 justify-start text-xs text-gray-500 my-2">
                    <div className="font-bold">Sankar Bera</div>
                    <div>10th Sept</div>
                  </div>
                </div>
                <div className="border-t pt-2">
                  <div className="flex gap-1 text-xs bg-green-500 w-8 text-white justify-center rounded">
                    5 <FaStar className="my-auto" />
                  </div>
                  <div className="text-sm">
                    Awesome sound quality just what you need in your room. bass
                    is not that high but accurate enough.. good product. go for
                    it. and Flipkart also provides very good service..
                  </div>
                  <div className="flex gap-2 justify-start text-xs text-gray-500 my-2">
                    <div className="font-bold">Vaibhav Sinha</div>
                    <div>12th Sept</div>
                  </div>
                </div>
                <div className="border-t pt-2">
                  <div className="flex gap-1 text-xs bg-green-500 w-8 text-white justify-center rounded">
                    5 <FaStar className="my-auto" />
                  </div>
                  <div className="text-sm">
                    Awesome sound quality just what you need in your room. bass
                    is not that high but accurate enough.. good product. go for
                    it. and Flipkart also provides very good service..
                  </div>
                  <div className="flex gap-2 justify-start text-xs text-gray-500 my-2">
                    <div className="font-bold">Vaibhav Sinha</div>
                    <div>12th Sept</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BEST SELLING SECTION */}
      </div>
    </div>
  );
}
