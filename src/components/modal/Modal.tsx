import React from "react";
import styled from "styled-components";
import { lan, ModalTypes } from "../../pages/index";
import { LanguageList } from "../toggleLanguage/ToggleLanguage";
import { VideoSection } from "./videoSection/VideoSection";
import { PdfSection } from "./pdfSection/PdfSection";

type Props = {
  setModalType: (modalTypes: ModalTypes | undefined) => void;
  updateLanguage: (language: lan) => void;
  language: lan;
  isVideo: boolean;
  type: ModalTypes;
};

const closeModalTextEn = "close modal";
const closeModalTextFi = "sulje modaali";

export const Modal = (props: Props) => {
  const closeVideoText =
    props.language === lan.ENGLISH ? closeModalTextEn : closeModalTextFi;
  return (
    <ModalWrapper>
      <ModalBox type={props.type}>
        <ContentWrapper>
          <Header>
            <LanguageList
              updateLanguage={props.updateLanguage}
              isBlack
              language={props.language}
            />
            <CloseButton
              onClick={() => props.setModalType(undefined)}
              title={closeVideoText}
            >
              <CloseButtonText>X</CloseButtonText>
            </CloseButton>
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
};

const ModalBox = styled.div`
  position: fixed;
  top: ${(modalBoxProps: ModalBoxProps) =>
    modalBoxProps.type === ModalTypes.VIDEO
      ? "calc(50% - 275px)"
      : "calc(50% - 400px)"};
  left: calc(50% - 150px);
  background-color: white;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
