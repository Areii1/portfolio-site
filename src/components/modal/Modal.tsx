import React from "react";
import styled from "styled-components";

type Props = {
  setModalOpen: (modalOpen: boolean) => void;
};

export const Modal = (props: Props) => {
  console.log("modal rendered");
  return (
    <ModalWrapper>
      <ModalBox>
        <ContentWrapper>
          <CloseButton onClick={() => props.setModalOpen(false)}>
            <CloseButtonText>X</CloseButtonText>
          </CloseButton>
          <h1>video</h1>
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
  top: calc(50% - 200px);
  left: calc(50% - 400px);
  height: 400px;
  width: 800px;
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
  top: 0.5rem;
  right: 2rem;
  cursor: pointer;
`;

const CloseButtonText = styled.h6`
  margin: 0;
  font-size: 1.5em;
  font-weight: lighter;
`;
