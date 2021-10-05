import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// import { span } from "react-router-dom";

export default function ActiveLastBreadcrumb(props) {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="text-gray">
      <span>
        <div className="cursor-pointer text-xs">Home</div>
      </span>
      <span>
        <span className=" capitalize cursor-pointer text-xs">Clothings</span>
      </span>
      <span>
        <span className="capitalize cursor-pointer text-xs">Nike</span>
      </span>
      <span>
        <span className="capitalize cursor-pointer text-xs">Sneakers</span>
      </span>
      {/* <span
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        Breadcrumb
      </span> */}
    </Breadcrumbs>
  );
}
