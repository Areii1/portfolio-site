import React from "react";
import styled from "styled-components";
import { ModalTypes } from "../../../pages/index";
import { Lan } from "../../../pages/index";
import { UseCase } from "../../buttons/generalButton/GeneralButton";
import { TopButtonsListItem } from "./topButtonsListItem/TopButtonsListItem";

type Props = {
  updateModalType: (modalType: ModalTypes) => void;
  language: Lan;
};

export const TopButtonsList = (props: Props) => {
  const listItems = [UseCase.VIDEO, UseCase.CV].map(item => {
    return (
      <>
        {UseCase.CV && (
          <TopButtonsListItem
            key={item}
            updateModalType={props.updateModalType}
            language={props.language}
            useCase={item}
          />
        )}
        {UseCase.VIDEO && (
          <TopButtonsListItem
            key={item}
            updateModalType={props.updateModalType}
            language={props.language}
            useCase={item}
          />
        )}
      </>
    );
  });
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
