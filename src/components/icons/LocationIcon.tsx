import React from "react";
import { IconProps } from "./IconPropTypes";

export const LocationIcon = (props: IconProps) => {
  return (
    <svg
      enableBackground="new 0 0 141.732 141.732"
      height={`${props.size}px`}
      width={`${props.size}px`}
      version="1.1"
      viewBox="0 0 141.732 141.732"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path
          d="M95.35,50.645c0,13.98-11.389,25.322-25.438,25.322c-14.051,0-25.438-11.342-25.438-25.322   c0-13.984,11.389-25.322,25.438-25.322C83.964,25.322,95.35,36.66,95.35,50.645 M121.743,50.645C121.743,22.674,98.966,0,70.866,0   C42.768,0,19.989,22.674,19.989,50.645c0,12.298,4.408,23.574,11.733,32.345l39.188,56.283l39.761-57.104   c1.428-1.779,2.736-3.654,3.916-5.625l0.402-0.574h-0.066C119.253,68.516,121.743,59.874,121.743,50.645"
          fill={props.fillColor}
        />
      </g>
      <g />
    </svg>
  );
};
