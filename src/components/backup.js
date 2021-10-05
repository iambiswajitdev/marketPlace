import React from "react";

import FeatureBlock from "../components/feature-block";
import ItemCard from "../components/item-card";
import ItemCard2 from "../components/item-card2";

export default function CategoryProduct({ data }) {
  return (
    <div className="px-24 my-10">
      <div className="text-lg font-semibold text-gray-700">
        {data.category.categoryName}
      </div>
      <hr className="border border-dodger-blue-700 mb-4 opacity-50" />
      <div class="grid grid-cols-3 gap-4 grid-rows-2">
        <div class="col-span-2 row-span-1">
          <FeatureBlock
            backgroundImage={data.category.bannerImage}
            className={"py-24"}
            heading={data.category.subTitle}
            description={data.category.title}
          />
        </div>

        {/* RECOMMENDATION SECTION */}
        <div class="bg-white rounded-lg mb-2 p-3 row-span-2">
          <div className="text-gray-500 font-semibold mb-4">Recommended</div>
          <hr className="border border-dodger-blue-500" />
          <div className="w-full flex flex-col gap-5 items-end mt-5">
            {data.recommendedData.map((item) => {
              const { image, title, ratings, price, numberOfRatings } = item;
              return (
                <ItemCard2
                  image={image}
                  title={title}
                  ratings={ratings}
                  price={price}
                  numberOfRatings={numberOfRatings}
                />
              );
            })}
          </div>
        </div>
        <div class="col-span-2 row-span-1">
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
        </div>
      </div>
    </div>
  );
}
