import React from "react";
import styled from "styled-components";
import { Headline } from "../headline/Headline";
import { Description } from "../../Types";
import { Paragraphs } from "./paragraphs/Paragraphs";
import { ExperienceItem, FileDetails } from "../../Types";
import { ExperienceItemDetails } from "./experienceItemDetails/ExperienceItemDetails";
import { Lan, ModalTypes } from "../../pages/index";
import { GeneralButton } from "../buttons/generalButton/GeneralButton";
import {
  contentSectionLabelsEn,
  contentSectionLabelsFi,
} from "./ContentSectionLabels";

export type Content =
  | {
      type: ModalTypes.VIDEO;
      sectionContent: Description;
    }
  | { type: ModalTypes.CV; sectionContent: Array<ExperienceItem> };

type Props = {
  content: Content;
  language: Lan;
  updateModalType: (type: ModalTypes) => void;
  cv?: FileDetails;
};

export const ContentSection = (props: Props) => {
  const contentSectionLabels =
    props.language === Lan.ENGLISH
      ? contentSectionLabelsEn
      : contentSectionLabelsFi;
  const getExperienceListItems = (sectionContent: Array<ExperienceItem>) => {
    return sectionContent.map(experienceItem => {
      return (
        <ExperienceListItem>
          <ExperienceItemDetails
            subHeadlineDetails={experienceItem}
            language={props.language}
          />
          <Paragraphs
            content={{
              type: ModalTypes.CV,
              sectionContent: experienceItem,
            }}
          />
        </ExperienceListItem>
      );
    });
  };
  return (
    <Wrapper>
      <TopSectionWrapper>
        <Headline
          text={
            props.content.type === ModalTypes.VIDEO
              ? contentSectionLabels.introduction
              : contentSectionLabels.experience
          }
          isBlack
        />
        <ButtonWrapper>
          <GeneralButton
            handleClick={() => props.updateModalType(props.content.type)}
            type={props.content.type}
            language={props.language}
            cv={props.cv}
          />
        </ButtonWrapper>
      </TopSectionWrapper>
      <>
        {props.content.type === ModalTypes.VIDEO && (
          <Paragraphs
            content={{
              type: ModalTypes.VIDEO,
              sectionContent: props.content.sectionContent,
            }}
          />
        )}
        {props.content.type === ModalTypes.CV && (
          <ExperienceList>
            {getExperienceListItems(props.content.sectionContent)}
          </ExperienceList>
        )}
      </>
    </Wrapper>
  );
};

export const Wrapper = styled.section`
  width: var(--space-19);
  margin: 0 auto var(--space-11) auto;
  @media (max-width: 1300px) {
    width: var(--space-16);
    margin: 0 auto var(--space-10) auto;
  }
  @media (max-width: 800px) {
    width: var(--space-14);
    margin: 0 auto var(--space-8) auto;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 400px) {
    padding: 0 var(--space-4);
    width: 100%;
    margin: 0 auto var(--space-6) auto;
  }
`;

export const TopSectionWrapper = styled.div`
  display: flex;
  flex-direction: initial;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: initial;
    align-items: center;
  }
`;

const ButtonWrapper = styled.div`
  display: initial;
  @media (max-width: 800px) {
    margin-top: var(--space-6);
  }
`;

const ExperienceList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ExperienceListItem = styled.li`
  margin-top: var(--space-8);
`;

const ButtonText = styled.h6`
  margin: 0 0 0 var(--space-4);
  font-size: var(--font-size-4);
  font-weight: 400;
`;
