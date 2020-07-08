import React from "react";
import styled from "styled-components";
import { ExperienceItem } from "../../Types";

type Props = {
  subHeadlineDetails: ExperienceItem;
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

const getDateString = (subHeadlineDetails: ExperienceItem) => {
  const beginDateStr = `${subHeadlineDetails.beginDate.month}/${subHeadlineDetails.beginDate.year}`;
  const endingDateStr = subHeadlineDetails.endingDate
    ? `${subHeadlineDetails.endingDate.month}/${subHeadlineDetails.endingDate.year}`
    : "current";
  return `${beginDateStr} - ${endingDateStr}`;
};

export const ExperienceItemDetails = (props: Props) => {
  return (
    <Wrapper>
      <Title>{props.subHeadlineDetails.jobTitle}</Title>
      <Date>{getDateString(props.subHeadlineDetails)}</Date>
    </Wrapper>
  );
};
