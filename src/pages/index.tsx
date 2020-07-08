import React from "react";
import SEO from "../components/seo";
import styled from "styled-components";
import { Header } from "../components/header/Header";
import { ContentEn } from "../ContentEn";
import { ContentFi } from "../ContentFi";
import "./index.css";
import { ProfileBall } from "../components/profileBall/ProfileBall";
import { ContentSection } from "../components/contentSection/ContentSection";

const pageContentLabelsFi = {
  introduction: "Tietoa minusta",
  workExperience: "Työkokemus",
  education: "Koulutus",
  contactDetails: "Yhteystiedot",
  contactForm: "Ota minuun yhteyttä",
};

const pageContentLabelsEn = {
  introduction: "About me",
  workExperience: "Experience",
  education: "Education",
  contactDetails: "Information",
  contactForm: "Contact Me",
};

export enum lan {
  FINNISH,
  ENGLISH,
}

const Wrapper = styled.div`
  background-color: #f0f0f0;
  height: 4000px;
`;

const ProfileBallWrapper = styled.div`
  position: absolute;
  top: 425px;
  left: calc(50% - 175px);
`;

const IndexPage = () => {
  const [language, setLanguage] = React.useState<lan>(lan.FINNISH);
  const updateLanguage = (lan: lan) => {
    setLanguage(lan);
  };
  const content = language === lan.ENGLISH ? ContentEn : ContentFi;
  const pageContentLabels =
    language === lan.ENGLISH ? pageContentLabelsEn : pageContentLabelsFi;
  return (
    <Wrapper>
      <SEO title="Home" />
      <Header
        name={`${content.profile.firstName} ${content.profile.lastName}`}
        jobTitle={content.profile.jobTitle}
        updateLanguage={updateLanguage}
      />
      <ProfileBallWrapper>
        <ProfileBall picture="sd" />
      </ProfileBallWrapper>
      <ContentSection
        headline={pageContentLabels.introduction}
        description={content.description}
      />
    </Wrapper>
  );
};

export default IndexPage;
