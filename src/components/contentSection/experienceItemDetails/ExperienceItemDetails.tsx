import React from "react";
import styled from "styled-components";
import { ExperienceItem } from "../../../Types";
import { Lan } from "../../../pages/index";

type Props = {
  subHeadlineDetails: ExperienceItem;
  language: Lan;
};

const getDateString = (subHeadlineDetails: ExperienceItem, language: Lan) => {
  const currentText = language === Lan.ENGLISH ? "current" : "nykypäivä";
  const beginDateStr = `${subHeadlineDetails.beginDate.month}/${subHeadlineDetails.beginDate.year}`;
  const endingDateStr = subHeadlineDetails.endingDate
    ? `${subHeadlineDetails.endingDate.month}/${subHeadlineDetails.endingDate.year}`
    : currentText;
  return `${beginDateStr} - ${endingDateStr}`;
};

export const ExperienceItemDetails = (props: Props) => {
  return (
    <Wrapper>
      <Title>{props.subHeadlineDetails.jobTitle}</Title>
      <Date>{getDateString(props.subHeadlineDetails, props.language)}</Date>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: var(--space-7) 0 var(--space-minus-4) 0;
`;

const Title = styled.h4`
  font-size: var(--font-size-6);
  font-weight: 500;
  margin: 0;
`;

const Date = styled.h5`
  font-size: var(--font-size-6);
  font-weight: 500;
  color: var(--secondary-headline-color);
  margin: var(--space-2) 0 0 0;
`;