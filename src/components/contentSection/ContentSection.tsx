import React from "react";
import styled from "styled-components";
import { Headline } from "../headline/Headline";
import { Description } from "../../Types";
import { Paragraphs } from "../paragraphs/Paragraphs";
import { ExperienceItem } from "../../Types";
import { ExperienceItemDetails } from "../experienceItemDetails/ExperienceItemDetails";
import { DownloadCVButton } from "../downloadCVButton/DownloadCVButton";
import { lan } from "../../pages/index";

type Props = {
  headline: string;
  description: Description;
  subHeadlineDetails?: ExperienceItem;
  showButton: boolean;
  language: lan;
};

export const ContentSection = (props: Props) => {
  return (
    <Wrapper>
      <TopSectionWrapper>
        <Headline text={props.headline} isBlack />
        {props.showButton && <DownloadCVButton language={props.language} />}
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
  padding: 15rem 15rem 0 15rem;
  width: 100%;
  @media (max-width: 800px) {
    padding: 15rem 1rem 0 1rem;
  }
`;

const TopSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
