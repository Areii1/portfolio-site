import React from "react";
import styled from "styled-components";
import { Lan, ModalStatus } from "../../../pages/index";
import { UseCase } from "../../buttons/generalButton/GeneralButton";
import { TopButtonsListItem } from "./topButtonsListItem/TopButtonsListItem";
import { FileDetails } from "../../../Types";

type Props = {
  updateModalOpen: (value: ModalStatus) => void;
  language: Lan;
  cv: FileDetails;
};

export const TopButtonsList = (props: Props) => {
  const listItems = [UseCase.VIDEO, UseCase.CV].map(item => (
    <TopButtonsListItem
      key={item}
      updateModalOpen={props.updateModalOpen}
      language={props.language}
      useCase={item}
      cv={props.cv}
    />
  ));
  return <List>{listItems}</List>;
};

const List = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--space-4);
  margin: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;
