import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  handleClick: any;
  handleClickArgument?: any;
};

export const GeneralButton = (props: Props) => {
  return (
    <ButtonElement
      type="button"
      title={props.text.toLowerCase()}
      onClick={() => props.handleClick(props.handleClickArgument)}
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
