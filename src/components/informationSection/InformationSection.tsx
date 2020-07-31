import React from "react";
import styled from "styled-components";
import { ProfileDetails } from "../../Types";
import { Headline } from "../headline/Headline";
import { SetDialogBoxContent } from "../../pages/index";
import { DetailsList } from "./detailsList/DetailsList";
import { ContactForm } from "./contactForm/ContactForm";
import { Lan } from "../../pages/index";
import "./InformationSection.css";
import { GatsbyImageWrapper } from "../gatsbyImageWrapper/GatsbyImageWrapper";
import {
  informationSectionLabelsFi,
  informationSectionLabelsEn,
} from "./InformationSectionLabels";

type Props = {
  profileDetails: ProfileDetails;
  language: Lan;
  setDialogBoxContent: SetDialogBoxContent;
};

export const InformationSection = (props: Props) => {
  const informationSectionLabels =
    props.language === Lan.ENGLISH
      ? informationSectionLabelsEn
      : informationSectionLabelsFi;
  return (
    <Wrapper>
      <GatsbyImageWrapper
        type="contact"
        className="information-section-queried-image"
        alt="contact"
      />
      <Information>
        <ContentWrapper>
          <InnerWrapper>
            <Headline
              text={informationSectionLabels.contactDetails}
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
        <ContentWrapper>
          <InnerWrapper>
            <Headline text={informationSectionLabels.contactForm} isBlack />
            <ContactForm
              language={props.language}
              setDialogBoxContent={props.setDialogBoxContent}
            />
          </InnerWrapper>
        </ContentWrapper>
      </Contact>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: var(--space-11);
  height: 1500px;
  overflow: hidden;
  position: relative;
  @media (max-width: 1300px) {
    height: 2000px;
  }
`;

const Information = styled.div`
  position: absolute;
  top: calc(50% - 320px);
  left: 0;
  height: var(--space-15);
  width: 50vw;
  background-color: var(--information-section-bg-color);
  @media (max-width: 1300px) {
    top: calc(50% - var(--space-15));
    width: 100vw;
  }
`;

const Contact = styled.div`
  position: absolute;
  top: calc(50% - 320px);
  right: 0;
  height: var(--space-15);
  width: 50vw;
  background-color: var(--contact-section-bg-color);
  @media (max-width: 1300px) {
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

const InnerWrapper = styled.div`
  height: var(--space-14);
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: initial;
  @media (max-width: 1300px) {
    width: var(--space-16);
  }
  @media (max-width: 800px) {
    width: initial;
    align-items: center;
  }
`;
