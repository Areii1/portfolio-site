import React from "react";
// import styled from "styled-components";
import { Lan, ModalStatus } from "../../../pages/index";
import { ProfileDetails } from "../../../Types";
import {
  ModalWrapper,
  ModalBox,
  ContentWrapper,
} from "../viewVideoModal/ViewVideoModal";

type Props = {
  updateModalOpen: (value: ModalStatus) => void;
  language: Lan;
  profileDetails: ProfileDetails;
};

export const AskForCvModal = (props: Props) => {
  return (
    <ModalWrapper>
      <ModalBox>
        <ContentWrapper>
          <h4>Ask for cv</h4>
        </ContentWrapper>
      </ModalBox>
    </ModalWrapper>
  );
};
