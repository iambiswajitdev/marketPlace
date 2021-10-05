import React from "react";
import Product6 from "./../assets/images/product6.png";
import VendorProfile from "./../assets/images/vendor_profile.png";

//StarRatings
import StarRatings from "react-star-ratings";

export default function VendorCard() {
  return (
    <div className="w-1/4 bg-white shadow-lg p-2">
      <div className="grid grid-cols-2 gap-4 h-72">
        <div
          className="grid-cols-1 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Product6})` }}
        ></div>
        <div
          className="grid-cols-1 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Product6})` }}
        ></div>
        <div
          className="grid-cols-1 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Product6})` }}
        ></div>
        <div
          className="grid-cols-1 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Product6})` }}
        ></div>
      </div>
      <hr />
      <div className="flex flex-row h-20 mt-2">
        <div className="w-1/3 my-auto mx-auto">
          <div
            className="bg-cover bg-center bg-no-repeat mx-auto rounded-full h-16 w-16"
            style={{ backgroundImage: `url(${VendorProfile})` }}
          ></div>
        </div>
        <div className="w-2/3 my-auto leading-3">
          <div className="mb-1">SuperComNet</div>
          <p className="text-xs font-medium text-gray-600">(124 Products)</p>
          <div>
            <StarRatings
              rating={3}
              starRatedColor="orange"
              // changeRating={this.changeRating}
              starDimension="20px"
              starSpacing="2px"
              numberOfStars={5}
              name="rating"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
