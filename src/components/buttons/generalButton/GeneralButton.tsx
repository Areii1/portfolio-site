import React from "react";
import styled, { keyframes } from "styled-components";
import { ModalTypes } from "../../../pages/index";
import { PlayIcon } from "../../icons/PlayIcon";
import { ViewDocumentIcon } from "../../icons/ViewDocument";
import { Lan } from "../../../pages/index";
import { downloadFile } from "../../../utility/utilityFunctions";
import { FileDetails } from "../../../Types";

type Props = {
  type: ModalTypes;
  handleClick: () => void;
  text: string;
  language: Lan;
  cv?: FileDetails;
};

const cvButtonLabelEn = "Download cv";
const cvButtonLabelFi = "Lataa cv";

export const GeneralButton = (props: Props) => {
  const cvButtonLabel =
    props.language === Lan.ENGLISH ? cvButtonLabelEn : cvButtonLabelFi;
  return (
    <>
      {props.type === ModalTypes.CV && props.cv && (
        // <CVButtonMobileLink href={props.cvFile} download>
        <CVButtonMobile
          type="button"
          title={cvButtonLabel}
          useCase={props.type}
          onClick={() => downloadFile(props.cv!.fileName, props.cv!.fileUrl)}
        >
          <ViewDocumentIcon
            startFillColor="#b78a10"
            endFillColor="blue"
            size={30}
            animation={false}
          />
          <Text>{props.text.toUpperCase()}</Text>
        </CVButtonMobile>
        // </CVButtonMobileLink>
      )}
      <Button
        type="button"
        title={props.text}
        onClick={props.handleClick}
        useCase={props.type}
      >
        {props.type === ModalTypes.VIDEO && (
          <PlayIcon
            startFillColor="blue"
            endFillColor="blue"
            size={30}
            animation={false}
          />
        )}
        {props.type === ModalTypes.CV && (
          <ViewDocumentIcon
            startFillColor="#b78a10"
            endFillColor="blue"
            size={30}
            animation={false}
          />
        )}
        <Text>{props.text.toUpperCase()}</Text>
      </Button>
    </>
  );
};

const changeColor = keyframes`
  from {
    border: 1px solid black;
    color: initial;
  }
  to {
    color: var(--secondary-headline-color);
    border: 1px solid var(--secondary-headline-color);
  }
`;

type ButtonProps = {
  useCase: ModalTypes;
};

const Button = styled.button`
  background-color: transparent;
  width: var(--space-12);
  height: var(--space-7);
  border: 1px solid black;
  padding: 0 var(--space-4);
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    animation-name: ${changeColor};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }
  @media (max-width: 700px) {
    display: ${(props: ButtonProps) =>
      props.useCase === ModalTypes.CV ? "none" : "initial"};
    width: initial;
  }
`;

const CVButtonMobile = styled(Button)`
  display: none;
  @media (max-width: 700px) {
    display: ${(props: ButtonProps) =>
      props.useCase === ModalTypes.CV ? "initial" : "none"};
    width: initial;
  }
`;

// const CVButtonMobileLink = styled.a`
//   display: block;
// `;

const Text = styled.h6`
  margin: 0 0 0 var(--space-4);
  font-size: var(--font-size-4);
  font-weight: 400;
  @media (max-width: 700px) {
    display: none;
  }
`;
