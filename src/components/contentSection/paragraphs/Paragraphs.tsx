import React from "react";
import styled from "styled-components";
import { Description, ExperienceItem } from "../../../Types";
import { ExperienceParagrah } from "./experienceParagraph/ExperienceParagraph";
import { IntroductionParagraph } from "./introductionParagraph/IntroductionParagraph";
import { ContentSectionUseCase } from "../ContentSection";

type Content =
  | {
      type: ContentSectionUseCase.INTRODUCTION;
      sectionContent: Description;
    }
  | {
      type: ContentSectionUseCase.CONTENTSECTION;
      sectionContent: ExperienceItem;
    };

type Props = {
  content: Content;
};

export const Paragraphs = (props: Props) => (
  <Wrapper>
    {props.content.type === ContentSectionUseCase.INTRODUCTION && (
      <>
        <IntroductionParagraph content={props.content.sectionContent[0]} />
        {props.content.sectionContent[1] && (
          <IntroductionParagraph content={props.content.sectionContent[1]} />
        )}
      </>
    )}
    {props.content.type === ContentSectionUseCase.CONTENTSECTION && (
      <>
        {Array.isArray(props.content.sectionContent.description) && (
          <>
            <ExperienceParagrah
              content={props.content.sectionContent.description[0]}
            />
            <ExperienceParagrah
              content={props.content.sectionContent.description[1]}
            />
          </>
        )}
        {!Array.isArray(props.content.sectionContent.description) && (
          <ExperienceParagrah
            content={props.content.sectionContent.description}
          />
        )}
      </>
    )}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: initial;
  justify-content: space-between;
  margin-top: var(--space-7);
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: initial;
  }
`;
