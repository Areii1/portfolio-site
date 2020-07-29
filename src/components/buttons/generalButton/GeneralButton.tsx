import React from "react";
import styled from "styled-components";

type Props = {
  icon: React.ReactNode;
  handleClick: () => void;
  text: string;
};

export const GeneralButton = (props: Props) => {
  return (
    <ButtonElement type="button" title={props.text} onClick={props.handleClick}>
      {props.icon}
      <Text>{props.text.toUpperCase()}</Text>
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
  padding: 0 3rem 0 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.h6`
  margin: 0;
  font-size: 1em;
  font-weight: 400;
`;
