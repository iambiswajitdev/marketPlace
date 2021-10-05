// import Button from "components/button";
// import Tooltip from "react-hover";
// import { useState } from "react";
import { CURRENCY } from "../helpers/constant";
// import ReactTooltip from "react-tooltip";

// IMPORTING THEMES
import {
  ItemCardBase,
  ItemCardImage,
  ItemCardContent,
  ItemCardPrice,
  ItemCardHead,
  ItemCardStars,
  ItemCardRatings,
} from "../utils/theme";

//StarRatings
import StarRatings from "react-star-ratings";

const ItemCard = ({
  image,
  title,
  ratings,
  price,
  numberOfRatings,
  onClick,
}) => {
  //   let desc = item.description;
  //   let length = JSON.stringify(desc).length;

  return (
    <div className={ItemCardBase} onClick={onClick}>
      <div
        className={ItemCardImage}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={ItemCardContent}>
        <span className={ItemCardHead}>{title}</span>

        <span className={ItemCardStars}>
          <StarRatings
            rating={ratings}
            starRatedColor="orange"
            // changeRating={this.changeRating}
            starDimension="20px"
            starSpacing="2px"
            numberOfStars={5}
            name="rating"
          />
          <span className={ItemCardRatings}>({numberOfRatings} Reviews)</span>
        </span>
        <span className={ItemCardPrice}>
          {CURRENCY} {Number(price).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
