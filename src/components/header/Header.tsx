import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Lan } from "../../pages/index";
import { ToggleLanguage } from "../toggleLanguage/ToggleLanguage";
import "./Header.css";
import { TransparentButton } from "../buttons/transparentButton/TransparentButton";
import { PlayIcon } from "../icons/PlayIcon";
import { ViewDocumentIcon } from "../icons/ViewDocument";
import { CodeIcon } from "../icons/CodeIcon";
import {
  buttonLabelsFi,
  buttonLabelsEn,
} from "../buttons/generalButton/GeneralButtonLabels";
import { ModalTypes } from "../../pages/index";

type PropTypes = {
  name: string;
  jobTitle: string;
  language: Lan;
  updateModalType: (modalType: ModalTypes) => void;
  codeRepositoryLink?: string;
};

export const Header = (props: PropTypes) => {
  const imageQueryData = useStaticQuery(headerImageQuery);
  const buttonLabels =
    props.language === Lan.ENGLISH ? buttonLabelsEn : buttonLabelsFi;
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
      <TopButtonsList>
        <TopButtonsListItem>
          <TransparentButton
            handleClick={() => props.updateModalType(ModalTypes.VIDEO)}
            title={buttonLabels.videoButton}
          >
            <PlayIcon
              startFillColor="white"
              endFillColor="white"
              size={25}
              animation={false}
            />
          </TransparentButton>
        </TopButtonsListItem>
        <TopButtonsListItem>
          <TransparentButton
            handleClick={() => props.updateModalType(ModalTypes.CV)}
            title={buttonLabels.viewPdf}
          >
            <ViewDocumentIcon
              startFillColor="white"
              endFillColor="white"
              size={25}
              animation={false}
            />
          </TransparentButton>
        </TopButtonsListItem>
        {props.codeRepositoryLink && (
          <TopButtonsListItem>
            <TransparentButton
              link={props.codeRepositoryLink}
              title={buttonLabels.viewRepository}
            >
              <CodeIcon fillColor="white" size={25} />
            </TransparentButton>
          </TopButtonsListItem>
        )}
      </TopButtonsList>
    </Wrapper>
  );
};

const headerImageQuery = graphql`
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

const TopButtonsList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--space-4);
  margin: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
`;

const TopButtonsListItem = styled.li`
  margin: 0 var(--space-3) 0 0;
`;

const LanguageToggleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: var(--space-4);
`;
