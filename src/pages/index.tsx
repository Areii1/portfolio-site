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
import { GeneralButton } from "../components/buttons/generalButton/GeneralButton";
import { Modal } from "../components/modal/Modal";
import { DialogBox } from "../components/dialogBox/DialogBox";
import withLocation from "../hocs/withLocation";

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
  contactForm: "Ota yhteyttä",
  videoButton: "katso video",
  viewPdf: "katso cv",
};

const pageContentLabelsEn = {
  introduction: "About me",
  workExperience: "Experience",
  education: "Education",
  contactDetails: "Information",
  contactForm: "Contact Me",
  videoButton: "watch video",
  viewPdf: "view cv",
};

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
  const [showModal, setShowModal] = React.useState<boolean>(false);
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
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 7000);
    } else {
      setShowModal(false);
    }
  }, [dialogBoxContent]);
  const content = language === Lan.ENGLISH ? ContentEn : ContentFi;
  const pageContentLabels =
    language === Lan.ENGLISH ? pageContentLabelsEn : pageContentLabelsFi;
  return (
    <Wrapper>
      <SEO title="Ari-Pekka Jääskeläinen" />
      <Header
        name={`${content.profile.firstName} ${content.profile.lastName}`}
        jobTitle={content.profile.jobTitle}
        language={language}
      />
      <ProfileBallWrapper>
        <ProfileBall
          language={language}
          handleClick={() => setModalType(ModalTypes.VIDEO)}
        />
      </ProfileBallWrapper>
      <ContentSection
        headline={pageContentLabels.introduction}
        content={content.description}
        showButton={false}
        language={language}
        type={ModalTypes.VIDEO}
        button={
          <GeneralButton
            text={pageContentLabels.videoButton}
            handleClick={() => setModalType(ModalTypes.VIDEO)}
            type={ModalTypes.VIDEO}
            language={language}
          />
        }
      />
      <ContentSection
        headline={pageContentLabels.workExperience}
        content={content.experience}
        showButton
        language={language}
        type={ModalTypes.CV}
        button={
          <GeneralButton
            text={pageContentLabels.viewPdf}
            handleClick={() => setModalType(ModalTypes.CV)}
            type={ModalTypes.CV}
            cv={content.profile.cv}
            language={language}
          />
        }
      />
      <InformationSection
        profileDetails={content.profile}
        pageContentLabels={pageContentLabels}
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
      {dialogBoxContent && modalType === undefined && showModal && (
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
