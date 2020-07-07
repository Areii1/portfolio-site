import React from "react";
import styled from "styled-components";
import headerBg from "../../assets/header.jpg";
import { lan } from '../../pages/index';

const Wrapper = styled.header`
  height: 600px;
  overflow: hidden;
  position: relative;
`;

const ImageWrapper = styled.div`
  height: 700px;
  width: 110vw;
  margin: -70px;
  filter: blur(10px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${headerBg});
`;

const Headline = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  color: white;
  margin: 0;
`;

const SecondaryHeadline = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin: 0;
  color: #94a3ba;
`;

const TitlesWrapper = styled.div`
  position: absolute;
  top: calc(50% - 70px);
  left: calc(50% - 400px);
`;

const LanguageList = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  list-style-type: none;
  padding: 1rem;
  margin: 0;
  display: flex;
`;

const LanguageListItem = styled.li`
  margin-left: 1rem;
`;

const LanguageListItemButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: 1px solid transparent;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

type PropTypes = {
  name: string;
  jobTitle: string;
  updateLanguage: any;
};

export const Header = (props: PropTypes) => {
  return (
    <Wrapper>
      <ImageWrapper></ImageWrapper>
      <TitlesWrapper>
        <Headline>{props.name}</Headline>
        <SecondaryHeadline>{props.jobTitle}</SecondaryHeadline>
      </TitlesWrapper>
      <LanguageList>
        <LanguageListItem>
          <LanguageListItemButton onClick={() => props.updateLanguage(lan.ENGLISH)}>
            EN
          </LanguageListItemButton>
        </LanguageListItem>
        <LanguageListItem>
          <LanguageListItemButton onClick={() => props.updateLanguage(lan.FINNISH)}>
            FI
          </LanguageListItemButton>
        </LanguageListItem>
      </LanguageList>
    </Wrapper>
  );
};
