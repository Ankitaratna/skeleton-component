import * as React from "react";
import skeletonInterface from "./interface";
import "./index.css";

const SkeletonWrapper: React.FC<{
  variant?: string;
  width?: string;
  height?: string;
  customClass?: string;
}> = (props: skeletonInterface) => {
  let { variant, width, height, customClass } = props;
  return (
    <div
      className={`shimmer ${variant} ${customClass}`}
      style={{ width, height }}
    ></div>
  );
};

export default SkeletonWrapper;
