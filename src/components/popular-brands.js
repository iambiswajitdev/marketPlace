import React from "react";
import {
  PopularBrandBase,
  PopularBrandImg,
  PopularBrandTitle,
} from "./../utils/theme";

const PopularBrand = ({ title, image }) => {
  return (
    <div className={PopularBrandBase}>
      <img src={image} alt="samsung" className={PopularBrandImg} />
      <div className={PopularBrandTitle}>{title}</div>
    </div>
  );
};

export default PopularBrand;
