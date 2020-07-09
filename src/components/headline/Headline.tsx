import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  isBlack: boolean;
};

export const Headline = (props: Props) => {
  return (
    <div>
      <HeadlineText>{props.text}</HeadlineText>
      <UnderLine />
    </div>
  );
};

const UnderLine = styled.div`
  width: 5rem;
  height: 0.7rem;
  background-color: red;
`;

const HeadlineText = styled.h3`
  font-size: 3rem;
  margin: 0 0 1.5rem 0;
`;
