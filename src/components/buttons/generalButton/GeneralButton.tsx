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
  width: var(--space-12);
  height: var(--space-7);
  border: 1px solid black;
  padding: 0 var(--space-4);
  cursor: pointer;
  display: flex;
  align-items: center;
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
