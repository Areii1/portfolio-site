import React from "react";
import { AnimatableIconProps } from "./IconPropTypes";
import styled, { keyframes } from "styled-components";

export const ViewDocumentIcon = (props: AnimatableIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 50 50"
    >
      <CustomPath
        d="M 4 0 L 4 1 L 4 47 L 4 48 L 5 48 L 28 48 A 1.0001 1.0001 0 1 0 28 46 L 6 46 L 6 2 L 24 2 L 24 15 L 24 16 L 25 16 L 38 16 L 38 23 A 1.0001 1.0001 0 1 0 40 23 L 40 15 L 40 14.59375 L 39.71875 14.28125 L 25.71875 0.28125 L 25.40625 0 L 25 0 L 5 0 L 4 0 z M 26 3.4375 L 36.5625 14 L 26 14 L 26 3.4375 z M 36 26 C 30.488997 26 26 30.488997 26 36 C 26 41.511003 30.488997 46 36 46 C 38.39499 46 40.588106 45.161049 42.3125 43.75 L 48.28125 49.71875 L 49.71875 48.28125 L 43.75 42.3125 C 45.161049 40.588106 46 38.39499 46 36 C 46 30.488997 41.511003 26 36 26 z M 36 28 C 40.430123 28 44 31.569877 44 36 C 44 40.430123 40.430123 44 36 44 C 31.569877 44 28 40.430123 28 36 C 28 31.569877 31.569877 28 36 28 z"
        fill={props.startFillColor}
        animation={props.animation}
        overflow="visible"
        enableBackground="accumulate"
        font-family="Bitstream Vera Sans"
      />
    </svg>
  );
};

const changeColorGoldToSalmon = keyframes`
  from {
    fill: #b78a10;
  }
  to {
    fill: salmon;
  }
`;

// const changeColorSalmonToGold = keyframes`
//   from {
//     fill: salmon;
//   }
//   to {
//     fill: #b78a10;
//   }
// `;

const changeColorWhiteToSalmon = keyframes`
  from {
    fill: white;
  }
  to {
    fill: salmon;
  }
`;

// const changeColorSalmonToWhite = keyframes`
//   from {
//     fill: salmon;
//   }
//   to {
//     fill: white;
//   }
// `;

type PathProps = {
  fill: string;
  animation: boolean;
};

const CustomPath = styled.path`
  fill: ${(props: PathProps) =>
    props.animation ? "var(--video-icon-color)" : props.fill};
  animation-name: ${(props: PathProps) =>
    props.animation
      ? props.fill === "white"
        ? changeColorWhiteToSalmon
        : changeColorGoldToSalmon
      : "none"};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  text-indent: 0;
  text-align: start;
  line-height: normal;
  text-transform: none;
`;
