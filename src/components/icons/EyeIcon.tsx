import React from "react";
import styled, { keyframes } from "styled-components";
import { AnimatableIconProps } from "./IconPropTypes";

export const EyeIcon = (props: AnimatableIconProps) => {
  return (
    <svg
      enable-background="new 0 0 32 32"
      height={props.size}
      version="1.1"
      viewBox="0 0 32 32"
      width={props.size}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="background">
        <rect fill="none" height={props.size} width={props.size} />
      </g>
      <g id="view">
        <Circle
          cx={props.size / 2}
          cy={props.size / 2}
          r={props.size / 6}
          fill={props.startFillColor}
          animation={props.animation}
        />
        <Path
          d="M16,6C6,6,0,15.938,0,15.938S6,26,16,26s16-10,16-10S26,6,16,6z M16,24c-8.75,0-13.5-8-13.5-8S7.25,8,16,8s13.5,8,13.5,8   S24.75,24,16,24z"
          fill={props.startFillColor}
          animation={props.animation}
        />
      </g>
    </svg>
  );
};

const changeColor = keyframes`
  from {
    fill: #94a3ba;
  }
  to {
    fill: #0048a1;
  }
`;

type PathProps = {
  fill: string;
  animation: boolean;
};

const Path = styled.path`
  fill: ${(props: PathProps) => (props.animation ? "#b78a10" : props.fill)};
  animation-name: ${(props: PathProps) =>
    props.animation ? changeColor : "none"};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`;

const Circle = styled.circle`
  fill: ${(props: PathProps) => (props.animation ? "#b78a10" : props.fill)};
  animation-name: ${(props: PathProps) =>
    props.animation ? changeColor : "none"};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`;
