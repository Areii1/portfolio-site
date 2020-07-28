import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { ProfileDetails } from "../../Types";
import { Headline } from "../headline/Headline";
import { PageContentLabels, SetDialogBoxContent } from "../../pages/index";
import { DetailsList } from "./detailsList/DetailsList";
import { ContactForm } from "./contactForm/ContactForm";
import { Lan } from "../../pages/index";
import './InformationSection.css';

type Props = {
  profileDetails: ProfileDetails;
  pageContentLabels: PageContentLabels;
  language: Lan;
  setDialogBoxContent: SetDialogBoxContent;
};

export const InformationSection = (props: Props) => {
  const imageQueryData = useStaticQuery(imageQuery);
  return (
    <Wrapper>
      <Img
        fluid={imageQueryData.file.childImageSharp.fluid}
        className="information-section-queried-image"
        alt="header"
      />
      <Information>
        <ContentWrapper>
          <InnerWrapper>
            <Headline
              text={props.pageContentLabels.contactDetails}
              isBlack={false}
            />
            <DetailsList
              profileDetails={props.profileDetails}
              language={props.language}
            />
          </InnerWrapper>
        </ContentWrapper>
      </Information>
      <Contact>
        <ContentWrapperContact>
          <InnerWrapper>
            <Headline text={props.pageContentLabels.contactForm} isBlack />
            <ContactForm
              language={props.language}
              setDialogBoxContent={props.setDialogBoxContent}
            />
          </InnerWrapper>
        </ContentWrapperContact>
      </Contact>
    </Wrapper>
  );
};

export const imageQuery = graphql`
  query {
    file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Wrapper = styled.section`
  margin-top: 15rem;
  height: 1500px;
  overflow: hidden;
  position: relative;
  @media (max-width: 1100px) {
    height: 2000px;
  }
`;

const Information = styled.div`
  position: absolute;
  top: calc(50% - 325px);
  left: 0;
  height: 650px;
  width: 50vw;
  background-color: #2c4a78;
  @media (max-width: 1100px) {
    top: calc(50% - 650px);
    width: 100vw;
  }
`;

const Contact = styled.div`
  position: absolute;
  top: calc(50% - 325px);
  right: 0;
  height: 650px;
  width: 50vw;
  background-color: #b4c3da;
  @media (max-width: 1100px) {
    top: calc(50%);
    width: 100vw;
  }
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapperContact = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: initial;
  @media (max-width: 800px) {
    max-width: 20rem;
  }
`;
