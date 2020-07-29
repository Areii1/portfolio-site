import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Lan } from "../../pages/index";
import { ToggleLanguage } from "../toggleLanguage/ToggleLanguage";
import "./Header.css";

type PropTypes = {
  name: string;
  jobTitle: string;
  language: Lan;
};

export const Header = (props: PropTypes) => {
  const imageQueryData = useStaticQuery(imageQuery);
  return (
    <Wrapper>
      <Img
        fluid={imageQueryData.file.childImageSharp.fluid}
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

export const imageQuery = graphql`
  query {
    file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Wrapper = styled.header`
  height: 600px;
  overflow: hidden;
  position: relative;
  padding: var(--space-4);
`;

const Headline = styled.h1`
  font-size: var(--font-size-12);
  font-weight: 500;
  text-align: center;
  color: white;
  margin: 0;
  @media (max-width: 800px) {
    font-size: var(--font-size-9);
  }
  @media (max-width: 1100px) {
    font-size: 65px;
  }
`;

const SecondaryHeadline = styled.h2`
  font-size: var(--font-size-7);
  font-weight: 300;
  text-align: center;
  margin: 0;
  color: #94a3ba;
  @media (max-width: 800px) {
    font-size: var(--font-size-5);
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
  @media (max-width: 800px) {
    width: 300px;
    left: calc(50% - 150px);
  }
`;

const LanguageToggleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: var(--space-4);
`;
