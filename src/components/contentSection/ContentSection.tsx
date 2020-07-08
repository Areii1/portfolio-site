import React from "react";
import styled from "styled-components";
import { Headline } from "../headline/Headline";
import { Description } from "../../Types";
import { Paragraphs } from "../paragraphs/Paragraphs";
import { ExperienceItem } from "../../Types";
import { ExperienceItemDetails } from "../experienceItemDetails/ExperienceItemDetails";
import { DownloadCVButton } from "../downloadCVButton/DownloadCVButton";
import { lan } from "../../pages/index";

const Wrapper = styled.section`
  padding: 23rem 15rem 0 15rem;
  width: 100%;
`;

const TopSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
        <Headline text={props.headline} />
        {props.showButton && <DownloadCVButton language={props.language} />}
      </TopSectionWrapper>
      {props.subHeadlineDetails && (
        <ExperienceItemDetails subHeadlineDetails={props.subHeadlineDetails} />
      )}
      <Paragraphs content={props.description} />
    </Wrapper>
  );
};
