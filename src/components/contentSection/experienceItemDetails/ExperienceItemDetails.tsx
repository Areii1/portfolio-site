import React from "react";
import styled from "styled-components";
import { ExperienceItem } from "../../../Types";
import { Lan } from "../../../pages/index";

type Props = {
  subHeadlineDetails: ExperienceItem;
  language: Lan;
};

const educationProgramWasAbandonedLabelEn = "dropped";
const educationProgramWasAbandonedLabelFi = "keskeytetty";

const getDateString = (subHeadlineDetails: ExperienceItem, language: Lan) => {
  const currentText = language === Lan.ENGLISH ? "current" : "nykypäivä";
  const beginDateStr = `${subHeadlineDetails.beginDate.month}/${subHeadlineDetails.beginDate.year}`;
  const endingDateStr = subHeadlineDetails.endingDate
    ? `${subHeadlineDetails.endingDate.month}/${subHeadlineDetails.endingDate.year}`
    : currentText;
  return `${beginDateStr} - ${endingDateStr}`;
};

export const ExperienceItemDetails = (props: Props) => {
  const educationProgramWasAbandonedLabel =
    props.language === Lan.ENGLISH
      ? educationProgramWasAbandonedLabelEn
      : educationProgramWasAbandonedLabelFi;
  return (
    <Wrapper>
      {!props.subHeadlineDetails.educationProgramWasAbandoned && (
        <Title>{props.subHeadlineDetails.jobTitle}</Title>
      )}
      {props.subHeadlineDetails.educationProgramWasAbandoned && (
        <Title>
          {props.subHeadlineDetails.jobTitle}
          <TitleDetailSpan>{` (${educationProgramWasAbandonedLabel})`}</TitleDetailSpan>
        </Title>
      )}
      <Date>{getDateString(props.subHeadlineDetails, props.language)}</Date>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: var(--space-7) 0 var(--space-minus-4) 0;
`;

const TitleDetailSpan = styled.span`
  font-size: var(--font-size-4);
  font-weight: 400;
  margin: auto 0 auto var(--space-4);
`;

const Title = styled.h4`
  font-size: var(--font-size-6);
  font-weight: 400;
  margin: 0;
  display: flex;
  align-items: center;
`;

const Date = styled.h5`
  font-size: var(--font-size-5);
  font-weight: 400;
  color: var(--secondary-headline-color);
  margin: var(--space-2) 0 0 0;
`;
