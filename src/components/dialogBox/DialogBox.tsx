import React from "react";
import styled, { keyframes } from "styled-components";
import { DialogBoxContent, SetDialogBoxContent, Lan } from "../../pages/index";
import { TransparentButton } from "../buttons/transparentButton/TransparentButton";

type Props = {
  content: DialogBoxContent;
  setDialogBoxContent: SetDialogBoxContent;
  language: Lan;
};

export const DialogBox = (props: Props) => {
  const [wrapperWidth, setWrapperWidth] = React.useState<number>(0);
  const wrapperNode = React.useRef<any>(null);
  console.log(wrapperWidth, "wrapperWidth");
  React.useEffect(() => {
    if (wrapperNode) {
      if (wrapperNode.current) {
        if (wrapperNode.current.offsetWidth) {
          setWrapperWidth(wrapperNode.current.offsetWidth);
        }
      }
    }
  }, []);
  return (
    <Wrapper
      isError={props.content.isError}
      ref={wrapperNode}
      width={wrapperWidth}
    >
      <Headline>{props.content.message}</Headline>
      <ButtonWrapper>
        <TransparentButton
          handleClick={() => props.setDialogBoxContent(undefined)}
          title={
            props.language === Lan.ENGLISH
              ? "hide notification"
              : "piilota notifikaatio"
          }
        >
          <CloseButtonText>X</CloseButtonText>
        </TransparentButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

type WrapperProps = {
  isError: boolean;
  width: number;
};

const Wrapper = styled.div`
  position: fixed;
  top: var(--space-9);
  left: ${(props: WrapperProps) => `calc(50% - ${props.width / 2}px)`};
  max-width: var(--space-14);
  padding: var(--space-3) var(--space-5);
  background-color: white;
  border: ${(props: WrapperProps) =>
    props.isError ? "2px solid red" : "2px solid green"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  @media (max-width: 800px) {
    top: var(--space-7);
    max-width: var(--space-12);
  }
  @media (max-width: 400px) {
    top: var(--space-5);
    max-width: var(--space-11);
  }
`;

const ButtonWrapper = styled.div`
  margin-left: var(--space-7);
`;

const changeColor = keyframes`
  from {
    color: black;
  }
  to {
    color: var(--secondary-headline-color);
  }
`;

const CloseButtonText = styled.h6`
  margin: 0;
  font-size: var(--font-size-7);
  font-weight: lighter;
  color: black;
  :hover {
    animation-name: ${changeColor};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }
  @media (max-width: 800px) {
    font-size: var(--font-size-6);
  }
  @media (max-width: 400px) {
    font-size: var(--font-size-5);

  }
`;

const Headline = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: var(--font-size-3);
  @media (max-width: 800px) {
    font-weight: 400;
    font-size: var(--font-size-2);
  }
`;
