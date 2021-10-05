// import Button from "components/button";
// import Tooltip from "react-hover";
// import { useState } from "react";
import { CURRENCY } from "../helpers/constant";
// import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
// IMPORTING THEMES
import {
  ItemCardBase2,
  ItemCardImage2,
  ItemCardContent2,
  ItemCardPrice,
  ItemCardHead,
  ItemCardStars,
  ItemCardRatings,
} from "../utils/theme";

//StarRatings
import StarRatings from "react-star-ratings";

const ItemCard2 = ({
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
    <div className={ItemCardBase2} onClick={onClick}>
      {/* <Link to="/product"> */}
      <div
        className={ItemCardImage2}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={ItemCardContent2}>
        <div className={ItemCardHead}>{title}</div>
        <div className={ItemCardPrice}>
          {CURRENCY} {Number(price).toFixed(2)}{" "}
        </div>
        <div className={ItemCardStars}>
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
        </div>
      </div>
      {/*       
      <div
        className={ItemCardImage2}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={ItemCardContent2}>
        <span className={ItemCardHead2}>{title}</span>

        <span className={ItemCardStars2}>
          <StarRatings
            rating={ratings}
            starRatedColor="orange"
            // changeRating={this.changeRating}
            starDimension="20px"
            starSpacing="2px"
            numberOfStars={5}
            name="rating"
          />
          <span className={ItemCardRatings2}>({numberOfRatings} Reviews)</span>
        </span>
        <span className={ItemCardPrice2}>$ {Number(price).toFixed(2)}</span>
      </div> */}
      {/* </Link> */}
    </div>
  );
};

export default ItemCard2;
