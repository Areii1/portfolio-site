import React from "react";
import styled from "styled-components";
import { lan } from "../../pages/index";

type Props = {
  setModalOpen: (modalOpen: boolean) => void;
  language: lan;
};

const videoSrcEn =
  "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/video-english.mp4";
const videoSrcFi =
  "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/video-finnish.mp4";
const posterSrc =
  "https://portfolio-page-2-cv-videos.s3.eu-north-1.amazonaws.com/poster.png";

export const Modal = (props: Props) => {
  console.log("modal rendered");
  const videoSrc = props.language === lan.ENGLISH ? videoSrcEn : videoSrcFi;
  return (
    <ModalWrapper>
      <ModalBox>
        <ContentWrapper>
          <CloseButton
            onClick={() => props.setModalOpen(false)}
            title="close video"
          >
            <CloseButtonText>X</CloseButtonText>
          </CloseButton>
          <video preload="auto" poster={posterSrc} controls width="400px">
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
  top: calc(50% - 350px);
  left: calc(50% - 200px);
  height: 700px;
  width: 400px;
  background-color: white;
  opacity: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  padding: 0;
  top: 0;
  right: -2rem;
  cursor: pointer;
`;

const CloseButtonText = styled.h6`
  margin: 0;
  font-size: 3em;
  font-weight: lighter;
  color: white;
`;
