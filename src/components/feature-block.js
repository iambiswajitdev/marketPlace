import React from "react";
import {
  FeatureBase,
  FeatureHeading,
  FeatureContent,
  FeatureButton,
  FeatureText,
} from "./../utils/theme";
import { ArrowForward } from "@material-ui/icons";
// type FeatureBLockProps = {
//   title: string;
//   description: string;
//   className?: string;
//   counterBg?: string;
//   counter: number;
// };

const FeatureBlock = ({
  heading,
  description,
  className,
  counterBg,
  counter,
  backgroundImage,
}) => {
  const classNames = FeatureBase + " " + className;
  return (
    <div
      className={classNames}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={FeatureText}>
        <span className={FeatureHeading}>{heading}</span>
        <div className={FeatureContent}>{description}</div>
        <div className={FeatureButton}>
          Shop Now
          <ArrowForward className=" mb-1" />
        </div>
      </div>
      {/* <div className={FeatureContent}>
        <h3 className={FeatureTitle}>title</h3>

        <p className={FeatureDetails}>description</p>
      </div> */}
    </div>
  );
};

export default FeatureBlock;
