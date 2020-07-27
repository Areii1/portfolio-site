import React from "react";
import styled from "styled-components";
import { ProfileDetails } from "../../Types";
import contactBg from "../../assets/contact.jpg";
import { Headline } from "../headline/Headline";
import { PageContentLabels, SetDialogBoxContent } from "../../pages/index";
import { DetailsList } from "./detailsList/DetailsList";
import { ContactForm } from "./contactForm/ContactForm";
import { Lan } from "../../pages/index";

type Props = {
  profileDetails: ProfileDetails;
  pageContentLabels: PageContentLabels;
  language: Lan;
  setDialogBoxContent: SetDialogBoxContent;
};

export const InformationSection = (props: Props) => {
  return (
    <Wrapper>
      <ImageWrapper></ImageWrapper>
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

const Wrapper = styled.section`
  margin-top: 15rem;
  height: 1500px;
  overflow: hidden;
  position: relative;
`;

const ImageWrapper = styled.div`
  height: 1600px;
  width: 110vw;
  margin: -70px;
  filter: blur(10px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${contactBg});
`;

const Information = styled.div`
  position: absolute;
  top: calc(50% - 325px);
  left: 0;
  height: 650px;
  width: 50vw;
  background-color: #2c4a78;
  @media (max-width: 1100px) {
    top: 150px;
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
    top: 800px;
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
