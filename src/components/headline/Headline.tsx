import React from "react";
import styled from "styled-components";

const UnderLine = styled.div`
  width: 5rem;
  height: 0.7rem;
  background-color: red;
`;

const HeadlineText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

type Props = {
  text: string;
};

export const Headline = (props: Props) => {
  return (
    <div>
      <HeadlineText>{props.text}</HeadlineText>
      <UnderLine />
    </div>
  );
};
