import React from "react";
import styled from "styled-components";
import { Headline } from "../headline/Headline";
import { Description } from "../../Types";
import { Paragraphs } from "./paragraphs/Paragraphs";
import { ExperienceItem } from "../../Types";
import { ExperienceItemDetails } from "./experienceItemDetails/ExperienceItemDetails";
import { Lan } from "../../pages/index";

type Props = {
  headline: string;
  description: Description;
  subHeadlineDetails?: ExperienceItem;
  showButton: boolean;
  language: Lan;
  button: any;
};

export const ContentSection = (props: Props) => {
  return (
    <Wrapper>
      <TopSectionWrapper>
        <Headline text={props.headline} isBlack />
        <ButtonWrapper>{props.button}</ButtonWrapper>
      </TopSectionWrapper>
      {props.subHeadlineDetails && (
        <ExperienceItemDetails
          subHeadlineDetails={props.subHeadlineDetails}
          language={props.language}
        />
      )}
      <Paragraphs content={props.description} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: var(--space-19);
  margin: var(--space-12) auto 0 auto;
`;

const TopSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: inherit;
    justify-content: inherit;
  }
`;

const ButtonWrapper = styled.div`
  display: initial;
  min-height: 5px;
`;
