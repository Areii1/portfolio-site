import React from "react";
import styled from "styled-components";
import { Lan, ModalTypes } from "../../pages/index";
import { PdfSection } from "./pdfSection/PdfSection";
import { ModalHeader } from "./modalHeader/ModalHeader";
import { ProfileDetails } from "../../Types";
import {
  getModalBoxTopPosition,
  getModalBoxLeftPosition,
  getModalBoxWidth,
  getModalBoxHeight,
} from "./ModalUtilityFunctions";

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
            <video
              preload="auto"
              poster={props.profileDetails.introductionVideo.filePosterUrl}
              controls
              width="100%"
            >
              <source src={props.profileDetails.introductionVideo.fileUrl} type="video/mp4" />
            </video>
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
  background-color: white;
  top: ${(props: ModalBoxProps) =>
    getModalBoxTopPosition(props.pdfInFullScreen, props.type, false)};
  left: ${(props: ModalBoxProps) =>
    getModalBoxLeftPosition(props.pdfInFullScreen, props.type, false)};
  width: ${(props: ModalBoxProps) =>
    getModalBoxWidth(props.pdfInFullScreen, props.type, false)};
  height: ${(props: ModalBoxProps) =>
    getModalBoxHeight(props.pdfInFullScreen, props.type, false)};
  @media (max-width: 800px) {
    top: ${(props: ModalBoxProps) =>
      getModalBoxTopPosition(props.pdfInFullScreen, props.type, true)};
    left: ${(props: ModalBoxProps) =>
      getModalBoxLeftPosition(props.pdfInFullScreen, props.type, true)};
    height: ${(props: ModalBoxProps) =>
      getModalBoxHeight(props.pdfInFullScreen, props.type, true)};
    width: ${(props: ModalBoxProps) =>
      getModalBoxWidth(props.pdfInFullScreen, props.type, true)};
  }
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
