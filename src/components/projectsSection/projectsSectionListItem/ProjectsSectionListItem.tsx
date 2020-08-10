import React from "react";
import styled from "styled-components";
import { Project } from "../../../Types";
import { IntroductionParagraph } from "../../contentSection/paragraphs/introductionParagraph/IntroductionParagraph";
import { SecondaryTitle } from "../../contentSection/experienceItemDetails/ExperienceItemDetails";
import { ProjectsImage } from "../projectsImage/ProjectsImage";
import { ProjectsSectionsLabels } from "../ProjectsSectionLabels";
import {
  GeneralButton,
  UseCase,
} from "../../buttons/generalButton/GeneralButton";

type Props = {
  project: Project;
  projectsSectionsLabels: ProjectsSectionsLabels;
};

export const ProjectsSectionListItem = (props: Props) => {
  return (
    <ListItem>
      <SecondaryTitle>{props.project.title}</SecondaryTitle>
      <MainContentWrapper>
        <ProjectsImage
          text={props.projectsSectionsLabels.displayText}
          link={props.project.displayLink}
        />
        <IntroductionParagraph content={props.project.description} />
      </MainContentWrapper>
      {/* <LinkItemWrapper>
        <LinkItemText>{`${props.projectsSectionsLabels.repositoryText}:`}</LinkItemText>
        <a
          href={props.project.repositoryLink}
          target="_blank"
          title={props.project.repositoryLink}
        >
          {props.project.repositoryLink}
        </a>
      </LinkItemWrapper>
      <LinkItemWrapper>
        <LinkItemText>{`${props.projectsSectionsLabels.displayText}:`}</LinkItemText>
        <a
          href={props.project.displayLink}
          target="_blank"
          title={props.project.displayLink}
        >
          {props.project.displayLink}
        </a>
      </LinkItemWrapper> */}
      <GeneralButton
        link={props.project.repositoryLink}
        useCase={UseCase.REPOSITORY}
        language={props.language}
      />
    </ListItem>
  );
};

const ListItem = styled.li`
  margin-top: var(--space-8);
`;

const MainContentWrapper = styled.div`
  margin: var(--space-7) 0 var(--space-5) 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: initial;
  }
`;

const LinkItemWrapper = styled.div`
  width: 45%;
  margin: var(--space-2) 0 0 auto;
  @media (max-width: 800px) {
    width: 100%;
    margin: var(--space-2) 0;
  }
`;

const LinkItemText = styled.h6`
  margin: 0 var(--space-2) 0 0;
  font-size: var(--space-4);
  width: var(--space-11);
  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;
