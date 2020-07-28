import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Lan } from "../../pages/index";
import { ToggleLanguage } from "../toggleLanguage/ToggleLanguage";
import './Header.css';

type PropTypes = {
  name: string;
  jobTitle: string;
  language: Lan;
};

export const Header = (props: PropTypes) => {
  const imageQueryData = useStaticQuery(imageQuery);
  return (
    <Wrapper>
      <Img fluid={imageQueryData.file.childImageSharp.fluid} className="queried-image" alt="header"/>
      <TitlesWrapper>
        <Headline>{props.name}</Headline>
        <SecondaryHeadline>{props.jobTitle}</SecondaryHeadline>
      </TitlesWrapper>
      <ListWrapper>
        <ToggleLanguage isBlack={false} language={props.language} />
      </ListWrapper>
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
  padding: 1rem;
`;

// const ImageWrapper = styled.img`
//   height: 700px;
//   width: 110vw;
//   margin: -70px -70px 0 -70px;
//   filter: blur(10px);
//   @media (max-width: 800px) {
//     width: 140vw;
//   }
// `;

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
