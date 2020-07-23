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
  const wrapperNode = React.useRef(null);
  React.useEffect(() => {
    if (wrapperNode!.current) {
      setWrapperWidth(wrapperNode.current.offsetWidth);
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
  left: ${(props: WrapperProps) => {
    console.log(props.width, "width received");
    return `calc(50% - ${props.width / 2}px)`;
  }};
  max-width: 200px;
  padding: 0.5rem 1rem;
  background-color: white;
  border: ${(props: WrapperProps) => {
    console.log(props, "wrapper props");
    return props.isError ? "1px solid red" : "1px solid green";
  }};
  display: flex;
  justify-content: space-between;
`;

const CloseButtonText = styled.h6`
  margin: 0;
  font-size: 1.5em;
  font-weight: lighter;
  color: black;
`;

const Headline = styled.h3`
  margin: 0 1.5rem 0 0;
`;
