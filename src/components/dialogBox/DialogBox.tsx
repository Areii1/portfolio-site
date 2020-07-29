import React from "react";
import styled from "styled-components";
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
    </Wrapper>
  );
};

type WrapperProps = {
  isError: boolean;
  width: number;
};

const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  left: ${(props: WrapperProps) => `calc(50% - ${props.width / 2}px)`};
  max-width: 500px;
  padding: var(--space-2) var(--space-4);
  background-color: white;
  border: ${(props: WrapperProps) =>
    props.isError ? "1px solid red" : "1px solid green"};
  display: flex;
  justify-content: space-between;
`;

const CloseButtonText = styled.h6`
  margin: 0;
  font-size: var(--space-font-size-5);
  font-weight: lighter;
  color: black;
`;

const Headline = styled.h3`
  margin: 0 var(--space-4) 0 0;
`;
