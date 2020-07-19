import React from "react";
import styled from "styled-components";
import { ProfileDetails } from "../../Types";
import contactBg from "../../assets/contact.jpg";
import { Headline } from "../headline/Headline";
import { PageContentLabels } from "../../pages/index";
import { DetailsList } from "./detailsList/DetailsList";
import { ContactForm } from "./contactForm/ContactForm";
import { lan } from "../../pages/index";

type Props = {
  profileDetails: ProfileDetails;
  pageContentLabels: PageContentLabels;
  language: lan;
};

export const InformationSection = (props: Props) => {
  return (
    <Wrapper>
      <ImageWrapper></ImageWrapper>
      <Information>
        <ContentWrapper>
          <Headline
            text={props.pageContentLabels.contactDetails}
            isBlack={false}
          />
          <DetailsList
            profileDetails={props.profileDetails}
            language={props.language}
          />
        </ContentWrapper>
      </Information>
      <Contact>
        <ContentWrapperContact>
          <Headline text={props.pageContentLabels.contactForm} isBlack />
          <ContactForm language={props.language} />
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
  width: 60%;
  margin: 0 0 0 auto;
  padding-top: 5rem;
  display: initial;
  @media (max-width: 1100px) {
    width: 100%;
    padding: 5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ContentWrapperContact = styled.div`
  width: 60%;
  margin: 0 auto 0 5rem;
  padding-top: 5rem;
  display: initial;
  @media (max-width: 1100px) {
    width: 100%;
    padding: 5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
