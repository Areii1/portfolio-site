import React from "react";
import styled from "styled-components";
import { ExperienceItem } from "../../Types";
import { lan } from "../../pages/index";

type Props = {
  subHeadlineDetails: ExperienceItem;
  language: lan;
};

const getDateString = (subHeadlineDetails: ExperienceItem, language: lan) => {
  const currentText = language === lan.ENGLISH ? "current" : "nykypäivä";
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
  margin: 3rem 0 -1.5rem 0;
`;

const Title = styled.h4`
  font-size: 1.7rem;
  margin: 0;
`;

const Date = styled.h5`
  font-size: 1.5rem;
  color: #94a3ba;
  margin: 0.5rem 0 0 0;
`;
