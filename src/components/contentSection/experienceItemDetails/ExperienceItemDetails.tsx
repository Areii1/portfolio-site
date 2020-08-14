import React from "react";
import styled from "styled-components";
import { ExperienceItem } from "../../../Types";
import { Lan } from "../../../pages/index";
import { TechStackList } from "../../techStackList/TechStackList";

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
      <TitlesWrapper>
        <SecondaryTitle>{props.subHeadlineDetails.jobTitle}</SecondaryTitle>
        <ExtraItemsWrapper>
          <TertiaryTitle>{`${props.subHeadlineDetails.institute.toUpperCase()},`}</TertiaryTitle>
          <Date>{`(${getDateString(
            props.subHeadlineDetails,
            props.language
          )})`}</Date>
        </ExtraItemsWrapper>
      </TitlesWrapper>
      <TechStackList list={props.subHeadlineDetails.techKeywords} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: var(--space-7) 0 var(--space-minus-4) 0;
  display: flex;
  justify-content: space-between;
`;

const TitlesWrapper = styled.div``;

export const SecondaryTitle = styled.h4`
  font-size: var(--font-size-6);
  font-weight: 400;
  margin: 0;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    display: initial;
    text-align: center;
  }
`;

const ExtraItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: var(--space-2) 0 0 0;
  @media (max-width: 800px) {
    display: initial;
    text-align: center;
  }
`;

const Date = styled.h5`
  font-size: var(--font-size-4);
  font-weight: 300;
  color: var(--secondary-headline-color);
  margin: 0;
`;

export const TertiaryTitle = styled(Date)`
  font-size: var(--font-size-5);
  margin: 0 var(--space-2) 0 0;
  font-weight: 400;
`;
