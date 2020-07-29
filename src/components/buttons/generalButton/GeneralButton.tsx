import React from "react";
import styled, { keyframes } from "styled-components";
import { ModalTypes } from "../../../pages/index";
import { PlayIcon } from "../../icons/PlayIcon";
import { ViewDocument } from "../../icons/VIewDocument";

type Props = {
  type: ModalTypes;
  handleClick: () => void;
  text: string;
};

export const GeneralButton = (props: Props) => {
  // const [isHovering, setIsHovering] = React.useState<boolean>(false);
  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };
  return (
    <ButtonElement
      type="button"
      title={props.text}
      onClick={props.handleClick}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {props.type === ModalTypes.VIDEO && (
        <PlayIcon
          startFillColor="blue"
          endFillColor="blue"
          size={30}
          animation={false}
        />
      )}
      {props.type === ModalTypes.CV && (
        <ViewDocument
          startFillColor="#b78a10"
          endFillColor="blue"
          size={30}
          animation={false}
        />
      )}
      <Text>{props.text.toUpperCase()}</Text>
    </ButtonElement>
  );
};

const changeColor = keyframes`
  from {
    border: 1px solid black;
    color: initial;
  }
  to {
    color: var(--secondary-headline-color);
    border: 1px solid var(--secondary-headline-color);

  }
`;

const ButtonElement = styled.button`
  background-color: transparent;
  width: var(--space-12);
  height: var(--space-7);
  border: 1px solid black;
  padding: 0 var(--space-4);
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    animation-name: ${changeColor};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }
  @media (max-width: 400px) {
    width: initial;
  }
`;

const Text = styled.h6`
  margin: 0 0 0 var(--space-4);
  font-size: var(--font-size-4);
  font-weight: 400;
  @media (max-width: 400px) {
    display: none;
  }
`;
