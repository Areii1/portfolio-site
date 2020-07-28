import React from "react";
import styled from "styled-components";
import headerBg from "../../images/header.jpg";
import { Lan } from "../../pages/index";
import { ToggleLanguage } from "../toggleLanguage/ToggleLanguage";

type PropTypes = {
  name: string;
  jobTitle: string;
  language: Lan;
};

export const Header = (props: PropTypes) => {
  return (
    <Wrapper>
      <ImageWrapper></ImageWrapper>
      <TitlesWrapper>
        <Headline>{props.name}</Headline>
        <SecondaryHeadline>{props.jobTitle}</SecondaryHeadline>
      </TitlesWrapper>
      <ListWrapper>
        <ToggleLanguage
          isBlack={false}
          language={props.language}
        />
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 600px;
  overflow: hidden;
  position: relative;
  padding: 1rem;
`;

const ImageWrapper = styled.div`
  height: 700px;
  width: 110vw;
  margin: -70px -70px 0 -70px;
  filter: blur(10px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${headerBg});
  @media (max-width: 800px) {
    width: 140vw;
  }
`;

const Headline = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  color: white;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

const SecondaryHeadline = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin: 0;
  color: #94a3ba;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const TitlesWrapper = styled.div`
  position: absolute;
  top: calc(50% - 70px);
  left: calc(50% - 500px);
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    width: 300px;
    left: calc(50% - 150px);
  }
`;

const ListWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
`;
