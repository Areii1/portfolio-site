import React from "react";
import styled from "styled-components";
import { Headline } from "../headline/Headline";
import { Description } from "../../Types";
import { Paragraphs } from "../paragraphs/Paragraphs";

const Wrapper = styled.section`
  padding: 15rem 23rem;
  width: 100%;
`;

type Props = {
  headline: string;
  description: Description;
};

export const ContentSection = (props: Props) => {
  return (
    <Wrapper>
      <Headline text={props.headline} />
      <Paragraphs paragraphs={props.description} />
    </Wrapper>
  );
};
