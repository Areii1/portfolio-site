import React from "react";
import styled, { keyframes } from "styled-components";
import { ModalTypes } from "../../../pages/index";
import { PlayIcon } from "../../icons/PlayIcon";
import { ViewDocumentIcon } from "../../icons/ViewDocument";
import { Lan } from "../../../pages/index";
import { FileDetails } from "../../../Types";

type Props = {
  type: ModalTypes;
  handleClick: () => void;
  language: Lan;
  cv?: FileDetails;
};

const buttonLabelsFi = {
  videoButton: "katso video",
  viewPdf: "katso cv",
  cvButtonMobile: "lataa cv",
};

const buttonLabelsEn = {
  videoButton: "watch video",
  viewPdf: "view cv",
  cvButtonMobile: "download cv",
};

export const GeneralButton = (props: Props) => {
  const buttonLabels =
    props.language === Lan.ENGLISH ? buttonLabelsEn : buttonLabelsFi;
  return (
    <>
      {props.type === ModalTypes.CV && props.cv && (
        <CVButtonMobileLink href={props.cv.fileUrl} download target="_blank">
          <CVButtonMobile
            type="button"
            title={buttonLabels.cvButtonMobile}
            useCase={props.type}
          >
            <ViewDocumentIcon
              startFillColor="#b78a10"
              endFillColor="blue"
              size={30}
              animation={false}
            />
            <Text>{buttonLabels.cvButtonMobile.toUpperCase()}</Text>
          </CVButtonMobile>
        </CVButtonMobileLink>
      )}
      <Button
        type="button"
        title={
          props.type === ModalTypes.VIDEO
            ? buttonLabels.videoButton
            : buttonLabels.viewPdf
        }
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
        <Text>
          {props.type === ModalTypes.VIDEO
            ? buttonLabels.videoButton.toUpperCase()
            : buttonLabels.viewPdf.toUpperCase()}
        </Text>
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
  @media (max-width: 400px) {
    display: ${(props: ButtonProps) =>
      props.useCase === ModalTypes.CV ? "none" : "initial"};
    width: initial;
  }
`;

const CVButtonMobile = styled(Button)`
  display: none;
  @media (max-width: 400px) {
    display: ${(props: ButtonProps) =>
      props.useCase === ModalTypes.CV ? "initial" : "none"};
    width: initial;
  }
`;

const CVButtonMobileLink = styled.a`
  display: block;
`;

const Text = styled.h6`
  margin: 0 0 0 var(--space-4);
  font-size: var(--font-size-4);
  font-weight: 400;
  @media (max-width: 400px) {
    display: none;
  }
`;
