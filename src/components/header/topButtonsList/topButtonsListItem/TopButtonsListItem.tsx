import React from "react";
import styled from "styled-components";
import { TransparentButton } from "../../../buttons/transparentButton/TransparentButton";
import { PlayIcon } from "../../../icons/PlayIcon";
import { ViewDocumentIcon } from "../../../icons/ViewDocument";
import { Lan } from "../../../../pages/index";
import {
  buttonLabelsFi,
  buttonLabelsEn,
} from "../../../buttons/generalButton/GeneralButtonLabels";
import { UseCase } from "../../../buttons/generalButton/GeneralButton";
import { FileDetails } from "../../../../Types";

type Props = {
  toggleModalOpen: () => void;
  language: Lan;
  useCase: UseCase;
  cv: FileDetails;
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
      {props.useCase === UseCase.VIDEO && (
        <TransparentButton
          handleClick={() => props.toggleModalOpen()}
          title={buttonLabels.videoButton}
        >
          <PlayIcon
            startFillColor="white"
            endFillColor="salmon"
            size={25}
            animation={isHoveringOver}
          />
        </TransparentButton>
      )}
      {props.useCase === UseCase.CV && (
        <TransparentButton link={props.cv.fileUrl} title={buttonLabels.viewPdf}>
          <ViewDocumentIcon
            startFillColor="white"
            endFillColor="white"
            size={25}
            animation={isHoveringOver}
          />
        </TransparentButton>
      )}
    </ListItem>
  );
};

const ListItem = styled.li`
  margin: 0 var(--space-3) 0 0;
`;
