import React from "react";
import styled from "styled-components";
import { Project } from "../../Types";
import { Wrapper, TopSectionWrapper } from "../contentSection/ContentSection";
import { Headline } from "../headline/Headline";
import { Lan } from "../../pages/index";
import { IntroductionParagraph } from "../contentSection/paragraphs/introductionParagraph/IntroductionParagraph";

type Props = {
  projects: Array<Project>;
  language: Lan;
};

export const ProjectsContentSection = (props: Props) => {
  console.log(props, "props");
  return (
    <Wrapper>
      <TopSectionWrapper>
        <Headline text="Projects" isBlack />
      </TopSectionWrapper>
      <ContentWrapper>
        <img src="sad" />
        <IntroductionParagraph content={props.projects[0].description} />
      </ContentWrapper>
    </Wrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
`;
