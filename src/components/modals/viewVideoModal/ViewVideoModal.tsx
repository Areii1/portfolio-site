import React from "react";
import styled from "styled-components";
import { Lan, ModalStatus } from "../../../pages/index";
import { ModalHeader } from "./modalHeader/ModalHeader";
import { ProfileDetails } from "../../../Types";
import {
  getModalBoxTopPosition,
  getModalBoxLeftPosition,
  getModalBoxWidth,
  getModalBoxHeight,
} from "./ModalUtilityFunctions";

type Props = {
  updateModalOpen: (value: ModalStatus) => void;
  language: Lan;
  profileDetails: ProfileDetails;
};

export const ViewVideoModal = (props: Props) => {
  return (
    <ModalWrapper>
      <ModalBox>
        <ContentWrapper>
          <ModalHeader
            updateModalOpen={props.updateModalOpen}
            language={props.language}
          />
          {/* video needs to be re rendered if language is changed */}
          <>
            {props.language === Lan.ENGLISH && (
              <video
                preload="auto"
                poster={props.profileDetails.introductionVideo.filePosterUrl}
                controls
                width="100%"
                autoPlay
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
                autoPlay
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

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 15, 0.7);
`;

export const ModalBox = styled.div`
  position: fixed;
  background-color: white;
  top: ${getModalBoxTopPosition(false)};
  left: ${getModalBoxLeftPosition(false)};
  width: ${getModalBoxWidth(false)};
  height: ${getModalBoxHeight(false)};
  @media (max-width: 800px) {
    top: ${getModalBoxTopPosition(true)};
    left: ${getModalBoxLeftPosition(true)};
    height: ${getModalBoxHeight(true)};
    width: ${getModalBoxWidth(true)};
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
