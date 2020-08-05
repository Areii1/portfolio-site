import React from "react";
import styled, { keyframes } from "styled-components";
import { ModalTypes } from "../../../pages/index";
import { PlayIcon } from "../../icons/PlayIcon";
import { ViewDocumentIcon } from "../../icons/ViewDocument";
import { Lan } from "../../../pages/index";
import { FileDetails } from "../../../Types";
import { buttonLabelsFi, buttonLabelsEn } from "./GeneralButtonLabels";

type Props = {
  type: ModalTypes;
  handleClick: () => void;
  language: Lan;
  cv?: FileDetails;
};

export const GeneralButton = (props: Props) => {
  const buttonLabels =
    props.language === Lan.ENGLISH ? buttonLabelsEn : buttonLabelsFi;
  return (
    <>
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
            endFillColor="#b78a10"
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
      {props.type === ModalTypes.CV && (
        <LinkButton
          href={props.cv?.fileUrl}
          target="_blank"
          title={buttonLabels.viewPdf}
        >
          <ViewDocumentIcon
            startFillColor="#b78a10"
            endFillColor="#b78a10"
            size={30}
            animation={false}
          />
          <Text>{buttonLabels.viewPdf.toUpperCase()}</Text>
        </LinkButton>
      )}
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
  text-decoration: none;
  :hover {
    animation-name: ${changeColor};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }
  @media (max-width: 400px) {
    display: ${(props: ButtonProps) =>
      props.useCase === ModalTypes.CV ? "none" : "flex"};
    width: initial;
  }
`;

const LinkButton = styled.a`
  display: none;
  @media (max-width: 400px) {
    background-color: transparent;
    height: var(--space-7);
    border: 1px solid black;
    padding: 0 var(--space-4);
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    :hover {
      animation-name: ${changeColor};
      animation-duration: 0.4s;
      animation-fill-mode: forwards;
    }
    width: initial;
  }
`;

const Text = styled.h6`
  margin: 0 0 0 var(--space-4);
  font-size: var(--font-size-4);
  font-weight: 400;
  color: black;
`;
