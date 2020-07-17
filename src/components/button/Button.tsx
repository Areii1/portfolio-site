import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  onClick?: (modalOpen: boolean) => void;
};

export const Button = (props: Props) => {
  const onClick = props.onClick ? props.onClick : () => {};
  return (
    <ButtonElement
      type="button"
      title={props.text.toLowerCase()}
      onClick={() => onClick(true)}
    >
      {props.text}
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  background-color: transparent;
  width: 15rem;
  height: 3rem;
  border: 1px solid black;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;
