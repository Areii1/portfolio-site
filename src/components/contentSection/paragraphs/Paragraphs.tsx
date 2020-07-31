import React from "react";
import styled from "styled-components";
import { Description, ExperienceItemDescription } from "../../../Types";
import { Paragraph } from "./paragraph/Paragraph";

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
      <Paragraph
        content={firstItem}
        isExperienceInstace={props.isExperienceInstace}
      />
      {secondItem && (
        <Paragraph
          content={secondItem}
          isExperienceInstace={props.isExperienceInstace}
        />
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
