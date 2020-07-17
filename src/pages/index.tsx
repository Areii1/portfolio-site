import React from "react";
import SEO from "../components/seo";
import styled from "styled-components";
import { Header } from "../components/header/Header";
import { ContentEn } from "../ContentEn";
import { ContentFi } from "../ContentFi";
import "./index.css";
import { ProfileBall } from "../components/profileBall/ProfileBall";
import { ContentSection } from "../components/contentSection/ContentSection";
import { InformationSection } from "../components/informationSection/InformationSection";
import { DownloadCVButton } from "../components/downloadCVButton/DownloadCVButton";
import { Button } from "../components/button/Button";
import { Modal } from "../components/modal/Modal";

export type PageContentLabels = {
  introduction: string;
  workExperience: string;
  education: string;
  contactDetails: string;
  contactForm: string;
};

const pageContentLabelsFi = {
  introduction: "Tietoa minusta",
  workExperience: "Työkokemus",
  education: "Koulutus",
  contactDetails: "Yhteystiedot",
  contactForm: "Ota minuun yhteyttä",
  videoButton: "KATSO VIDEO",
};

const pageContentLabelsEn = {
  introduction: "About me",
  workExperience: "Experience",
  education: "Education",
  contactDetails: "Information",
  contactForm: "Contact Me",
  videoButton: "WATCH VIDEO",
};

export enum lan {
  FINNISH,
  ENGLISH,
}

const IndexPage = () => {
  const [language, setLanguage] = React.useState<lan>(lan.FINNISH);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const wrapperNode = React.useRef<HTMLDivElement>(null);
  const updateLanguage = (lan: lan) => {
    setLanguage(lan);
  };
  React.useEffect(() => {
    const reffedWrapperNode = wrapperNode.current;
    if (reffedWrapperNode) {
      reffedWrapperNode.addEventListener("click", (event: MouseEvent) =>
        handleWrapperClick(event)
      );
    }
  }, []);
  const handleWrapperClick = (event: MouseEvent) => {
    if (modalOpen) {
      console.log("setting modalOpen to false");
      setModalOpen(false);
    }
  };
  const content = language === lan.ENGLISH ? ContentEn : ContentFi;
  const pageContentLabels =
    language === lan.ENGLISH ? pageContentLabelsEn : pageContentLabelsFi;
  return (
    <Wrapper ref={wrapperNode}>
      <SEO title="Ari-Pekka Jääskeläinen" />
      <Header
        name={`${content.profile.firstName} ${content.profile.lastName}`}
        jobTitle={content.profile.jobTitle}
        updateLanguage={updateLanguage}
        language={language}
      />
      <ProfileBallWrapper>
        <ProfileBall picture="sd" />
      </ProfileBallWrapper>
      <ContentSection
        headline={pageContentLabels.introduction}
        description={content.description}
        showButton={false}
        language={language}
        button={
          <Button text={pageContentLabels.videoButton} onClick={setModalOpen} />
        }
      />
      <ContentSection
        headline={pageContentLabels.workExperience}
        subHeadlineDetails={content.experience[0]}
        description={content.experience[0].description}
        showButton
        language={language}
        button={<DownloadCVButton language={language} />}
      />
      <InformationSection
        profileDetails={content.profile}
        pageContentLabels={pageContentLabels}
        language={language}
      />
      {modalOpen && (
        <Modal
          language={language}
          setModalOpen={setModalOpen}
          updateLanguage={updateLanguage}
        />
      )}
    </Wrapper>
  );
};

export default IndexPage;

const Wrapper = styled.div`
  background-color: #f0f0f0;
  position: relative;
`;

const ProfileBallWrapper = styled.div`
  position: absolute;
  top: 425px;
  left: calc(50% - 175px);
  @media (max-width: 800px) {
    top: 525px;
    left: calc(50% - 75px);
  }
`;
