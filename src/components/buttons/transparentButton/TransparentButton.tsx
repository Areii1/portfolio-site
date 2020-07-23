import React from "react";
import styled from "styled-components";

type Props = {
  handleClick: () => void;
  title: string;
  children: React.ReactNode;
};

export const TransparentButton = (props: Props) => {
  return (
    <Button type="button" onClick={props.handleClick} title={props.title}>
      {props.children}
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
