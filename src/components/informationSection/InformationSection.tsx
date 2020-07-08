import React from "react";
import styled from "styled-components";
import { ProfileDetails } from "../../Types";
import contactBg from "../../assets/contact.jpg";
import { Headline } from "../headline/Headline";
import { PageContentLabels } from "../../pages/index";

type Props = {
  profileDetails: ProfileDetails;
  pageContentLabels: PageContentLabels;
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
`;

const Contact = styled.div`
  position: absolute;
  top: calc(50% - 325px);
  right: 0;
  height: 650px;
  width: 50vw;
  background-color: #b4c3da;
`;

const ContentWrapper = styled.div`
  width: 50%;
  margin: 0 0 0 auto;
  padding-top: 5rem;
`;

const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`;

const DetailsListItem = styled.li`
  display: flex;
  color: white;
  margin: 0.5rem 0;
`;

const DetailsListItemLabel = styled.h6`
  margin: 0 2rem 0 0;
  font-size: 1rem;
`;

const DetailsListItemText = styled.h6`
  margin: 0;
  font-size: 1rem;
`;

export const InformationSection = (props: Props) => {
  return (
    <Wrapper>
      <ImageWrapper></ImageWrapper>
      <Information>
        <ContentWrapper>
          <Headline text={props.pageContentLabels.contactDetails} isBlack />
          <DetailsList>
            <DetailsListItem>
              <DetailsListItemLabel>email:</DetailsListItemLabel>
              <DetailsListItemText>
                {props.profileDetails.email}
              </DetailsListItemText>
            </DetailsListItem>
            <DetailsListItem>
              <DetailsListItemLabel>gitlab:</DetailsListItemLabel>
              <DetailsListItemText>
                {`gitlab.com/${props.profileDetails.gitlabUsername}`}
              </DetailsListItemText>
            </DetailsListItem>
            <DetailsListItem>
              <DetailsListItemLabel>github:</DetailsListItemLabel>
              <DetailsListItemText>
                {`github.com/${props.profileDetails.githubUsername}`}
              </DetailsListItemText>
            </DetailsListItem>
            <DetailsListItem>
              <DetailsListItemLabel>linkedin:</DetailsListItemLabel>
              <DetailsListItemText>
                {`linkedin.com/in/${props.profileDetails.linkedInPageName}`}
              </DetailsListItemText>
            </DetailsListItem>
          </DetailsList>
        </ContentWrapper>
      </Information>
      <Contact>d</Contact>
    </Wrapper>
  );
};
