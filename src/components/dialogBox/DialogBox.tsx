import React from "react";
import styled from "styled-components";
import { DialogBoxContent, SetDialogBoxContent } from "../../pages/index";

type Props = {
  content: DialogBoxContent;
  setDialogBoxContent: SetDialogBoxContent;
};

export const DialogBox = (props: Props) => {
  console.log('rendering dialog');
  return (
    <Wrapper isError={props.content.isError}>
      <Headline>{props.content.message}</Headline>
      <CloseButton onClick={() => props.setDialogBoxContent(undefined)}>
        X
      </CloseButton>
    </Wrapper>
  );
};

type WrapperProps = {
  isError: boolean;
};

const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  left: calc(50%);
  max-width: 200px;
  padding: 0.5rem 2rem;
  background-color: white;
  border: ${(props: WrapperProps) =>
    props.isError ? "1px solid red" : "1px solid green"};
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background-color: transparent;
  margin: 0 -1rem 0 1rem;
`;

const Headline = styled.h3`
  margin: 0;
`;