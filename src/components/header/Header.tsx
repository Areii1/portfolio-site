import React from "react";
import styled from "styled-components";
import { Lan } from "../../pages/index";
import { ToggleLanguage } from "../toggleLanguage/ToggleLanguage";
import { GatsbyImageWrapper } from "../gatsbyImageWrapper/GatsbyImageWrapper";

type PropTypes = {
  name: string;
  jobTitle: string;
  language: Lan;
};

export const Header = (props: PropTypes) => {
  return (
    <Wrapper>
      <GatsbyImageWrapper
        type="header"
        className="header-queried-image"
        alt="header"
      />
      <TitlesWrapper>
        <Headline>{props.name}</Headline>
        <SecondaryHeadline>{props.jobTitle.toUpperCase()}</SecondaryHeadline>
      </TitlesWrapper>
      <LanguageToggleWrapper>
        <ToggleLanguage isBlack={false} language={props.language} />
      </LanguageToggleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: var(--space-15);
  overflow: hidden;
  position: relative;
  padding: var(--space-4);
  margin-bottom: var(--space-11);
  @media (max-width: 1300px) {
    height: var(--space-13);
    margin-bottom: var(--space-11);
  }
`;

const TitlesWrapper = styled.div`
  position: absolute;
  top: calc(50% - var(--space-9));
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headline = styled.h1`
  font-size: var(--font-size-12);
  font-weight: 500;
  text-align: center;
  color: white;
  margin: 0;
  @media (max-width: 1300px) {
    font-size: var(--font-size-10);
  }
  @media (max-width: 800px) {
    font-size: var(--font-size-9);
  }
  @media (max-width: 400px) {
    font-size: var(--font-size-8);
  }
`;

const SecondaryHeadline = styled.h2`
  font-size: var(--font-size-7);
  font-weight: 300;
  text-align: center;
  margin: 0;
  color: #94a3ba;
  @media (max-width: 1300px) {
    font-size: var(--font-size-5);
  }
  @media (max-width: 800px) {
    font-size: var(--font-size-4);
  }
  @media (max-width: 400px) {
    font-size: var(--font-size-3);
  }
`;

const LanguageToggleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: var(--space-4);
`;
