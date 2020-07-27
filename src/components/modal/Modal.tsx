import React from "react";
import styled from "styled-components";
import { Lan, ModalTypes } from "../../pages/index";
import { VideoSection } from "./videoSection/VideoSection";
import { PdfSection } from "./pdfSection/PdfSection";
import { ModalHeader } from "./modalHeader/ModalHeader";
import { ProfileDetails } from "../../Types";

type Props = {
  setModalType: (modalTypes: ModalTypes | undefined) => void;
  language: Lan;
  isVideo: boolean;
  type: ModalTypes;
  profileDetails: ProfileDetails;
};

export const Modal = (props: Props) => {
  const [pdfInFullScreen, setPdfInFullScreen] = React.useState<boolean>(false);
  return (
    <ModalWrapper>
      <ModalBox type={props.type} pdfInFullScreen={pdfInFullScreen}>
        <ContentWrapper type={props.type} pdfInFullScreen={pdfInFullScreen}>
          <ModalHeader
            pdfInFullScreen={pdfInFullScreen}
            setModalType={props.setModalType}
            setPdfInFullScreen={setPdfInFullScreen}
            language={props.language}
            isVideo={props.isVideo}
            type={props.type}
            cv={props.profileDetails.cv}
          />
          {props.isVideo && (
            <VideoSection
              language={props.language}
              introductionVideo={props.profileDetails.introductionVideo}
            />
          )}
          {!props.isVideo && (
            <PdfSection
              language={props.language}
              cv={props.profileDetails.cv}
            />
          )}
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

const ModalBox = styled.div`
  position: fixed;
  top: ${(props: ModalBoxProps) =>
    getModalBoxTopPosition(props.pdfInFullScreen, props.type, false)};
  @media (max-width: 800px) {
    top: ${(props: ModalBoxProps) =>
      getModalBoxTopPosition(props.pdfInFullScreen, props.type, true)};
  }
  left: ${(props: ModalBoxProps) =>
    props.pdfInFullScreen && props.type === ModalTypes.CV
      ? "0"
      : "calc(50% - 150px);"};
  background-color: white;
  width: ${(props: ModalBoxProps) =>
    props.pdfInFullScreen && props.type === ModalTypes.CV ? "100vw" : "auto"};
  height: ${(props: ModalBoxProps) =>
    getModalBoxHeight(props.pdfInFullScreen, props.type, false)};
  @media (max-width: 800px) {
    height: ${(props: ModalBoxProps) =>
      getModalBoxHeight(props.pdfInFullScreen, props.type, true)};
  }
`;

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
      if (!isMobile) {
        return "calc(50% - 400px)";
      } else {
        return "calc(50% - 200px)";
      }
    }
  }
};

const getModalBoxHeight = (
  pdfInFullScreen: boolean,
  modalContentType: ModalTypes,
  isMobile: boolean
) => {
  if (pdfInFullScreen && modalContentType === ModalTypes.CV) {
    return "100vh";
  } else if (!pdfInFullScreen && modalContentType === ModalTypes.CV) {
    if (!isMobile) {
      return "800px";
    } else {
      return "400px";
    }
  } else {
    return "auto";
  }
};

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
