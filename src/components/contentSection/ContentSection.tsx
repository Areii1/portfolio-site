import React from "react";
import styled from "styled-components";
import { Headline } from "../headline/Headline";
import { Description } from "../../Types";
import { Paragraphs } from "../paragraphs/Paragraphs";
import { ExperienceItem } from "../../Types";
import { ExperienceItemDetails } from "../experienceItemDetails/ExperienceItemDetails";

const Wrapper = styled.section`
  padding: 23rem 15rem 0 15rem;
  width: 100%;
`;

type Props = {
  headline: string;
  description: Description;
  subHeadlineDetails?: ExperienceItem;
};

export const ContentSection = (props: Props) => {
  return (
    <Wrapper>
      <Headline text={props.headline} />
      {props.subHeadlineDetails && (
        <ExperienceItemDetails subHeadlineDetails={props.subHeadlineDetails} />
      )}
      <Paragraphs content={props.description} />
    </Wrapper>
  );
};
