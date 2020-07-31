import React from "react";
import styled, { keyframes } from "styled-components";
import { ToggleLanguage } from "../../toggleLanguage/ToggleLanguage";
import { FullscreenIcon } from "../../icons/FullscreenIcon";
import { OutOfFullscreenIcon } from "../../icons/OutOfFullscreenIcon";
import DownloadIcon from "../../../images/download-icon.png";
import { ModalTypes, Lan } from "../../../pages/index";
import { FileDetails } from "../../../Types";
import { TransparentButton } from "../../buttons/transparentButton/TransparentButton";
import {
  modalHeaderContentLabelsEn,
  modalHeaderContentLabelsFi,
} from "./ModalHeaderLabels";

type ModalHeader = {
  pdfInFullScreen: boolean;
  setModalType: (modalTypes: ModalTypes | undefined) => void;
  setPdfInFullScreen: (toggleOn: boolean) => void;
  language: Lan;
  isVideo: boolean;
  type: ModalTypes;
  cv: FileDetails;
};

export const ModalHeader = (props: ModalHeader) => {
  const modalContentLabels =
    props.language === Lan.ENGLISH
      ? modalHeaderContentLabelsEn
      : modalHeaderContentLabelsFi;
  return (
    <Wrapper pdfInFullScreen={props.pdfInFullScreen}>
      <ToggleLanguage isBlack language={props.language} />
      {props.type === ModalTypes.CV && (
        <>
          <TransparentButton
            title={
              props.pdfInFullScreen
                ? modalContentLabels.outOfFullscreen
                : modalContentLabels.fullscreen
            }
            handleClick={() => props.setPdfInFullScreen(!props.pdfInFullScreen)}
          >
            {!props.pdfInFullScreen && (
              <FullscreenIcon size={30} fillColor="black" />
            )}
            {props.pdfInFullScreen && (
              <OutOfFullscreenIcon size={30} fillColor="black" />
            )}
          </TransparentButton>
          <a href={props.cv.fileUrl} download target="_blank">
            <TransparentButton
              title={modalContentLabels.downloadCv}
              handleClick={() => {}}
            >
              <Image src={DownloadIcon} />
            </TransparentButton>
          </a>
        </>
      )}
      <ButtonWrapper>
        <TransparentButton
          handleClick={() => props.setModalType(undefined)}
          title={modalContentLabels.closeModal}
        >
          <CloseButtonText>X</CloseButtonText>
        </TransparentButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

type WrapperProps = {
  pdfInFullScreen: boolean;
};

const Wrapper = styled.div`
  height: ${(props: WrapperProps) => (props.pdfInFullScreen ? "80px" : "40px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  margin-right: var(--space-4);
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
`;

const Image = styled.img`
  width: 40px;
  max-height: 40px;
`;
