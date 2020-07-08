import React from "react";
import styled from "styled-components";
import { Description } from "../../Types";

type Props = {
  paragraphs: Description;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;
`;

const Paragraph = styled.p`
  width: 45%;
  font-size: 1.3rem;
`;

export const Paragraphs = (props: Props) => {
  return (
    <Wrapper>
      <Paragraph>{props.paragraphs[0]}</Paragraph>
      <Paragraph>{props.paragraphs[1]}</Paragraph>
    </Wrapper>
  );
};
