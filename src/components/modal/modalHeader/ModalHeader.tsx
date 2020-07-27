import React from "react";
import styled from "styled-components";
import { ToggleLanguage } from "../../toggleLanguage/ToggleLanguage";
import FullscreenIcon from "../../../images/fullscreen.png";
import OutOfFullscreenIcon from "../../../images/out-of-fullscreen.png";
import DownloadIcon from "../../../images/download-icon.png";
import { ModalTypes, Lan } from "../../../pages/index";
import { downloadFile } from "../../../util";
import { FileDetails } from "../../../Types";
import { TransparentButton } from "../../buttons/transparentButton/TransparentButton";

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
      <ToggleLanguage
        isBlack
        language={props.language}
      />
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
            <Image
              src={props.pdfInFullScreen ? OutOfFullscreenIcon : FullscreenIcon}
            />
          </TransparentButton>
          <TransparentButton
            title={modalContentLabels.downloadCv}
            handleClick={() =>
              downloadFile(props.cv.fileName, props.cv.fileUrl)
            }
          >
            <Image src={DownloadIcon} />
          </TransparentButton>
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
  margin-right: 1rem;
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
