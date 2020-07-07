import React from "react";
import SEO from "../components/seo";
import styled from "styled-components";
import { Header } from "../components/header/Header";
import { ContentEn } from "../ContentEn";
import { ContentFi } from "../ContentFi";
import "./index.css";
import { ProfileBall } from "../components/profileBall/ProfileBall";

export enum lan {
  FINNISH,
  ENGLISH,
}

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
  return (
    <div>
      <SEO title="Home" />
      <Header
        name={`${content.profile.firstName} ${content.profile.lastName}`}
        jobTitle={content.profile.jobTitle}
        updateLanguage={updateLanguage}
      />
      <ProfileBallWrapper>
        <ProfileBall picture="sd" />
      </ProfileBallWrapper>
    </div>
  );
};

export default IndexPage;
