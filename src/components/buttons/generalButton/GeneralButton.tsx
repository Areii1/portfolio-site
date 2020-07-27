import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  handleClick: () => void;
  title: string;
};

export const GeneralButton = (props: Props) => {
  return (
    <ButtonElement
      type="button"
      title={props.title}
      onClick={props.handleClick}
    >
      {props.children}
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
