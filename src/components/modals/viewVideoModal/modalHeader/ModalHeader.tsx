import React from "react";
import styled, { keyframes } from "styled-components";
import { ToggleLanguage } from "../../../toggleLanguage/ToggleLanguage";
import { Lan } from "../../../../pages/index";
import { TransparentButton } from "../../../buttons/transparentButton/TransparentButton";
import {
  modalHeaderContentLabelsEn,
  modalHeaderContentLabelsFi,
} from "./ModalHeaderLabels";

type ModalHeader = {
  toggleModalOpen: () => void;
  language: Lan;
};

export const ModalHeader = (props: ModalHeader) => {
  const modalContentLabels =
    props.language === Lan.ENGLISH
      ? modalHeaderContentLabelsEn
      : modalHeaderContentLabelsFi;
  return (
    <Wrapper>
      <ToggleLanguage isBlack language={props.language} />
      <ButtonWrapper>
        <TransparentButton
          handleClick={() => props.toggleModalOpen()}
          title={modalContentLabels.closeModal}
        >
          <CloseButtonText>X</CloseButtonText>
        </TransparentButton>
      </ButtonWrapper>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  margin-right: var(--space-4);
`;

const changeColor = keyframes`
  from {
    color: black;
  }
  to {
    color: var(--secondary-headline-color);
  }
`;

const CloseButtonText = styled.h6`
  margin: 0;
  font-size: var(--font-size-7);
  font-weight: lighter;
  color: black;
  :hover {
    animation-name: ${changeColor};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }
`;