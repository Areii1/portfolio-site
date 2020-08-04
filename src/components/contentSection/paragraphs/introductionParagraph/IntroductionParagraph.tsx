import React from "react";
import styled from "styled-components";
import { Description } from "../../../../Types";

type Props = {
  content: Description;
};

export const IntroductionParagraph = (props: Props) => (
  <ParagraphElement>{props.content}</ParagraphElement>
);

const ParagraphElement = styled.p`
  width: 45%;
  font-size: var(--font-size-4);
  font-weight: 300;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
