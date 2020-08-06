import React from "react";
import SEO from "../components/seo";
import styled from "styled-components";
import { Header } from "../components/header/Header";
import { ContentEn } from "../ContentEn";
import { ContentFi } from "../ContentFi";
import { ProfileBall } from "../components/profileBall/ProfileBall";
import { ContentSection } from "../components/contentSection/ContentSection";
import { InformationSection } from "../components/informationSection/InformationSection";
import { Modal } from "../components/modal/Modal";
import { DialogBox } from "../components/dialogBox/DialogBox";
import withLocation from "../hocs/withLocation";
import "./index.css";
import { ProjectsSection } from "../components/projectsSection/ProjectsSection";

export enum Lan {
  FINNISH,
  ENGLISH,
}

export enum ModalTypes {
  VIDEO,
  CV,
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
  const [modalType, setModalType] = React.useState<ModalTypes | undefined>(
    undefined
  );
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
  const updateModalType = (type: ModalTypes) => {
    setModalType(type);
  };
  const content = language === Lan.ENGLISH ? ContentEn : ContentFi;
  return (
    <Wrapper>
      <SEO
        title="Ari-Pekka Jääskeläinen"
        lang={"fi"}
        description="personal cv page"
      />
      <Header
        name={`${content.profile.firstName} ${content.profile.lastName}`}
        jobTitle={content.profile.jobTitle}
        language={language}
        updateModalType={updateModalType}
        codeRepositoryLink={content.profile.codeRepository}
      />
      <ProfileBallWrapper>
        <ProfileBall
          language={language}
          handleClick={() => setModalType(ModalTypes.VIDEO)}
        />
      </ProfileBallWrapper>
      <ContentSection
        content={{
          type: ModalTypes.VIDEO,
          sectionContent: content.description,
        }}
        language={language}
        updateModalType={updateModalType}
      />
      <ContentSection
        content={{
          type: ModalTypes.CV,
          sectionContent: content.experience,
        }}
        language={language}
        updateModalType={updateModalType}
        cv={content.profile.cv}
      />
      <ProjectsSection projects={content.projects} language={language} />
      <InformationSection
        profileDetails={content.profile}
        language={language}
        setDialogBoxContent={setDialogBoxContent}
      />
      {modalType !== undefined && (
        <Modal
          language={language}
          setModalType={setModalType}
          isVideo={modalType === ModalTypes.VIDEO}
          type={modalType}
          profileDetails={content.profile}
        />
      )}
      {dialogBoxContent && modalType === undefined && (
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
