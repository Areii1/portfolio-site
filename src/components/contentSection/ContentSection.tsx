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
  margin: 0 auto var(--space-11) auto;
  @media (max-width: 1300px) {
    width: var(--space-16);
    margin: 0 auto var(--space-10) auto;
  }
  @media (max-width: 800px) {
    width: var(--space-14);
    margin: 0 auto var(--space-8) auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 400px) {
    width: var(--space-12);
    margin: 0 auto var(--space-6) auto;
  }
`;

const TopSectionWrapper = styled.div`
  display: flex;
  flex-direction: initial;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: initial;
    align-items: center;
  }
`;

const ButtonWrapper = styled.div`
  display: initial;
  @media (max-width: 800px) {
    margin-top: var(--space-6);
  }
`;
