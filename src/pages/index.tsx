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
import { PlayIcon } from "../components/icons/PlayIcon";
import { ViewDocument } from "../components/icons/VIewDocument";
import withLocation from "../components/hocs/withLocation";

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
  viewPdf: "KATSO CV",
};

const pageContentLabelsEn = {
  introduction: "About me",
  workExperience: "Experience",
  education: "Education",
  contactDetails: "Information",
  contactForm: "Contact Me",
  videoButton: "WATCH VIDEO",
  viewPdf: "VIEW CV",
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
  const wrapperNode = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (props.search.lan === "en") {
      setLanguage(Lan.ENGLISH);
    } else {
      setLanguage(Lan.FINNISH);
    }
  }, [props.search.lan]);
  React.useEffect(() => {
    const reffedWrapperNode = wrapperNode.current;
    if (reffedWrapperNode) {
      reffedWrapperNode.addEventListener("click", (event: MouseEvent) =>
        handleWrapperClick(event)
      );
    }
  }, []);
  React.useEffect(() => {
    if (dialogBoxContent) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 5000);
    } else {
      setShowModal(false);
    }
  }, [dialogBoxContent]);
  const handleWrapperClick = (event: MouseEvent) => {
    if (modalType) {
      setModalType(undefined);
    }
  };
  const content = language === Lan.ENGLISH ? ContentEn : ContentFi;
  const pageContentLabels =
    language === Lan.ENGLISH ? pageContentLabelsEn : pageContentLabelsFi;
  return (
    <Wrapper ref={wrapperNode}>
      <SEO title="Ari-Pekka Jääskeläinen" />
      <Header
        name={`${content.profile.firstName} ${content.profile.lastName}`}
        jobTitle={content.profile.jobTitle}
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
          <GeneralButton
            text={pageContentLabels.videoButton}
            handleClick={() => setModalType(ModalTypes.VIDEO)}
            icon={<PlayIcon fillColor="blue" size={30} />}
          />
        }
      />
      <ContentSection
        headline={pageContentLabels.workExperience}
        subHeadlineDetails={content.experience[0]}
        description={content.experience[0].description}
        showButton
        language={language}
        button={
          <GeneralButton
            text={pageContentLabels.viewPdf}
            handleClick={() => setModalType(ModalTypes.CV)}
            icon={<ViewDocument fillColor="#b78a10" size={30} />}
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
  top: 425px;
  left: calc(50% - 175px);
  @media (max-width: 800px) {
    top: 525px;
    left: calc(50% - 75px);
  }
`;
