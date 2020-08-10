import React from "react";
import styled, { keyframes } from "styled-components";
import { PlayIcon } from "../../icons/PlayIcon";
import { ViewDocumentIcon } from "../../icons/ViewDocument";
import { Lan } from "../../../pages/index";
import { buttonLabelsFi, buttonLabelsEn } from "./GeneralButtonLabels";
import { CodeIcon } from "../../icons/CodeIcon";

export enum UseCase {
  VIDEO,
  CV,
  REPOSITORY,
  VIEWDEMOPAGE,
}

type Props = {
  useCase: UseCase;
  handleClick?: () => void;
  language: Lan;
  link?: string;
};

export const GeneralButton = (props: Props) => {
  const buttonLabels =
    props.language === Lan.ENGLISH ? buttonLabelsEn : buttonLabelsFi;
  const getButtonLabel = () => {
    switch (props.useCase) {
      case UseCase.CV:
        return buttonLabels.viewPdf;
      case UseCase.VIDEO:
        return buttonLabels.videoButton;
      case UseCase.REPOSITORY:
        return buttonLabels.viewRepository;
      case UseCase.VIEWDEMOPAGE:
        return buttonLabels.viewDemoPage;
      default:
        return "";
    }
  };
  const buttonLabel = getButtonLabel();
  const [hoveringOverButton, setHoveringOverButton] = React.useState<boolean>(
    false
  );
  return (
    <>
      {!props.link && (
        <Button
          type="button"
          title={
            props.useCase === UseCase.VIDEO
              ? buttonLabels.videoButton
              : buttonLabels.viewPdf
          }
          onClick={props.handleClick}
          useCase={props.useCase}
          hoveringOverButton={hoveringOverButton}
          onMouseEnter={() => setHoveringOverButton(true)}
          onMouseLeave={() => setHoveringOverButton(false)}
        >
          {props.useCase === UseCase.VIDEO && (
            <PlayIcon
              startFillColor="blue"
              endFillColor="blue"
              size={30}
              animation={hoveringOverButton}
            />
          )}
          {props.useCase === UseCase.CV && (
            <ViewDocumentIcon
              startFillColor="#b78a10"
              endFillColor="#b78a10"
              size={30}
              animation={hoveringOverButton}
            />
          )}
          {props.useCase === UseCase.REPOSITORY && (
            <CodeIcon
              startFillColor="#b78a10"
              endFillColor="#b78a10"
              size={30}
              animation={hoveringOverButton}
            />
          )}
          <Text hoveringOverButton={hoveringOverButton}>
            <>{buttonLabel && buttonLabel.toUpperCase()}</>
          </Text>
        </Button>
      )}
      {props.link && (
        <LinkButton
          href={props.link}
          target="_blank"
          title={buttonLabel}
          hoveringOverButton={hoveringOverButton}
          onMouseEnter={() => setHoveringOverButton(true)}
          onMouseLeave={() => setHoveringOverButton(false)}
        >
          {props.useCase === UseCase.CV && (
            <ViewDocumentIcon
              startFillColor="#b78a10"
              endFillColor="#b78a10"
              size={30}
              animation={hoveringOverButton}
            />
          )}
          {props.useCase === UseCase.REPOSITORY && (
            <CodeIcon
              startFillColor="#b78a10"
              endFillColor="#b78a10"
              size={30}
              animation={hoveringOverButton}
            />
          )}
          <Text hoveringOverButton={hoveringOverButton}>
            {buttonLabel.toUpperCase()}
          </Text>
        </LinkButton>
      )}
    </>
  );
};

const changeColor = keyframes`
  from {
    border: 1px solid black;
    background-color: transparent;
  }
  to {
    border: 1px solid salmon;
    background-color: white;
  }
`;

const changeTextColor = keyframes`
  from {
    color: initial;
  }
  to {
    color: salmon;
  }
`;

type ButtonProps = {
  useCase: UseCase;
  hoveringOverButton: boolean;
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
  animation-name: ${(props: ButtonProps) =>
    props.hoveringOverButton ? changeColor : "none"};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  @media (max-width: 400px) {
    display: ${(props: ButtonProps) =>
      props.useCase === UseCase.CV ? "none" : "flex"};
    width: initial;
  }
`;

const LinkButton = styled.a`
  background-color: transparent;
  width: var(--space-12);
  height: var(--space-7);
  border: 1px solid black;
  padding: 0 var(--space-4);
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  animation-name: ${(props: ButtonProps) =>
    props.hoveringOverButton ? changeColor : "none"};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  @media (max-width: 400px) {
    width: initial;
  }
`;

type TextProps = {
  hoveringOverButton: boolean;
};

const Text = styled.h6`
  margin: 0 0 0 var(--space-4);
  font-size: var(--font-size-4);
  font-weight: 400;
  color: black;
  animation-name: ${(props: TextProps) =>
    props.hoveringOverButton ? changeTextColor : "none"};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`;
