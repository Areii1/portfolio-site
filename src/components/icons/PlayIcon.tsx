import React from "react";
import { AnimatableIconProps } from "./IconPropTypes";
import styled, { keyframes } from "styled-components";

export const PlayIcon = (props: AnimatableIconProps) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
    >
      <Path
        d="M32,5c14.888,0,27,12.112,27,27S46.888,59,32,59S5,46.888,5,32S17.112,5,32,5 M32,2C15.433,2,2,15.432,2,32
  c0,16.568,13.433,30,30,30s30-13.432,30-30C62,15.432,48.567,2,32,2L32,2z"
        fill={props.startFillColor}
        animation={props.animation}
      />
      <Path
        d="M43.987,28.745L28.013,18.232C25.256,16.418,23,17.635,23,20.935V43.06c0,3.3,2.259,4.521,5.021,2.714l15.959-10.444
	C46.741,33.521,46.744,30.559,43.987,28.745z M41.858,33.124l-14.185,9.283C26.753,43.01,26,42.603,26,41.503V22.491
  c0-1.1,0.752-1.505,1.671-0.9l14.19,9.338C42.78,31.533,42.779,32.521,41.858,33.124z"
        fill={props.startFillColor}
        animation={props.animation}
      />
    </svg>
  );
};

const changeColorBlueToSalmon = keyframes`
  from {
    fill: var(--video-icon-color);
  }
  to {
    fill: salmon;
  }
`;

const changeColorWhiteToSalmon = keyframes`
  from {
    fill: white;
  }
  to {
    fill: salmon;
  }
`;

type PathProps = {
  fill: string;
  animation: boolean;
};

const Path = styled.path`
  fill: ${(props: PathProps) =>
    props.animation ? "var(--video-icon-color)" : props.fill};
  animation-name: ${(props: PathProps) =>
    props.animation ? (props.fill === 'white' ? changeColorWhiteToSalmon : changeColorBlueToSalmon) : "none"};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`;
