import React from "react";
import styled from "styled-components";
import { Headline } from "../headline/Headline";
import { Description } from "../../Types";
import { Paragraphs } from "./paragraphs/Paragraphs";
import { ExperienceItem, FileDetails } from "../../Types";
import {
  ExperienceItemDetails,
  TertiaryTitle,
} from "./experienceItemDetails/ExperienceItemDetails";
import { Lan, ModalStatus } from "../../pages/index";
import { GeneralButton, UseCase } from "../buttons/generalButton/GeneralButton";
import {
  contentSectionLabelsEn,
  contentSectionLabelsFi,
} from "./ContentSectionLabels";

export enum ContentSectionUseCase {
  INTRODUCTION,
  CONTENTSECTION,
}

export type Content =
  | {
      type: ContentSectionUseCase.INTRODUCTION;
      sectionContent: Description;
    }
  | {
      type: ContentSectionUseCase.CONTENTSECTION;
      sectionContent: Array<ExperienceItem>;
    };

type Props = {
  content: Content;
  language: Lan;
  updateModalOpen: (value: ModalStatus) => void;
  cv?: FileDetails;
  backgroundIsWhite: boolean;
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
          {experienceItem.image && experienceItem.link && (
            <a
              href={experienceItem.link}
              target="_blank"
              title={experienceItem.link}
            >
              <ImageWrapper>
                <CustomImage
                  src={experienceItem.image}
                  alt="experience item logo"
                />
                <h5>{experienceItem.link}</h5>
              </ImageWrapper>
            </a>
          )}
          <Paragraphs
            content={{
              type: ContentSectionUseCase.CONTENTSECTION,
              sectionContent: experienceItem,
            }}
          />
        </ExperienceListItem>
      );
    });
  };
  return (
    <Wrapper backgroundIsWhite={props.backgroundIsWhite}>
      <ContentWrapper backgroundIsWhite={props.backgroundIsWhite}>
        <TopSectionWrapper>
          <Headline
            text={
              props.content.type === ContentSectionUseCase.INTRODUCTION
                ? contentSectionLabels.introduction
                : contentSectionLabels.experience
            }
            isBlack
          />
          <ButtonWrapper>
            <GeneralButton
              handleClick={() => props.updateModalOpen(UseCase.VIDEO ? ModalStatus.VIDEO : ModalStatus.ASKFORCV)}
              useCase={
                props.content.type === ContentSectionUseCase.INTRODUCTION
                  ? UseCase.VIDEO
                  : UseCase.CV
              }
              language={props.language}
              link={props.cv?.fileUrl}
            />
          </ButtonWrapper>
        </TopSectionWrapper>
        <>
          {props.content.type === ContentSectionUseCase.INTRODUCTION && (
            <Paragraphs
              content={{
                type: ContentSectionUseCase.INTRODUCTION,
                sectionContent: props.content.sectionContent,
              }}
            />
          )}
          {props.content.type === ContentSectionUseCase.CONTENTSECTION && (
            <ExperienceList>
              {getExperienceListItems(props.content.sectionContent)}
            </ExperienceList>
          )}
        </>
      </ContentWrapper>
    </Wrapper>
  );
};

type WrappeProps = {
  backgroundIsWhite?: boolean;
};

const ContentWrapper = styled.div`
  width: var(--space-19);
  padding: ${(props: WrappeProps) =>
    props.backgroundIsWhite
      ? "var(--space-9) var(--space-4)"
      : "0 var(--space-4) var(--space-9) var(--space-4)"};
  margin: auto;
  @media (max-width: 1300px) {
    width: var(--space-16);
  }
  @media (max-width: 800px) {
    width: var(--space-13);
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 400px) {
    padding: 0 var(--space-4);
    width: 100%;
  }
`;

export const Wrapper = styled.section`
  width: auto;
  margin: 0 auto var(--space-7) 0;
  background-color: ${(props: WrappeProps) =>
    props.backgroundIsWhite ? "white" : "var(--background-color)"};
  @media (max-width: 800px) {
    padding-top: ${(props: any) =>
      props.backgroundIsWhite ? "var(--space-7)" : "none"};
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
  margin-bottom: var(--space-10);
  @media (max-width: 800px) {
    margin-bottom: var(--space-6);
    margin-top: var(--space-4);
  }
`;

const CustomImage = styled.img`
  max-width: 45%;
`;

const ImageWrapper = styled.div`
  margin-top: var(--space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: block;
  }
`;
