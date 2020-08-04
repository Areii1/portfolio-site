import React from "react";
import styled from "styled-components";
import { TransparentButton } from "../../buttons/transparentButton/TransparentButton";
import { PlayIcon } from "../../icons/PlayIcon";
import { ViewDocumentIcon } from "../../icons/ViewDocument";
import { CodeIcon } from "../../icons/CodeIcon";
import { ModalTypes } from "../../../pages/index";
import {
  buttonLabelsFi,
  buttonLabelsEn,
} from "../../buttons/generalButton/GeneralButtonLabels";
import { Lan } from "../../../pages/index";

type Props = {
  updateModalType: (modalType: ModalTypes) => void;
  codeRepositoryLink?: string;
  language: Lan;
};

export const TopButtonsList = (props: Props) => {
  const buttonLabels =
    props.language === Lan.ENGLISH ? buttonLabelsEn : buttonLabelsFi;
  return (
    <List>
      <ListItem>
        <TransparentButton
          handleClick={() => props.updateModalType(ModalTypes.VIDEO)}
          title={buttonLabels.videoButton}
        >
          <PlayIcon
            startFillColor="white"
            endFillColor="white"
            size={25}
            animation={false}
          />
        </TransparentButton>
      </ListItem>
      <ListItem>
        <TransparentButton
          handleClick={() => props.updateModalType(ModalTypes.CV)}
          title={buttonLabels.viewPdf}
        >
          <ViewDocumentIcon
            startFillColor="white"
            endFillColor="white"
            size={25}
            animation={false}
          />
        </TransparentButton>
      </ListItem>
      {props.codeRepositoryLink && (
        <ListItem>
          <TransparentButton
            link={props.codeRepositoryLink}
            title={buttonLabels.viewRepository}
          >
            <CodeIcon fillColor="white" size={25} />
          </TransparentButton>
        </ListItem>
      )}
    </List>
  );
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

const ListItem = styled.li`
  margin: 0 var(--space-3) 0 0;
`;
