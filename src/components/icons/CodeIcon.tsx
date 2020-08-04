import React from "react";
import { IconProps } from "./IconPropTypes";

export const CodeIcon = (props: IconProps) => {
  return (
    <svg
      id="_x31__x2C_5"
      enableBackground="new 0 0 24 24"
      height={`${props.size}px`}
      viewBox="0 0 24 24"
      width={`${props.size}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.75 18c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l2.719-2.719-2.72-2.72c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l3.25 3.25c.293.293.293.768 0 1.061l-3.25 3.25c-.146.147-.338.22-.53.22z"
        fill={props.fillColor}
      />
      <path
        d="m17.25 18h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75s-.336.75-.75.75z"
        fill={props.fillColor}
      />
      <path
        d="m21.25 23h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-16.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v16.5c0 1.517-1.233 2.75-2.75 2.75zm-18.5-20.5c-.689 0-1.25.561-1.25 1.25v16.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-16.5c0-.689-.561-1.25-1.25-1.25z"
        fill={props.fillColor}
      />
      <path
        d="m23.25 6h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z"
        fill={props.fillColor}
      />
    </svg>
  );
};