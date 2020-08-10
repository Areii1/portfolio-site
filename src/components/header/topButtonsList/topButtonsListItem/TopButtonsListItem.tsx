import React from "react";
import styled from "styled-components";
import { TransparentButton } from "../../../buttons/transparentButton/TransparentButton";
import { PlayIcon } from "../../../icons/PlayIcon";
import { ViewDocumentIcon } from "../../../icons/ViewDocument";
import { ModalTypes, Lan } from "../../../../pages/index";
import {
  buttonLabelsFi,
  buttonLabelsEn,
} from "../../../buttons/generalButton/GeneralButtonLabels";
import { UseCase } from "../../../buttons/generalButton/GeneralButton";

type Props = {
  updateModalType: (modalType: ModalTypes) => void;
  language: Lan;
  useCase: UseCase;
};

export const TopButtonsListItem = (props: Props) => {
  const [isHoveringOver, setIsHoveringOver] = React.useState<boolean>(false);
  const buttonLabels =
    props.language === Lan.ENGLISH ? buttonLabelsEn : buttonLabelsFi;
  return (
    <ListItem
      onMouseEnter={() => setIsHoveringOver(true)}
      onMouseLeave={() => setIsHoveringOver(false)}
    >
      <TransparentButton
        handleClick={() =>
          props.updateModalType(
            props.useCase === UseCase.VIDEO ? ModalTypes.VIDEO : ModalTypes.CV
          )
        }
        title={
          props.useCase === UseCase.VIDEO
            ? buttonLabels.videoButton
            : buttonLabels.viewPdf
        }
      >
        {props.useCase === UseCase.VIDEO && (
          <PlayIcon
            startFillColor="white"
            endFillColor="salmon"
            size={25}
            animation={isHoveringOver}
          />
        )}
        {props.useCase === UseCase.CV && (
          <ViewDocumentIcon
            startFillColor="white"
            endFillColor="white"
            size={25}
            animation={isHoveringOver}
          />
        )}
      </TransparentButton>
    </ListItem>
  );
};

const ListItem = styled.li`
  margin: 0 var(--space-3) 0 0;
`;
