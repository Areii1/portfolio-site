import React from "react";
import styled from "styled-components";
import {
  Description,
  ExperienceItemDescription,
  ExperienceItemDescriptionContent,
} from "../../../Types";
import { ExperienceParagrah } from "./experienceParagraph/ExperienceParagraph";
import { IntroductionParagraph } from "./introductionParagraph/IntroductionParagraph";

type Props = {
  content: Description | ExperienceItemDescription;
  isExperienceInstace: boolean;
};

export const Paragraphs = (props: Props) => {
  const firstItem = Array.isArray(props.content)
    ? props.content[0]
    : props.content;
  const secondItem = Array.isArray(props.content)
    ? props.content[1]
    : undefined;
  return (
    <Wrapper>
      {!props.isExperienceInstace && (
        <>
          <IntroductionParagraph content={firstItem as Description} />
          {secondItem && (
            <IntroductionParagraph content={secondItem as Description} />
          )}
        </>
      )}
      {props.isExperienceInstace && (
        <>
          <ExperienceParagrah
            content={firstItem as ExperienceItemDescriptionContent}
          />
          {secondItem && (
            <ExperienceParagrah
              content={secondItem as ExperienceItemDescriptionContent}
            />
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: initial;
  justify-content: space-between;
  margin-top: var(--space-7);
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: initial;
    text-align: center;
  }
`;
