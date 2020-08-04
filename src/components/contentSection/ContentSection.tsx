import React from "react";
import styled from "styled-components";
import { Headline } from "../headline/Headline";
import { Description } from "../../Types";
import { Paragraphs } from "./paragraphs/Paragraphs";
import { ExperienceItem, ExperienceItemDescription } from "../../Types";
import { ExperienceItemDetails } from "./experienceItemDetails/ExperienceItemDetails";
import { Lan, ModalTypes } from "../../pages/index";
import { GeneralButton } from "../buttons/generalButton/GeneralButton";
import {
  contentSectionLabelsEn,
  contentSectionLabelsFi,
} from "./ContentSectionLabels";

type Props = {
  content: Description | Array<ExperienceItem>;
  language: Lan;
  type: ModalTypes;
  updateModalType: (type: ModalTypes) => void;
};

export const ContentSection = (props: Props) => {
  const contentSectionLabels =
    props.language === Lan.ENGLISH
      ? contentSectionLabelsEn
      : contentSectionLabelsFi;
  const getExperienceListItems = () => {
    const rendableContent = props.content as Array<ExperienceItem>;
    return rendableContent.map((experienceItem: ExperienceItem) => {
      return (
        <ExperienceListItem>
          <ExperienceItemDetails
            subHeadlineDetails={experienceItem}
            language={props.language}
          />
          <Paragraphs
            content={experienceItem.description as ExperienceItemDescription}
            isExperienceInstace
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
            props.type === ModalTypes.VIDEO
              ? contentSectionLabels.introduction
              : contentSectionLabels.experience
          }
          isBlack
        />
        <ButtonWrapper>
          <GeneralButton
            handleClick={() => props.updateModalType(props.type)}
            type={props.type}
            language={props.language}
          />
        </ButtonWrapper>
      </TopSectionWrapper>
      <>
        {props.type === ModalTypes.VIDEO && (
          <Paragraphs
            content={props.content as Description}
            isExperienceInstace={false}
          />
        )}
        {props.type === ModalTypes.CV && (
          <ExperienceList>{getExperienceListItems()}</ExperienceList>
        )}
      </>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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

const TopSectionWrapper = styled.div`
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
