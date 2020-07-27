import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  isBlack: boolean;
};

export const Headline = (props: Props) => {
  return (
    <Wrapper>
      <HeadlineText isBlack={props.isBlack}>{props.text}</HeadlineText>
      <UnderLine />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: initial;
  @media (max-width: 800px) {
    max-width: 15rem;
  }
`;

const UnderLine = styled.div`
  width: 5rem;
  height: 0.7rem;
  background-color: red;
`;

type HeadlineTextProps = {
  isBlack: boolean;
};

const HeadlineText = styled.h3`
  color: ${(props: HeadlineTextProps) => (props.isBlack ? "black" : "white")};
  font-size: 3rem;
  margin: 0 0 1.5rem 0;
`;
