import React from "react";
import styled from "styled-components";
import { ToggleLanguage } from "../../toggleLanguage/ToggleLanguage";
import FullscreenIcon from "../../../images/fullscreen.png";
import OutOfFullscreenIcon from "../../../images/out-of-fullscreen.png";
import DownloadIcon from "../../../images/download-icon.png";
import { ModalTypes, lan } from "../../../pages/index";
import { downloadFile } from "../../../util";

const modalHeaderContentLabelsEn = {
  closeModal: "close modal",
  fullscreen: "fullscreen",
  outOfFullscreen: "minimize",
  downloadCv: "download cv",
};

const modalHeaderContentLabelsFi = {
  closeModal: "sulje modaali",
  fullscreen: "koko ruudun tila",
  outOfFullscreen: "pois koko ruudun tilasta",
  downloadCv: "lataa cv",
};

type Cv = {
  link: string;
  name: string;
};

type ModalHeader = {
  pdfInFullScreen: boolean;
  setModalType: (modalTypes: ModalTypes | undefined) => void;
  updateLanguage: (language: lan) => void;
  setPdfInFullScreen: (toggleOn: boolean) => void;
  language: lan;
  isVideo: boolean;
  type: ModalTypes;
  cv: Cv;
};

export const ModalHeader = (props: ModalHeader) => {
  const modalContentLabels =
    props.language === lan.ENGLISH
      ? modalHeaderContentLabelsEn
      : modalHeaderContentLabelsFi;
  return (
    <Wrapper pdfInFullScreen={props.pdfInFullScreen}>
      <ToggleLanguage
        updateLanguage={props.updateLanguage}
        isBlack
        language={props.language}
      />
      {props.type === ModalTypes.CV && (
        <>
          <Button
            type="button"
            onClick={() => props.setPdfInFullScreen(!props.pdfInFullScreen)}
            title={
              props.pdfInFullScreen
                ? modalContentLabels.outOfFullscreen
                : modalContentLabels.fullscreen
            }
          >
            <Image
              src={props.pdfInFullScreen ? OutOfFullscreenIcon : FullscreenIcon}
            />
          </Button>
          <Button
            type="button"
            title={modalContentLabels.downloadCv}
            onClick={() => downloadFile(props.cv.name, props.cv.link)}
          >
            <Image src={DownloadIcon} />
          </Button>
        </>
      )}
      <Button
        type="button"
        onClick={() => props.setModalType(undefined)}
        title={modalContentLabels.closeModal}
      >
        <CloseButtonText>X</CloseButtonText>
      </Button>
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

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0 1rem 0 0;
  cursor: pointer;
`;

const CloseButtonText = styled.h6`
  margin: 0;
  font-size: 2.5em;
  font-weight: lighter;
  color: black;
`;

const Image = styled.img`
  width: 40px;
  max-height: 40px;
`;
