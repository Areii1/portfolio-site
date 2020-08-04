import React from "react";
import styled from "styled-components";
import { Description, ExperienceItem } from "../../../Types";
import { ExperienceParagrah } from "./experienceParagraph/ExperienceParagraph";
import { IntroductionParagraph } from "./introductionParagraph/IntroductionParagraph";
import { ModalTypes } from "../../../pages/index";

type Content =
  | {
      type: ModalTypes.VIDEO;
      sectionContent: Description;
    }
  | { type: ModalTypes.CV; sectionContent: ExperienceItem };

type Props = {
  content: Content;
};

export const Paragraphs = (props: Props) => (
  <Wrapper>
    {props.content.type === ModalTypes.VIDEO && (
      <>
        <IntroductionParagraph content={props.content.sectionContent[0]} />
        {props.content.sectionContent[1] && (
          <IntroductionParagraph content={props.content.sectionContent[1]} />
        )}
      </>
    )}
    {props.content.type === ModalTypes.CV && (
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
