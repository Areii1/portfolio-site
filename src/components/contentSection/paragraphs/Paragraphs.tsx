import React from "react";
import styled from "styled-components";
import { Description } from "../../../Types";

type Props = {
  content: Description;
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
      <Paragraph>{firstItem}</Paragraph>
      {secondItem && <Paragraph>{secondItem}</Paragraph>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;
  @media (max-width: 800px) {
    display: inherit; 
  }
`;

const Paragraph = styled.p`
  width: 45%;
  font-size: 17px;
  font-weight: 300;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
