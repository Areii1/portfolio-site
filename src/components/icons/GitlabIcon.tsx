import React from 'react';
import { IconProps } from "./IconPropTypes";

export const GitlabIcon = (props: IconProps) => {
  return (
    <svg
      height={`${props.size}px`}
      viewBox="0 0 24 24"
      width={`${props.size}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.65,14.39,12,22.13,1.35,14.39a.84.84,0,0,1-.3-.94L2.27,9.67,4.71,2.16A.42.42,0,0,1,4.82,2,.43.43,0,0,1,5.4,2a.42.42,0,0,1,.11.18L7.95,9.67h8.1l2.44-7.51A.42.42,0,0,1,18.6,2a.43.43,0,0,1,.58,0,.42.42,0,0,1,.11.18l2.44,7.51L23,13.45A.84.84,0,0,1,22.65,14.39Z"
        fill="none"
        stroke={props.fillColor}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
};
