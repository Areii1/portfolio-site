import React from "react";
import styled from "styled-components";
import { lan, ModalTypes } from "../../pages/index";
import { LanguageList } from "../toggleLanguage/ToggleLanguage";
import { VideoSection } from "./videoSection/VideoSection";
import { PdfSection } from "./pdfSection/PdfSection";
import FullscreenIcon from "../../images/full-screen.png";
import OutOfFullscreenIcon from "../../images/out-of-fullscreen.png";
import DownloadIcon from "../../images/download-icon.png";

type Props = {
  setModalType: (modalTypes: ModalTypes | undefined) => void;
  updateLanguage: (language: lan) => void;
  language: lan;
  isVideo: boolean;
  type: ModalTypes;
};

const modalContentLabelsEn = {
  closeModal: "close modal",
  fullscreen: "fullscreen",
  outOfFullscreen: "minimize",
  downloadCv: "download cv",
};

const modalContentLabelsFi = {
  closeModal: "sulje modaali",
  fullscreen: "koko ruudun tila",
  outOfFullscreen: "pois koko ruudun tilasta",
  downloadCv: "lataa cv",
};

export const Modal = (props: Props) => {
  const [pdfInFullScreen, setPdfInFullScreen] = React.useState<boolean>(false);
  const modalContentLabels =
    props.language === lan.ENGLISH
      ? modalContentLabelsEn
      : modalContentLabelsFi;
  return (
    <ModalWrapper>
      <ModalBox type={props.type} pdfInFullScreen={pdfInFullScreen}>
        <ContentWrapper type={props.type} pdfInFullScreen={pdfInFullScreen}>
          <Header pdfInFullScreen={pdfInFullScreen}>
            <LanguageList
              updateLanguage={props.updateLanguage}
              isBlack
              language={props.language}
            />
            {props.type === ModalTypes.CV && (
              <>
                <Button
                  type="button"
                  onClick={() => setPdfInFullScreen(!pdfInFullScreen)}
                  title={
                    pdfInFullScreen
                      ? modalContentLabels.outOfFullscreen
                      : modalContentLabels.fullscreen
                  }
                >
                  <Image
                    src={pdfInFullScreen ? OutOfFullscreenIcon : FullscreenIcon}
                  />
                </Button>
                <Button
                  type="button"
                  onClick={() => setPdfInFullScreen(!pdfInFullScreen)}
                  title={modalContentLabels.downloadCv}
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
          </Header>
          {props.isVideo && <VideoSection language={props.language} />}
          {!props.isVideo && <PdfSection language={props.language} />}
        </ContentWrapper>
      </ModalBox>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 15, 0.7);
`;

type ModalBoxProps = {
  type: ModalTypes;
  pdfInFullScreen: boolean;
};

const getModalBoxTopPosition = (
  pdfInFullScreen: boolean,
  modalContentType: ModalTypes,
  isMobile: boolean
) => {
  if (pdfInFullScreen && modalContentType === ModalTypes.CV) {
    return "calc(50% - 50vh)";
  } else {
    if (modalContentType === ModalTypes.VIDEO) {
      return "calc(50% - 275px)";
    } else {
      return "calc(50% - 400px)";
    }
  }
};

const ModalBox = styled.div`
  position: fixed;
  top: ${(props: ModalBoxProps) =>
    getModalBoxTopPosition(props.pdfInFullScreen, props.type, false)};
  left: ${(props: ModalBoxProps) =>
    props.pdfInFullScreen && props.type === ModalTypes.CV
      ? "0"
      : "calc(50% - 150px);"};
  background-color: white;
  width: ${(props: ModalBoxProps) =>
    props.pdfInFullScreen && props.type === ModalTypes.CV ? "100vw" : "auto"};
  height: ${(props: ModalBoxProps) => {
    if (props.pdfInFullScreen && props.type === ModalTypes.CV) {
      return "100vh";
    } else if (!props.pdfInFullScreen && props.type === ModalTypes.CV) {
      return "800px";
    } else {
      return "auto";
    }
  }};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props: ModalBoxProps) =>
    !props.pdfInFullScreen && props.type === ModalTypes.CV
      ? "start"
      : "space-between"};
`;

type HeaderProps = {
  pdfInFullScreen: boolean;
};

const Header = styled.div`
  height: ${(props: HeaderProps) => (props.pdfInFullScreen ? "80px" : "40px")};
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
