import React from "react";
import styled from "styled-components";

type Props = {
  handleClick?: () => void;
  title: string;
  children: React.ReactNode;
  link?: string;
};

export const TransparentButton = (props: Props) => {
  return (
    <>
      {props.link && (
        <TransparentLink href={props.link} target="_blank">
          {props.children}
        </TransparentLink>
      )}
      {props.handleClick && (
        <Button type="button" onClick={props.handleClick} title={props.title}>
          {props.children}
        </Button>
      )}
    </>
  );
};

const TransparentLink = styled.a`
  text-decoration: none;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
