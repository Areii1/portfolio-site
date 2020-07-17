import React from "react";
import styled from "styled-components";
import { lan } from "../../pages/index";
import { LanguageList } from "../languageList/LanguageList";

type Props = {
  setModalOpen: (modalOpen: boolean) => void;
  updateLanguage: (language: lan) => void;
  language: lan;
};

const videoSrcEn =
  "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/video-english.mp4";
const videoSrcFi =
  "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/video-finnish.mp4";
const posterSrc =
  "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/poster.png";

const closeVideoTextEn = "close video";
const closeVideoTextFi = "sulje video";

export const Modal = (props: Props) => {
  const videoSrc = props.language === lan.ENGLISH ? videoSrcEn : videoSrcFi;
  const closeVideoText =
    props.language === lan.ENGLISH ? closeVideoTextEn : closeVideoTextFi;
  return (
    <ModalWrapper>
      <ModalBox>
        <ContentWrapper>
          <Header>
            <LanguageList updateLanguage={props.updateLanguage} isBlack />
            <CloseButton
              onClick={() => props.setModalOpen(false)}
              title={closeVideoText}
            >
              <CloseButtonText>X</CloseButtonText>
            </CloseButton>
          </Header>
          <video preload="auto" poster={posterSrc} controls width="300px">
            <source src={videoSrc} type="video/mp4" />
          </video>
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
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalBox = styled.div`
  position: fixed;
  top: calc(50% - 400px);
  left: calc(50% - 150px);
  background-color: white;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0 1rem 0 0;
  cursor: pointer;
`;

const CloseButtonText = styled.h6`
  margin: 0;
  font-size: 2em;
  font-weight: lighter;
  color: black;
`;
