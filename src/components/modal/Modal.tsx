import React from "react";
import styled from "styled-components";
import { Lan, ModalTypes } from "../../pages/index";
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
  type: ModalTypes;
  profileDetails: ProfileDetails;
};

export const Modal = (props: Props) => {
  return (
    <ModalWrapper>
      <ModalBox type={props.type}>
        <ContentWrapper>
          <ModalHeader
            setModalType={props.setModalType}
            language={props.language}
            type={props.type}
          />
          {/* video needs to be re rendered if language is changed */}
          <>
            {props.language === Lan.ENGLISH && (
              <video
                preload="auto"
                poster={props.profileDetails.introductionVideo.filePosterUrl}
                controls
                width="100%"
              >
                <source
                  src={props.profileDetails.introductionVideo.fileUrl}
                  type="video/mp4"
                />
              </video>
            )}
            {props.language === Lan.FINNISH && (
              <video
                preload="auto"
                poster={props.profileDetails.introductionVideo.filePosterUrl}
                controls
                width="100%"
              >
                <source
                  src={props.profileDetails.introductionVideo.fileUrl}
                  type="video/mp4"
                />
              </video>
            )}
          </>
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
};

const ModalBox = styled.div`
  position: fixed;
  background-color: white;
  top: ${(props: ModalBoxProps) => getModalBoxTopPosition(props.type, false)};
  left: ${(props: ModalBoxProps) => getModalBoxLeftPosition(props.type, false)};
  width: ${(props: ModalBoxProps) => getModalBoxWidth(props.type, false)};
  height: ${(props: ModalBoxProps) => getModalBoxHeight(false)};
  @media (max-width: 800px) {
    top: ${(props: ModalBoxProps) => getModalBoxTopPosition(props.type, true)};
    left: ${(props: ModalBoxProps) =>
      getModalBoxLeftPosition(props.type, true)};
    height: ${(props: ModalBoxProps) => getModalBoxHeight(true)};
    width: ${(props: ModalBoxProps) => getModalBoxWidth(props.type, true)};
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
