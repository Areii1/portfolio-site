import React from "react";
import SEO from "../components/seo";
import styled from "styled-components";
import { Header } from "../components/header/Header";
import { ContentEn } from "../ContentEn";
import { ContentFi } from "../ContentFi";
import { ProfileBall } from "../components/profileBall/ProfileBall";
import { ContentSection } from "../components/contentSection/ContentSection";
import { InformationSection } from "../components/informationSection/InformationSection";
import { ViewVideoModal } from "../components/modals/viewVideoModal/ViewVideoModal";
import { DialogBox } from "../components/dialogBox/DialogBox";
import withLocation from "../hocs/withLocation";
import "./index.css";
import { ProjectsSection } from "../components/projectsSection/ProjectsSection";
import { ContentSectionUseCase } from '../components/contentSection/ContentSection';

export enum Lan {
  FINNISH,
  ENGLISH,
}

export type DialogBoxContent = {
  isError: boolean;
  message: string;
};

export type SetDialogBoxContent = (
  content: DialogBoxContent | undefined
) => void;

const IndexPage = (props: any) => {
  const [language, setLanguage] = React.useState<Lan>(Lan.FINNISH);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [dialogBoxContent, setDialogBoxContent] = React.useState<
    DialogBoxContent | undefined
  >(undefined);
  React.useEffect(() => {
    if (props.search.lan === "en") {
      setLanguage(Lan.ENGLISH);
    } else {
      setLanguage(Lan.FINNISH);
    }
  }, [props.search.lan]);
  React.useEffect(() => {
    if (dialogBoxContent) {
      setTimeout(() => {
        setDialogBoxContent(undefined);
      }, 7000);
    }
  }, [dialogBoxContent]);
  const toggleModalOpen = () => {
    setModalOpen(!modalOpen);
  };
  const content = language === Lan.ENGLISH ? ContentEn : ContentFi;
  return (
    <Wrapper>
      <SEO
        title="Ari-Pekka Jääskeläinen"
        lang={"fi"}
        description="personal cv page"
        keywords={['front-end developer', 'react.js', 'react', 'computer science']}
      />
      <Header
        name={`${content.profile.firstName} ${content.profile.lastName}`}
        jobTitle={content.profile.jobTitle}
        language={language}
        toggleModalOpen={toggleModalOpen}
        cv={content.profile.cv}
      />
      <ProfileBallWrapper>
        <ProfileBall
          language={language}
          handleClick={() => toggleModalOpen()}
        />
      </ProfileBallWrapper>
      <ContentSection
        content={{
          type: ContentSectionUseCase.INTRODUCTION,
          sectionContent: content.description,
        }}
        language={language}
        toggleModalOpen={toggleModalOpen}
        backgroundIsWhite={false}
      />
      <ContentSection
        content={{
          type: ContentSectionUseCase.CONTENTSECTION,
          sectionContent: content.experience,
        }}
        language={language}
        toggleModalOpen={toggleModalOpen}
        cv={content.profile.cv}
        backgroundIsWhite
      />
      <ProjectsSection projects={content.projects} language={language} />
      <InformationSection
        profileDetails={content.profile}
        language={language}
        setDialogBoxContent={setDialogBoxContent}
      />
      {modalOpen && (
        <Modal
          language={language}
          toggleModalOpen={toggleModalOpen}
          profileDetails={content.profile}
        />
      )}
      {dialogBoxContent && !modalOpen && (
        <DialogBox
          content={dialogBoxContent}
          setDialogBoxContent={setDialogBoxContent}
          language={language}
        />
      )}
    </Wrapper>
  );
};

export default withLocation(IndexPage);

const Wrapper = styled.div`
  background-color: #f0f0f0;
  position: relative;
`;

const ProfileBallWrapper = styled.div`
  position: absolute;
  /*
  --space-15 is the height of the header
  --space-13 is the width of the profileball
  */
  top: calc(var(--space-15) - var(--space-12) / 2);
  left: calc(50% - var(--space-12) / 2);
  @media (max-width: 1300px) {
    top: calc(var(--space-13) - var(--space-10) / 2);
    left: calc(50% - var(--space-10) / 2);
  }
`;
